import { GetServerSidePropsContext } from "next";
import { verifyLogin } from "./gerals";

export function withsLogin() {
    return async (
        ctx: GetServerSidePropsContext
    ) => {

       return {
           props: {
               acess: verifyLogin(ctx),
           },
       };
    };
}
