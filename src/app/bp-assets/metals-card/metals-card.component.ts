
import { Component, OnInit } from '@angular/core';

import { CommodityAttributes } from 'src/app/classes/commodities';
import { BitPandaApiService } from 'src/app/services/bitpanda-api.service';


@Component({
  selector: 'app-metals-card',
  templateUrl: './metals-card.component.html',
  styleUrls: ['./metals-card.component.scss']
})
export class MetalsCardComponent implements OnInit {

  //declaration of attributes from commodities array
  attributesOfCommodity: Array <CommodityAttributes>;       //Attributes of Commodities
  localcommodity: any = {};                                 //variable to store commodity info in local storage
  searchTerm = '';
  sortDirection = 'asc';                                         //initial value for searchTerm

  //declaration of service
  constructor(private appService: BitPandaApiService) { }

  ngOnInit() {

    //GET array of commodities from api url in 'services' file
     this.appService.getAllCommodities().subscribe(
      (response) => {

        //EXTRACT ONLY ATTRIBUTES OF COMMODITIES
        this.attributesOfCommodity = response.map(x => x.attributes);
        console.log( this.attributesOfCommodity, "COMMODITIES ATTRIBUTES OBJECTS, from metals card");

        //STORE IN LOCAL STORAGE
        this.localcommodity = Object.assign(this.localcommodity, this.attributesOfCommodity);
        localStorage.setItem('Commodities', JSON.stringify(this.localcommodity));

      });

    }
  localcommodities(localcommodities: any, arg1: string) {
    throw new Error('Method not implemented.');
  }

}

