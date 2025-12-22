import AuthClient from "@/features/auth/components/AuthClient";
import { whoami } from "@/features/auth/services/authServices";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  try {
    await whoami();
    redirect("/dashboard");
  } catch {}

  return <AuthClient />;
};

export default AuthPage;
