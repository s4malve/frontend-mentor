import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

export default function MyMap({ lat, lng, city, region, country }) {
  return (
    <div id="map">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <span>
              <b>{city}</b>
              <br />
              {region}, {country}
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
