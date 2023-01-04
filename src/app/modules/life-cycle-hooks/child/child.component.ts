import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() word: string = '';

  constructor() { 
    console.log(`Constructor of ChildComponent triggered with input value ${this.word}`);
  }

  ngOnChanges(): void {
    console.log(`ngOnChanges of ChildComponent triggered with input value ${this.word}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit of ChildComponent triggered with input value ${this.word}`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck of ChildComponent triggered with input value ${this.word}`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit of ChildComponent triggered with input value ${this.word}`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked of ChildComponent triggered with input value ${this.word}`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit of ChildComponent triggered with input value ${this.word}`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked of ChildComponent triggered with input value ${this.word}`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy of ChildComponent triggered with input value ${this.word}`);
  }

}
