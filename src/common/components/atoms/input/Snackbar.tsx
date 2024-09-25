import { Snackbar,SnackbarCloseReason } from '@mui/material';
import React from "react";


interface SnackbarProps {
message?:string;
autoHideDuration?:number;
actionLabel?:string;

}

export const MaySnackbar: React.FC<SnackbarProps> = (props) => {
  const {message,autoHideDuration,actionLabel="cerrar"}=props;

const [open, setOpen] = React.useState (false);


const handleClick = () => {
    setOpen(!open);
    };

  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      reason !== "clickaway" ;{
        return;
      }
      setOpen(false);
    };

  return (
    <div>
      <button onClick={handleClick}>Mostrar Snackbar</button> 
      <Snackbar
        open={open}  
        autoHideDuration={autoHideDuration}  
        onClose={handleClose}  
        message={message}
      />
    </div>
  );
}
 