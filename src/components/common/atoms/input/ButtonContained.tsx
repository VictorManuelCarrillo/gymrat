import React, {  } from "react";
import {Button as Btn, IconButton, IconButton as amb} from "@mui/material";


interface ButtonProps {type:"contained" | "outlined" | "text" |"icon"; children: React.ReactNode;icon?:React.ReactNode; }
export const Button: React.FC <ButtonProps>=(props)=>{
  const {type,children,icon}= props
  
  switch (type) {
    case "contained":
      return ( <Btn variant="contained">{children }</Btn>)
    case "outlined":
        return ( <Btn variant="outlined">{children}</Btn>)
      case "text":
        return ( <Btn variant="text">{children}</Btn>)
        case "icon":
          return (
            <IconButton>
            {children}
          </IconButton>
          );
}
}
