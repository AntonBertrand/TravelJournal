export default function Journey(props) {
    return (
        <div className="Journey">
            <img src={props.item.image} className="journey-img"></img>
            <div className="journey-info">
                <div className="journey-location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>{props.item.location}</p>
                    <p><a href="#">View on Google Maps</a></p>
                </div>
                <div className="journey-details">
                    <h2>{props.item.title}</h2>
                    <p> <b>{props.item.date}</b></p>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}