"use client";

import Link from "next/link";
import Image from "next/image";

import { useFormState, useFormStatus } from "react-dom";

import logo from "@/public/logo/logo.svg";
// import { getSession, login } from "@/lib";
import { signUpFormAction } from "@/actions/signUpAction";

const initialStat = {
  errors: {
    email: undefined,
    password: undefined,
  },
};

function SignUp() {
  const [formState, formAction] = useFormState(signUpFormAction, initialStat);
  const formStateWithTypeAny: any = formState;
  // error we need to add typeof formState

  const { pending } = useFormStatus();

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
              {/* *** Form Start *** */}
              <form action={formAction}>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="relative w-full rounded-md border border-gray-300  px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                  {formStateWithTypeAny?.errors?.email && (
                    <h1 className="text-red-500 absolute">
                      {formStateWithTypeAny.errors["email"]}
                    </h1>
                  )}
                </div>
                <div className="mb-8">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="relative w-full rounded-md border border-gray-300  px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                  {formStateWithTypeAny?.errors?.password && (
                    <h1 className="text-red-500 absolute">
                      {formStateWithTypeAny.errors["password"]}
                    </h1>
                  )}
                </div>
                <div className={"mb-10"}>
                  <input
                    type="submit"
                    value="Crate an Account"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              {/* *** Form Emd *** */}

              <p className="text-base">
                <span className="pr-0.5">You have an account?</span>
                <Link href="/sign-in" className="text-primary font-bold">
                  Sign In
                </Link>
              </p>
              {formStateWithTypeAny?.message && (
                <h1 className="text-orange-600 text-center">
                  {formStateWithTypeAny.message}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
