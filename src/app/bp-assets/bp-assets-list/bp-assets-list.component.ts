import { Component, OnInit } from '@angular/core';
import { CommodityAttributes } from 'src/app/classes/commodities';
import { CryptocoinAttributes } from 'src/app/classes/cryptocoins';
import { FiatAttributes } from 'src/app/classes/fiats';
import { IndexAttributes } from 'src/app/classes/indexes';
import { BitPandaApiService } from 'src/app/services/bitpanda-api.service';


@Component({
  selector: 'app-bp-assets-list',
  templateUrl: './bp-assets-list.component.html',
  styleUrls: ['./bp-assets-list.component.css']
})
export class BpAssetsListComponent implements OnInit {

  //declarations
  attributesOfCommodity: Array <CommodityAttributes>;       //Attributes of Commodities
  attributesOfCryptocoin: Array <CryptocoinAttributes>;     //Attributes of Cryptocoins
  attributesOfIndexes: Array <IndexAttributes>;             //Attributes of Indexes
  attributesOfFiats: Array <FiatAttributes>;

  constructor(private appService: BitPandaApiService) {}

  ngOnInit() {
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

  }
}

