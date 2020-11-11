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
  localcryptocoin: any = {};                                  //variable to store commodity info in local storage

  searchTerm = '';                                            //initialized searchTerm with empty string

  sortField = '';                                             //initialized sort field
  sortDirection = '';                                         //initialized sort direction

  constructor(private apiService: BitPandaApiService) { }

  ngOnInit() {
    this.apiService.getAllCryptocoins().subscribe(
      (response) => {
        this.attributesOfCryptocoins = response.map(x => x.attributes);
        console.log(this.attributesOfCryptocoins, "from Cryptocoins card")

        //STORE IN LOCAL STORAGE
        this.localcryptocoin = Object.assign(this.localcryptocoin, this.attributesOfCryptocoins);
        localStorage.setItem('Cryptocoins', JSON.stringify(this.localcryptocoin));
        });
  }

  onSortDirection(){
    if(this.sortDirection === 'desc'){
      this.sortDirection = 'asce';
    }else{
      this.sortDirection = 'desc';
    }
  }

}
