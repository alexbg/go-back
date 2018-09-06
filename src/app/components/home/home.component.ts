import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { MatDialog } from '@angular/material';
import { CreateCardComponent } from '../create-card/create-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  db: DatabaseService;
  modal: MatDialog;
  cards: Object[];
  constructor(db: DatabaseService, modal: MatDialog) {
    this.db = db;
    this.modal = modal;
  }

  ngOnInit() {
    this.db.getAll().reverse().sortBy('updated').then(cards => {
      this.cards = cards;
      console.log(this.cards);
    });
  }

  changeFilter(when){
    // console.log('FILTRO CAMBIADO Y ESTOY EN EL PADRE');
  }

  openCreateCard(){
    this.modal.open(CreateCardComponent,{width: '50%', height: '50%'});
  }

}
