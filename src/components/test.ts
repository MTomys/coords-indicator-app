export interface Coordinate {
  lat: number;
  lng: number;
}

const coordToKey = (coord: Coordinate) => `${coord.lat},${coord.lng}`;
const keyToCoord = (key: string) => {
  const [lat, lng] = key.split(',').map(Number);

  return { lat, lng };
};

const data = [
  { lat: 51.95, lng: 20.42 },
  { lat: 51.95, lng: 20.42 },
  { lat: 52, lng: 20.45 },
  { lat: 52, lng: 20.45 },
];

const map = new Map<Coordinate, number>(
  [
    ...data
      .reduce((map, coord) => {
        return map.set(
          coordToKey(coord),
          (map.get(coordToKey(coord)) ?? 0) + 1
        );
      }, new Map<string, number>())
      .entries(),
  ].map(([key, value]) => [keyToCoord(key), value])
);

console.log(map);
