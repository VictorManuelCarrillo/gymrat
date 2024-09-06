import React from "react";
import { Tooltip } from "@mui/material"

interface ToolstipProps {
    type:"arrow" | "Distancie to anchor" | "Triggers" |"transitions";
 arrow?: boolean;
 distanceToAnchor?: number;
 triggers?:object;
 transitions?:object;
 children:any;
}
export const Mytooltip: React.FC <ToolstipProps>=(props)=> {
    const {type,arrow,distanceToAnchor,triggers,transitions,children}=props;
    return (
        <div>
    <Tooltip arrow={arrow===true?true:false} distanceToAnchor={distanceToAnchor}triggers={triggers}transitions={transitions}>{children}</Tooltip>
    </div>
    );
}
