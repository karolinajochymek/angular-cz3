import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheckPermission]'
})
export class CheckPermissionDirective implements OnChanges {
    firstPermission = false;
    secondPermission = false;
  
    constructor(private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) { }
  
    @Input() set appCheckPermission(isPermitted: boolean) {
        this.firstPermission = isPermitted;
      }
  
    @Input() set appCheckPermissionSecondPermission(isPermitted: boolean) {
      this.secondPermission = isPermitted;
    }
  
    ngOnChanges() {
      if (this.firstPermission && this.secondPermission) {
        this.viewContainer.createEmbeddedView(this.templateRef)
      } else {
        this.viewContainer.clear();
      }
    }

}
