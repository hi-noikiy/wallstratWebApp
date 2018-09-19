var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
var APIDocHeaderComponent = /** @class */ (function () {
    function APIDocHeaderComponent(elementRef) {
        this.elementRef = elementRef;
    }
    APIDocHeaderComponent.prototype.ngAfterViewInit = function () {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#e6e6e6';
    };
    APIDocHeaderComponent = __decorate([
        Component({
            selector: 'page-apidoc',
            templateUrl: './apidoc.component.html',
            styleUrls: ['./apidoc.component.css'],
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], APIDocHeaderComponent);
    return APIDocHeaderComponent;
}());
export { APIDocHeaderComponent };
//# sourceMappingURL=apidoc.component.js.map