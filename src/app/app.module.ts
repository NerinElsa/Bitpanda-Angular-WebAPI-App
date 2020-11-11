

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { BitPandaApiService } from './services/bitpanda-api.service';

import { BpAssetsListComponent } from './bp-assets/bp-assets-list/bp-assets-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MetalsCardComponent } from './bp-assets/metals-card/metals-card.component';
import { IndexesCardComponent } from './bp-assets/indexes-card/indexes-card.component';
import { FiatsCardComponent } from './bp-assets/fiats-card/fiats-card.component';
import { CryptocoinsCardComponent } from './bp-assets/cryptocoins-card/cryptocoins-card.component';

import { Routes, RouterModule } from '@angular/router'
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
//import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms' ;

const appRoutes: Routes = [
  {path: '', component: BpAssetsListComponent},
  {path: 'metals', component: MetalsCardComponent},
  {path: 'cryptocoins', component: CryptocoinsCardComponent},
  {path: 'indexes', component: IndexesCardComponent},
  {path: 'fiats', component: FiatsCardComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BpAssetsListComponent,
    NavBarComponent,
    MetalsCardComponent,
    IndexesCardComponent,
    FiatsCardComponent,
    CryptocoinsCardComponent,
    FilterPipe,
    SortPipe,
    //FormsModule
    //ReactiveFormsModule
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BitPandaApiService, MetalsCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
