import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  // createCard: Function;
  db: DatabaseService;
  text: string;
  constructor(db: DatabaseService/*@Inject(MAT_DIALOG_DATA) data: any*/) { 
    // this.createCard = data.createCard;
    // console.log(this.createCard);
    this.db = db;
  }

  ngOnInit() {
  }

  saveCard(){
    console.log('Guardando carta');
    let date = new Date();
    this.db.newCard({
      created: date,
      updated: date,
      data: this.text
    });
  }

  setText(text){
    this.text = text.target.value;
  }

}
