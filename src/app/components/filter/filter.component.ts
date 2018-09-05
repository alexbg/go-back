import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() whenChange: EventEmitter<String>;
  whenFilter: Object[];
  constructor() { 
    this.whenFilter = [
      {value: 'today', view: 'Today'},
      {value: 'yesterday',view: 'Yesterday'},
      {value: 'week', view: 'Last Week'},
      {value: 'month', view: 'This Month'},
      {value: '3months', view: 'Three Months Ago'}
    ];
    this.whenChange = new EventEmitter();
  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    // console.log(this.prueba);
  }

  selectWhen(when){
    this.whenChange.emit(when);
  }

}
