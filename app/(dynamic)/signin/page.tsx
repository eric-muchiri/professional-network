import SignInBtn from "@/components/signin-btn";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  const providers: any = await getProviders();

  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div
          key={provider.name}
          className="flex w-screen h-screen justify-center iems-center"
        >
          <SignInBtn provider={provider} />
        </div>
      ))}
    </>
  );
}