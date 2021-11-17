
const filterCharts = (charts, nPlayers, hPosition, bbNum, vPosition) => {
    let bbRange = [];

        switch (bbNum) {
            case "22-25" : 
                bbRange = [22,23,24,25];
                break;
            case "17-22" :
                bbRange = [17, 18, 19, 20, 21, 22];
                break;
            case "14-17" :
                bbRange = [14, 15, 16, 17];
                break;
            case "11-14" :
                bbRange = [11, 12, 13, 14];
                break;
            case "9-11" :
                bbRange = [9, 10, 11];
                break;
            case "7-9" :
                bbRange = [7, 8, 9]
                break;
            case "manje od 7" :
                bbRange = [1,2,3,4,5,6]
                break;
            case "" :
                bbRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
        }

        return charts.filter((chart) => chart.nPlayers === nPlayers)
        .filter(chart => chart.hPosition === hPosition)
        .filter(chart => chart.bb.some(item => bbRange.includes(item)))
        .filter(chart => {
            if(vPosition === "") {
                return true
            } else {
                return chart.vPosition === vPosition
            }
        })
}

export default filterCharts;