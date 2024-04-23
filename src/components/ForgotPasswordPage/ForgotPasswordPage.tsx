"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ForgotPasswordForm from "@/components/ForgotPasswordForm/ForgotPasswordForm";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  const router = useRouter();

  return (
    <div className="w-[100%] max-w-[400px] p-[20px] border rounded-2 border-primary-blue shadow-blue">
      <h1 className="text-center text-lg uppercase mb-[25px]">
        Forgot password?
      </h1>

      <h3 className="mb-[25px] text-center text-xs text-gray-500">
        Enter your email and we will send you instructions for changing your
        password
      </h3>

      <ForgotPasswordForm />

      <div className="text-center">
        <p className="mt-[30px] mb-[10px]">
          <Button onClick={() => router.back()} variant="default" className="">
            <ChevronLeft />
            Back
          </Button>
        </p>
        <p>
          Don&apos;t have an account ?{" "}
          <Link
            href={"/auth/register"}
            className="text-blue-700 underline hover:opacity-[0.5]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
