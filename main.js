(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__form-text",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__form-text_invalid",errorClass:"popup__error-message_visible"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}var o=function(){function t(e,n,o,r,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=e,this._cardData=n,this._cardTemplate=o,this._handleCardClick=r,this._openPopupDelete=i,this._handleLikeClick=u,this._cardElement=this._cardTemplate.content.querySelector(".card").cloneNode(!0),this._buttonLike=this._cardElement.querySelector(".card__like"),this.handleDelete=this.handleDelete.bind(this)}var e,o;return e=t,(o=[{key:"_generateCardElement",value:function(){this._cardElement.querySelector(".card__text").textContent=this._cardData.name,this._cardImage=this._cardElement.querySelector(".card__image"),this._cardImage.src=this._cardData.link,this._cardImage.alt=this._cardData.name}},{key:"handleDelete",value:function(){this._cardElement.remove()}},{key:"_handleLike",value:function(){this._buttonLike.classList.toggle("card__like_active")}},{key:"setLikeNumber",value:function(t){this._cardElement.querySelector(".card__like-number").textContent=t.likes.length}},{key:"isLike",value:function(){var t=this;Object.values(this._cardData.likes).forEach((function(e){Object.values(e).includes(t._userId)&&t._handleLike()}))}},{key:"_setListeners",value:function(){var t=this,e=this._cardElement.querySelector(".card__delete");this._userId==this._cardData.owner._id?(console.log("мой пост"),e.addEventListener("click",(function(){t._openPopupDelete()}))):e.remove(),this._buttonLike.addEventListener("click",(function(){t._handleLikeClick(),t._handleLike()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._cardData)}))}},{key:"createCardElement",value:function(){return this._generateCardElement(),this._setListeners(),this.setLikeNumber(this._cardData),this.isLike(),this._cardElement}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();const r=o;function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,l(o.key),o)}}function a(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var s=a((function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_setInputValidState",(function(t,e){t.classList.remove(o._inputErrorClass),e.classList.remove(o._errorClass),e.textContent=""})),c(this,"_setInputInvalidState",(function(t,e){t.classList.add(o._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(o._errorClass)})),c(this,"_checkInputValidity",(function(t){var e=o._formElement.querySelector("#error-".concat(t.name));t.validity.valid?o._setInputValidState(t,e):o._setInputInvalidState(t,e)})),c(this,"_disableButton",(function(){o._submitButton.setAttribute("disabled",""),o._submitButton.classList.add(o._inactiveButtonClass)})),c(this,"_enableButton",(function(){o._submitButton.removeAttribute("disabled"),o._submitButton.classList.remove(o._inactiveButtonClass)})),c(this,"toggleButtonValidity",(function(){o._formElement.checkValidity()?o._enableButton():o._disableButton()})),c(this,"_setEventListeners",(function(){o._inputs.forEach((function(t){t.addEventListener("input",(function(){o._checkInputValidity(t),o.toggleButtonValidity()}))}))})),c(this,"resetForm",(function(){o._inputs.forEach((function(t){var e=o._formElement.querySelector("#error-".concat(t.name));o._setInputValidState(t,e)})),o.toggleButtonValidity()})),c(this,"enableValidation",(function(){o._setEventListeners()})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputs=this._formElement.querySelectorAll(this._inputSelector)}));function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===f(r)?r:String(r)),o)}var r}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===h(r)?r:String(r)),o)}var r}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},b.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(o);if(r){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._bigImage=e._popup.querySelector(".popup__image"),e._captionImage=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t){this._captionImage.textContent=t.name,this._bigImage.alt=t.name,this._bigImage.src=t.link,b(_(u.prototype),"open",this).call(this)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==g(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===g(r)?r:String(r)),o)}var r}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}(this,t)});function u(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t))._handleFormSabmit=e,o._handleClose=n,o._inputArray=o._popup.querySelectorAll(".popup__form-text"),o._form=o._popup.querySelector(".popup__form"),o._handleFormSabmit=o._handleFormSabmit.bind(k(o)),o}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputArray.forEach((function(e){t[e.name]=e.value})),t}},{key:"open",value:function(){this._handleClose(),w(j(u.prototype),"open",this).call(this)}},{key:"close",value:function(){this._form.reset(),this._handleClose(),w(j(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;w(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSabmit(t._getInputValues()),t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===C(r)?r:String(r)),o)}var r}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},L.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(o);if(r){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSabmit=e,n._form=n._popup.querySelector(".popup__form"),n._handleFormSabmit=n._handleFormSabmit.bind(I(n)),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;L(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSabmit(),t.close()}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==x(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===x(r)?r:String(r)),o)}var r}var D=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._about=document.querySelector(n)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function V(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===z(r)?r:String(r)),o)}var r}var F=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._section=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addInitialCard",value:function(t){this._section.append(t)}},{key:"addItem",value:function(t){this._section.prepend(t)}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==N(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===N(r)?r:String(r)),o)}var r}var U=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"editProfile",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then(this._handleResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then(this._handleResponse)}},{key:"generateCardElement",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({name:t.place,link:t.link})}).then(this._handleResponse)}},{key:"deleteCardElement",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t._id),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t._id,"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t._id,"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}],n&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup_type_edit"),M=H.querySelector(".popup__form-text_type_name"),G=H.querySelector(".popup__form-text_type_description"),K=H.querySelector(".popup__form"),Q=H.querySelector(".popup__submit-button"),W=document.querySelector(".profile__add-button"),X=document.querySelector(".popup_type_add"),Y=X.querySelector(".popup__form"),Z=document.querySelector(".card-template"),$=X.querySelector(".popup__submit-button"),tt=document.querySelector(".profile__image"),et=document.querySelector(".popup_type_avatar-edit"),nt=et.querySelector(".popup__submit-button"),ot=null,rt=new s(t,K),it=new s(t,Y),ut=new s(t,et.querySelector(".popup__form"));rt.enableValidation(),it.enableValidation(),ut.enableValidation();var at=function(t,e){t?(e.textContent="Сохранение...",console.log(e.textContent)):(e.textContent="Сохранить",console.log(e.textContent))},ct=new U({url:"https://mesto.nomoreparties.co/v1/cohort-68",headers:{authorization:"46f36a85-551d-499f-bb88-7f282b6e36a1"}}),lt=new F({renderer:function(t){lt.addInitialCard(dt(ot,t,Z))}},".cards"),st=new D(".profile__name",".profile__caption");ct.getInitialCards().then((function(t){lt.renderItems(t)})).catch((function(t){console.log(t)})),ct.getUserInfo().then((function(t){ot=t._id,document.querySelector(".profile__name").textContent=t.name,document.querySelector(".profile__caption").textContent=t.about,tt.src=t.avatar})).catch((function(t){console.log(t)}));var ft=new v(".popup_type_image");ft.setEventListeners();var pt=new O(".popup_type_edit",(function(t){at(!0,Q),ct.editProfile(t).then((function(t){st.setUserInfo(t)})).catch((function(t){console.log(t)})),at(!1,Q)}),(function(){rt.resetForm()}));pt.setEventListeners();var yt=new O(".popup_type_avatar-edit",(function(t){at(!0,nt),ct.setNewAvatar(t).then((function(t){tt.src=t.avatar})).catch((function(t){console.log(t)})),at(!1,nt)}),(function(){ut.resetForm()}));yt.setEventListeners();var ht=new O(".popup_type_add",(function(t){at(!0,$),ct.generateCardElement(t).then((function(t){lt.addItem(dt(ot,t,Z))})).catch((function(t){console.log(t)})),at(!1,$)}),(function(){it.resetForm()}));ht.setEventListeners();var dt=function(t,e,n){var o=new r(t,e,n,(function(t){ft.open(t)}),(function(){var t=new R(".popup_type_delete",(function(){ct.deleteCardElement(e).then((function(){o.handleDelete()})).catch((function(t){console.log(t)}))}));t.setEventListeners(),t.open()}),(function(){console.log(Object.values(e.likes)),console.log(e),console.log(e.likes);var n=Object.values(e.likes);if(console.log(Object.values(n)),e.likes.length>=1){var r=Object.values(e.likes).filter((function(e){return console.log(e),e._id==t}));r?(console.log("здесь есть мой лайк"),ct.deleteLike(e).then((function(t){o.setLikeNumber(t)})).catch((function(t){console.log(t)}))):ct.setLike(e).then((function(t){o.setLikeNumber(t)})).catch((function(t){console.log(t)})),console.log(r)}else console.log("здесь было 0 лайков, могу лайк поставить"),ct.setLike(e).then((function(t){o.setLikeNumber(t)})).catch((function(t){console.log(t)}))}));return o.createCardElement()};J.addEventListener("click",(function(){pt.open();var t=st.getUserInfo();M.value=t.name,G.value=t.about})),W.addEventListener("click",(function(){ht.open()})),tt.addEventListener("click",(function(){yt.open()}))})();