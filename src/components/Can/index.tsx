import { useCan } from "hooks/useCan";
import { ReactNode } from "react";

interface CanProps {
    children: ReactNode;
    permissions?: string[];
}

export function Can({ children }: CanProps) {
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
