import { Snackbar as MuiSnackbar } from "@mui/material";
import { Button } from "./Button";
import React from "react";

interface SnackbarProps {
  message?: string;
  actionLabel?: string;
}

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  const { message, actionLabel = "cerrar" } = props;

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
      <Button onClick={handleClick}>Open Snackbar</Button>
      <MuiSnackbar
        action={action}
        open={open}
        autoHideDuration={6000}
        onClose={handleClick}
        message={message}
      />
    </>
  );
};
