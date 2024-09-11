import { doSocialLogin } from "@/app/actions";

const SocialLogins = () => {
  return (
    <form className="text-center mb-3" action={doSocialLogin}>
      <button
        className="bg-orange-600 text-white px-4 py-2 rounded-md m-1 text-base"
        type="submit"
        name="action"
        value="google"
      >
        Sign In With Google
      </button>
    </form>
  );
};

export default SocialLogins;
