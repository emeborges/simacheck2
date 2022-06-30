import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSTGuest<P> (fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        if (cookies['simacheck.accessToken']) {
            return {
                redirect: {
                    destination: "/account",
                    permanent: false,
                },
            };
        }

        return await fn(ctx)
    }


}
