import {Injectable} from "@angular/core";
import {typeContainer} from "../models/typeContainer";


@Injectable()
export class sortingUtility {


  sortBy: string = "distance";


  //sorts the containers

  sortContainer( c: typeContainer)
  {

    console.log(">>>sorting engaged");

    switch (this.sortBy.toString()) {

      case("distance"): {
        console.log("sorting by: distance");

        c.POI.sort(function (a, b) {
          return a.distance - b.distance
        });
        break;

      }

      case("rating"): {

        c.POI.sort(function (a, b) {

          console.log(`comparing ${a.rating},${b.rating}`);
          //
          // if(a.rating == null || a.rating == undefined ){
          //   a.rating = 0;
          // }
          //
          // if(b.rating == null || b.rating == undefined){
          //   b.rating = 0;
          // }

          var value= a.rating - b.rating
          console.log(value);
          return value;

        });
        break;

      }

      case("alphabetical"): {

        c.POI.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();

          if (nameA < nameB) return -1;

          else if(nameA > nameB) return 1;

          else return 0;
        });


      }


    }
  }

}




