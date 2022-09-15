import { useSignin } from "./useSignin";

type useCanParams = {
    permissions?: Date;
    roles: string;
};


export function useCan({ permissions, roles }: useCanParams) {
    const { user, isAthenticated } = useSignin();

    const dataVenc = new Date(user?.premium_until!);

    if (!isAthenticated) {
        return false;
    }

    if( roles == "premium"){
        if (permissions! > dataVenc) {
            return false;

        }
        else{
            return true;
        }
    }

    return true;
}
