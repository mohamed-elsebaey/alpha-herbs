"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import profile from "@/public/profile-pictures/profile.png";

function ProfileImage() {
  const [pickedImage, setPickedImage] = useState<any>(null);

  const imageInput = useRef<any>();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event: any) {
    const file = event?.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

  }
  return (
    <div>
      <label htmlFor="image"></label>
      <div className="flex flex-col gap-4 items-start">
        <div className="w-[110px] h-[110px] rounded-full border overflow-hidden">
          {!pickedImage && (
            <Image
              width={35}
              height={35}
              src={profile}
              alt="the image selected by the user."
            //    fill
              className="w-[110px] h-[110px]  rounded-full border "
            />
          )}
          {pickedImage && (
            <Image
              width={35}
              height={35}
              src={pickedImage}
              alt="the image selected by the user."
              //fill
              className="w-[110px] h-[110px] "
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name="image"
          ref={imageInput}
          //multiple
          onChange={handleImageChange}
          //required
        />
        <button
          type="button"
          className="py-2 px-3 bg-primary/80 hover:bg-primary text-white rounded-md"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;
