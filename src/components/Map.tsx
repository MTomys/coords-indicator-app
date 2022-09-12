import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '80vw',
  height: '80vh',
};

interface Coordinate {
  id: number;
  lat: number;
  lng: number;
}

const center = {
  lat: 52.173,
  lng: 21.019,
};

const randomLatMax = 51.95;
const randomLatMin = 51.95;

const randomLngMax = 20.42;
const randomLngMin = 20.42;

const generateRandomLatitude = () => {
  return Math.random() * (randomLatMax - randomLatMin + 1) + randomLatMin;
};

const generateRandomLongitude = () => {
  return Math.random() * (randomLngMax - randomLngMin + 1) + randomLngMin;
};

const generateRandomCoordinates = () => {
  const coordinates: Coordinate[] = [];
  for (let i = 0; i < 100; i++) {
    let id = i;
    let latitude = generateRandomLatitude();
    let longitude = generateRandomLongitude();
    coordinates.push({ id: id, lat: latitude, lng: longitude });
  }
  return coordinates;
};

export const Map: React.FC = () => {
  const [coordinates, useCoordinates] = useState<Coordinate[]>(
    generateRandomCoordinates()
  );

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU">
        <div className="flex flex-auto">
          <div className="m-auto">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={11}
            >
              {coordinates.map((coord) => (
                <MarkerF
                  position={{ lat: coord.lat, lng: coord.lng }}
                ></MarkerF>
              ))}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>
    </>
  );
};
