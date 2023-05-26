import './InfoCard.scss'

const InfoCard = ({ image, title, link, fetched, desc}) => {
    return <div className="InfoCard d-flex flex-column"
        onClick={() => {
            if (!fetched) return;
            window.open(link, '_blank', 'noreferrer')
        }}
    >
        <div className="icon">
            <img src={image} alt={title} className="iconimg" />
        </div>
        <div className="title text-center">
            {fetched ? title : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
        <div className="desc text-center">
            {desc}
        </div>
    </div>
}

export default InfoCard