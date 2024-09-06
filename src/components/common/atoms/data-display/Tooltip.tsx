import React, { ReactElement } from 'react';
import { Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';

interface TooltipProps {
  children: ReactElement;
  arrow?: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  title: string;
}
export const TooltipComponent: React.FC<TooltipProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Tooltip
      {...rest}
      TransitionComponent={Fade}
      enterDelay={500}
      leaveDelay={200}>
      {children}
    </Tooltip>
  );
};
