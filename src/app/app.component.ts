import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BitPandaApiService } from './services/bitpanda-api.service';


import { JsonPipe } from '@angular/common';
import { CryptocoinAttributes } from './classes/cryptocoins';
import { CommodityAttributes } from './classes/commodities';
import { IndexAttributes } from './classes/indexes';
import { FiatAttributes } from './classes/fiats';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //declarations
  attributesOfCommodity: Array <CommodityAttributes>;       //Attributes of Commodities
  attributesOfCryptocoin: Array <CryptocoinAttributes>;     //Attributes of Cryptocoins
  attributesOfIndexes: Array <IndexAttributes>;             //Attributes of Indexes
  attributesOfFiats: Array <FiatAttributes>;



  constructor(private appService: BitPandaApiService) {}

  ngOnInit(){

    this.appService.getAllData().subscribe(
    (response) => {
      //FULL DATA
      let fullData = response.data;
      console.log(fullData, "FULL DATA OBJECT");

      //ONLY ATTRIBUTES OF COMMODITIES
      this.attributesOfCommodity = fullData.attributes.commodities.map(x => x.attributes);
      console.log( this.attributesOfCommodity, "COMMODITIES ATTRIBUTES OBJECTS");

      //ONLY ATTRIBUTES OF CRYPTOCOINS
      this.attributesOfCryptocoin = fullData.attributes.cryptocoins.map(x => x.attributes);
      console.log( this.attributesOfCryptocoin, "CRYPTOCOINS ATTRIBUTES OBJECTS");

      //ONLY ATTRIBUTES OF INDEXES
      this.attributesOfIndexes = fullData.attributes.indexes.map(x => x.attributes);
      console.log( this.attributesOfIndexes, "INDEXES ATTRIBUTES OBJECTS");

      //ONLY ATTRIBUTES OF FIATS
      this.attributesOfFiats = fullData.attributes.fiats.map(x => x.attributes);
      console.log( this.attributesOfFiats, "FIATS ATTRIBUTES OBJECTS");

      }
    );


  //............... REMOVE THIS ...................
    // this.appService.getAllCommodities().subscribe(
    // (data ) => {
    //     console.log( data, "COMMODITIES ARRAY");
    //     }
    // );

    // //GET all cryptocoins data
    // this.appService.getAllCryptocoins().subscribe(
    // (data) => {
    //      console.log(data, "CRYPTOCOINS ARRAY");
    //  }
    // );

    // //GET all indexes data
    // this.appService.getAllIndexes().subscribe(
    // (data) => {
    //   console.log(data, "INDEXES ARRAY");
    //  }
    // );

    // //GET all fiats data
    // this.appService.getAllFiats().subscribe(
    // (data) => {
    //   console.log(data, "FIATS ARRAY");
    //   }
    // );
 }//ngOnInit
}

