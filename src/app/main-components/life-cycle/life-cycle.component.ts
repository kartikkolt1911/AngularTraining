import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms'
import { LifeCycleChildComponent } from "./life-cycle-child/life-cycle-child.component";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule, FormsModule, LifeCycleChildComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent  implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  displayChild: boolean = false;

  constructor() {
    console.log("AppComponent: Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
  console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }
}
