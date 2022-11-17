import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

import defaultAvatar from "@/public/assets/images/defaultAvatar.png";

interface IProps {
  avatarUrl?: string | StaticImageData;
  width?: number;
  height?: number;
}
export const Avatar = ({ avatarUrl, width = 40, height = 40 }: IProps) => {
  return (
    <div>
      <Image
        src={avatarUrl || defaultAvatar}
        alt="avatar"
        width={width}
        height={height}
        className="rounded-full"
      />
    </div>
  );
};
