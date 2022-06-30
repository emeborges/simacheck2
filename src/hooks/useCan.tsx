import { useSignin } from "./useSignin";

/*type useCanParams = {
    permissions?: string[];
    roles?: string[];
}*/

/*export function useCan({ permissions, roles} : useCanParams) {*/
export function useCan() {
    const { isAthenticated } = useSignin();

    if (!isAthenticated) {
        return false;
    } else{
        return true
    }

    /*
    **** COLOCAR AQUI A VERIFICAÇÃO SE SERÁ PERMITIDO OU NÃO ****
    if( permissions?.length > 0) {
        const hassAllPermissions = permissions?.every(permission => {
            return user.permissions?.includes(permission);
        })
    }*/
}
