import { Alert as MuiAlert } from "@mui/material";
import React from "react"
import { Button } from "./Button";

interface AlertProps {
  children: React.ReactNode;
  severity?: "error" | "info" | "success" | "warning";
  variant?: "filled" | "outlined" | "standard";
  color?: "error" | "info" | "success" | "warning";
}

export const Alert: React.FC<AlertProps> = (props) => {
  const { children, severity, variant, color } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const action = (
    <>
      <Button type="contained" size="small" onClick={handleClick}>
        cerrar
      </Button>
    </>
  );
  return (
    <>
      <MuiAlert  action={action} severity={severity} variant={variant} color={color} onClick={handleClick}>
        {children}
      </MuiAlert>
    </>
  );
};
