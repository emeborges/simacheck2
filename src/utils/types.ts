export interface BossesDetailsProps {
    boss: string;
    city: string;
    display_name: string;
    lore: string;
    oa_colour_frame: number | null | undefined;
    oa_current_prob: number | null | undefined;
    oa_days_since_last_view: number | null | undefined;
    oa_expect_in: number | null | undefined;
    overall_drop: number | null | undefined;
    resp: Resps[];
    server: string;
    updated_at: string;
    valid_from: string;
    valid_to: string;
    wiki_url: string;
    world_drop: number | null | undefined;
}

export interface props { // api.simacheck.com.br/${sevidor}/bosses
    boss: string //Nome de procura/calculo
    colour_frame?: number | null | undefined //Cor, de 0, vermelho, a 1, verde.
    current_prob?: number //** Probabilidade do boss aparecer.. Talvez, para não ter problema dele estar em 20% com alta chance de aparecer, porq não colocarmos tudo no colour frame? e manter um indicador de procura? */
    days_since_last_view?: number // Apareceu a tantos dias
    display_name?: string // Nome do boss para aparecer
    drop_rate?: number // Chance de esquecimento
    expect_in?: number // Chance de aparecer em tantos dias
    image_url?: string
    is_premium_show?: boolean // podemos tirar
    last_view?: string // quando apareceu no servidor pela ultima vez
    lore?: string
    overall_drop?: string // taxa de procura no Tibia
    server?: string
    valid_from?: string //validade da análise
    valid_to?: string // validade da análise
    wiki_url?: string // link do url
    world_drop?: string // taxa de procura no servidor
    resp?: Resps[] // Chances de drop em cada resp
    prediction_frame?: Previews[]
}

interface Resps {
    colour_frame: number;
    current_prob: number;
    days_since_last_view: number;
    drop_rate: number;
    expect_in: number;
    last_view: string;
    prediction_frame: null;
}

interface Previews{
    day: Date
    chance: number
}


