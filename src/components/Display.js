import Image from 'next/image'

const Display = ({getCharts, handleModalOpen}) => {


    const charts = getCharts()
    const chartsJsx= charts.map(chart => <img onClick={() => handleModalOpen(chart.img.src)} id={chart.id} key={chart.id} className="image" src={chart.img.src} />)

    return(
        <div className="display">
            {chartsJsx}
        </div>
        
    )
}

export default Display;