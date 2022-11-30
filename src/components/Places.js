import React from "react"
import { MdLocationOn } from "react-icons/md";

export default function Places(props) {
    return (
        <section className="card-container">
            <img className="location-image" src={props.imageUrl} width="125px" height="168p"/>
            <div className="description-container">
            <p className="location-name"><MdLocationOn className="location-icon"/> {props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></p>
            <h2 className="landmark">{props.title}</h2>
            <p className="travel-dates">{props.startDate} - {props.endDate}</p>
            <p className="summary">{props.description}</p>
            </div>
        </section>
    )
}