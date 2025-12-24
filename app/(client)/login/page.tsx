import AuthClient from "@/features/auth/components/AuthClient";
import { whoami } from "@/features/auth/services/authServices";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  let user = null;
  try {
    user = await whoami();
  } catch {}
  if (user) {
    redirect("/");
  } else {
    return <AuthClient />;
  }
};

export default AuthPage;
