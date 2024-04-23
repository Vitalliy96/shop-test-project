import Link from "next/link";

import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage = () => (
  <div className="w-[100%] max-w-[400px] p-[20px] border rounded-2 border-primary-blue shadow-blue">
    <h1 className="text-center text-lg uppercase">Login</h1>

    <LoginForm />

    <div className="text-center">
      <p className="mt-[30px] mb-[10px]">
        <Link
          href={"/auth/forgot-password"}
          className="text-blue-700 underline hover:opacity-[0.5]"
        >
          Forgot password?
        </Link>
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

export default LoginPage;
