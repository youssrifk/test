import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
@Input() tit:string;
@Input() couv:string;
@Input() pr:number;
@Input() date:number;
  constructor() { }

  ngOnInit() {
  }

}
