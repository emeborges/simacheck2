export function color(dados: number) {

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


    var getColorForPercentage = function (pct) {
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
        const result = 'rgb(' + [color.r, color.g, color.b].join(',') + ')'

        return result

    };

    const gerando = getColorForPercentage(taxaCor)

    return gerando

}


export function Porcentagem(dados: number) {
    return Math.round(dados * 100)

}

export function PluralOuSing(dados: number, txtSing: string, txtPlur: string) {
    if (dados = 1) {
        return `${dados} ${txtSing}`
    } else if (dados > 1) {
        return `${dados} ${txtPlur}`
    } else {
        return null
    }
}
