"use client";
import { doCredentialLogin } from "@/app/actions";
import SocialLogins from "@/components/molecules/SocialLogins";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LoginForm = () => {
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
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }
  return (
    <Card className="max-w-full">
      <div className="text-xl text-red-500">{error}</div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            className=""
            id="email1"
            name="email"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            className=""
            name="password"
            id="password1"
            type="password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
      </form>
      <SocialLogins />
    </Card>
  );
};

export default LoginForm;
