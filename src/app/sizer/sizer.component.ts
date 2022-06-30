import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent {
  @Input() size: number;
  @Output() sizeChange=new EventEmitter();
  resize(value:number) {
    this.size=Math.min(40,Math.max(8,+this.size+value));
    this.sizeChange.emit(this.size);
  }
  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
}
