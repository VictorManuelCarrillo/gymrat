import React from "react";
import Alert from '@mui/material/Alert';

interface AlertProps {
  action?: React.ReactNode;  
  closeText?: string;        
  color?: "error" | "info" | "success" | "warning" ; 
  severity?: "error" | "info" | "success" | "warning" ; 
  variant?: "filled" | "outlined" | "standard";  
}


export const MayAlert: React.FC<AlertProps> = (props) => {
  const { 
    action, 
    closeText , 
    color , 
    severity ,  
    variant  
  } = props;

  return (
    <div>
    <Alert  action={action} closeText={closeText} color={color} severity={severity} variant={variant} ></Alert>
    </div>
  );
      }