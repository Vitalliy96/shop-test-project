"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import RegisterForm from "../RegisterForm/RegisterForm";
import { Button } from "../ui/button";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <div className="w-[100%] max-w-[400px] p-[20px] border rounded-2 border-primary-blue shadow-blue">
      <h1 className="text-center text-lg uppercase">Register</h1>

      <RegisterForm />

      <div className="text-center mt-[20px]">
        <p>
          <Button
            onClick={() => router.back()}
            variant="default"
            className="h-[30px] mb-[10px] border !rounded-2 border-primary-light-blue"
          >
            <ChevronLeft />
            Back
          </Button>
        </p>

        <p>
          Already have an account?{" "}
          <Link
            href={"/auth/login"}
            className="text-blue-700 underline hover:opacity-[0.5]"
          >
            Login.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
