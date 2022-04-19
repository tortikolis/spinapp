import charts from "../data/charts"
import {Button} from "@mui/material";

import { Container } from "@mui/material";
import { useState } from "react";
import BB from "./BB";
import Display from "./Display";
import Hposition from "./Hposition";
import Nplayers from "./Nplayers";
import Vposition from "./Vposition";
import Action from "./Action";
import ImgModal from './ImgModal';
import Random from "./Random";
import filterCharts from "../hooks/filterCharts";
import Count from "./Count";
import Labels from "./Labels";

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
    const filteredCharts = filterCharts(charts, nPlayers, hPosition, bbNum, vPosition);

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
            <Button variant="outlined" color="error" onClick={handleReset} sx={{marginTop:'10px'}}>Reset</Button>
            <Nplayers setNplayers={setNplayers} nPlayers={nPlayers}/>
            <Hposition setHposition={setHposition} hPosition={hPosition} nPlayers={nPlayers}/>
            <Vposition vPosition={vPosition} setVposition={setVposition} nPlayers={nPlayers} hPosition={hPosition}/>
            <Action action={action} setAction={setAction} filteredCharts={filteredCharts}/>
            <BB bbNum={bbNum} setBbNum={setBbNum} charts={filterChartsWithAction()}/>
            <Display getCharts={filterChartsWithAction} handleModalOpen={handleModalOpen}/>
            <ImgModal open={modalOpen.isOpen} imgSrc={modalOpen.imgSrc} handleClose={handleModalClose}/>
            <Labels />
            <Random />
            <Count />
        </Container>
    )
}

export default Form;