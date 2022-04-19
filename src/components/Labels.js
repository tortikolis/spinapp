
export default function Labels() {

    const style = {
        backgroundColor: 'black'
    }
    return(
        <div className="labels">
            <div className="label">
                <div className="color" style={{backgroundColor: '#0080FF'}}>&nbsp;</div>
                <div className="text">All in</div>
            </div>
            <div className="label">
                <div className="color" style={{backgroundColor: '#FFFF00'}}>&nbsp;</div>
                <div className="text">Call</div>
            </div>
            <div className="label">
                <div className="color" style={{backgroundColor: '#F45625'}}>&nbsp;</div>
                <div className="text">3Bet(Non All in) / Big ISO</div>
            </div>
            <div className="label">
                <div className="color" style={{backgroundColor: '#5CDD2C'}}>&nbsp;</div>
                <div className="text">Smaller raise (2-2.5x)</div>
            </div>
            <div className="label">
                <div className="color" style={{backgroundColor: '#00FFFF'}}>&nbsp;</div>
                <div className="text">Bigger raise(2.5-3x)</div>
            </div>  
            <div className="label">
                <div className="color" style={{backgroundColor: '#666666'}}>&nbsp;</div>
                <div className="text">Fold</div>
            </div>     
        </div>
    )
}