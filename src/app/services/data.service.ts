import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];

  constructor() {
    this.items = [
      {title: "Mobile Legends",image:"assets/ML.jpg",link : "ml"},
      {title: "PUBG Mobile",image:"assets/pubg.png",link : "pubg"},
      {title: "Fortnite Mobile",image:"assets/FM.jpg",link : "fortnite"},
      {title: "League of Legends",image:"assets/LOL.png",link : "lol"},
      {title: "Apex Legends Mobile",image:"assets/ALM2.png",link : "apex"},
    ];
   }

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}

  