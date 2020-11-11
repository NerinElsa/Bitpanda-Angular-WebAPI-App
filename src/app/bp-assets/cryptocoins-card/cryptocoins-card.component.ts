import { Component, OnInit } from '@angular/core';
import { CryptocoinAttributes } from 'src/app/classes/cryptocoins';
import { BitPandaApiService } from 'src/app/services/bitpanda-api.service';

@Component({
  selector: 'app-cryptocoins-card',
  templateUrl: './cryptocoins-card.component.html',
  styleUrls: ['./cryptocoins-card.component.scss']
})
export class CryptocoinsCardComponent implements OnInit {

  attributesOfCryptocoins : CryptocoinAttributes;
  localcryptocoin: any = {};  //variable to store commodity info in local storage


  // retrieve() {
  //   let localcryptocoins = [];
  //      if(localStorage.getItem('Cryptocoins')){

  //       localcryptocoins = JSON.parse(localStorage.getItem('Cryptocoins'));
  //       localcryptocoins =[this.localcryptocoin, ...localcryptocoins];
  //      }

  //    localStorage.setItem('Cryptocoins', JSON.stringify(this.localcryptocoin));
  //  };


  constructor(private apiService: BitPandaApiService) { }

  ngOnInit() {
    this.apiService.getAllCryptocoins().subscribe(
      (response) => {
        this.attributesOfCryptocoins = response.map(x => x.attributes);
        console.log(this.attributesOfCryptocoins, "from Cryptocoins card")

        //STORE IN LOCAL STORAGE
        this.localcryptocoin = Object.assign(this.localcryptocoin, this.attributesOfCryptocoins);
        localStorage.setItem('Cryptocoins', JSON.stringify(this.localcryptocoin));
        //this.retrieve();   //Call retrieve function
      }
    )
  }

}
