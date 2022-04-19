import { Stack, Button, Box } from "@mui/material";

const BB = ({bbNum, setBbNum, charts}) => {

    const handleBtnClick = (e) => {
        setBbNum(e.target.value)
    }

    const bbAvailable = charts.map(chart => chart.bb).flat();

    const doesItContaines = (arr1, arr2) => {
        return arr1.some(r=> arr2.includes(r))
    }


    console.log(bbAvailable)

    return(
        <Box>
            <h6>BB:</h6>
            <Stack direction="row">
                {doesItContaines(bbAvailable,[25,24,23,22]) && <Button onClick={handleBtnClick} value="22-25" variant={bbNum === "22-25"? "contained" : "outlined"}>22-25</Button>}
                {doesItContaines(bbAvailable,[17,18,19,20,21,22]) && <Button onClick={handleBtnClick} value="17-22" variant={bbNum === "17-22"? "contained" : "outlined"}>17-22</Button>}
                {doesItContaines(bbAvailable,[14,15,16,17]) && <Button onClick={handleBtnClick} value="14-17" variant={bbNum === "14-17"? "contained" : "outlined"}>14-17</Button>}
                {doesItContaines(bbAvailable,[11,12,13,14]) && <Button onClick={handleBtnClick} value="11-14" variant={bbNum === "11-14"? "contained" : "outlined"}>11-14</Button>}
                {doesItContaines(bbAvailable,[9,10,11]) && <Button onClick={handleBtnClick} value="9-11" variant={bbNum === "9-11"? "contained" : "outlined"}>9-11</Button>}
                {doesItContaines(bbAvailable,[7,8,9]) && <Button onClick={handleBtnClick} value="7-9" variant={bbNum === "7-9"? "contained" : "outlined"}>7-9</Button>}
                {doesItContaines(bbAvailable,[1,2,3,4,5,6,7]) && <Button onClick={handleBtnClick} value="manje od 7" variant={bbNum === "manje od 7"? "contained" : "outlined"}>manje od 7</Button>}
            </Stack>
        </Box>
    )
}

export default BB;