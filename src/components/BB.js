import { Stack, Button, Box } from "@mui/material";

const BB = ({bbNum, setBbNum}) => {

    const handleBtnClick = (e) => {
        setBbNum(e.target.value)
    }

    return(
        <Box>
            <h6>BB:</h6>
            <Stack direction="row">
                <Button onClick={handleBtnClick} value="22-25" variant={bbNum === "22-25"? "contained" : "outlined"}>22-25</Button>
                <Button onClick={handleBtnClick} value="17-22" variant={bbNum === "17-22"? "contained" : "outlined"}>17-22</Button>
                <Button onClick={handleBtnClick} value="14-17" variant={bbNum === "14-17"? "contained" : "outlined"}>14-17</Button>
                <Button onClick={handleBtnClick} value="11-14" variant={bbNum === "11-14"? "contained" : "outlined"}>11-14</Button>
                <Button onClick={handleBtnClick} value="9-11" variant={bbNum === "9-11"? "contained" : "outlined"}>9-11</Button>
                <Button onClick={handleBtnClick} value="7-9" variant={bbNum === "7-9"? "contained" : "outlined"}>7-9</Button>
                <Button onClick={handleBtnClick} value="manje od 7" variant={bbNum === "manje od 7"? "contained" : "outlined"}>manje od 7</Button>
            </Stack>
        </Box>
    )
}

export default BB;