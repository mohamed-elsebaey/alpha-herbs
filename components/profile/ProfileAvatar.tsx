"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProfileAvatar({ imagePath }: { imagePath: String }) {
  const [pickedImage, setPickedImage] = useState<any>(imagePath);

  const imageInput = useRef<any>(undefined);

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
  function handleDeleteImageChange() {
    setPickedImage("/profile-pictures/profile.png");
  }
  return (
    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
      <img
        className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary/40"
        src={pickedImage?pickedImage : '/profile-pictures/profile.png'}
        alt="avatar"
      />
      <input hidden type="text"  value={pickedImage} name="pickedImage" readOnly/>
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

      <div className="flex flex-col space-y-5 sm:ml-8">
        <button
          type="button"
          className="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-primary rounded-lg border border-primary/20 hover:bg-primary/90 focus:z-10 focus:ring-4 focus:ring-primary/20 "
          onClick={handlePickClick}
        >
          Change picture
        </button>
        <button
          type="button"
          className="py-3.5 px-7 text-base font-medium text-primary/90 focus:outline-none bg-white rounded-lg border border-primary/20 hover:bg-primary/10 hover:text-primary focus:z-10 focus:ring-4 focus:ring-primary/20 "
          onClick={handleDeleteImageChange}
        >
          Delete picture
        </button>
      </div>
    </div>
  );
}
