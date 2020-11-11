import { Component, OnInit } from '@angular/core';
import { IndexAttributes } from 'src/app/classes/indexes';
import { BitPandaApiService } from 'src/app/services/bitpanda-api.service';

@Component({
  selector: 'app-indexes-card',
  templateUrl: './indexes-card.component.html',
  styleUrls: ['./indexes-card.component.scss']
})
export class IndexesCardComponent implements OnInit {

  attributesOfIndexes: Array <IndexAttributes>;  //Attributes of Indexes
  localindex: any = {};                          //variable to store indexes into local storage

  // retrieve() {
  //   let localindexes = [];
  //      if(localStorage.getItem('Indexes')){

  //        localindexes = JSON.parse(localStorage.getItem('Indexes'));
  //        localindexes =[this.localindex, ...localindexes];
  //      }

  //    localStorage.setItem('Indexes', JSON.stringify(this.localindex));
  //  };

  constructor(private appService: BitPandaApiService ) { }

  ngOnInit() {
    this.appService.getAllIndexes().subscribe(
      (response) => {

        this.attributesOfIndexes = response.map(x =>x.attributes);
        console.log( this.attributesOfIndexes, "COMMODITIES ATTRIBUTES OBJECTS, from indexes card");

        //STORE IN LOCAL STORAGE
        this.localindex = Object.assign(this.localindex, this.attributesOfIndexes);
        localStorage.setItem('Indexes', JSON.stringify(this.localindex));
        //this.retrieve();   //Call retrieve function
      }
    )
  }

}
