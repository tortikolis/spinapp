import charts from "../data/charts"
import {Button} from "@mui/material";

import { Container } from "@mui/material";
import { useMemo, useState } from "react";
import BB from "./BB";
import Display from "./Display";
import Hposition from "./Hposition";
import Nplayers from "./Nplayers";
import Vposition from "./Vposition";
import Action from "./Action";
import ImgModal from './ImgModal';
import Random from "./Random";
import filterCharts from "../hooks/filterCharts";

const Form = () => {
    const [nPlayers, setNplayers] = useState("3");
    const [hPosition, setHposition] = useState("SB");
    const [vPosition, setVposition] = useState("");
    const [bbNum, setBbNum] = useState("");
    const [action, setAction] = useState("");
    const [modalOpen, setModalOpen] = useState({
        isOpen: false,
        imgSrc: ""
    });
    const handleModalOpen = (src) => setModalOpen({
        isOpen: true,
        imgSrc: src
    });
    const handleModalClose = () => setModalOpen({
        isOpen: false,
        imgSrc: ""
    });
    const filteredCharts = useMemo(() => filterCharts(charts, nPlayers, hPosition, bbNum, vPosition), [charts, nPlayers, hPosition, bbNum, vPosition]);

    const handleReset = () => {
        setNplayers("3");
        setHposition("SB");
        setVposition("");
        setBbNum("")
        setAction("")
    }

    const filterChartsWithAction = () => filteredCharts.filter(chart => {
        if(action === "") {
            return true
        } else {
            return chart.action === action
        }
    })

    return(
        <Container>
            <Button variant="outlined" color="error" sx={{position:'absolute', top: '80px', right:'150px'}} onClick={handleReset}>Reset</Button>
            <Nplayers setNplayers={setNplayers} nPlayers={nPlayers}/>
            <Hposition setHposition={setHposition} hPosition={hPosition} nPlayers={nPlayers}/>
            <BB bbNum={bbNum} setBbNum={setBbNum}/>
            <Vposition vPosition={vPosition} setVposition={setVposition} nPlayers={nPlayers} hPosition={hPosition}/>
            <Action action={action} setAction={setAction} filteredCharts={filteredCharts}/>
            <Display getCharts={filterChartsWithAction} handleModalOpen={handleModalOpen}/>
            <ImgModal open={modalOpen.isOpen} imgSrc={modalOpen.imgSrc} handleClose={handleModalClose}/>
            <Random />
        </Container>
    )
}

export default Form;