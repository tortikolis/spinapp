import { Stack, Button, Box } from "@mui/material";

const Action = ({action, setAction, filteredCharts}) => {


    const handleBtnClick = (e) => {
        setAction(e.target.value)
    }

    const chartsFiltered = [...new Set(filteredCharts.map(chart => chart.action))]
    const chartsJsx = chartsFiltered.map((item, i) => <Button key={i} onClick={handleBtnClick} value={item} variant={action === item? "contained" : "outlined"}>{item}</Button>)

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