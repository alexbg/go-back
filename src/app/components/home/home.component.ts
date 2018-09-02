import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  db: DatabaseService;
  cards: Object[];
  constructor(db: DatabaseService) {
    console.log('ESTA ES LA INSTANCIA EN HOME');
    this.db = db;
  }

  ngOnInit() {
    // this.db.newCard({
    //   name: 'pruebas', 
    //   created: Date.now(), 
    //   updated: Date.now(), 
    //   data: 'Esta es la informacion'}
    // ).then(value => {
    //   console.log('Este es el valor');
    //   console.log(value);
    // });
    // console.log(this.db.getAll().toArray());
    this.db.getAll().toArray().then(cards => {
      console.log('ESTAS SON LAS CARTAS');
      this.cards = cards;
      console.log(this.cards);
    });
  }

  changeFilter(when){
    console.log('FILTRO CAMBIADO Y ESTOY EN EL PADRE');
  }

}
