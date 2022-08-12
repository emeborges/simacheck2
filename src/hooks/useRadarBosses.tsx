import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "utils/services";
import { BossesDetailsProps } from "utils/types";

interface providerProps {
    children: ReactNode
}

interface contextProps {
    bosses: BossesDetailsProps[];
    pid: string;
    bossesLastView: BossesDetailsProps[];
    load: boolean;
}
const BossesContext = createContext<contextProps>({} as contextProps);

export function BossesProvider({ children }: providerProps) {
    const [bosses, setBosses] = useState<BossesDetailsProps[]>([]);
    const [bossesLastView, setBossesLastView] = useState<BossesDetailsProps[]>([]);
    const [load, setLoad] = useState(true);
    const route = useRouter();
    const pid: any = route.query.servidor

    useEffect(() => {
        setLoad(true);
        async function getBosses() {
            const { data } = await api.get(`worlds/${pid}`);

            setBosses(
                data?.sort((a: BossesDetailsProps, b: BossesDetailsProps) => {
                    return a.boss.localeCompare(b.boss);
                })
            );
            setBossesLastView(
                data.filter(
                    (boss: BossesDetailsProps) =>
                        boss.oa_days_since_last_view == 1
                )
            );
            setLoad(false)

        }
        getBosses();

    }, [pid]);

    return (
        <BossesContext.Provider value={{ bosses, pid, bossesLastView, load }}>
            {children}
        </BossesContext.Provider>
    );
}

export function useRadarBosses() {
    const context = useContext(BossesContext);

    return context
}
