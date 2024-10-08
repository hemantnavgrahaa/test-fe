"use client";
import { doCredentialLogin } from "@/app/actions";
import { allRoutes } from "@/constants/allRoutes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ForgotPassForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      if (!!response?.error) {
        console.error(response.error);
        setError(response.error);
      } else {
        router.push(allRoutes.HOME);
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }
  return (
    <div className="w-full my-3 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="text-xl text-red-500 dark:text-white text-center">
        {error.replace("Error:", "")}
      </div>
      <form onSubmit={onSubmit} className="space-y-6 relative" action="#">
        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
          Forgot password
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Email address"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <Link
            href={allRoutes.SIGNUP}
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create now!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassForm;
