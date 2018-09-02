import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: any;
  constructor() {
    console.log('ESTE ES DEXIE');
    console.log(Dexie);
    this.db = new Dexie('goback');
    this.db.version(1).stores({
      cards: '++id,name,created,updated,tag'
    });
  }

  ngOnInit(){
  }

  newCard(card) {
    return this.db.cards.put(card);
  }

  getAll(){
    return this.db.cards.where('id').between(0,100);
  }

  getAllText
}
