import React from "react"

export default function Cards(props) {
    return(
        <section>
        <div className="cards">
            <img src={props.imageUrl} className="cards--photo"/>
            <div>
                <div className="cards--location">
                    <img src="../image/location-icon.png" className="location-icon"/><p className="location">{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} className="google-map">View on Google Maps</a>
                </div>
                <h2 className="cards--title">{props.title}</h2>
                <h3 className="cards--date">{props.startDate} - {props.endDate}</h3>
                <p className="cards--description">{props.description}</p>
            </div>
        </div>
        <div className="border-bottom"></div>
        </section>
    )
}
