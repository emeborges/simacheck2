import { useSignin } from "./useSignin";

type useCanParams = {
    permissions?: Date;
    roles?: string[];
};


export function useCan({ permissions }: useCanParams) {
    const { user, isAthenticated } = useSignin();

    const dataVenc = new Date(user?.premium_until!);

    if (!isAthenticated) {
        return false;
    }

    if (permissions! > dataVenc) {
        return false;
    }

    return true;
}
