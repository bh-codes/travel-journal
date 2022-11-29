import React from "react"

export default function Places(props) {
    console.log(props)
    return (
        <section>
            <img src={props.location.imageUrl} />
            <p>{props.location.location} <a href={props.location.googleMapsUrl}>View on Google Maps</a></p>
            <h2>{props.location.title}</h2>
            <p>{props.location.startDate} - {props.location.endDate}</p>
            <p>{props.location.description}</p>
            <hr />
        </section>
        
    )
}