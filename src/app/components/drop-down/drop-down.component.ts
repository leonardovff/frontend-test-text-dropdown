import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'drop-down',
  template: `
    <input placeholder="Selecione ou digite um valor" type="number" [value]="selected" 
      (focus)="focusHandle(true)" (focusout)="teste(true)" (input)="changedValue($event.target.value)">
    <app-drop-down-list [(isOpen)]="isOpen" [data]="data" (selected)="changedValue($event)">
    </app-drop-down-list> 
    {{isFocused}}
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
  teste(cond){
    console.log('focusout');
    // tem que ser aqui, porém a menos que out seja o scroll
  }
  focusHandle(cond){
    this.isOpen = cond; 
  }
  changedValue(value){
    this.selected = value;
    this.selectedChange.emit(value);
  }

}
