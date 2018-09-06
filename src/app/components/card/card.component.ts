import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any
  constructor() { }

  ngOnInit() {
    console.log(this.card.data);

  }

  get created(){
    let date = new Date(this.card.created);
    let day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    let month = date.getMonth() < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
    // console.log(date.getDate());

    return day + '-' + month + '-' + date.getFullYear(); 
    // return this.card.created
  }

  get updated(){
    let date = new Date(this.card.updated);
    let day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    let month = date.getMonth() < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
    // console.log(date.getDate());

    return day + '-' + month + '-' + date.getFullYear(); 
    // return this.card.created
  }

}
