import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent implements OnInit {
  @Input() data: number[]; 
  @Output() selected: EventEmitter<number> = new EventEmitter();

  @Input() isOpen: boolean;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  clickHandle(row){
    this.selected.emit(row);
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
  ngOnInit() {
  }

}
