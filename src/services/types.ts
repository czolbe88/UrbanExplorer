import {Injectable} from "@angular/core";
import {typeContainer} from "../models/typeContainer";

@Injectable()
export class types {

  constructor() {


  }


  readonly allTypes: string[] =

    ["accounting", "airport", "amusement_park", "aquarium", "art_gallery", "atm", "bakery", "bank", "bar", "beauty_salon", "bicycle_store",
      "book_store", "bowling_alley", "bus_station", "cafe", "campground", "car_dealer", "car_rental", "car_repair", "car_wash", "casino",
      "cemetery", "church", "city_hall", "clothing_store", "convenience_store", "courthouse", "dentist", "department_store", "doctor",
      "electrician", "electronics_store", "embassy", "fire_station", "florist", "funeral_home", "furniture_store", "gas_station", "gym",
      "hair_care", "hardware_store", "hindu_temple", "home_goods_store", "hospital", "insurance_agency", "jewelry_store", "laundry", "lawyer",
      "library", "liquor_store", "local_government_office", "locksmith", "lodging", "meal_delivery", "meal_takeaway", "mosque", "movie_rental",
      "movie_theater", "moving_company", "museum", "night_club", "painter", "park", "parking", "pet_store", "pharmacy", "physiotherapist", "plumber",
      "police", "post_office", "real_estate_agency", "restaurant", "roofing_contractor", "rv_park", "school", "shoe_store", "shopping_mall", "spa", "stadium",
      "storage", "store", "subway_station", "supermarket", "synagogue", "taxi_stand", "train_station", "transit_station", "travel_agency", "veterinary_care", "zoo"];


  readonly friendlyTypes: string[] = ['accounting', 'airport', 'amusement park', 'aquarium', 'art gallery', 'atm', 'bakery', 'bank', 'bar', 'beauty salon',
    'bicycle store', 'book store', 'bowling alley', 'bus station', 'cafe', 'campground', 'car dealer', 'car rental', 'car repair', 'car wash', 'casino',
    'cemetery', 'church', 'city hall', 'clothing store', 'convenience store', 'courthouse', 'dentist', 'department store', 'doctor', 'electrician',
    'electronics store', 'embassy', 'fire station', 'florist', 'funeral home', 'furniture store', 'gas station', 'gym', 'hair care', 'hardware store',
    'hindu temple', 'home goods store', 'hospital', 'insurance agency', 'jewelry store', 'laundry', 'lawyer', 'library', 'liquor store',
    'local government office', 'locksmith', 'lodging', 'meal delivery', 'meal takeaway', 'mosque', 'movie rental', 'movie theater', 'moving company',
    'museum', 'night club', 'painter', 'park', 'parking', 'pet store', 'pharmacy', 'physiotherapist', 'plumber', 'police', 'post office',
    'real estate agency', 'restaurant', 'roofing contractor', 'rv park', 'school', 'shoe store', 'shopping mall', 'spa', 'stadium', 'storage', 'store',
    'subway station', 'supermarket', 'synagogue', 'taxi stand', 'train station', 'transit station', 'travel agency', 'veterinary care', 'zoo']

//   readonly transport: string [] = [ 'airport', 'bus station', 'car rental','parking','subway station', 'taxi stand', 'train station', 'transit station',
//     'travel agency']
//
//   readonly stores: string[] = ['aquarium', 'bakery', 'bicycle store', 'book store', 'car dealer', 'clothing store', 'convenience store', 'department store','electronics store',
// ,'florist', 'furniture store','hardware store','home goods store', 'insurance agency', 'jewelry store','liquor store','movie rental', 'pet store',
//   'shoe store', 'shopping mall','store','supermarket']
//
//   readonly services: string[] = [ 'accounting', 'atm', 'bank', 'beauty salon', 'car repair', 'car wash',  'doctor', 'electrician','gas station', 'gym', 'hair care',
//   'insurance agency','laundry', 'lawyer','locksmith', 'lodging', 'meal delivery', 'meal takeaway','moving company','painter','plumber','post office',
//   'real estate agency', 'roofing contractor', 'spa', 'storage','veterinary care']
//
//   readonly healthcare: string[] = [ 'dentist', 'hospital','pharmacy', 'physiotherapist']
//
//   readonly government: string[] = ['city hall', 'courthouse', 'embassy', 'fire station','local government office', 'police']
//
//   readonly religious: string[] = [ 'church',  'hindu temple','mosque','synagogue' ]
//
//   readonly fnb:string[] = [ 'bar', 'cafe',  'restaurant' ]
//
//   readonly recreational: string[] =[ 'amusement park', 'art gallery', 'bowling alley', 'campground', 'casino', 'library','movie theater',
//     'museum', 'night club','park', 'rv park','stadium','zoo']
//
//   readonly others: string[] = [ 'cemetery', 'funeral home','school']


  selectedPOIContainer: typeContainer[] = [];


}

