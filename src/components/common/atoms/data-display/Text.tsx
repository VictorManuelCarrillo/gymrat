import React from "react";
import { Typography } from "@mui/material";

interface TextProps {
    children: React.ReactNode;
    type?:"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"subtitle1"|"subtitle2"| "body1"| "body2"|"caption"|"button"|"overline"
    align?: 'center' | 'inherit' | 'justify' | 'left'| 'right'
}

export const Text: React.FC<TextProps> = (props) => {
    const {type='body1', children, align} = props;
    return (
     <Typography variant={type} align={align}>
        {children}
     </Typography>
    )
}
