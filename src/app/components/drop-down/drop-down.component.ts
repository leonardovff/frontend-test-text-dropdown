import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'drop-down',
  template: `

    {{isOpen}}
    <input placeholder="Selecione ou digite um valor" type="number" [value]="selected" 
      (focus)="focusHandle(true)" (focusout)="focusHandle(false)" (input)="changedValue($event.target.value)">
    <br>
    <app-drop-down-list [(isOpen)]="isOpen" [data]="data" (selected)="changedValue($event)">
    </app-drop-down-list> 
    <!-- (selected)="selected" -->
  `,
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() data: number[];
  @Input() selected: number;
  @Output() selectedChange: EventEmitter<number> = new EventEmitter();
  private isOpen: boolean = false;

  constructor() { }

  ngOnInit() {

  }
  focusHandle(cond){
    if(!cond){
      setTimeout(() => {
        this.isOpen = false;
      }, 100);
    }
    this.isOpen = true; 
  }
  changedValue(value){
    this.selected = value;
    this.selectedChange.emit(value);
  }

}
