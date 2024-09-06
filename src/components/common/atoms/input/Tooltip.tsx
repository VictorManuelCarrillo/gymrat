import React from "react";
import { Tooltip } from "@mui/material"

interface ToolstipProps {
 arrow?: boolean;
 distanceToAnchor?: any;
 triggers?:object;
 transitions?:object;
 children:any;
}
export const Mytooltip: React.FC <ToolstipProps>=(props)=> {
    const {arrow,distanceToAnchor,triggers,transitions,children}=props;
    return (
        <div>
            // esto es un operador de corto circuito tambien funciona para validar booleanos y existencias de procedimientos o flujos
    <Tooltip arrow={arrow && arrow} distanceToAnchor={distanceToAnchor && distanceToAnchor}triggers={triggers}transitions={transitions}>{children}</Tooltip>
    </div>
    );
}
