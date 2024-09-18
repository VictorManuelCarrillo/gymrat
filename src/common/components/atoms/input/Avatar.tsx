import { Avatar, circularProgressClasses } from "@mui/material";
import React from "react";

interface AvatarProps {
alt?: string;
imgProps?: object;
sizes?: string;
src?: string;
type?: "circular" | "rounded" | "square";
}


export const MyAvatar: React.FC<AvatarProps> = (props) => {
    const {alt,imgProps,sizes,src,type}=props; 

return (
    <div>
     <Avatar alt={alt}  imgProps={imgProps} sizes={sizes} src={src} variant={type}></Avatar>
    </div>
);
}