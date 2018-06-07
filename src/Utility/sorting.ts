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

        c.POI.sort(function (a, b) {
          return a.distance - b.distance
        });
        break;

      }

      case("rating"): {

        c.POI.sort(function (a, b) {
          return a.rating - b.rating
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




