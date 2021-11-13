import { Stack, Button, Box } from "@mui/material";



const Hposition = ({setHposition, hPosition, nPlayers}) => {


    const handleBtnClick = (e) => {
        setHposition(e.target.value)


    }

    const btnBTN = nPlayers === "3" && <Button onClick={handleBtnClick} value="BTN" variant={hPosition === "BTN"? "contained" : "outlined"}>BTN</Button>
    return(
        <Box>
            <h6>Moja pozicija:</h6>
            <Stack direction="row">
                {btnBTN}
                <Button onClick={handleBtnClick} value="SB" variant={hPosition === "SB"? "contained" : "outlined"}>SB</Button>
                <Button onClick={handleBtnClick} value="BB" variant={hPosition === "BB"? "contained" : "outlined"}>BB</Button>
            </Stack>
        </Box>
        
    )
}

export default Hposition;