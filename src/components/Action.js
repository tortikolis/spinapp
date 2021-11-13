import { Stack, Button, Box } from "@mui/material";

const Action = ({action, setAction, getCharts}) => {


    const handleBtnClick = (e) => {
        setAction(e.target.value)
    }

    const chartsFiltered = [...new Set(getCharts().map(chart => chart.action))]

    const chartsJsx = chartsFiltered.map(item => <Button key={Math.random()} onClick={handleBtnClick} value={item} variant={action === item? "contained" : "outlined"}>{item}</Button>)


    return(
        <Box>
        <h6>Akcija:</h6>
        <Stack direction="row">
            {chartsJsx}
        </Stack>
        </Box>
    )
}

export default Action;