(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/frankieavina/Web_Portfolio/frankieavina-web-dev-portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "5q5P":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





function AboutComponent_mat_list_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r1);
} }
class AboutComponent {
    constructor() {
        this.techs = ["HTML and CSS", "Javascript (ES6+)", 'Angular', 'Node.js (koa.ts and express.js)', 'MySQL and Mondo DB'];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 19, vars: 1, consts: [["id", "section-1", 1, "aboutBody"], [1, "aboutContent"], [2, "margin-bottom", "40px"], [1, "aboutNumber"], [2, "color", "#f1e9e5", "font-size", "1.5em"], [1, "flex-container"], [1, "paragraphAboutMe"], ["style", "height: 50%;", 4, "ngFor", "ngForOf"], ["src", "../../../assets/fishingPic.JPG", "alt", "fishingPic", "width", "300px", 1, "fishImage"], [2, "height", "50%"], ["mat-list-icon", "", 2, "color", "#368b85"], ["mat-line", "", 2, "color", "#b4b897"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hello! My name is Frankie and I enjoy developing applications. My love for technology started back in 2010 when I decided to pursue a career in computer engineering. There I learned a lot of computer languages and fundamentals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Fast forward to today, I've had the privelage to join Bay Valley Tech where I learned about software development. Afwerwards I had the opportunity to intern with Bay Valley Tech. and collaborated with my teammates to make some awesome unique web applications. My main focus these days is to continue on my journey and build more knowledge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Here are a few technologies I've been working with recently:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutComponent_mat_list_item_16_Template, 5, 1, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techs);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"]], styles: [".aboutBody[_ngcontent-%COMP%]{\n    display: flex;\n    height: 75vh;\n    padding: 0 150px; \n    flex-direction: row;\n}\n\n.aboutContent[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    padding-bottom: 100px;\n}\n\n.aboutNumber[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    color: #368b85; \n}\n\n.fishImage[_ngcontent-%COMP%]{\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n    border: 5px solid #368b85; \n}\n\n.flex-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\nh2[_ngcontent-%COMP%]:after\n{\n    content:'';\n    display:inline-block;\n    border-top: .05rem solid #368b85;\n    width: 50%;\n    margin: 0 1rem;\n    transform: translateY(-0.5rem);\n}\n\nli[_ngcontent-%COMP%]{\n    color: #b4b897;\n}\n\np[_ngcontent-%COMP%]{\n    color: #b4b897;\n}\n\n.paragraphAboutMe[_ngcontent-%COMP%]{\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXRCb2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIHBhZGRpbmc6IDAgMTUwcHg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5hYm91dENvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmFib3V0TnVtYmVye1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzM2OGI4NTsgXG59XG5cbi5maXNoSW1hZ2V7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzM2OGI4NTsgXG59XG5cbi5mbGV4LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbmgyOmFmdGVyXG57XG4gICAgY29udGVudDonJztcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wOiAuMDVyZW0gc29saWQgIzM2OGI4NTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKTtcbn1cblxubGl7XG4gICAgY29sb3I6ICNiNGI4OTc7XG59XG5cbnB7XG4gICAgY29sb3I6ICNiNGI4OTc7XG59XG5cbi5wYXJhZ3JhcGhBYm91dE1le1xuICAgIHdpZHRoOiA1MCU7XG59Il19 */"] });


/***/ }),

/***/ "Acen":
/*!*************************************************!*\
  !*** ./src/app/projects/work/work.component.ts ***!
  \*************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");



class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 85, vars: 0, consts: [["id", "section-3", 1, "projectBody"], [1, "projectContent"], [1, "projectNumber"], [2, "color", "#f1e9e5", "font-size", "1.5em"], [1, "flex-container"], [1, "projectCardContainer"], [1, "projectCard"], [2, "margin-top", "20px", "margin-bottom", "20px"], ["mat-card-avatar", "", 1, "example-header-image"], ["aria-label", "Fish selection", 2, "margin", "20px"], ["color", "primary", "selected", ""], ["href", "https://github.com/bertman12/Warcraft-Legends", 2, "padding", "10px"], [1, "fa", "fa-github", 2, "font-size", "24px"], ["src", "../../../assets/warcraft.png", "alt", "warcraft", 1, "project1Image"], [1, "flex-container2"], ["src", "./assets/fitnits.png", "alt", "warcraft", 1, "project1Image2"], [1, "projectCardContainer2"], ["aria-label", "Fish selection", 2, "display", "flex", "margin", "20px", "justify-content", "flex-end"], ["src", "./assets/demonios.png", "alt", "warcraft", 1, "project1Image"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some Things I've Built");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Featured Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WarCraft 3 Community Review Web Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " My partner and I created a place where content creators for WorldCarft 3 can share there creativity and keep the Community alive. Designed Register and Login components in Angular, and Node.js backend with MySql database that contained user autherization using JWT authentification. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-chip-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Express.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "imagekit.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Featured Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fitnits Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Worked in a team where I was in charge of creating a dashboard with Angular that would interact with a server and request information to display in the dashboard as well as push information to the server to store in our database. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-chip-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Express.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Featured Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Demons Bucking Bulls Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Develped a front-end website to not only promote a buisness but also keep a track of inventory as well as letting future customers take a look at their cattle, future events, and products. Tools and languages used\\ to develop this application were HTML, CSS, Bootstrap, PHP, Vanilla JS and HostGator. www.losdemoniosapretalados.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-chip-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "HTML and CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "HostGator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"]], styles: [".project1Image[_ngcontent-%COMP%]{\n    width: 475px;\n    height: 300px;\n    object-fit: cover;\n    border: 5px solid #368b85; \n}\n\n\n.project1Image2[_ngcontent-%COMP%]{\n    width: 475px;\n    height: 400px;\n    object-fit: cover;\n    border: 5px solid #368b85; \n}\n\n\n.fa-github[_ngcontent-%COMP%]{\n    color: #f1e9e5;\n}\n\n\n.flex-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-bottom: 100px; \n}\n\n\n.flex-container2[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-bottom: 100px; \n}\n\n\nh2[_ngcontent-%COMP%]{\n    margin-bottom: 40px;\n}\n\n\nh2[_ngcontent-%COMP%]:after\n{\n    content:'';\n    display:inline-block;\n    border-top: .05rem solid #368b85;\n    width: 40%;\n    margin: 0 1rem;\n    transform: translateY(-0.5rem);\n}\n\n\n.projectBody[_ngcontent-%COMP%]{\n    display: flex;\n    height: 200vh;\n    padding: 0 150px; \n    flex-direction: row;\n}\n\n\n.projectContent[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    padding-bottom: 100px;\n}\n\n\n.projectNumber[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    color: #368b85;\n}\n\n\n.projectCardContainer[_ngcontent-%COMP%]{\n    width: 50%; \n}\n\n\n.projectCardContainer2[_ngcontent-%COMP%]{\n    width: 50%;\n    text-align: right;\n}\n\n\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{\n    color: #f1e9e5;\n    background-color: #368b85;\n}\n\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{\n    background-color: #f1e9e5;\n    color: #368b85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0lBRUksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdDFJbWFnZXtcbiAgICB3aWR0aDogNDc1cHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzY4Yjg1OyBcbn1cblxuXG4ucHJvamVjdDFJbWFnZTJ7XG4gICAgd2lkdGg6IDQ3NXB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzM2OGI4NTsgXG59XG5cblxuLmZhLWdpdGh1YntcbiAgICBjb2xvcjogI2YxZTllNTtcbn1cblxuLmZsZXgtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDsgXG59XG5cbi5mbGV4LWNvbnRhaW5lcjJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4OyBcbn1cblxuaDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaDI6YWZ0ZXJcbntcbiAgICBjb250ZW50OicnO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IC4wNXJlbSBzb2xpZCAjMzY4Yjg1O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xufVxuXG4ucHJvamVjdEJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDIwMHZoO1xuICAgIHBhZGRpbmc6IDAgMTUwcHg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5wcm9qZWN0Q29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4ucHJvamVjdE51bWJlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICMzNjhiODU7XG59XG5cbi5wcm9qZWN0Q2FyZENvbnRhaW5lcntcbiAgICB3aWR0aDogNTAlOyBcbn1cblxuLnByb2plY3RDYXJkQ29udGFpbmVyMntcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcHtcbiAgICBjb2xvcjogI2YxZTllNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY4Yjg1O1xufVxuXG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlOWU1O1xuICAgIGNvbG9yOiAjMzY4Yjg1O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "AjVw":
/*!***************************************************!*\
  !*** ./src/app/footer/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footerBody"], [1, "footerContent"], [1, "footer-text"], [1, "upwardArrow"], ["routerLink", ".", "fragment", "top-of-page", "matTooltipClass", "example-toolTip", "mat-raised-button", "", "color", "accent", "matTooltip", "Return to top", "aria-label", "Button", "matTooltipPosition", "above"], ["aria-hidden", "false", "aria-label", "Example home icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Designed & Built by Francisco Avina \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".footerBody{ \n    padding: 15px;\n}\n\n.footerContent{\n    display: flex;\n    justify-content: center;\n}\n\n.footer-text{\n    color: #b4b897;\n    font-size: medium;\n}\n\n.upwardArrow{\n    display: flex;\n    justify-content: center;\n}\n\n.example-toolTip{\n    background: #368b85;\n    font-size: medium;\n}\n\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, \n.mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #368b85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlckJvZHl7IFxuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5mb290ZXJDb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXItdGV4dHtcbiAgICBjb2xvcjogI2I0Yjg5NztcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLnVwd2FyZEFycm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXRvb2xUaXB7XG4gICAgYmFja2dyb3VuZDogIzM2OGI4NTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgXG4ubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjhiODU7XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FR54":
/*!***************************************************!*\
  !*** ./src/app/navbar/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



const FileSaver = __webpack_require__(/*! file-saver */ "Iab2");
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    openResume() {
        const pdfUrl = './assets/web-developer-francisco-avina.pdf';
        window.open(pdfUrl, '_blank', '', true);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 31, vars: 0, consts: [["id", "top-of-page", 1, "header"], [1, "flex-container"], [1, "logo"], ["src", "../../../assets/logo.png", 1, "logo"], [1, "navigation", 2, "display", "flex", "align-items", "center"], ["routerLink", ".", "fragment", "section-1"], [1, "nav-number"], ["routerLink", ".", "fragment", "section-2"], ["routerLink", ".", "fragment", "section-3"], ["routerLink", ".", "fragment", "section-4"], [2, "margin-left", "15px"], ["mat-raised-button", "", "color", "success", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_28_listener() { return ctx.openResume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["*[_ngcontent-%COMP%]{padding:0; margin: 0;}\n\n.header[_ngcontent-%COMP%]{\n    padding: 0 50px;\n    height: 100px;\n}\n\n.flex-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #464660;\n    height: 100%;\n}\n\n.logo[_ngcontent-%COMP%]{\n    margin-top: .12em ; \n    margin-left: 5px; \n    width: 3em; \n}\n\n.logo[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]{\n    list-style: none; \n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;  \n}\n\n.mat-success[_ngcontent-%COMP%]{\n  background-color: #368b85;\n  color: #f1e9e5;\n}\n\n.navigation[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: #b4b897;\n    padding: 1em; \n}\n\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\n.nav-number[_ngcontent-%COMP%]{\n    margin: 0 5px 0 0; \n    color: #368b85;\n\n}\n\n\n\n\n\n@media all and (max-width: 990px) {\n    .flex-container[_ngcontent-%COMP%] {\n      flex-direction: column;\n    }\n    \n    .logo[_ngcontent-%COMP%] {\n    margin-top: 0.2em;\n  }\n    \n    .navigation[_ngcontent-%COMP%]  {\n      width: 100%;\n      justify-content: space-around;\n    }\n\n\n}\n\n\n\n@media all and (max-width: 600px) {\n \n    .logo[_ngcontent-%COMP%] {\n      margin: .25em 0;\n      align-self: left; \n  }\n    \n    .navigation[_ngcontent-%COMP%] {\n      flex-direction: column;\n    } \n\n    .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { \n        text-align: center; \n        padding: 10px;\n        border-top: 1px solid rgba(255,255,255,0.3); \n        border-bottom: 1px solid rgba(0,0,0,0.1); \n      }\n\n      .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   a[_ngcontent-%COMP%] {\n        border-bottom: none;\n      }\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzs7QUFFdkI7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxnQkFBZ0IsRUFBRSxrQkFBa0I7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUIsRUFBRSxvQkFBb0I7QUFDL0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCOztBQUtBO3dFQUN3RTs7QUFDeEUsNENBQTRDOztBQUM1QztJQUNJO01BQ0Usc0JBQXNCO0lBQ3hCOztJQUVBO0lBQ0EsaUJBQWlCO0VBQ25COztJQUVFO01BQ0UsV0FBVztNQUNYLDZCQUE2QjtJQUMvQjs7O0FBR0o7O0FBQ0EsMkNBQTJDOztBQUMzQzs7SUFFSTtNQUNFLGVBQWU7TUFDZixnQkFBZ0IsRUFBRSx3REFBd0Q7RUFDOUU7O0lBRUU7TUFDRSxzQkFBc0I7SUFDeEIsRUFBRSx3QkFBd0I7O0lBRTFCO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYiwyQ0FBMkM7UUFDM0Msd0NBQXdDO01BQzFDOztNQUVBO1FBQ0UsbUJBQW1CO01BQ3JCO0NBQ0wiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe3BhZGRpbmc6MDsgbWFyZ2luOiAwO31cblxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmZsZXgtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzQ2NDY2MDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dve1xuICAgIG1hcmdpbi10b3A6IC4xMmVtIDsgXG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgXG4gICAgd2lkdGg6IDNlbTsgXG59XG5cblxuLmxvZ28sIC5uYXZpZ2F0aW9ue1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IC8qc28gbm8gYnVsbGV0cyAgKi9cbn1cblxuLmxvZ28gYSwgLm5hdmlnYXRpb24gYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qc28gbm8gdW5kZXJsaW5lICAqLyBcbn1cblxuLm1hdC1zdWNjZXNze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY4Yjg1O1xuICBjb2xvcjogI2YxZTllNTtcbn1cblxuLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZpZ2F0aW9uIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjYjRiODk3O1xuICAgIHBhZGRpbmc6IDFlbTsgXG59XG5cbi5uYXZpZ2F0aW9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdi1udW1iZXJ7XG4gICAgbWFyZ2luOiAwIDVweCAwIDA7IFxuICAgIGNvbG9yOiAjMzY4Yjg1O1xuXG59XG5cblxuXG5cbi8qIE1lZGlhIHF1ZXJpZXMgYXJlIGNvbW1vbmx5IHVzZWQgaW4gcmVzcG9uc2l2ZSBkZXNpZ25zIGluIG9yZGVyIHRvIGRpc3BsYXkgYSBcbmRpZmZlcmVudCBsYXlvdXQgdG8gZGlmZmVyZW50IGRldmljZXMsIGRlcGVuZGluZyBvbiB0aGVpciBzY3JlZW4gc2l6ZS4gKi9cbi8qKioqKiogYWJvdXQgdGhlIHNpemUgb2YgYSB0YWJsZXQgKioqKioqKioqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICAuZmxleC1jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgXG4gICAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xuICB9XG4gICAgXG4gICAgLm5hdmlnYXRpb24gIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuXG5cbn1cbi8qKioqKiogYWJvdXQgdGhlIHNpemUgb2YgYSBwaG9uZSAqKioqKioqKiovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuIFxuICAgIC5sb2dvIHtcbiAgICAgIG1hcmdpbjogLjI1ZW0gMDtcbiAgICAgIGFsaWduLXNlbGY6IGxlZnQ7IC8qIGFsaWduIHRoZSBsb2dvIHRvIHRoZSBsZWZ0IHNpZGUgb2YgJ2ZsZXgtY29udGFpbmVyJyAqL1xuICB9XG4gICAgXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9IC8qIGhhdmUgYSBkcm9wZG93biBtZW51Ki9cblxuICAgIC5uYXZpZ2F0aW9uIGEgeyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTsgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7IFxuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbiBsaTpsYXN0LW9mLXR5cGUgYSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gfSJdfQ== */"] });


/***/ }),

/***/ "PmC0":
/*!***********************************************************!*\
  !*** ./src/app/contact-page/contact/contact.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 0, consts: [["id", "section-4", 1, "contactBody"], [1, "contactContent"], [2, "text-align", "center"], [1, "contactNumber"], [2, "color", "#f1e9e5", "font-size", "1.5em"], [2, "margin-bottom", "40px", "text-align", "center", "color", "#b4b897", "font-size", "40px"], [1, "flex-container"], [1, "paragraphAboutMe"], [2, "display", "flex", "justify-content", "center", "margin-top", "50px"], ["href", "mailto:frankieavina@gmail.com"], ["mat-raised-button", "", "color", "accent"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I'm always looking for new opportunities so feel free to contact me. If you have any questions or want to say what's up, I'll try my best and get back to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".contactBody[_ngcontent-%COMP%]{\n    display: flex;\n    height: 75vh;\n    padding: 0 150px; \n    justify-content: center;\n}\n\n\n.contactContent[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    padding-bottom: 100px;\n    margin: 0 100px 100px 100px;\n}\n\n\n.contactNumber[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    color: #368b85;\n}\n\n\n.flex-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n\nh2[_ngcontent-%COMP%]:after\n{\n    content:'';\n    display:inline-block;\n    border-top: .05rem solid #368b85;\n    width: 20%;\n    margin: 0 1rem;\n    transform: translateY(-0.5rem);\n}\n\n\nh2[_ngcontent-%COMP%]:before\n{\n    content:'';\n    display:inline-block;\n    border-top: .05rem solid #368b85;\n    width: 20%;\n    margin: 0 1rem;\n    transform: translateY(-0.5rem);\n}\n\n\n.mat-accent[_ngcontent-%COMP%]{\n    background-color: #368b85;\n    color: #f1e9e5;\n  }\n\n\n.mat-accent[_ngcontent-%COMP%]:hover{\n    filter: brightness(150%);\n}\n\n\n.paragraphAboutMe[_ngcontent-%COMP%]{\n    width: 65%;\n    color: #b4b897;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7O0FBRUE7O0lBRUksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7OztBQUVBOztJQUVJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOzs7QUFFRjtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdEJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgcGFkZGluZzogMCAxNTBweDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLmNvbnRhY3RDb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luOiAwIDEwMHB4IDEwMHB4IDEwMHB4O1xufVxuXG4uY29udGFjdE51bWJlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICMzNjhiODU7XG59XG5cblxuLmZsZXgtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaDI6YWZ0ZXJcbntcbiAgICBjb250ZW50OicnO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IC4wNXJlbSBzb2xpZCAjMzY4Yjg1O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xufVxuXG5oMjpiZWZvcmVcbntcbiAgICBjb250ZW50OicnO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IC4wNXJlbSBzb2xpZCAjMzY4Yjg1O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xufVxuXG4ubWF0LWFjY2VudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY4Yjg1O1xuICAgIGNvbG9yOiAjZjFlOWU1O1xuICB9XG5cbi5tYXQtYWNjZW50OmhvdmVye1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcbn1cblxuLnBhcmFncmFwaEFib3V0TWV7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBjb2xvcjogI2I0Yjg5Nztcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _load_screen_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-screen/loading/loading.component */ "sTVr");
