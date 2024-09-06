import React from "react";
import {Switch as MuiSwitch } from "@mui/material";


interface SwitchProps{
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    
}


export const Switch: React.FC <SwitchProps>=(props)=> {
    const {checked,defaultChecked,disabled,disableRipple,}= props;

return (
    <MuiSwitch  
        checked={checked===true?true:false} defaultChecked= {defaultChecked===true?true:false} disableRipple={disableRipple===true?true:false} disabled={disabled===true?true:false} />
  );
};
