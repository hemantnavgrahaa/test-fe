import { doSocialLogin } from "@/app/actions";
import Image from "next/image";
import googleSvg from "@/images/google.svg";

const SocialLogins = () => {
  return (
    <form className="text-center mb-3" action={doSocialLogin}>
      <button
        className="bg-slate-200 dark:bg-white w-full text-black px-4 py-2 rounded-md m-1 text-base flex items-center justify-center gap-2"
        type="submit"
        name="action"
        value="google"
      >
        <Image src={googleSvg} width={25} height={25} alt="google" /> Login
        <p>with Google</p>
      </button>
    </form>
  );
};

export default SocialLogins;
