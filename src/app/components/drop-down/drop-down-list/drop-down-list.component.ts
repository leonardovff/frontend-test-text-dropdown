import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  template: `
  <ul #ul *ngIf="isOpen" >
    <li *ngFor="let row of data" (click)="clickHandle(row)">
      {{row}}
    </li>
  </ul> `,
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent implements OnChanges, OnInit {
  
  @Input() data: number[]; 
  @Output() selected: EventEmitter<number> = new EventEmitter();
  
  @Input() isOpen: boolean;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('ul') drop: ElementRef; 

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setHeight();
  }
  constructor() { }
  clickHandle(row){
    this.selected.emit(row);
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
  ngOnInit(){
    this.setHeight();
  }
  setHeight(){
    if(this.isOpen){
      const heightWanted = 250;
      const top = this.drop.nativeElement.getBoundingClientRect().top;
      const maxHeight = (top + heightWanted) > window.innerHeight ? 
        window.innerHeight - top - 20 : heightWanted;
      this.drop.nativeElement.parentElement.style.maxHeight = maxHeight + "px";
    }
  }
  ngOnChanges() {
    if(this.drop && !this.isOpen){ 
      this.drop.nativeElement.parentElement.style.maxHeight = 0 + "px";
    }
    setTimeout(() => {
      this.setHeight();
    }, 50);
  }

}
