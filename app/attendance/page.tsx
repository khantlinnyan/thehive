"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import HeadingText from "@/components/common/HeadingText";
import Layout from "@/components/Layout/Layout";
import { Suspense } from "react";

// =============================================================
// SERVER ACTIONS
// These functions run on the server and have access to cookies.
// =============================================================

// You might put these in a separate file like './actions.ts' for a cleaner structure
// For this example, they are in the same file for clarity.
import {
  attendanceAction,
  getInitialState,
  loginAction,
  logout,
} from "./action";
import Background from "@/components/ui/background";

const page = () => {
  return (
    <Suspense
      fallback={
        <Layout className="my-20">
          <div className="mx-auto w-full max-w-md text-center">
            <p className="text-gray-500">Loading...</p>
          </div>
        </Layout>
      }
    >
      <TuteeAttendancePage />
    </Suspense>
  );
};
const TuteeAttendancePage = () => {
  const [initialState, setInitialState] = useState<{
    isLoggedIn: boolean;
  } | null>(null);
  const [attendanceCode, setAttendanceCode] = useState<string>("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const [loginFormState, loginDispatch] = useFormState(loginAction, null);
  const [attendanceFormState, attendanceDispatch] = useFormState(
    attendanceAction,
    null
  );

  const { pending: loginPending } = useFormStatus();
  const { pending: attendancePending } = useFormStatus();

  // Effect to check cookies on the server and set the initial state
  useEffect(() => {
    getInitialState().then(setInitialState);
  }, []);

  useEffect(() => {
    if (loginFormState?.success) {
      //    (loginFormState);
      //   initialState.isLoggedIn = true;
      setInitialState({
        isLoggedIn: true,
      });

      toast.success(loginFormState.message);
    } else if (loginFormState?.message) {
      toast.error(loginFormState.message);
    }
  }, [loginFormState, router]);

  useEffect(() => {
    if (attendanceFormState?.success) {
      toast.success(attendanceFormState.message);
      setAttendanceCode(""); // Clear input on success
    } else if (attendanceFormState?.message) {
      toast.error(attendanceFormState.message);
    }
  }, [attendanceFormState]);

  useEffect(() => {
    const codeFromUrl = searchParams.get("code");
    if (codeFromUrl) {
      setAttendanceCode(codeFromUrl);
    }
  }, [searchParams]);

  const logoutHandler = async () => {
    await logout();
    setInitialState({
      isLoggedIn: false,
    });
    toast.info("Logged out successfully.");
  };

  if (!initialState) {
    return (
      <Layout className="my-20">
        <div className="mx-auto w-full max-w-md text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Morning Haze */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        `,
        }}
      />
      <Layout className="my-20 z-10 relative h-[calc(100vh-20rem)] flex items-center">
        <div className="mx-auto mt-10 h w-full font-monos max-w-lg rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <HeadingText className="text-center">
              {initialState.isLoggedIn ? "Mark Your Attendance" : "Tutee Login"}
            </HeadingText>

            <p className="text-center text-gray-500">
              {initialState.isLoggedIn
                ? "Step 2: Enter the attendance code"
                : "Step 1: Log in to continue"}
            </p>
          </div>

          {initialState.isLoggedIn ? (
            // Logged-in state: show attendance form
            <div className="space-y-6">
              <div className="text-right"></div>
              <form action={attendanceDispatch} className="space-y-6">
                <div>
                  <label
                    htmlFor="attendanceCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Attendance Code
                  </label>
                  <div className="mt-1">
                    <input
                      id="attendanceCode"
                      name="attendanceCode"
                      type="text"
                      required
                      value={attendanceCode}
                      onChange={(e) => setAttendanceCode(e.target.value)}
                      className={`block w-full rounded-md px-4 py-2 shadow-sm focus:outline-none ${
                        attendanceCode.length > 0
                          ? "border-green-500 text-green-700 bg-green-50 read-only:bg-gray-100"
                          : "border-gray-300 focus:border-primary-honey-yellow focus:ring-primary-honey-yellow"
                      }`}
                      placeholder="Enter the code provided by the teacher"
                      readOnly={!!searchParams.get("code")}
                      disabled={attendancePending}
                    />
                  </div>
                  {searchParams.get("code") && (
                    <p className="mt-1 text-sm text-green-600">
                      This code was pre-filled from the link.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-honey-yellow px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-honey-yellow/80 focus:outline-none focus:ring-2 focus:ring-primary-honey-yellow focus:ring-offset-2 disabled:bg-primary-honey-yellow/80"
                  disabled={attendancePending}
                >
                  {attendancePending ? "Submitting..." : "Submit Attendance"}
                </button>
              </form>
              <button
                type="button"
                onClick={logoutHandler}
                className="text-sm font-medium text-red-500 hover:underline"
              >
                Log Out
              </button>
            </div>
          ) : (
            // Logged-out state: show login form
            <form action={loginDispatch} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary-honey-yellow focus:outline-none focus:ring-primary-honey-yellow"
                    placeholder="yourname@example.com"
                    disabled={loginPending}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary-honey-yellow focus:outline-none focus:ring-primary-honey-yellow"
                    placeholder="********"
                    disabled={loginPending}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary-honey-yellow px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-honey-yellow/80 focus:outline-none focus:ring-2 focus:ring-primary-honey-yellow focus:ring-offset-2 disabled:bg-primary-honey-yellow/80"
                disabled={loginPending}
              >
                {loginPending ? "Logging In..." : "Log In"}
              </button>
            </form>
          )}
        </div>
      </Layout>
      {/* //{" "} */}
    </div>
  );
};

export default page;