/* harmony import */ var _navbar_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/header/header.component */ "FR54");
/* harmony import */ var _landing_page_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing/landing.component */ "r9B/");
/* harmony import */ var _about_page_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page/about/about.component */ "5q5P");
/* harmony import */ var _experience_page_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience-page/experience/experience.component */ "pvMc");
/* harmony import */ var _projects_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/work/work.component */ "Acen");
/* harmony import */ var _contact_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-page/contact/contact.component */ "PmC0");
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer/footer.component */ "AjVw");









class AppComponent {
    constructor() {
        this.title = 'web-developer-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } }, directives: [_load_screen_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _navbar_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _landing_page_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _about_page_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _experience_page_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"], _projects_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _contact_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/header/header.component */ "FR54");
/* harmony import */ var _about_page_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page/about/about.component */ "5q5P");
/* harmony import */ var _contact_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-page/contact/contact.component */ "PmC0");
/* harmony import */ var _experience_page_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience-page/experience/experience.component */ "pvMc");
/* harmony import */ var _projects_work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/work/work.component */ "Acen");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _landing_page_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/landing/landing.component */ "r9B/");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer/footer.component */ "AjVw");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _load_screen_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./load-screen/loading/loading.component */ "sTVr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _about_page_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _contact_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _experience_page_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
        _projects_work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
        _landing_page_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _load_screen_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"]] }); })();


