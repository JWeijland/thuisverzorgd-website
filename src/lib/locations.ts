export type Location = {
  name: string;
  lat: number;
  lng: number;
  buddies: number;
};

/** Mock-data: steden waar Thuisverzorgd actief is. */
export const locations: Location[] = [
  { name: "Amsterdam", lat: 52.3676, lng: 4.9041, buddies: 240 },
  { name: "Rotterdam", lat: 51.9244, lng: 4.4777, buddies: 205 },
  { name: "Den Haag", lat: 52.0705, lng: 4.3007, buddies: 150 },
  { name: "Utrecht", lat: 52.0907, lng: 5.1214, buddies: 140 },
  { name: "Eindhoven", lat: 51.4416, lng: 5.4697, buddies: 95 },
  { name: "Groningen", lat: 53.2194, lng: 6.5665, buddies: 80 },
  { name: "Haarlem", lat: 52.3874, lng: 4.6462, buddies: 70 },
  { name: "Almere", lat: 52.3508, lng: 5.2647, buddies: 65 },
  { name: "Nijmegen", lat: 51.8126, lng: 5.8372, buddies: 60 },
  { name: "Tilburg", lat: 51.5555, lng: 5.0913, buddies: 55 },
  { name: "Zwolle", lat: 52.5168, lng: 6.083, buddies: 40 },
  { name: "Maastricht", lat: 50.8514, lng: 5.691, buddies: 35 },
];
