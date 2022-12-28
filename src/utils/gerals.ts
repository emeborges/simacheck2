import { useRouter } from "next/router";

export function color(dados:number, porcentagemColor?: number) {

    var percentColors = [{
        pct: 0.0,
        color: {
            r: 200,
            g: 55,
            b: 40
        }
    },
    {
        pct: 0.5,
        color: {
            r: 235,
            g: 200,
            b: 50
        }
    },
    {
        pct: 1.0,
        color: {
            r: 60,
            g: 200,
            b: 90
        }
    }
    ];
    var taxaCor = dados


    var getColorForPercentage = function (pct:number) {
        for (var i = 1; i < percentColors.length - 1; i++) {
            if (pct < percentColors[i].pct) {
                break;
            }
        }
        var lower = percentColors[i - 1];
        var upper = percentColors[i];
        var range = upper.pct - lower.pct;
        var rangePct = (pct - lower.pct) / range;
        var pctLower = 1 - rangePct;
        var pctUpper = rangePct;
        var color = {
            r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
            g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
            b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        const valor = porcentagemColor;
        const result =
            porcentagemColor === undefined
                ? "rgb(" + [color.r, color.g, color.b].join(",") + ")"
                : "rgba(" +
                  [color.r, color.g, color.b].join(",") +
                  "," +
                  valor +
                  ")";

        return result

    };

    const gerando = getColorForPercentage(taxaCor)

    return gerando
}


export function Porcentagem(dados: number) {
    return Math.round(dados * 100)

}

export function PluralOuSing(dados: number, txtSing: string, txtPlur: string) {
    if (dados == 1) {
        return `${dados} ${txtSing}`
    } else if (dados > 1) {
        return `${dados} ${txtPlur}`
    } else if(dados == 0){
        return `A qualquer momento`;
    }
    else {
        return null
    }
}


export function goBack() {
    const router = useRouter()

    return router.back()
}

export const UFS = [
    {
        uf: "br",
        namePT: "Brasil",
        nameEG: "Brazil",
        language: "pt",
        codeTel: "+55",
        maskTel: "+55 ** ***** ****",
    },
    {
        uf: "eua",
        namePT: "Estados Unidos",
        nameEG: "United States of América",
        language: "en",
        codeTel: "+1",
        maskTel: "+1 *** *** ***",
    },
    {
        uf: "pl",
        namePT: "Polônia",
        nameEG: "Poland",
        language: "en",
        codeTel: "+48",
        maskTel: "+48 ** *** ** **",
    },
    {
        uf: "en",
        namePT: "Inglaterra",
        nameEG: "United Kingdom",
        language: "en",
        codeTel: "+44",
        maskTel: "+48 *** **** ****",
    },
    {
        uf: "arg",
        namePT: "Argentina",
        nameEG: "Argentina",
        language: "pt",
        codeTel: "+54",
        maskTel: "+48 *** **** ****",
    },
    {
        uf: "pt",
        namePT: "Portugal",
        nameEG: "Portugal",
        language: "pt",
        codeTel: "+351",
        maskTel: "+351 *** **** ****",
    },
    {
        uf: "de",
        namePT: "Alemanha",
        nameEG: "Germany",
        language: "en",
        codeTel: "+49",
        maskTel: "+49 *** *******",
    },
    {
        uf: "mx",
        namePT: "Mexico",
        nameEG: "Mexico",
        language: "en",
        codeTel: "+52",
        maskTel: "+52 ** ** **** ****",
    },
    {
        uf: "se",
        namePT: "Suecia",
        nameEG: "Sweden",
        language: "en",
        codeTel: "+46",
        maskTel: "+46 ** *** *** **",
    },
];


export const languages = [
    {
        namePT: "Portugues",
        nameEG: "Portuguese",
        code: "pt",
    },
    {
        namePT: "Inglês",
        nameEG: "English",
        code: "en",
    },
];
