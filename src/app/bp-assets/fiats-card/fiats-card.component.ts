import { Component, OnInit } from '@angular/core';
import { FiatAttributes } from 'src/app/classes/fiats';
import { BitPandaApiService } from 'src/app/services/bitpanda-api.service';

@Component({
  selector: 'app-fiats-card',
  templateUrl: './fiats-card.component.html',
  styleUrls: ['./fiats-card.component.scss']
})
export class FiatsCardComponent implements OnInit {

  attributesOfFiats : FiatAttributes;
  localfiat: any = {};  //variable to store fiats in local storage

  // retrieve() {
  //   let localfiats = [];
  //      if(localStorage.getItem('Fiats')){
  //       // SORT IT OUT!!
  //       localfiats = JSON.parse(localStorage.getItem('Fiats'));
  //       //localfiats =[this.localfiat, ...localfiats];
  //      }

  //    localStorage.setItem('Fiats', JSON.stringify(this.localfiat));
  //  };

  constructor(private apiService: BitPandaApiService) { }

  ngOnInit() {
    this.apiService.getAllFiats().subscribe(
      (response) => {

        //EXTRACT ONLY ATTRIBUTES OF FIATS
        this.attributesOfFiats = response.map(x => x.attributes);
        console.log(this.attributesOfFiats, "from fiats card")

        //STORE IN LOCAL STORAGE
        this.localfiat = Object.assign(this.localfiat, this.attributesOfFiats);
        //this.retrieve();   //Call retrieve function
        localStorage.setItem('Fiats', JSON.stringify(this.localfiat));

      });
  }

}
