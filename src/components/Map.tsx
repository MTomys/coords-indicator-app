import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '80vw',
  height: '80vh',
};

const center = {
  lat: 52.173,
  lng: 21.019,
};

export const Map = () => {
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU">
        <div className="flex flex-auto">
          <div className="m-auto">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={11}
            />
          </div>
        </div>
      </LoadScript>
    </>
  );
};
