(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ryanl\Documents\RevatureTraining\Project2\SpinnerApp\Spinner\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n\r\n.btn[_ngcontent-%COMP%] { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; border-radius: 4px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:active, .btn.active[_ngcontent-%COMP%], .btn.disabled[_ngcontent-%COMP%], .btn[disabled][_ngcontent-%COMP%] { background-color: #e6e6e6; }\r\n.btn-large[_ngcontent-%COMP%] { padding: 9px 14px; font-size: 15px; line-height: normal; border-radius: 5px; }\r\n.btn[_ngcontent-%COMP%]:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; transition: background-position 0.1s linear; }\r\n.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }\r\n.btn-primary.active[_ngcontent-%COMP%] { color: rgba(255, 255, 255, 0.75); }\r\n.btn-primary[_ngcontent-%COMP%] { background-color: #4a148c; background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }\r\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary.active[_ngcontent-%COMP%], .btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[disabled][_ngcontent-%COMP%] { filter: none; background-color: #4a148c; }\r\n.btn-block[_ngcontent-%COMP%] { width: 90%; display:block; }\r\n*[_ngcontent-%COMP%] { -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }\r\nhtml[_ngcontent-%COMP%] { width: 100%; height:100%; overflow:hidden; border: #4a148c; border-radius: 5px;}\r\n.toggle-btn[_ngcontent-%COMP%]{\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: 2px solid #4a148c;\r\n  cursor: pointer;\r\n}\r\n.login[_ngcontent-%COMP%] { \r\n  position: right;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: -150px 0 0 -150px;\r\n  width:300px;\r\n  height:300px;\r\n}\r\n.login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }\r\n#main-div[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  font-size:108px;\r\n  margin-left: 250px;\r\n  margin-top: 225px;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n  list-style-type:none;\r\n  margin-left: 250px;\r\n  font-size: 36px;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  width: 90%; \r\n  margin-bottom: 10px; \r\n  background: rgba(0,0,0,0.3);\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);\r\n  transition: box-shadow .5s ease;\r\n}\r\ninput[_ngcontent-%COMP%]:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }\r\n#login-div[_ngcontent-%COMP%]{\r\n  margin-top: 225px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSw4REFBOEQ7QUFMOUQ7OztDQUdDO0FBR0QsT0FBTyxxQkFBcUIsR0FBRSxlQUFnQixHQUFFLE9BQVEsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDLGdEQUFnRCxFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFtVix3REFBd0QsRUFBRSwyQkFBMkIsRUFBRSw4R0FBOEcsRUFBRSxxQ0FBcUMsRUFBRSx1RUFBdUUsRUFBRSx5QkFBeUIsRUFBdUQsa0JBQWtCLEVBQXFMLGlGQUFpRixFQUFFLGVBQWUsR0FBRSxpQkFBa0IsRUFBRTtBQUN0eUMsc0VBQXNFLHlCQUF5QixFQUFFO0FBQ2pHLGFBQWEsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUF1RCxrQkFBa0IsRUFBRTtBQUMvSSxhQUFhLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBME0sMkNBQTJDLEVBQUU7QUFDbFcsbUNBQW1DLHlDQUF5QyxFQUFFLGNBQWMsRUFBRTtBQUM5RixzQkFBc0IsZ0NBQWdDLEVBQUU7QUFDeEQsZUFBZSx5QkFBeUIsRUFBbVYsd0RBQXdELEVBQUUsMkJBQTJCLEVBQUUsOEdBQThHLEdBQUcseUJBQXlCLEVBQUUsd0NBQXdDLEVBQUUsZ0ZBQWdGLEVBQUU7QUFDMXRCLDhHQUE4RyxZQUFZLEVBQUUseUJBQXlCLEVBQUU7QUFDdkosYUFBYSxVQUFVLEVBQUUsYUFBYSxFQUFFO0FBRXhDLElBQStELHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFO0FBRTNJLE9BQU8sV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDO0FBR3RGO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQSxZQUFZLFdBQVcsRUFBRSxxQ0FBcUMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTtBQUV2RztFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsb0ZBQW9GO0VBS3BGLCtCQUErQjtBQUNqQztBQUNBLGNBQWMsb0ZBQW9GLEVBQUU7QUFFcEc7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG5UaGlzIGlzIGp1c3Qgc29tZSBzdHlsaW5nIGZvcm1hdCBJIGZvdW5kIG9ubGluZSBhbmQgd2UgY2FuIGNoYW5nZSBpdCB0byBtYXRjaCB0aGUgdGhlbWUgXHJcbndlIGFyZSBnb2luZyBmb3IgYnV0IGZvciBub3cgSSBqdXN0IHdhbnRlZCBzb21ldGhpbmcgdGhlcmUgdG8gcmVmZXJlbmNlLlxyXG4qL1xyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XHJcbi5idG4geyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICpkaXNwbGF5OiBpbmxpbmU7ICp6b29tOiAxOyBwYWRkaW5nOiA0cHggMTBweCA0cHg7IG1hcmdpbi1ib3R0b206IDA7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDE4cHg7IGNvbG9yOiAjMzMzMzMzOyB0ZXh0LWFsaWduOiBjZW50ZXI7dGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpOyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7IGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgjZmZmZmZmKSwgdG8oI2U2ZTZlNikpOyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpOyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7IGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jZmZmZmZmLCBlbmRDb2xvcnN0cj0jZTZlNmU2LCBHcmFkaWVudFR5cGU9MCk7IGJvcmRlci1jb2xvcjogI2U2ZTZlNiAjZTZlNmU2ICNlNmU2ZTY7IGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpOyBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDsgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IGN1cnNvcjogcG9pbnRlcjsgKm1hcmdpbi1sZWZ0OiAuM2VtOyB9XHJcbi5idG46aG92ZXIsIC5idG46YWN0aXZlLCAuYnRuLmFjdGl2ZSwgLmJ0bi5kaXNhYmxlZCwgLmJ0bltkaXNhYmxlZF0geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2OyB9XHJcbi5idG4tbGFyZ2UgeyBwYWRkaW5nOiA5cHggMTRweDsgZm9udC1zaXplOiAxNXB4OyBsaW5lLWhlaWdodDogbm9ybWFsOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDsgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgfVxyXG4uYnRuOmhvdmVyIHsgY29sb3I6ICMzMzMzMzM7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTVweDsgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyOyAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7IC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyOyAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyOyB9XHJcbi5idG4tcHJpbWFyeSwgLmJ0bi1wcmltYXJ5OmhvdmVyIHsgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7IGNvbG9yOiAjZmZmZmZmOyB9XHJcbi5idG4tcHJpbWFyeS5hY3RpdmUgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTsgfVxyXG4uYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGExNDhjOyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM2ZWI2ZGUsICM0YTE0OGMpOyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzZlYjZkZSwgIzRhNzdkNCk7IGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgjNmViNmRlKSwgdG8oIzRhNzdkNCkpOyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM2ZWI2ZGUsICM0YTc3ZDQpOyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNmViNmRlLCAjNGE3N2Q0KTsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzZlYjZkZSwgIzRhNzdkNCk7IGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jNmViNmRlLCBlbmRDb2xvcnN0cj0jNGE3N2Q0LCBHcmFkaWVudFR5cGU9MCk7ICBib3JkZXI6IDFweCBzb2xpZCAjMzc2MmJjOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjQpOyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxyXG4uYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeS5hY3RpdmUsIC5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXSB7IGZpbHRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogIzRhMTQ4YzsgfVxyXG4uYnRuLWJsb2NrIHsgd2lkdGg6IDkwJTsgZGlzcGxheTpibG9jazsgfVxyXG5cclxuKiB7IC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDsgLW1zLWJveC1zaXppbmc6Ym9yZGVyLWJveDsgLW8tYm94LXNpemluZzpib3JkZXItYm94OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cclxuXHJcbmh0bWwgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OjEwMCU7IG92ZXJmbG93OmhpZGRlbjsgYm9yZGVyOiAjNGExNDhjOyBib3JkZXItcmFkaXVzOiA1cHg7fVxyXG5cclxuXHJcbi50b2dnbGUtYnRue1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YTE0OGM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dpbiB7IFxyXG4gIHBvc2l0aW9uOiByaWdodDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luOiAtMTUwcHggMCAwIC0xNTBweDtcclxuICB3aWR0aDozMDBweDtcclxuICBoZWlnaHQ6MzAwcHg7XHJcbn1cclxuLmxvZ2luIGgxIHsgY29sb3I6ICNmZmY7IHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMyk7IGxldHRlci1zcGFjaW5nOjFweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cclxuXHJcbiNtYWluLWRpdntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6MTA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIyNXB4O1xyXG59XHJcblxyXG51bHtcclxuICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG5pbnB1dCB7IFxyXG4gIHdpZHRoOiA5MCU7IFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsMTAwLDEwMCwwLjIpLCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlO1xyXG59XHJcbmlucHV0OmZvY3VzIHsgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsMTAwLDEwMCwwLjQpLCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyB9XHJcblxyXG4jbG9naW4tZGl2e1xyXG4gIG1hcmdpbi10b3A6IDIyNXB4O1xyXG59XHJcbiJdfQ== */";
class RegisterComponent {
    constructor(userServ) {
        this.userServ = userServ;
    }
    ngOnInit() {
    }
    doClick() {
    }
    login() {
        this.userServ.login().subscribe(response => { this.userServ.loggedInUser = response; });
    }
    register() {
        this.userServ.register().subscribe(response => { this.userServ.loggedInUser = response; });
    }
    toggle() {
        document.getElementById('loginForm').toggleAttribute('hidden');
        document.getElementById('to-login').toggleAttribute('disabled');
        document.getElementById('registerForm').toggleAttribute('hidden');
        document.getElementById('to-register').toggleAttribute('disabled');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 55, vars: 0, consts: [[1, "v8"], ["id", "main-div", 1, "row"], [1, "col-7"], [2, "color", "#4a148c"], ["src", "assets/spinner_logo.png", "height", "180", 1, "align-center"], ["id", "login-div", 1, "col-5"], [1, "toggleBox"], ["type", "button", "id", "to-login", "disabled", "", 1, "toggle-btn", 3, "click"], ["type", "button", "id", "to-register", 1, "toggle-btn", 3, "click"], ["name", "loginForm", "id", "loginForm"], ["for", "username"], ["id", "username-login", "type", "text", "name", "username", "placeholder", "Username", "required", "required"], ["for", "passwd"], ["id", "password-login", "type", "password", "name", "password", "placeholder", "Password", "required", "required"], ["id", "loginbtn", "type", "button", 1, "btn", "btn-primary", "btn-block", "btn-large", 3, "click"], ["name", "registerForm", "id", "registerForm", "hidden", ""], ["for", "firstName"], ["id", "firstName", "type", "text", "name", "firstName", "placeholder", "First Name", "required", "required"], ["for", "lastName"], ["id", "lastName", "type", "text", "name", "lastName", "placeholder", "Last Name", "required", "required"], ["id", "username-reg", "type", "text", "name", "username", "placeholder", "Username", "required", "required"], ["id", "password-reg", "type", "password", "name", "password", "placeholder", "Password", "required", "required"], ["id", "registerBtn", "type", "button", 1, "btn", "btn-primary", "btn-block", "btn-large", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover new music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Show off your favorite songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Join communities of like-minded listeners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_15_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_17_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_30_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "First Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Last Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_53_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [_c0, _c0] });


/***/ }),

/***/ "6pr8":
/*!*********************************************!*\
  !*** ./src/app/models/question-response.ts ***!
  \*********************************************/
/*! exports provided: QuestionResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionResponse", function() { return QuestionResponse; });
class QuestionResponse {
}


/***/ }),

/***/ "7ReF":
/*!******************************************************!*\
  !*** ./src/app/search-item/search-item.component.ts ***!
  \******************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");



function SearchItemComponent_mdb_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.track.album.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.track.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.track.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.track.artists[0].name);
} }
class SearchItemComponent {
    constructor() { }
    ngOnInit() { }
}
SearchItemComponent.ɵfac = function SearchItemComponent_Factory(t) { return new (t || SearchItemComponent)(); };
SearchItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchItemComponent, selectors: [["app-search-item"]], inputs: { track: "track" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "searchItemDivChild"], [1, "searchResultImg", 3, "src", "alt"], [1, "font-weight-bold", 2, "color", "white"], [2, "color", "#DCDCDC"]], template: function SearchItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchItemComponent_mdb_card_0_Template, 9, 4, "mdb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.track);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"]], styles: [".searchResultImg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.searchItemDiv[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    padding: 20px;\r\n}\r\n\r\n.searchItemDivChild[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 325px;\r\n    padding: 20px;\r\n    background-color:#191414;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUNBLFVBQVUiLCJmaWxlIjoic2VhcmNoLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hSZXN1bHRJbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2hJdGVtRGl2IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoSXRlbURpdkNoaWxkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzI1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxNDE0O1xyXG59XHJcbi8qIzE5MTQxNCovIl19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spotify.service */ "nNar");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.component */ "1W4x");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function HomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(userServ, spotifyServ) {
        this.userServ = userServ;
        this.spotifyServ = spotifyServ;
    }
    ngOnInit() {
        this.spotifyServ.getKey().subscribe(resp => {
            this.spotifyServ.token = resp;
        });
        this.userServ.getLoggedInUser();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_section_0_Template, 3, 0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_section_1_Template, 3, 0, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userServ.loggedInUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userServ.loggedInUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


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

/***/ "DYAN":
/*!**************************************************!*\
  !*** ./src/app/join-band/join-band.component.ts ***!
  \**************************************************/
/*! exports provided: JoinBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinBandComponent", function() { return JoinBandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_get_bands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/get-bands.service */ "Mwdy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");





function JoinBandComponent_mdb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinBandComponent_mdb_card_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const d_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.joinBand(d_r1); })("click", function JoinBandComponent_mdb_card_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r2.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Join the Band");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinBandComponent_mdb_card_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r2.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mdb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinBandComponent_mdb_card_0_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r2.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Congrads, you just joined the group ", d_r1.name, " ");
} }
class JoinBandComponent {
    constructor(bandData, http) {
        this.bandData = bandData;
        this.http = http;
        this.baseUrl = 'http://localhost:8080/Spinner';
    }
    ngOnInit() {
        this.bandData.getBands().subscribe((result) => {
            console.log(result);
            this.data = result;
        });
    }
    joinBand(b) {
        let url = this.baseUrl + "/bands/join/" + b.id;
        this.http.put(url, {}, { withCredentials: true }).subscribe((result) => {
            console.log(result);
        });
    }
}
JoinBandComponent.ɵfac = function JoinBandComponent_Factory(t) { return new (t || JoinBandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_bands_service__WEBPACK_IMPORTED_MODULE_1__["GetBandsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
JoinBandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinBandComponent, selectors: [["app-join-band"]], decls: 1, vars: 1, consts: [["style", "width:80%; margin:0 auto; background-color:#aa00ff", 4, "ngFor", "ngForOf"], [2, "width", "80%", "margin", "0 auto", "background-color", "#aa00ff"], ["type", "button", "mdbBtn", "", "color", "default", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 1, "btn", "btn-dark", 3, "click"], ["mdbModal", "", "id", "frameModalTop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", "top"], ["frame", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-notify", "modal-success"], [1, "modal-content"], [1, "modal-header"], [1, "heading", "lead"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "white-text"], [1, "modal-body"], [1, "text-center"], ["fas", "", "icon", "check", "size", "4x", 1, "mb-3", "animated", "rotateIn"], [1, "modal-footer", "justify-content-center"], ["type", "button", "mdbBtn", "", "color", "success", "outline", "true", "mdbWavesEffect", "", 1, "waves-effect", 3, "click"]], template: function JoinBandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JoinBandComponent_mdb_card_0_Template, 25, 2, "mdb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLWJhbmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/post */ "FNOU");
/* harmony import */ var _models_song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/song */ "mt4W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/url.service */ "jOSP");






class PostService {
    constructor(http, urlServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.baseUrl = this.urlServ.baseUrl + '/posts';
    }
    createPost(tracks, title, band) {
        let post = new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"];
        post.id = 0;
        post.likes = 0;
        post.title = title;
        let postSongs = new Array();
        tracks.forEach(function (track) {
            let song = new _models_song__WEBPACK_IMPORTED_MODULE_1__["Song"];
            song.id = 0;
            song.songKey = track.id;
            postSongs.push(song);
        });
        post.songs = postSongs;
        post.band = band;
        post.postTime = new Date();
        this.http.post(this.baseUrl, post, { withCredentials: true }).subscribe();
    }
    getBandPosts(bandId) {
        let url = this.baseUrl + '/band/' + bandId;
        return this.http.get(url, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp));
    }
    getPostsBySong(track) {
        let url = this.baseUrl + '/song/' + track.id;
        return this.http.get(url, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp));
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FNOU":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
}


/***/ }),

/***/ "HFTx":
/*!**************************************************!*\
  !*** ./src/app/post-item/post-item.component.ts ***!
  \**************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_get_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/get-track.service */ "rMJM");
