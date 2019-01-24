import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() selected: number;
  @Output() selectedChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  changedValue(value){
    this.selected = value;
    this.selectedChange.emit(value);
  }

}
