import { trusted } from "mongoose";
import React from "react";

interface FabProps {
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    size?: "small" | "medium" | "large";
    variant?: "circular" | "extended";
    href?: string;
    disabled?: boolean;
  }

  export const MayFap: React.FC<FabProps> = (Props) => {

const {color,size,variant,href,disabled}=Props;
 
return (
    <div>
        color={color} size={size} variant={variant} href={href} disabled={disabled === true ? true : false}

    </div>
)

}