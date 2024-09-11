import { doSocialLogin } from "@/app/actions";

const SocialLogins = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-orange-600 text-white px-4 py-2 rounded-md m-1 text-base"
        type="submit"
        name="action"
        value="google"
      >
        Sign In With Google
      </button>

      <button
        className="bg-slate-600 text-white px-4 py-2 rounded-md m-1 text-base"
        type="submit"
        name="action"
        value="github"
      >
        Sign In With GitHub
      </button>
    </form>
  );
};

export default SocialLogins;
