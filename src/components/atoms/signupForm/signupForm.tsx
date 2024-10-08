"use client";
import { doCredentialLogin } from "@/app/actions";
import { allRoutes } from "@/constants/allRoutes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SignupForm = () => {
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
      <form onSubmit={onSubmit} className="space-y-6" action="#">
        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
          Sign up
        </h5>
        <div className="flex items-center justify-center gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Last name"
              required
            />
          </div>
        </div>
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
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Signup
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              href={allRoutes.LOGIN}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              go to login!{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
