import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { stringify } from 'querystring';
import { useState } from 'react';
import { mapContainerStyle, mapCenter } from '../utils/MapConfig';
import { CoordinateWithOccurences } from '../utils/MapHelpers';
import * as mapHelpers from '../utils/MapHelpers';

// interface Coordinate {
//   lat: number;
//   lng: number;
// }

// interface CoordinateWithOccurences {
//   coord: Coordinate;
//   occurences: number;
// }

// const randomLatMax = 51.95;
// const randomLatMin = 51.95;

// const randomLngMax = 20.42;
// const randomLngMin = 20.42;

// const generateRandomLatitude = () => {
//   return Math.random() * (randomLatMax - randomLatMin + 1) + randomLatMin;
// };

// const generateRandomLongitude = () => {
//   return Math.random() * (randomLngMax - randomLngMin + 1) + randomLngMin;
// };

// const generateRandomCoordinates = () => {
//   const coordinates: Coordinate[] = [];
//   for (let i = 0; i < 100; i++) {
//     let latitude = generateRandomLatitude();
//     let longitude = generateRandomLongitude();
//     coordinates.push({ lat: latitude, lng: longitude });
//   }
//   return coordinates;
// };

export const Map: React.FC = () => {
  const [coordinatesMap, useCoordinatesMap] = useState<
    CoordinateWithOccurences[]
  >(mapHelpers.parseCoordData(mapHelpers.data));

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU">
        <div className="flex flex-auto">
          <div className="m-auto">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={11}
            >
              {coordinatesMap.map((coord) => (
                <MarkerF
                  position={coord.coord}
                  label={`${coord.occurences}`}
                ></MarkerF>
              ))}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>
    </>
  );
};
