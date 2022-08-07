import { useCan } from "hooks/useCan";
import { ReactNode } from "react";

interface CanProps {
    children: ReactNode;
    permissions?: Date;
    roles?:string[]
}

export function Can({ children, permissions }: CanProps) {
    const userCanSeeComponent = useCan({ permissions })

    if(!userCanSeeComponent) {
        return null
    }

    return (
    <>
        {children}
    </>
    );
}
