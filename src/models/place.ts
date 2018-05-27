export interface place{

  placeid: string;
  icon: string;
  name: string;
  //open: boolean;
  location: {
    lat: number;
    lng: number;
  }
  //details
  address: string;
  phone: number;
  opening_hours: any;
  rating: number;
  types: string[];
  website: string;

  //photo
  photoRefContainer: string[];
  photoUrlContainer: string[];



  //distance to currentLocation at the time of refresh
  distance: number;
}
