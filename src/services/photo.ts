import {Injectable, OnInit} from "@angular/core";
import {key} from "../Utility/key";

@Injectable()
export class photoService implements OnInit{



  ngOnInit(){}

  constructor( private keyConst:key){}

  url: string = `https://maps.googleapis.com/maps/api/place/photo?key=${this.keyConst.APIKEY}&maxwidth=400&photoreference=`

  //returns a single photo href
  getPhoto(photoref: string): string{

    var url:string = this.url + photoref
    console.log("returned by getPhoto: ", url);
    return url;

  }









}
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY
