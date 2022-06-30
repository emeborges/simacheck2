import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withsSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (
        ctx: GetServerSidePropsContext
    ): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        if (!cookies["simacheck.accessToken"]) {
            return {
                redirect: {
                    destination: "/signin",
                    permanent: false,
                },
            };
        }

        return await fn(ctx);
    };
}
