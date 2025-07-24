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
import GradientText from "../ui/gradient-text";
import ShinyText from "../ui/shiny-text";
import { ArrowRight } from "lucide-react";
import ScrollVelocity from "../ui/scroll-velocity";

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
            className="mt-4 hover:translate-x-1 transition duration-500 gap-2 bg-primary-honey-yellow text-zinc-800 font-semibold text-base lg:text-lg"
            size="lg"
          >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfvRL-ODBnCffpmCg94Kr8OEXI9J2R-RWmn9sul74fSlZDX_A/viewform?usp=preview">
              Register now!
            </Link>
            <ArrowRight className="hover:translate-x-1 transition duration-500" />
          </Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ClassRegister;