/* harmony import */ var _services_comment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/comment-service.service */ "I1X1");
/* harmony import */ var _services_likes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/likes.service */ "PDvO");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-item/search-item.component */ "7ReF");









function PostItemComponent_app_search_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-item", 17);
} if (rf & 2) {
    const track_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r4);
} }
function PostItemComponent_tr_23_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostItemComponent_tr_23_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const comment_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editComment(comment_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostItemComponent_tr_23_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostItemComponent_tr_23_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const comment_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteComment(comment_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostItemComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostItemComponent_tr_23_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const comment_r5 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addLikeComment(comment_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mdb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostItemComponent_tr_23_button_5_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostItemComponent_tr_23_button_6_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r5.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r5.likes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r5.user_id == ctx_r1.userServ.loggedInUser.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r5.user_id == ctx_r1.userServ.loggedInUser.id);
} }
class PostItemComponent {
    constructor(getTrackServ, commentServ, likesServ, userServ) {
        this.getTrackServ = getTrackServ;
        this.commentServ = commentServ;
        this.likesServ = likesServ;
        this.userServ = userServ;
        this.postTracks = new Array();
    }
    addComment(newComment) {
        this.commentServ.add(this.post.id, newComment).subscribe(response => { this.post.comments.push(response); });
    }
    editComment(comment) {
    }
    deleteComment(comment) {
        let index = this.post.comments.indexOf(comment);
        console.log(index);
        if (index != -1) {
            this.commentServ.delete(comment).subscribe();
            this.post.comments.splice(index, 1);
        }
    }
    addLike() {
        //     var found = false;
        // for(var i = 0; i < this.userServ.loggedInUser.likedPosts.length; i++) {
        //     if (this.userServ.loggedInUser.likedPosts[i].title == this.post.title) {
        //         found = true;
        //         break;
        //     }
        // }
        if (!this.userServ.loggedInUser.likedPosts.some(p => p.id === this.post.id)) {
            this.post.likes++;
        }
        else {
            alert("you already liked this post");
        }
        this.likesServ.addLike(this.post.id).subscribe(response => { this.post = response; });
    }
    addLikeComment(comment) {
        if (!this.userServ.loggedInUser.likedComments.some(c => c.id === comment.id)) {
            comment.likes++;
        }
        else {
            alert("you already liked this comment");
        }
        this.likesServ.addLikeComment(comment.id).subscribe(response => { this.post.comments; });
    }
    ngOnInit() {
        for (let i = 0; i < this.post.songs.length; i++) {
            let track;
            this.getTrackServ.getTrack(this.post.songs[i].songKey).subscribe(resp => {
                track = resp;
                this.postTracks.push(track);
            });
        }
    }
}
PostItemComponent.ɵfac = function PostItemComponent_Factory(t) { return new (t || PostItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_track_service__WEBPACK_IMPORTED_MODULE_1__["GetTrackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comment_service_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_likes_service__WEBPACK_IMPORTED_MODULE_3__["LikesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
PostItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostItemComponent, selectors: [["app-post-item"]], inputs: { post: "post" }, decls: 30, vars: 5, consts: [[1, "mb-4", 2, "background-color", "#e0e0e0"], [1, "row"], [1, "col-10"], [1, "font-weight-bold"], [1, "col-2", "my-auto", "mx-auto", "text-center"], [3, "click"], ["far", "", "icon", "heart", "size", "lg", "aria-hidden", "true", 1, "text-dark"], [2, "color", "black"], [1, "card-deck"], [3, "track", 4, "ngFor", "ngForOf"], [1, "comment-box"], [1, "comment-table"], [4, "ngFor", "ngForOf"], ["newCommentForm", ""], ["name", "new-comment", "type", "text", "placeholder", "Comment here...", 1, "comment-input"], ["newComment", ""], ["type", "submit", 3, "click"], [3, "track"], ["far", "", "icon", "heart", "size", "1x", "aria-hidden", "true", 1, "red-text"], ["type", "button", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"]], template: function PostItemComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostItemComponent_Template_a_click_10_listener() { return ctx.addLike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mdb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PostItemComponent_app_search_item_16_Template, 1, 1, "app-search-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostItemComponent_tr_23_Template, 7, 4, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostItemComponent_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); ctx.addComment(_r3.value); return _r2.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Posted: ", ctx.post.postTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.likes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postTracks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.post.comments);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_8__["SearchItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "I1X1":
/*!*****************************************************!*\
  !*** ./src/app/services/comment-service.service.ts ***!
  \*****************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_post_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/post-comment */ "NvbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "jOSP");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "qfBg");






class CommentService {
    constructor(http, urlServ, userServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.userServ = userServ;
        this.baseUrl = this.urlServ.baseUrl;
    }
    add(postId, newCommentString) {
        let newComment = new _models_post_comment__WEBPACK_IMPORTED_MODULE_1__["PostComment"]();
        newComment.comment = newCommentString;
        newComment.user_id = this.userServ.loggedInUser.id;
        return this.http.post(this.baseUrl + '/posts/comment/' + postId, newComment, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
    delete(comment) {
        return this.http.delete(this.baseUrl + '/posts/comment/' + comment.id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KxY0":
/*!**************************************************!*\
  !*** ./src/app/band-view/band-view.component.ts ***!
  \**************************************************/
/*! exports provided: BandViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandViewComponent", function() { return BandViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../band/band.component */ "ckrF");
/* harmony import */ var _join_band_join_band_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../join-band/join-band.component */ "DYAN");



class BandViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
BandViewComponent.ɵfac = function BandViewComponent_Factory(t) { return new (t || BandViewComponent)(); };
BandViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandViewComponent, selectors: [["app-band-view"]], decls: 2, vars: 0, template: function BandViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-join-band");
    } }, directives: [_band_band_component__WEBPACK_IMPORTED_MODULE_1__["BandComponent"], _join_band_join_band_component__WEBPACK_IMPORTED_MODULE_2__["JoinBandComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5kLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Mwdy":
/*!***********************************************!*\
  !*** ./src/app/services/get-bands.service.ts ***!
  \***********************************************/
/*! exports provided: GetBandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBandsService", function() { return GetBandsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url.service */ "jOSP");



class GetBandsService {
    constructor(http, urlServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.url = this.urlServ.baseUrl + '/bands';
    }
    getBands() {
        return this.http.get(this.url, { withCredentials: true });
    }
}
GetBandsService.ɵfac = function GetBandsService_Factory(t) { return new (t || GetBandsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"])); };
GetBandsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetBandsService, factory: GetBandsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NvbW":
/*!****************************************!*\
  !*** ./src/app/models/post-comment.ts ***!
  \****************************************/
/*! exports provided: PostComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComment", function() { return PostComment; });
class PostComment {
    constructor() {
        this.commentTime = new Date();
        this.comment = "";
        this.likes = 0;
    }
}


/***/ }),

/***/ "Os8L":
/*!****************************************************!*\
  !*** ./src/app/services/daily-question.service.ts ***!
  \****************************************************/
/*! exports provided: DailyQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyQuestionService", function() { return DailyQuestionService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_question_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/question-response */ "6pr8");
/* harmony import */ var _models_song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/song */ "mt4W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url.service */ "jOSP");






class DailyQuestionService {
    constructor(http, urlServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.baseUrl = this.urlServ.baseUrl + '/dailyquestions';
    }
    getDailyQuestion() {
        return this.http.get(this.baseUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => resp));
    }
    createAnswer(track) {
        let response = new _models_question_response__WEBPACK_IMPORTED_MODULE_1__["QuestionResponse"];
        response.id = 0;
        let song = new _models_song__WEBPACK_IMPORTED_MODULE_2__["Song"];
        song.id = 0;
        song.songKey = track.id;
        response.song = song;
        response.likes = 0;
        response.questionDate = new Date();
        return this.http.post(this.baseUrl, response, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => resp));
    }
}
DailyQuestionService.ɵfac = function DailyQuestionService_Factory(t) { return new (t || DailyQuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
DailyQuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DailyQuestionService, factory: DailyQuestionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PDvO":
/*!*******************************************!*\
  !*** ./src/app/services/likes.service.ts ***!
  \*******************************************/
/*! exports provided: LikesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesService", function() { return LikesService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url.service */ "jOSP");




class LikesService {
    constructor(http, urlServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.baseUrl = this.urlServ.baseUrl;
    }
    addLike(postId) {
        return this.http.put(this.baseUrl + '/posts/likes/' + postId, {}, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
    addLikeComment(postCommentId) {
        return this.http.put(this.baseUrl + '/posts/comments/' + postCommentId, {}, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
    addLikeQR(respId) {
        return this.http.put(this.baseUrl + '/dailyquestions/responses/likes/' + respId, {}, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
}
LikesService.ɵfac = function LikesService_Factory(t) { return new (t || LikesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"])); };
LikesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LikesService, factory: LikesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _daily_question_daily_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../daily-question/daily-question.component */ "wTQV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _band_snapshot_band_snapshot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../band-snapshot/band-snapshot.component */ "sRCD");





function DashboardComponent_app_band_snapshot_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-band-snapshot", 6);
} if (rf & 2) {
    const band_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("band", band_r1);
} }
class DashboardComponent {
    constructor(userServ) {
        this.userServ = userServ;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 20, vars: 1, consts: [[1, "row", 2, "background-color", "#4a148c"], [1, "col-3", 2, "width", "auto"], [1, "col-9"], [2, "margin-left", "8%", "width", "90%"], [2, "color", "white"], [3, "band", 4, "ngFor", "ngForOf"], [3, "band"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-daily-question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Bands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_app_band_snapshot_19_Template, 1, 1, "app-band-snapshot", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userServ.loggedInUser.bands);
    } }, directives: [_daily_question_daily_question_component__WEBPACK_IMPORTED_MODULE_2__["DailyQuestionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _band_snapshot_band_snapshot_component__WEBPACK_IMPORTED_MODULE_4__["BandSnapshotComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");


class AppComponent {
    constructor() {
        this.title = 'Spinner';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(username, password, firstName, lastName) {
        this.id = null;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    deserialize(input) {
        Object.assign(this, input);
        return this;
    }
}


/***/ }),

/***/ "Ty5e":
/*!******************************************************!*\
  !*** ./src/app/comment-box/comment-box.component.ts ***!
  \******************************************************/
/*! exports provided: CommentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBoxComponent", function() { return CommentBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommentBoxComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommentBoxComponent.ɵfac = function CommentBoxComponent_Factory(t) { return new (t || CommentBoxComponent)(); };
CommentBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentBoxComponent, selectors: [["app-comment-box"]], decls: 2, vars: 0, template: function CommentBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "comment-box works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LWJveC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-item/search-item.component */ "7ReF");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _band_post_band_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./band-post/band-post.component */ "rqJr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./band/band.component */ "ckrF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _join_band_join_band_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./join-band/join-band.component */ "DYAN");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post-item/post-item.component */ "HFTx");
/* harmony import */ var _band_snapshot_band_snapshot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./band-snapshot/band-snapshot.component */ "sRCD");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _daily_question_daily_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./daily-question/daily-question.component */ "wTQV");
/* harmony import */ var _comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comment-box/comment-box.component */ "Ty5e");
/* harmony import */ var _response_item_response_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./response-item/response-item.component */ "wGBI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _band_view_band_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./band-view/band-view.component */ "KxY0");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _likedposts_likedposts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./likedposts/likedposts.component */ "cbDD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBBootstrapModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_4__["SearchItemComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _band_post_band_post_component__WEBPACK_IMPORTED_MODULE_7__["BandPostComponent"],
        _band_band_component__WEBPACK_IMPORTED_MODULE_9__["BandComponent"],
        _join_band_join_band_component__WEBPACK_IMPORTED_MODULE_11__["JoinBandComponent"],
        _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_12__["PostItemComponent"],
        _band_snapshot_band_snapshot_component__WEBPACK_IMPORTED_MODULE_13__["BandSnapshotComponent"],
        _daily_question_daily_question_component__WEBPACK_IMPORTED_MODULE_15__["DailyQuestionComponent"],
        _comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_16__["CommentBoxComponent"],
        _response_item_response_item_component__WEBPACK_IMPORTED_MODULE_17__["ResponseItemComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
        _band_view_band_view_component__WEBPACK_IMPORTED_MODULE_20__["BandViewComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
        _likedposts_likedposts_component__WEBPACK_IMPORTED_MODULE_22__["LikedpostsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "cbDD":
/*!****************************************************!*\
  !*** ./src/app/likedposts/likedposts.component.ts ***!
  \****************************************************/
/*! exports provided: LikedpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedpostsComponent", function() { return LikedpostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");




function LikedpostsComponent_mdb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikedpostsComponent_mdb_card_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addLike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mdb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Posted: ", post_r1.postTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.likes);
} }
class LikedpostsComponent {
    constructor(userServ) {
        this.userServ = userServ;
    }
    ngOnInit() {
    }
}
LikedpostsComponent.ɵfac = function LikedpostsComponent_Factory(t) { return new (t || LikedpostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
LikedpostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikedpostsComponent, selectors: [["app-likedposts"]], decls: 1, vars: 1, consts: [["class", "mb-4", "style", "background-color:#e0e0e0; margin-top: 80px;", 4, "ngFor", "ngForOf"], [1, "mb-4", 2, "background-color", "#e0e0e0", "margin-top", "80px"], [1, "row"], [1, "col-10"], [1, "font-weight-bold"], [1, "col-2", "my-auto", "mx-auto", "text-center"], [3, "click"], ["far", "", "icon", "heart", "size", "lg", "aria-hidden", "true", 1, "text-dark"], [2, "color", "black"]], template: function LikedpostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LikedpostsComponent_mdb_card_0_Template, 15, 3, "mdb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userServ.loggedInUser.likedPosts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FarDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWtlZHBvc3RzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ckrF":
/*!****************************************!*\
  !*** ./src/app/band/band.component.ts ***!
  \****************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/url.service */ "jOSP");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class BandComponent {
    constructor(http, urlServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.baseUrl = this.urlServ.baseUrl + 'Spinner';
    }
    ngOnInit() {
    }
    createBand() {
        let url = this.baseUrl + "/bands";
        this.http.post(url, {
            name: this.name
        }).subscribe((result) => {
            console.log(result);
        });
    }
}
BandComponent.ɵfac = function BandComponent_Factory(t) { return new (t || BandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"])); };
BandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandComponent, selectors: [["app-band"]], decls: 22, vars: 1, consts: [[2, "width", "80%", "margin", "0 auto"], [1, "card-body"], ["type", "button", "mdbBtn", "", "color", "default", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 1, "btn", "btn-dark", 3, "click"], ["mdbModal", "", "id", "frameModalTop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", "top"], ["frame", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-notify", "modal-success"], [1, "modal-content"], [1, "modal-header"], [1, "heading", "lead"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "white-text"], [1, "md-form"], ["type", "text", "placeholder", "how would you like to name the new band?", "id", "form79textarea", "rows", "2", "mdbInput", "", 1, "md-textarea", "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "justify-content-center"], ["type", "button", "mdbBtn", "", "color", "success", "mdbWavesEffect", "", 1, "waves-effect", 3, "click"], ["far", "", "icon", "gem", 1, "ml-1"], ["type", "button", "mdbBtn", "", "color", "success", "outline", "true", "mdbWavesEffect", "", 1, "waves-effect", 3, "click"]], template: function BandComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a new Band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create a new band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BandComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandComponent_Template_a_click_17_listener() { return ctx.createBand(); })("click", function BandComponent_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create band ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mdb-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandComponent_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "No, thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FarDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5kLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "jOSP":
/*!*****************************************!*\
  !*** ./src/app/services/url.service.ts ***!
  \*****************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UrlService {
    constructor() {
        //this.baseUrl = 'http://localhost:8080/Spinner';
        this.baseUrl = 'http://ec2-3-139-86-183.us-east-2.compute.amazonaws.com:8081/Spinner';
    }
}
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(); };
UrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UrlService, factory: UrlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "l3hs");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-item/search-item.component */ "7ReF");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-item/post-item.component */ "HFTx");










function NavbarComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_25_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.userServ.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r1.userServ.loggedInUser.firstName, "");
} }
function NavbarComponent_div_26_app_search_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_26_app_search_item_4_Template_app_search_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const track_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r8.searchTrack = track_r7; return ctx_r8.getPostsBySong(track_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r7);
} }
function NavbarComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_div_26_app_search_item_4_Template, 1, 1, "app-search-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tracks);
} }
function NavbarComponent_div_27_app_post_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-item", 26);
} if (rf & 2) {
    const post_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r11);
} }
function NavbarComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_div_27_app_post_item_4_Template, 1, 1, "app-post-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.searchPosts);
} }
class NavbarComponent {
    constructor(userServ, searchServ, postServ) {
        this.userServ = userServ;
        this.searchServ = searchServ;
        this.postServ = postServ;
        this.tracks = [];
        this.searchPosts = [];
    }
    ngOnInit() {
    }
    search(term) {
        if (!term || term == "") {
            this.tracks = [];
            return;
        }
        this.searchServ.getSearchResult(term).subscribe((data) => {
            this.tracks = data.tracks.items;
        }, (err) => {
            console.error(err.message);
        });
    }
    getPostsBySong(track) {
        this.tracks = [];
        this.postServ.getPostsBySong(track).subscribe(resp => {
            this.searchPosts = resp;
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 28, vars: 3, consts: [["SideClass", "navbar navbar-expand-lg grey lighten-2 fixed-top", 3, "containerInside"], ["routerLink", "dashboard", 1, "navbar-brand", "font-weight-bold", 2, "color", "#4a148c"], ["src", "assets/spinner_logo.png", "height", "50", 1, "d-inline-block", "align-middle"], ["mdbWavesEffect", "", 1, "form-inline", "waves-light"], [1, "md-form", "my-0"], ["type", "text", "placeholder", "Search For Posts By Song", 1, "form-control", "mr-sm-2", 3, "keyup", "keydown.backspace"], ["searchTerm", ""], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 2, "color", "#4a148c", 3, "click"], [1, "navbar-nav", "ml-auto"], ["routerLink", "likedposts", 1, "nav-link", "font-weight-bold", 2, "color", "#4a148c"], ["routerLink", "bands", "routerLinkActive", "active", 1, "nav-link", "font-weight-bold", 2, "color", "#4a148c"], [1, "navbar-nav", "ml-auto", "nav-flex-icons"], ["dropdown", "", 1, "nav-item", "avatar", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "z-depth-0"], ["class", "dropdown-menu dropdown-menu-right dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], ["class", "card-deck", "style", "position:absolute; top:4rem; left:10rem; right:37rem; background-color:rgba(224,224,224,0.75); z-index:100", 4, "ngIf"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "dropdown", "dropdown-primary"], ["mdbWavesEffect", "", "href", "#", 1, "dropdown-item", "waves-light"], ["mdbWavesEffect", "", "href", "#", 1, "dropdown-item", "waves-light", 3, "click"], [1, "card-deck", 2, "position", "absolute", "top", "4rem", "left", "10rem", "right", "37rem", "background-color", "rgba(224,224,224,0.75)", "z-index", "100"], [3, "track", "click", 4, "ngFor", "ngForOf"], [3, "track", "click"], [3, "post", 4, "ngFor", "ngForOf"], [3, "post"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Spinner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NavbarComponent_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.search(_r0.value); })("keydown.backspace", function NavbarComponent_Template_input_keydown_backspace_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() { return ctx.searchPosts = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My liked posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Join Bands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavbarComponent_div_25_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_div_26_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_div_27_Template, 7, 1, "div", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tracks.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchPosts.length > 0);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_8__["SearchItemComponent"], _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__["PostItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotify.service */ "nNar");



class SearchService {
    constructor(spotifyServ) {
        this.spotifyServ = spotifyServ;
    }
    getSearchResult(term) {
        const searchUrl = `search?q=${term}&type=track&limit=10`;
        let token = this.spotifyServ.getToken();
        return this.spotifyServ.getQuery(searchUrl, token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => resp));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mt4W":
/*!********************************!*\
  !*** ./src/app/models/song.ts ***!
  \********************************/
/*! exports provided: Song */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Song", function() { return Song; });
class Song {
}


/***/ }),

/***/ "nNar":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SpotifyService {
    constructor(http) {
        this.http = http;
    }
    getKey() {
        const url = 'https://accounts.spotify.com/api/token';
        const body = 'grant_type=client_credentials';
        let encoded = 'ZTNmM2U2NjE0NThkNDg1Njk4MmQwZTZlNWYwNjYwYjU6ZDFkMjdkMmRkNmM0NGE5Mjg2N2ZhMDMxY2U2M2Y5MDU=';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: `Basic ${encoded}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => resp));
    }
    getToken() {
        return this.token;
    }
    getQuery(query, token) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': 'Bearer ' + token.access_token
        });
        return this.http.get(url, { headers });
    }
}
SpotifyService.ɵfac = function SpotifyService_Factory(t) { return new (t || SpotifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SpotifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SpotifyService, factory: SpotifyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "jOSP");





class UserService {
    constructor(http, urlServ) {
        this.http = http;
        this.urlServ = urlServ;
        this.baseUrl = this.urlServ.baseUrl + '/user';
    }
    login() {
        let username = document.getElementById('username-login').value;
        let password = document.getElementById('password-login').value;
        document.getElementById('username-login').value = '';
        document.getElementById('password-login').value = '';
        let loggingUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](username, password, null, null);
        return this.http.post(this.urlServ.baseUrl + '/user/login', loggingUser, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
    register() {
        let username = document.getElementById('username-reg').value;
        let password = document.getElementById('password-reg').value;
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        document.getElementById('username-reg').value = '';
        document.getElementById('password-reg').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        let newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](username, password, firstName, lastName);
        return this.http.post(this.urlServ.baseUrl + '/user/register', newUser, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
    getLoggedInUser() {
        this.http.get(this.baseUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response)).subscribe(response => { this.loggedInUser = response; });
    }
    logout() {
        this.http.delete(this.baseUrl + '/login', { withCredentials: true });
        this.loggedInUser = null;
    }
    getUser() {
        return this.loggedInUser;
    }
    getUserById(id) {
        return this.http.get(this.baseUrl + '/' + id, { withCredentials: true });
    }
    updateUser(user) {
        return this.http.put(this.baseUrl + '/' + user.id, user, { withCredentials: true });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rMJM":
/*!***********************************************!*\
  !*** ./src/app/services/get-track.service.ts ***!
  \***********************************************/
/*! exports provided: GetTrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrackService", function() { return GetTrackService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotify.service */ "nNar");



class GetTrackService {
    constructor(spotifyServ) {
        this.spotifyServ = spotifyServ;
    }
    getTrack(trackId) {
        const getUrl = `tracks/${trackId}`;
        let token = this.spotifyServ.getToken();
        return this.spotifyServ.getQuery(getUrl, token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => resp));
    }
}
GetTrackService.ɵfac = function GetTrackService_Factory(t) { return new (t || GetTrackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"])); };
GetTrackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetTrackService, factory: GetTrackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rqJr":
/*!**************************************************!*\
  !*** ./src/app/band-post/band-post.component.ts ***!
  \**************************************************/
/*! exports provided: BandPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandPostComponent", function() { return BandPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ "l3hs");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-item/search-item.component */ "7ReF");








function BandPostComponent_ng_template_2_app_search_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPostComponent_ng_template_2_app_search_item_15_Template_app_search_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const track_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removeFromPost(track_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r7);
} }
function BandPostComponent_ng_template_2_div_20_app_search_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPostComponent_ng_template_2_div_20_app_search_item_1_Template_app_search_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const track_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.addToPost(track_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r11);
} }
function BandPostComponent_ng_template_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BandPostComponent_ng_template_2_div_20_app_search_item_1_Template, 1, 1, "app-search-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.searchTracks);
} }
function BandPostComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPostComponent_ng_template_2_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BandPostComponent_ng_template_2_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.postTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Songs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BandPostComponent_ng_template_2_app_search_item_15_Template, 1, 1, "app-search-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BandPostComponent_ng_template_2_Template_input_keyup_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.search(_r5.value); })("keydown.backspace", function BandPostComponent_ng_template_2_Template_input_keydown_backspace_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.search(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BandPostComponent_ng_template_2_div_20_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPostComponent_ng_template_2_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r19.createPost(); return _r3.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Create a new post in ", ctx_r1.band.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.postTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.postTracks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchTracks);
} }
class BandPostComponent {
    constructor(searchServ, postServ, modalServ) {
        this.searchServ = searchServ;
        this.postServ = postServ;
        this.modalServ = modalServ;
        this.postTracks = [];
        this.closePost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    search(term) {
        this.searchServ.getSearchResult(term).subscribe((data) => {
            this.searchTracks = data.tracks.items;
        }, (err) => {
            console.error(err.message);
        });
    }
    addToPost(track) {
        let isInPost = false;
        for (let i = 0; i < this.postTracks.length; i++) {
            if (this.postTracks[i].id == track.id) {
                isInPost = true;
            }
        }
        if (!isInPost) {
            this.postTracks.push(track);
        }
    }
    removeFromPost(track) {
        for (let i = 0; i < this.postTracks.length; i++) {
            if (this.postTracks[i].id == track.id) {
                this.postTracks.splice(i, 1);
                break;
            }
        }
    }
    createPost() {
        this.postServ.createPost(this.postTracks, this.postTitle, this.band);
        this.modalServ.dismissAll();
        this.closePost.emit();
    }
    openModal(content) {
        this.modalServ.open(content, { centered: true, size: 'lg' });
    }
}
BandPostComponent.ɵfac = function BandPostComponent_Factory(t) { return new (t || BandPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
BandPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandPostComponent, selectors: [["app-band-post"]], inputs: { band: "band" }, outputs: { closePost: "closePost" }, decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "font-weight-bold", 2, "border-radius", "20px", "color", "#4a148c", 3, "click"], ["newPostContent", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["postForm", "ngForm"], ["type", "text", "id", "postTitle", "name", "postTitle", "placeholder", "Please enter a title for your post", 3, "ngModel", "ngModelChange"], [1, "card-deck"], [3, "track", "click", 4, "ngFor", "ngForOf"], ["type", "text", "id", "inputSearch", "placeholder", "Search for a song", 3, "keyup", "keydown.backspace"], ["searchTerm", ""], ["class", "card-deck", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 3, "click"], [3, "track", "click"]], template: function BandPostComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPostComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Post\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BandPostComponent_ng_template_2_Template, 24, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_6__["SearchItemComponent"]], styles: [".postTrackDiv[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmQtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJiYW5kLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0VHJhY2tEaXYge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "sRCD":
/*!**********************************************************!*\
  !*** ./src/app/band-snapshot/band-snapshot.component.ts ***!
  \**********************************************************/
/*! exports provided: BandSnapshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandSnapshotComponent", function() { return BandSnapshotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _band_post_band_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../band-post/band-post.component */ "rqJr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-item/post-item.component */ "HFTx");






function BandSnapshotComponent_app_post_item_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-item", 14);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
} }
class BandSnapshotComponent {
    constructor(postServ) {
        this.postServ = postServ;
    }
    ngOnInit() {
        this.isPost = false;
        this.postServ.getBandPosts(this.band.id).subscribe(resp => {
            this.posts = resp;
            this.sortByLikes();
            for (let post of this.posts) {
                post.postTime = new Date(post.postTime);
            }
        });
    }
    newPost() {
        this.postServ.getBandPosts(this.band.id).subscribe(resp => {
            this.posts = resp;
        });
    }
    sortByLikes() {
        this.posts.sort((a, b) => a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0);
    }
    sortByDate() {
        this.posts.sort((a, b) => a.postTime.getTime() > b.postTime.getTime() ? -1 : a.postTime.getTime() < b.postTime.getTime() ? 1 : 0);
    }
}
BandSnapshotComponent.ɵfac = function BandSnapshotComponent_Factory(t) { return new (t || BandSnapshotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
BandSnapshotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandSnapshotComponent, selectors: [["app-band-snapshot"]], inputs: { band: "band" }, decls: 21, vars: 4, consts: [[1, "mb-4", 2, "width", "85%", "margin", "0 auto"], ["SideClass", "navbar navbar-expand-lg grey lighten-2", 3, "containerInside"], [1, "navbar-brand", 2, "color", "#4a148c"], [1, "font-weight-bold"], [1, "navbar-nav", "mr-auto"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", 1, "nav-link", "dropdown-toggle", "waves-light", 2, "color", "#4a148c"], [1, "dropdown-menu", "dropdown-primary"], [1, "dropdown-item", 3, "click"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [3, "band", "closePost"], [1, "card-body"], [3, "post", 4, "ngFor", "ngForOf"], [3, "post"]], template: function BandSnapshotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sort Posts By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandSnapshotComponent_Template_a_click_12_listener() { return ctx.sortByLikes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandSnapshotComponent_Template_a_click_14_listener() { return ctx.sortByDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Post Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-band-post", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closePost", function BandSnapshotComponent_Template_app_band_post_closePost_18_listener() { return ctx.newPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BandSnapshotComponent_app_post_item_20_Template, 1, 1, "app-post-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.band.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("band", ctx.band);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], _band_post_band_post_component__WEBPACK_IMPORTED_MODULE_3__["BandPostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_5__["PostItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5kLXNuYXBzaG90LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/spotify.service */ "nNar");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "l3hs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-item/search-item.component */ "7ReF");





function SearchComponent_div_3_app_search_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-item", 4);
} if (rf & 2) {
    const track_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r3);
} }
function SearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_3_app_search_item_1_Template, 1, 1, "app-search-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tracks);
} }
class SearchComponent {
    constructor(spotifyServ, searchServ) {
        this.spotifyServ = spotifyServ;
        this.searchServ = searchServ;
        this.tracks = [];
    }
    ngOnInit() { }
    search(term) {
        this.searchServ.getSearchResult(term).subscribe((data) => {
            this.tracks = data.tracks.items;
        }, (err) => {
            console.error(err.message);
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 1, consts: [["type", "text", "id", "inputSearch", "placeholder", "Search for a song", 3, "keyup", "keydown.backspace"], ["searchTerm", ""], [4, "ngIf"], [3, "track", 4, "ngFor", "ngForOf"], [3, "track"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.search(_r0.value); })("keydown.backspace", function SearchComponent_Template_input_keydown_backspace_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_3_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tracks.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_4__["SearchItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _band_view_band_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./band-view/band-view.component */ "KxY0");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _likedposts_likedposts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likedposts/likedposts.component */ "cbDD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'bands',
        component: _band_view_band_view_component__WEBPACK_IMPORTED_MODULE_1__["BandViewComponent"]
    },
    {
        path: 'likedposts',
        component: _likedposts_likedposts_component__WEBPACK_IMPORTED_MODULE_3__["LikedpostsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wGBI":
/*!**********************************************************!*\
  !*** ./src/app/response-item/response-item.component.ts ***!
  \**********************************************************/
/*! exports provided: ResponseItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseItemComponent", function() { return ResponseItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_get_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/get-track.service */ "rMJM");
/* harmony import */ var _services_likes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/likes.service */ "PDvO");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");






function ResponseItemComponent_mdb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mdb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponseItemComponent_mdb_card_0_Template_mdb_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.addLikeQuestionResp(ctx_r1.response); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.track.album.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.track.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.track.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.track.artists[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.response.likes);
} }
class ResponseItemComponent {
    constructor(getTrackServ, likesServ, userServ) {
        this.getTrackServ = getTrackServ;
        this.likesServ = likesServ;
        this.userServ = userServ;
    }
    ngOnInit() {
        this.getTrackServ.getTrack(this.response.song.songKey).subscribe(resp => {
            this.track = resp;
        });
    }
    addLikeQuestionResp(response) {
        if (!this.userServ.loggedInUser.likedQotdResponses.some(qr => qr.id === response.id)) {
            response.likes++;
        }
        else {
            alert("you already liked this comment");
        }
        this.likesServ.addLikeQR(this.response.id).subscribe(response => { this.response = response; });
    }
}
ResponseItemComponent.ɵfac = function ResponseItemComponent_Factory(t) { return new (t || ResponseItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_track_service__WEBPACK_IMPORTED_MODULE_1__["GetTrackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_likes_service__WEBPACK_IMPORTED_MODULE_2__["LikesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
ResponseItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponseItemComponent, selectors: [["app-response-item"]], inputs: { response: "response" }, decls: 1, vars: 1, consts: [["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [1, "row", 2, "background-color", "rgba(25,20,20,1)"], [1, "col-4"], [1, "searchResultImg", 3, "src", "alt"], [1, "col-6"], [1, "font-weight-bold", 2, "color", "white"], [2, "color", "#DCDCDC"], [1, "col-2", "my-auto", "mx-auto", "text-center"], ["far", "", "icon", "heart", "size", "2x", "aria-hidden", "true", 1, "white-text", 3, "click"], [2, "color", "white"]], template: function ResponseItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResponseItemComponent_mdb_card_0_Template, 19, 5, "mdb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.track);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FarDirective"]], styles: [".searchResultImg[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InJlc3BvbnNlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hSZXN1bHRJbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "wTQV":
/*!************************************************************!*\
  !*** ./src/app/daily-question/daily-question.component.ts ***!
  \************************************************************/
/*! exports provided: DailyQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyQuestionComponent", function() { return DailyQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_daily_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/daily-question.service */ "Os8L");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service */ "l3hs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _response_item_response_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../response-item/response-item.component */ "wGBI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search-item/search-item.component */ "7ReF");










function DailyQuestionComponent_div_0_app_response_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-response-item", 9);
} if (rf & 2) {
    const response_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("response", response_r4);
} }
function DailyQuestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Question Of The Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DailyQuestionComponent_div_0_app_response_item_12_Template, 1, 1, "app-response-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DailyQuestionComponent_div_0_Template_ngb_pagination_pageChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyQuestionComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r7.openModal(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Add a Response ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.questionOtd.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 5, ctx_r0.questionOtd.responses, (ctx_r0.page - 1) * ctx_r0.pageSize, ctx_r0.page * ctx_r0.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx_r0.page)("pageSize", ctx_r0.pageSize)("collectionSize", ctx_r0.questionOtd.responses.length);
} }
function DailyQuestionComponent_ng_template_1_div_16_app_search_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyQuestionComponent_ng_template_1_div_16_app_search_item_1_Template_app_search_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const track_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.addToResponse(track_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r12);
} }
function DailyQuestionComponent_ng_template_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyQuestionComponent_ng_template_1_div_16_app_search_item_1_Template, 1, 1, "app-search-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.searchTracks);
} }
function DailyQuestionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Respond to the Question of the Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyQuestionComponent_ng_template_1_Template_button_click_3_listener() { const modal_r8 = ctx.$implicit; return modal_r8.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-search-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DailyQuestionComponent_ng_template_1_Template_input_keyup_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.search(_r9.value); })("keydown.backspace", function DailyQuestionComponent_ng_template_1_Template_input_keydown_backspace_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.search(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DailyQuestionComponent_ng_template_1_div_16_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyQuestionComponent_ng_template_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.createAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", ctx_r2.responseTrack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchTracks);
} }
class DailyQuestionComponent {
    constructor(http, dqServ, searchServ, modalServ) {
        this.http = http;
        this.dqServ = dqServ;
        this.searchServ = searchServ;
        this.modalServ = modalServ;
        this.page = 1;
        this.pageSize = 3;
    }
    ngOnInit() {
        this.dqServ.getDailyQuestion().subscribe(resp => {
            this.questionOtd = resp;
            this.questionOtd.responses.sort((a, b) => a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0);
        });
    }
    search(term) {
        this.searchServ.getSearchResult(term).subscribe((data) => {
            this.searchTracks = data.tracks.items;
        }, (err) => {
            console.error(err.message);
        });
    }
    addToResponse(track) {
        this.responseTrack = track;
        this.searchTracks = [];
    }
    createAnswer() {
        this.dqServ.createAnswer(this.responseTrack).subscribe(resp => {
            this.questionOtd.responses.push(resp);
        });
        this.modalServ.dismissAll();
    }
    openModal(content) {
        this.modalServ.open(content, { centered: true, size: 'lg' });
    }
}
DailyQuestionComponent.ɵfac = function DailyQuestionComponent_Factory(t) { return new (t || DailyQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_daily_question_service__WEBPACK_IMPORTED_MODULE_2__["DailyQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
DailyQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyQuestionComponent, selectors: [["app-daily-question"]], decls: 3, vars: 1, consts: [["class", "position-fixed", "style", "width:30%;", 4, "ngIf"], ["newResponse", ""], [1, "position-fixed", 2, "width", "30%"], [2, "width", "80%", "margin", "0 auto", "margin-left", "4rem", "background-color", "#e0e0e0"], [1, "card-title", 2, "color", "#4a148c"], [3, "response", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [3, "page", "pageSize", "collectionSize", "pageChange"], ["type", "button", 1, "btn", "btn-dark", 2, "background-color", "#4a148c", 3, "click"], [3, "response"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card-deck"], [3, "track"], ["type", "text", "id", "inputSearch", "placeholder", "Search for a song", 3, "keyup", "keydown.backspace"], ["searchTerm", ""], ["class", "card-deck", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 3, "click"], [3, "track", "click", 4, "ngFor", "ngForOf"], [3, "track", "click"]], template: function DailyQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DailyQuestionComponent_div_0_Template, 19, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyQuestionComponent_ng_template_1_Template, 20, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionOtd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _response_item_response_item_component__WEBPACK_IMPORTED_MODULE_7__["ResponseItemComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__["SearchItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["ngb-pagination[_ngcontent-%COMP%]     .page-item.active .page-link {\r\n    background-color: #4a148c;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoiZGFpbHktcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1wYWdpbmF0aW9uIDo6bmctZGVlcCAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTE0OGM7XHJcbiAgfSJdfQ== */"] });


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