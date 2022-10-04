import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PaintService } from "./paint.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // LAB #1
  // LAB #2.1
  // LAB #5
  // LAB #11
  // LAB #17

  constructor(private readonly paintService: PaintService) {
  }

  ngAfterViewInit(): void {
    // LAB #2.2, 2.3 and 3
    // LAB #16
  }

  onPointerDown(event: PointerEvent) {
    // LAB #5
  }

  onPointerMove(event: PointerEvent) {
    // LAB #4 and 5
  }

  onPointerUp() {
    // LAB #5
  }

  onColorChange(color: HTMLInputElement) {
    // LAB #6
  }

  async open() {
    // LAB #12
  }

  async save() {
    // LAB #11
  }

  async copy() {
    // LAB #13
  }

  async paste() {
    // LAB #14
  }

  async share() {
    // LAB #15
  }
}