/***/ }),

/***/ "pvMc":
/*!********************************************************************!*\
  !*** ./src/app/experience-page/experience/experience.component.ts ***!
  \********************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 63, vars: 0, consts: [["id", "section-2", 1, "experienceBody"], [1, "experienceContent"], [1, "experienceNumber"], [1, "experienceHeader", 2, "color", "#f1e9e5", "font-size", "1.5em"], [1, "flex-container"], [1, "workTabs"], ["animationDuration", "2000ms"], ["label", "Bay Valley Tech"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "experience-title"], ["href", "https://www.bayvalleytech.com/", 1, "linkWork"], ["label", "Autozone"], ["href", "https://www.autozone.com/", 1, "linkWork"], ["label", "Demons Bucking Bulls Cattle and Rodeo"], ["href", "http://www.losdemoniosapretalados.com/index.html", 1, "linkWork"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I Have Worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Software Developer Intern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "@BVTCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "April 2021 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Develop web applications and werbsites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Colaborated with a team of Developers to ensure product met requirements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Retail Sales Associate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "@Autozone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "July 2020 - January 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Processed all sales transactions accuretly and in a timely fashion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Maintained visually appealing and effective displays for the entire store.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Communicated information to customers about product quality, value and style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Implemented vehicle diagnostics testing: Battery, Starter, Alternator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Admin Assistant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "@DBCR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "February 2016 - December 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Utilized strong communication and interpersonal skills to set up bull riding events, assist customers with any concerns they had.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Collected entrance and parking fees and made sure all money was accounted for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: [".experienceBody{\n    display: flex;\n    height: 75vh;\n    padding: 0 150px; \n    justify-content: center;\n}\n\n.experienceContent{\n    margin: 0 60px;\n    padding: 100px 0; \n}\n\n.experienceNumber{\n    margin-right: 10px;\n    color: #368b85; \n}\n\nh2{\n    margin-bottom: 40px;\n}\n\n.experienceHeader:after\n{\n    content:'';\n    display:inline-block;\n    border-top: .05rem solid #368b85;\n    width: 20%;\n    margin: 0 1rem;\n    transform: translateY(-0.5rem);\n}\n\n.experienceHeader:before{\n    content:'';\n    display:inline-block;\n    border-top: .05rem solid #368b85;\n    width: 20%;\n    margin: 0 1rem;\n    transform: translateY(-0.5rem);\n}\n\nli{\n    margin:20px; \n}\n\n.linkWork{\n    color: #368b85;\n}\n\nlabel{\n    color: #b4b897;\n}\n\n.mat-card-title{\n    color: #f1e9e5;\n}\n\n.mat-card{\n   color: #b4b897;\n   background-color: #464660;\n}\n\n.mat-tab-label{\n    color: #b4b897;\n    font-size: medium;\n}\n\n.mat-card-subtitle{\n    color: #b4b897;\n}\n\nelement.style {\n    visibility: visible;\n    left: 0px;\n    width: 160px;\n}\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar{\n    background: #368b85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0dBQ0csY0FBYztHQUNkLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlQm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBwYWRkaW5nOiAwIDE1MHB4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4cGVyaWVuY2VDb250ZW50e1xuICAgIG1hcmdpbjogMCA2MHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7IFxufVxuXG4uZXhwZXJpZW5jZU51bWJlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICMzNjhiODU7IFxufVxuXG5oMntcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZXhwZXJpZW5jZUhlYWRlcjphZnRlclxue1xuICAgIGNvbnRlbnQ6Jyc7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXRvcDogLjA1cmVtIHNvbGlkICMzNjhiODU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XG59XG5cbi5leHBlcmllbmNlSGVhZGVyOmJlZm9yZXtcbiAgICBjb250ZW50OicnO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IC4wNXJlbSBzb2xpZCAjMzY4Yjg1O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xufVxuXG5saXtcbiAgICBtYXJnaW46MjBweDsgXG59XG5cbi5saW5rV29ya3tcbiAgICBjb2xvcjogIzM2OGI4NTtcbn1cblxubGFiZWx7XG4gICAgY29sb3I6ICNiNGI4OTc7XG59XG5cbi5tYXQtY2FyZC10aXRsZXtcbiAgICBjb2xvcjogI2YxZTllNTtcbn1cblxuLm1hdC1jYXJke1xuICAgY29sb3I6ICNiNGI4OTc7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjYwO1xufVxuXG4ubWF0LXRhYi1sYWJlbHtcbiAgICBjb2xvcjogI2I0Yjg5NztcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxle1xuICAgIGNvbG9yOiAjYjRiODk3O1xufVxuXG5cbmVsZW1lbnQuc3R5bGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7XG4gICAgYmFja2dyb3VuZDogIzM2OGI4NTtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "r9B/":
/*!***********************************************************!*\
  !*** ./src/app/landing-page/landing/landing.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 19, vars: 0, consts: [[1, "landingBody"], [1, "flex-container"], [2, "color", "#368b85"], ["href", "mailto:frankieavina@gmail.com"], ["mat-raised-button", "", "color", "success"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi, my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Frankie Avina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I am a developer for the web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I'm a software developer that builds and designs unuique web application. Currently I'm looking to continue my journey as a developer and contribute in the success of an orginization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".landingBody[_ngcontent-%COMP%]{\n    display: flex;\n    padding:0 150px; \n    height: 100vh; \n    align-items: center;\n}\n\n.flex-container[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n}\n\nh1[_ngcontent-%COMP%]{ \n    font-size: 20px;\n    margin: 0;\n    text-align: left;\n    margin-bottom: 20px;\n   \n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 80px;\n    margin: 0; \n    text-align: left;\n    color: #f1e9e5;\n}\n\nh3[_ngcontent-%COMP%]{\n    font-size: 80px;\n    margin: 0; \n    text-align: left;\n    color: #b4b897;\n}\n\np[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin: 0; \n    width: 50%;\n    text-align: left;\n    margin-top: 20px;\n    color: #b4b897;\n}\n\nbutton[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    padding: 25px; \n}\n\n.mat-success[_ngcontent-%COMP%]{\n    background-color: #368b85;\n    color: #f1e9e5;\n  }\n\n.mat-success[_ngcontent-%COMP%]:hover{\n    filter: brightness(150%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZ0JvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOjAgMTUwcHg7IFxuICAgIGhlaWdodDogMTAwdmg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmgxeyBcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIFxufVxuXG5oMntcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbWFyZ2luOiAwOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZjFlOWU1O1xufVxuXG5oM3tcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbWFyZ2luOiAwOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjYjRiODk3O1xufVxuXG5we1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7IFxuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjYjRiODk3O1xufVxuXG5idXR0b257XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBwYWRkaW5nOiAyNXB4OyBcbn1cblxuLm1hdC1zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjhiODU7XG4gICAgY29sb3I6ICNmMWU5ZTU7XG4gIH1cblxuICAubWF0LXN1Y2Nlc3M6aG92ZXJ7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xufSJdfQ== */"] });


