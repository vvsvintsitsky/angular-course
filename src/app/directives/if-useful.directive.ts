import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfUseful]',
  standalone: true,
})
export class IfUsefulDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appIfUseful(isUseful: boolean) {
    if (!this.hasView && isUseful) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView && !isUseful) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
