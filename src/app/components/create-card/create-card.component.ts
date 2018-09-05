import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  @Output() save: EventEmitter<Object>;
  constructor() { 
    this.save = new EventEmitter();
  }

  ngOnInit() {
  }

  saveCard(){
    this.save.emit({
      name: 'Es de prueba',
      data: 'BLABLABLABLABLA'
    });
  }

}
