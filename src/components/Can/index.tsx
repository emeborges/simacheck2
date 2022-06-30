import { useCan } from "hooks/useCan";
import { ReactNode } from "react";

interface CanProps {
    children: ReactNode;
    permissions?: string[];
}

export function Can({ children, permissions }: CanProps) {
    const userCanSeeComponent = useCan();

    if(!userCanSeeComponent) {
        return null
    }

    return (
    <>
        {children}
    </>
    );
}
