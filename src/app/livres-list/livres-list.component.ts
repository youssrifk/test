import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class LivresListComponent implements OnInit {

livres=[{titre:"algorithique",converture:"../assets/algo.jpg",prix:15.3//,dateEdition:/new Date(2012,4,15)
},


{titre:"java",converture:"../assets/java.jpg",prix:38.4//,dateEdition:new Date(2019,10,27)
},

{titre:"Résaux",converture:"../asset/reseau.jpg",prix:46.8//,dateEdition:new Date(2018,9,7)
},]
  constructor() { }

  ngOnInit() {
  }

}
