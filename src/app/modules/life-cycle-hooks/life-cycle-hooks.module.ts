import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'life-cycle-hooks-example', component: ParentComponent }
    ])
  ]
})
export class LifeCycleHooksModule { }
