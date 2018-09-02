import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() when: String;
  @Output() whenChange: EventEmitter<String>;
  whenFilter: Object[];
  constructor() { 
    this.whenFilter = [
      {value: 'today', view: 'Today'},
      {value: 'yesterday',view: 'Yesterday'},
      {value: 'week', view: 'Last Week'}
    ];
    this.whenChange = new EventEmitter();
  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    // console.log(this.prueba);
  }

  selectWhen(when){
    this.when = when;
    console.log('LANZADOOOOOO');
    this.whenChange.emit(when);
  }

}
