import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  selected: number = null;
  data: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  min: number = 0;
  max: number = 0;
  isToDisabledSlider: boolean = false;
  constructor() { }

  ngOnInit() {
    this.max = Math.max(...this.data);
    this.min = Math.min(...this.data);
  }
  changed(value){
    this.isToDisabledSlider = value > this.max;
  }

}
