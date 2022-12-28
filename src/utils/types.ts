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
    gif_url: string;
    dead_url: string
    valid_from: string;
    valid_to: string;
    wiki_url: string;
    world_drop: number | null | undefined;
}


export interface Resps {
    colour_frame: number;
    current_prob: number;
    days_since_last_view: number;
    drop_rate: number;
    expect_in: number;
    last_view: string;
    prediction_frame: null | Previews[];
}

export interface Previews {
    date: string;
    simulation: number;
    colour_frame: number;
}

export interface BossDetailsProps {
    created_at: Date;
    updated_at: Date;
    boss: string;
    display_name: string;
    lore: string;
    city: string;
    wiki_url: string;
    gif_url: string;
    dead_url: string;
    is_bosstiary: boolean;
    is_bestiary: boolean;
    positions: any[];
    considered_regions: any[];
    predictions: Prediction[];
}
export interface Prediction {
    created_at: Date;
    updated_at: Date;
    boss: string;
    server: string;
    valid_from: Date;
    valid_to: Date;
    overall_drop: number;
    world_drop: number;
    oa_days_since_last_view: number;
    oa_current_prob: number;
    oa_colour_frame: number;
    oa_expect_in: number;
    resp: Resps[];
}
