import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSimpleCheckPermission]'
})
export class SimpleCheckPermissionDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appSimpleCheckPermission(isPermitted: boolean) {
    if (isPermitted) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear();
    }
  }
}
