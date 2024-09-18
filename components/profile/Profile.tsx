"use client";
import { useFormState } from "react-dom";
import ProfileImage from "./ProfileImage";
import { profileEditActions } from "@/actions/profileEditActions";

function Profile() {
  const [formState, formAction] = useFormState(profileEditActions, {});

  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-28 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className=" mx-auto max-w-[1000px] overflow-hidden rounded-lg bg-white px-10 py-16  sm:px-12 md:px-[60px]-2">
              {/* <form action={formAction}>
              <ProfileImage />
              <button type="submit" className="">Save</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
