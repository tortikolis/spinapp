import { Stack, Button, Box } from "@mui/material";
import { useEffect } from "react";

const Vposition = ({setVposition, vPosition, nPlayers, hPosition}) => {

    useEffect((setVposition, nPlayers, hPosition) => {
        if(nPlayers ==="2" && hPosition === "SB") {
            setVposition("BB")
        } else if (nPlayers ==="2" && hPosition === "BB") {
            setVposition("SB")
        }
    },[])
    
    const handleBtnClick = (e) => {
        setVposition(e.target.value)
    }

    const btnBTN = nPlayers === "3" && hPosition !== "BTN" && <Button onClick={handleBtnClick} value="BTN" variant={vPosition === "BTN"? "contained" : "outlined"}>BTN</Button>
    const btnSB = hPosition !== "SB" && <Button onClick={handleBtnClick} value="SB" variant={vPosition === "SB"? "contained" : "outlined"}>SB</Button>
    const btnBB = hPosition !== "BB" && <Button onClick={handleBtnClick} value="BB" variant={vPosition === "BB"? "contained" : "outlined"}>BB</Button>
    return(
        <Box>
            <h6>Protivnikova pozicija:</h6>
            <Stack direction="row">
                {btnBTN}
                {btnSB}
                {btnBB}
            </Stack>
        </Box>
    )
}

export default Vposition;