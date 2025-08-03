"use server";
import { cookies } from "next/headers";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "Email and password are required." };
  }

  try {
    const response = await axios.post(`${API_URL}/api/v1/tutee/login`, {
      email,
      password,
    });
    response.data;

    const token = response.data.token;
    cookies().set("tuteeToken", token);

    return { success: true, message: "Login successful!" };
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || "Login failed."
      : "An unexpected error occurred.";
    return { success: false, message: errorMessage };
  }
}

export async function logout() {
  const cookiesStore = cookies();
  cookiesStore.delete("tuteeToken");
}

export async function attendanceAction(prevState: any, formData: FormData) {
  const token = cookies().get("tuteeToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "You must be logged in to mark attendance.",
    };
  }

  const attendanceCode = formData.get("attendanceCode") as string;

  if (!attendanceCode) {
    return { success: false, message: "Attendance code is required." };
  }

  try {
    const response = await axios.post(
      `${API_URL}/api/v1/attendance/check-in`,
      { attendanceCode },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      success: true,
      message: response.data?.message || "Attendance marked successfully!",
    };
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || "Failed to mark attendance."
      : "An unexpected error occurred.";
    return { success: false, message: errorMessage };
  }
}

export async function getInitialState() {
  const token = cookies().get("tuteeToken")?.value;
  return { isLoggedIn: !!token };
}