/***/ }),

/***/ "sTVr":
/*!**********************************************************!*\
  !*** ./src/app/load-screen/loading/loading.component.ts ***!
  \**********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { left: a0 }; };
function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.windowWidth));
} }
class LoadingComponent {
    constructor() {
        this.showSplash = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.windowWidth = "-" + window.innerWidth + "px";
            setTimeout(() => {
                this.showSplash = !this.showSplash;
            }, 500);
        }, 3000);
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 1, consts: [["class", "app-splash-screen", 3, "ngStyle", 4, "ngIf"], [1, "app-splash-screen", 3, "ngStyle"], [1, "app-splash-inner"], [1, "app-logo"], [1, "app-label"], [1, "app-loader"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSplash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".app-splash-screen[_ngcontent-%COMP%] {\n    background: url('circuit_2.jpeg');\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n    transition: left 0.5s ;\n  }\n  \n  .app-label[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    color: #fff;\n    font-size: 2.5em;\n  }\n  \n  .app-splash-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .app-logo[_ngcontent-%COMP%] {\n    background: url('newLogo.png');\n    background-repeat: no-repeat;\n    max-width: 100%;\n    background-position: center;\n    background-size: contain;\n    width: 150px;\n    height: 150px;\n    color: #fff;\n  }\n  \n  .app-loader[_ngcontent-%COMP%] {\n    background: url('three-dots.svg');\n    background-repeat: no-repeat;\n    max-width: 100%;\n    background-position: center;\n    background-size: contain;\n    width: 80px;\n    height: 80px;\n    margin-top: 80px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpRDtJQUNqRCxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsOEJBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlDQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zcGxhc2gtc2NyZWVuIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2lyY3VpdF8yLmpwZWdcIik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgO1xuICB9XG4gIFxuICAuYXBwLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbiAgXG4gIC5hcHAtc3BsYXNoLWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFwcC1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmV3TG9nby5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmFwcC1sb2FkZXIge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90aHJlZS1kb3RzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
// fragment Router Link scrolling
// html: routerLink="." fragment="section-a" other html= id="section-a"
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
                scrollPositionRestoration: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map