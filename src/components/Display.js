import Image from 'next/image'

const Display = ({getCharts, handleModalOpen}) => {


    const charts = getCharts()
    const chartsJsx= charts.map(chart => <div key={chart.id} className="image"><img onClick={() => handleModalOpen(chart.img.src)} id={chart.id} width="450" height="460" src={chart.img.src}/></div>)

    return(
        <div className="display">
            {chartsJsx}
        </div>
        
    )
}

export default Display;