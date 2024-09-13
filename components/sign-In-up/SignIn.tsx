import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/logo.svg";

import { redirect } from "next/navigation";
import { getSession, login } from "@/lib";

async function SignIn() {
  const session = await getSession();

  const onFormHandler = async (formData: FormData) => {
    "use server";
    await login(formData);
    // redirect("/");
  };
  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]-2">
              {/* Logo image */}
              <div className="mb-10 text-center md:mb-16">
                <Link
                  href="/"
                  className="flex flex-col items-center justify-center gap-2 text-primary font-mono"
                >
                  <Image src={logo} alt="Alpha Herbs" width={35} />
                  <span className="self-center text-2xl font-bold whitespace-nowrap">
                    Alpha Herbs
                  </span>
                </Link>
              </div>
              <form action={onFormHandler}>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md border bg-transparent px-5 py-3 focus:border-primary "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full rounded-md border  bg-transparent px-5 py-3 focus:border-primary "
                  />
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <Link
                href="#"
                className="mb-2 inline-block text-base text-secondary hover:text-primary"
              >
                Forget Password?
              </Link>
              <p className="text-base">
                <span className="pr-0.5">Don&apos;t have an account?</span>
                <Link href="/sign-up" className="text-primary font-bold">
                  Sign Up
                </Link>
              </p>
              <h1>{JSON.stringify(session, null, 2)}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
