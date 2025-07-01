import { Snackbar as MuiSnackbar } from '@mui/material';

export interface SnackbarProps {
  open: boolean;
  message?: string | number | React.ReactElement;
  action?: React.ReactElement;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  autoHideDuration?: number;
  //classes?: object;
  //ClickAwayListenerProps?: object;
  //ContentProps?: object;
  disableWindowBlurListener?: boolean;
  key?: string | number;
  resumeHideDuration?: number;

  /*
  slotProps?: {
    clickAwayListener?: {
      children: React.ReactNode;
      disableReactTree?: boolean;
      mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | 'onPointerDown' | 'onPointerUp' | false;
      //onClickAway?: Function;
      touchEvent?: 'onTouchEnd' | 'onTouchStart' | false;
    };
    //content?: Function | object;
    //root?: Function | object;
    //transition?: Function | object;
  };
  */

  /*
  slots?: {
    clickAwayListener?: React.ElementType;
    content?: React.ElementType;
    root?: React.ElementType;
    transition?: React.ElementType;
  };
  */
  // TransitionComponent?: React.ElementType;

  transitionDuration?:
    | number
    | {
        appear?: number;
        enter?: number;
        exit?: number;
      };
  TransitionProps?: object;
}

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  const { open, message, action, anchorOrigin, disableWindowBlurListener, ...restProps } = props;

  return (
    <MuiSnackbar
      open={open}
      message={message}
      action={action}
      anchorOrigin={anchorOrigin}
      disableWindowBlurListener={disableWindowBlurListener}
      {...restProps}
    />
  );
};
