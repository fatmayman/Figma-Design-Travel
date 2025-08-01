import React from 'react';
import './TravelCard.css';

function TravelCard({ image, location, title, date, description, googleMapsUrl }) {
  return (
    <div className="travel-card">
      <img
        className="travel-card-image"
        src={image}
        alt={title}
      />

      <div className="travel-card-info">
        <div className="travel-card-location">
          <img
            src="/location-pin.png"
            alt="location icon"
            className="location-icon"
          />
          <span className="location-text">{location}</span>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="travel-card-title">{title}</h2>
        <p className="travel-card-date">{date}</p>
        <p className="travel-card-description">{description}</p>
      </div>
    </div>
  );
}

export default TravelCard;
