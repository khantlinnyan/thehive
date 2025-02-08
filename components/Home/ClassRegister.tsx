import HeadingText from "../common/HeadingText";
import Layout from "../Layout/Layout";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

const ClassRegister = () => {
  return (
    <Layout className="my-20 lg:my-26 flex overflow-hidden justify-center items-center">
      <Card className="rounded-3xl shadow-md">
        <CardHeader>
          <CardTitle>Register for a class</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-primary-bee-black">
            Register for our free IGCSE revision classes and get access to
            resources, webinars, and a supportive community.
          </CardDescription>

          <Button
            color="link"
            className="mt-4 bg-primary-honey-yellow text-zinc-800 font-semibold text-base lg:text-lg"
            size="lg"
          >
            <Link href="https://forms.gle/KT1ZtdpXr8MtM7Lh6">
              Register now!
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ClassRegister;
