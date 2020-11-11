import { Injectable} from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map} from "rxjs/operators";
import { filter } from "rxjs/operators";



@Injectable ({
  providedIn: 'root'
})

export class BitPandaApiService {

  private apiurl: string = "https://api.bitpanda.com/v1/masterdata"; //BitPanda API master-data endpoint

  constructor(private http: HttpClient) {}  //HttpClientModule

  //GET Entire Data
  getAllData(): Observable <any> {

    return this.http.get(this.apiurl);
    }

  //GET all commodities
  getAllCommodities(): Observable <any> {

    return this.http.get(this.apiurl)
      .pipe(
        map((res:any)=> {       //map response from API to 'res'
          //console.log("Before mapping: ", res);
          return (res.data.attributes.commodities)

        }),
        filter((res:any) => { //Can use filter function to filter out specific data
          return true;
          })
      );
    }

    //GET all cryptocoins
    getAllCryptocoins(): Observable <any> {

      return this.http.get(this.apiurl)
        .pipe(
          map((res:any)=> {       //map response from API to 'res'
            return res.data.attributes.cryptocoins;
          }),
          filter((data:any) => {
            return true;
          })
        );
      }

    //GET all indexes
    getAllIndexes(): Observable <any> {

      return this.http.get(this.apiurl)
        .pipe(
          map((res:any)=> {       //map response from API to 'res'
            return res.data.attributes.indexes;
          }),
          filter((data:any) => {
            return true;
          })
        );
      }

    //GET all fiats
    getAllFiats(): Observable <any> {

      return this.http.get(this.apiurl)
        .pipe(
          map((res:any)=> {       //map response from API to 'res'
           return res.data.attributes.fiats;
          }),
          filter((data:any) => {
            return true;
          })
        );
      }

}
