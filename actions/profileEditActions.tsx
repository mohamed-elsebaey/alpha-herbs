"use server";
import fs from "node:fs";
import { logout } from "@/lib";
import { redirect } from "next/navigation";
import { uploadImage } from "@/cloudinary";

export async function profileEditActions(prevState: any, formData: FormData) {
  const image: any = formData.get("image");
  
  //   if you use file path
  //   const name = "profile";
  //   const extension = image?.name.split(".").pop();
  //   const fileName = `${name}.${extension}`;

  //   const stream = fs.createWriteStream(`public/usersProfileImages/${fileName}`);
  //   const bufferedImage = await image.arrayBuffer();

  //   stream.write(Buffer.from(bufferedImage),(error)=>{
  //     if(error){
  //         throw new Error('Saving image failed!')
  //     }
  //   });

  // if use use CLOUDINARY
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch {
    throw new Error("Saving image failed!");
  }
  console.log(imageUrl);
  return {};
}
