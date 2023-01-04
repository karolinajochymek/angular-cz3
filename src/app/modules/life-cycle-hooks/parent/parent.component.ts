import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  typedWord: string = 'initial';

  constructor() { 
    console.log(`Constructor of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngOnChanges(): void {
    console.log(`ngOnChanges of ParentComponent triggered with typed value ${this.typedWord}`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked of ParentComponent triggered with typed value ${this.typedWord}`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy of ParentComponent triggered with typed value ${this.typedWord}`);
  }

}
