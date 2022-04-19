import { Stack, Button, Box } from "@mui/material";

const Nplayers = ({setNplayers, nPlayers}) => {

    const handleBtnClick = (e) => {
        setNplayers(e.target.value)
    }

    return(
        <Box>
            <h6>Broj igrača:</h6>
            <Stack direction="row">
                <Button onClick={handleBtnClick} value="3" variant={nPlayers === "3"? "contained" : "outlined"}>3 HANDED</Button>
                <Button onClick={handleBtnClick} value="2" variant={nPlayers === "2"? "contained" : "outlined"}>HEADS UP</Button>
                <Button onClick={handleBtnClick} value="1" variant={nPlayers === "1"? "contained" : "outlined" } color='success'>NASH</Button>
            </Stack>
        </Box>
        
    )
}

export default Nplayers;