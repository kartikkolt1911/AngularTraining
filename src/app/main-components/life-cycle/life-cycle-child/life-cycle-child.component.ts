import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  standalone: true,
  imports: [LifeCycleChildComponent],
  templateUrl: './life-cycle-child.component.html',
  styleUrl: './life-cycle-child.component.scss'
})
export class LifeCycleChildComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() message:string = "";

  constructor() {
  console.log("ChildComponent:Constructor");
  }

  ngOnChanges() {
    console.log("ChildComponent:OnChanges");
  }


  ngOnInit() {
    console.log("ChildComponent:OnInit");
  }

  ngDoCheck() {
    console.log("ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("ChildComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ChildComponent:OnDestroy");
  }
}