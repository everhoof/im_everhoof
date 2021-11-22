module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"lang-en-US","1":"lang-ru-RU"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("nuxt-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return vueI18n; });
/* unused harmony export vueI18nLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return routesNameSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultLocaleRouteNameSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return strategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lazy; });
/* unused harmony export langDir */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return rootRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detectBrowserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differentDomains; });
/* unused harmony export seo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return vuex; });
/* unused harmony export parsePages */
/* unused harmony export pages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return beforeLanguageSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onLanguageSwitched; });
/* unused harmony export IS_UNIVERSAL_MODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCALE_CODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOCALE_ISO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE_DOMAIN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCALE_FILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_OPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return localeCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return trailingSlash; });
const vueI18n = {};
const vueI18nLoader = false;
const locales = [{
  "code": "ru",
  "name": "Русский",
  "iso": "ru-RU",
  "file": "ru-RU.js"
}, {
  "code": "en",
  "name": "English",
  "iso": "en-US",
  "file": "en-US.js"
}];
const defaultLocale = 'ru';
const routesNameSeparator = '___';
const defaultLocaleRouteNameSuffix = 'default';
const strategy = 'no_prefix';
const lazy = true;
const langDir = 'lang/';
const rootRedirect = null;
const detectBrowserLanguage = {
  "useCookie": true,
  "cookieCrossOrigin": false,
  "cookieDomain": null,
  "cookieKey": "i18n_redirected",
  "cookieSecure": false,
  "alwaysRedirect": false,
  "fallbackLocale": "ru",
  "onlyOnRoot": false
};
const differentDomains = false;
const seo = false;
const baseUrl = '';
const vuex = {
  "moduleName": "i18n",
  "syncLocale": false,
  "syncMessages": false,
  "syncRouteParams": true
};
const parsePages = true;
const pages = {};
const beforeLanguageSwitch = () => null;
const onLanguageSwitched = () => null;
const IS_UNIVERSAL_MODE = true;
const MODULE_NAME = 'nuxt-i18n';
const LOCALE_CODE_KEY = 'code';
const LOCALE_ISO_KEY = 'iso';
const LOCALE_DOMAIN_KEY = 'domain';
const LOCALE_FILE_KEY = 'file';
const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
};
const COMPONENT_OPTIONS_KEY = 'nuxtI18n';
const localeCodes = ["ru", "en"];
const trailingSlash = undefined;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

const getStoreType = store => {
  return {
    actionContext: {},
    rootState: {},
    rootGetters: {},
    storeInstance: {}
  };
};

const actionTree = (_store, tree) => tree;

const getterTree = (_state, tree) => tree;

const mutationTree = (_state, tree) => tree;

const getAccessorType = store2 => {
  return {};
};

const getNestedState = (parent, namespaces) => {
  if (!parent[namespaces[0]]) {
    return parent;
  } else {
    return getNestedState(parent[namespaces[0]], namespaces.slice(1));
  }
};

const createAccessor = (store2, {
  getters,
  state: state2,
  mutations,
  actions,
  namespaced
}, namespace = "") => {
  const namespacedPath = namespace && namespaced ? `${namespace}/` : "";
  const accessor = {};
  Object.keys(getters || {}).forEach(getter => {
    Object.defineProperty(accessor, getter, {
      get: () => store2.getters[`${namespacedPath}${getter}`]
    });
  });
  const evaluatedState = state2 ? typeof state2 === "function" ? state2() : state2 : {};
  Object.keys(evaluatedState).forEach(prop => {
    if (!Object.getOwnPropertyNames(accessor).includes(prop)) {
      const namespaces = namespace.split("/");
      Object.defineProperty(accessor, prop, {
        get: () => getNestedState(store2.state, namespaces)[prop]
      });
    }
  });
  Object.keys(mutations || {}).forEach(mutation => {
    accessor[mutation] = mutationPayload => store2.commit(`${namespacedPath}${mutation}`, mutationPayload);
  });
  Object.keys(actions || {}).forEach(action => {
    accessor[action] = actionPayload => store2.dispatch(`${namespacedPath}${action}`, actionPayload);
  });
  return accessor;
};

const useAccessor = (store2, input, namespace) => {
  const accessor = createAccessor(store2, input, namespace);
  Object.keys(input.modules || {}).forEach(moduleNamespace => {
    const nestedNamespace = namespace ? `${namespace}/${moduleNamespace}` : moduleNamespace;
    accessor[moduleNamespace] = useAccessor(store2, input.modules[moduleNamespace], nestedNamespace);
  });
  return accessor;
};

const getAccessorFromStore = pattern => {
  return store2 => useAccessor(store2, pattern._modules.root._rawModule);
};

exports.actionTree = actionTree;
exports.getAccessorFromStore = getAccessorFromStore;
exports.getAccessorType = getAccessorType;
exports.getStoreType = getStoreType;
exports.getterTree = getterTree;
exports.mutationTree = mutationTree;
exports.useAccessor = useAccessor;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sent.f79e2e4.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var accesscontrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var accesscontrol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(accesscontrol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_queries_get_current_user_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _graphql_queries_get_current_user_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graphql_queries_get_current_user_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_get_grants_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var _graphql_queries_get_grants_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_queries_get_grants_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_mutations_sign_in_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony import */ var _graphql_mutations_sign_in_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_sign_in_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphql_mutations_sign_up_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony import */ var _graphql_mutations_sign_up_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_sign_up_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _graphql_mutations_request_password_reset_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82);
/* harmony import */ var _graphql_mutations_request_password_reset_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_request_password_reset_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_mutations_reset_password_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var _graphql_mutations_reset_password_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_reset_password_graphql__WEBPACK_IMPORTED_MODULE_7__);








const namespaced = true;
const state = () => ({
  userId: null,
  user: null,
  grants: '{"UNVERIFIED_USER":{"message":{"read:any":["*"]}}}',
  loggedIn: false
});
const mutations = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["mutationTree"])(state, {
  SET_USER_ID: (_state, payload) => _state.userId = payload,
  SET_USER: (_state, payload) => _state.user = payload,
  SET_GRANTS: (_state, payload) => _state.grants = JSON.stringify(payload),
  SET_LOGGED_IN: (_state, payload) => _state.loggedIn = payload
});
const getters = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["getterTree"])(state, {
  isAdmin: _state => {
    var _a;

    return !!((_a = _state.user) === null || _a === void 0 ? void 0 : _a.roles.find(role => role.name === 'ADMIN')) || false;
  },
  ac: _state => new accesscontrol__WEBPACK_IMPORTED_MODULE_1__["AccessControl"](JSON.parse(_state.grants)),
  can: (_state, _getters) => _state.user && _getters.ac.can(_state.user.roles.map(role => role.name)) || _getters.ac.can('UNVERIFIED_USER')
});
const actions = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["actionTree"])({
  state,
  mutations,
  getters
}, {
  async nuxtServerInit({
    state,
    commit,
    dispatch
  }, context) {
    const id = context.app.$cookies.get('user_id');
    const token = context.app.$cookies.get('token');
    if (id) commit('SET_USER_ID', parseInt(id, 10));
    if (token) commit('SET_LOGGED_IN', true);

    if (state.loggedIn) {
      await dispatch('getCurrentUser', context);
    } else {
      await dispatch('getGrants', context);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  nuxtClientInit({
    commit
  }, {
    app
  }) {},

  async signIn({
    commit,
    dispatch
  }, variables) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return {
      data: null
    };
    const result = await client.mutate({
      mutation: _graphql_mutations_sign_in_graphql__WEBPACK_IMPORTED_MODULE_4___default.a,
      variables
    });

    if (!result.errors && result.data) {
      await this.app.$apolloHelpers.onLogin(result.data.signIn.value);
      commit('SET_USER_ID', result.data.signIn.ownerId);
      commit('SET_LOGGED_IN', true);
      await dispatch('getCurrentUser');
      await this.app.$accessor.chat.nuxtClientInit();
    }

    return result;
  },

  async signUp({
    dispatch
  }, variables) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return {
      data: null
    };
    const response = await client.mutate({
      mutation: _graphql_mutations_sign_up_graphql__WEBPACK_IMPORTED_MODULE_5___default.a,
      variables
    });

    if (!response.errors && response.data) {
      await dispatch('signIn', variables);
    }

    return response;
  },

  async requestPasswordReset(_context, variables) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return false;
    const response = await client.mutate({
      mutation: _graphql_mutations_request_password_reset_graphql__WEBPACK_IMPORTED_MODULE_6___default.a,
      variables
    });
    return !!(!response.errors && response.data);
  },

  async resetPassword({
    commit,
    dispatch
  }, variables) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return Promise.resolve({
      data: null
    });
    const result = await client.mutate({
      mutation: _graphql_mutations_reset_password_graphql__WEBPACK_IMPORTED_MODULE_7___default.a,
      variables
    });

    if (!result.errors && result.data) {
      await this.app.$apolloHelpers.onLogin(result.data.resetPassword.value);
      commit('SET_USER_ID', result.data.resetPassword.ownerId);
      commit('SET_LOGGED_IN', true);
      await dispatch('getCurrentUser');
      await this.app.$accessor.chat.nuxtClientInit();
    }

    return result;
  },

  async logout({
    commit
  }) {
    await this.app.$apolloHelpers.onLogout(undefined);
    commit('SET_LOGGED_IN', false);

    if (this.$router.currentRoute.name !== 'main') {
      await this.$router.push({
        name: 'main'
      });
    }
  },

  async getCurrentUser({
    commit
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_queries_get_current_user_graphql__WEBPACK_IMPORTED_MODULE_2___default.a
      });
      if (errors) return;
      if (!data) return;
      if (data.getCurrentUser) commit('SET_USER', data.getCurrentUser);
      if (data.getGrants) commit('SET_GRANTS', JSON.parse(data.getGrants));
    } catch (e) {}
  },

  async getGrants({
    commit
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_queries_get_grants_graphql__WEBPACK_IMPORTED_MODULE_3___default.a
      });
      if (errors) return;
      if (!data || !data.getGrants) return;
      commit('SET_GRANTS', JSON.parse(data.getGrants));
    } catch (e) {}
  }

});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_subscriptions_message_created_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var _graphql_subscriptions_message_created_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_subscriptions_message_created_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_subscriptions_message_deleted_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _graphql_subscriptions_message_deleted_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_graphql_subscriptions_message_deleted_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphql_subscriptions_online_updated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86);
/* harmony import */ var _graphql_subscriptions_online_updated_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_subscriptions_online_updated_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _graphql_subscriptions_user_updated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87);
/* harmony import */ var _graphql_subscriptions_user_updated_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_graphql_subscriptions_user_updated_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_mutations_update_online_status_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88);
/* harmony import */ var _graphql_mutations_update_online_status_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_update_online_status_graphql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_mutations_delete_message_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89);
/* harmony import */ var _graphql_mutations_delete_message_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_delete_message_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_queries_get_chat_data_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90);
/* harmony import */ var _graphql_queries_get_chat_data_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_queries_get_chat_data_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_queries_get_user_by_id_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91);
/* harmony import */ var _graphql_queries_get_user_by_id_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_queries_get_user_by_id_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_mutations_punish_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92);
/* harmony import */ var _graphql_mutations_punish_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_mutations_punish_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _graphql_queries_get_messages_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93);
/* harmony import */ var _graphql_queries_get_messages_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_queries_get_messages_graphql__WEBPACK_IMPORTED_MODULE_12__);













const namespaced = true;
const state = () => ({
  message: '',
  messages: [],
  online: [],
  emoji: [{
    name: 'ab4',
    ext: 'png'
  }, {
    name: 'chrysalis4',
    ext: 'png'
  }, {
    name: 'kir5',
    ext: 'png'
  }, {
    name: 'chrysalis2',
    ext: 'png'
  }, {
    name: 'sc3',
    ext: 'png'
  }, {
    name: 'tw4',
    ext: 'png'
  }, {
    name: 'kir2',
    ext: 'png'
  }, {
    name: 'ab2',
    ext: 'png'
  }, {
    name: 'tw1',
    ext: 'png'
  }, {
    name: 'kir4',
    ext: 'png'
  }, {
    name: 'tw2',
    ext: 'png'
  }, {
    name: 'sc1',
    ext: 'png'
  }, {
    name: 'ab3',
    ext: 'png'
  }, {
    name: 'tw3',
    ext: 'png'
  }, {
    name: 'kir3',
    ext: 'png'
  }, {
    name: 'chrysalis5',
    ext: 'png'
  }, {
    name: 'sc2',
    ext: 'png'
  }, {
    name: 'sc5',
    ext: 'png'
  }, {
    name: 'chrysalis1',
    ext: 'png'
  }, {
    name: 'ab5',
    ext: 'png'
  }, {
    name: 'tw5',
    ext: 'png'
  }, {
    name: 'chrysalis3',
    ext: 'png'
  }, {
    name: 'ab1',
    ext: 'png'
  }, {
    name: 'sc4',
    ext: 'png'
  }, {
    name: 'kir1',
    ext: 'png'
  }, {
    name: 'bestbat',
    ext: 'png'
  }, {
    name: 'bj',
    ext: 'png'
  }, {
    name: 'bj_smug',
    ext: 'png'
  }, {
    name: 'bj_horror',
    ext: 'png'
  }, {
    name: 'bj_wat',
    ext: 'png'
  }, {
    name: 'bj_cool',
    ext: 'png'
  }, {
    name: 'bj_hey',
    ext: 'png'
  }, {
    name: 'bj_skuka',
    ext: 'png'
  }, {
    name: 'bj_filly',
    ext: 'png'
  }, {
    name: 'bj_like',
    ext: 'png'
  }, {
    name: 'bj_ok',
    ext: 'png'
  }, {
    name: 'bj_shotgun',
    ext: 'png'
  }, {
    name: 'dash',
    ext: 'gif'
  }, {
    name: 'facehoof',
    ext: 'png'
  }, {
    name: 'bat_cute',
    ext: 'gif'
  }, {
    name: 'isee',
    ext: 'gif'
  }, {
    name: 'lyraspin',
    ext: 'gif'
  }, {
    name: 'oldbol',
    ext: 'png'
  }, {
    name: 're1',
    ext: 'png'
  }, {
    name: 're4',
    ext: 'png'
  }, {
    name: 're2',
    ext: 'png'
  }, {
    name: 're3',
    ext: 'png'
  }, {
    name: 'prrr',
    ext: 'gif'
  }, {
    name: 'madness',
    ext: 'png'
  }, {
    name: 'shimmy',
    ext: 'gif'
  }, {
    name: 'chrissymlem',
    ext: 'gif'
  }, {
    name: 'fire_mmm',
    ext: 'png'
  }, {
    name: 'fire_angry',
    ext: 'png'
  }, {
    name: 'fire_wut',
    ext: 'png'
  }, {
    name: 'fire_meh',
    ext: 'png'
  }, {
    name: 'fire_cool',
    ext: 'png'
  }, {
    name: 'privet',
    ext: 'gif'
  }, {
    name: 'shoock',
    ext: 'gif'
  }, {
    name: 'aveluna',
    ext: 'gif'
  }, {
    name: 'batpony',
    ext: 'gif'
  }, {
    name: 'batpony3',
    ext: 'png'
  }, {
    name: 'batpony4',
    ext: 'png'
  }, {
    name: 'batpony1',
    ext: 'png'
  }, {
    name: 'batpony5',
    ext: 'png'
  }, {
    name: 'batpony2',
    ext: 'png'
  }, {
    name: 'eeeeeee',
    ext: 'png'
  }, {
    name: 'reeeeeeee',
    ext: 'gif'
  }, {
    name: 'lilpip2',
    ext: 'png'
  }, {
    name: 'lilpip1',
    ext: 'png'
  }, {
    name: 'kiss',
    ext: 'gif'
  }, {
    name: 'eeeees',
    ext: 'gif'
  }, {
    name: 'pink2',
    ext: 'png'
  }, {
    name: 'pink3',
    ext: 'png'
  }, {
    name: 'pink1',
    ext: 'png'
  }, {
    name: 'pink4',
    ext: 'png'
  }, {
    name: 'pink5',
    ext: 'png'
  }, {
    name: 'bad',
    ext: 'png'
  }],
  users: [],
  asidePcOpened: true
});
const mutations = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["mutationTree"])(state, {
  SET_MESSAGES: (_state, payload) => _state.messages = payload,
  SET_MESSAGE: (_state, payload) => _state.message = payload,
  ADD_MESSAGE: (_state, payload) => {
    let index = payload.id && payload.id > 0 ? _state.messages.findIndex(({
      id
    }) => id === payload.id) : -1;

    if (index === -1) {
      index = payload.randomId ? _state.messages.findIndex(({
        randomId
      }) => randomId === payload.randomId) : -1;
    }

    if (payload.deletedAt && index !== -1) {
      _state.messages.splice(index, 1);
    } else if (index === -1) {
      _state.messages.unshift(payload);
    } else {
      vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(_state.messages, index, payload);
    }
  },
  ADD_MESSAGES_TO_START: (_state, payload) => {
    _state.messages.unshift(...payload);
  },
  ADD_MESSAGES_TO_END: (_state, payload) => {
    _state.messages.push(...payload);
  },
  DELETE_MESSAGES_AFTER_ID: (_state, payload) => {
    if (_state.messages.length === 0) return;

    for (let i = 0; i < _state.messages.length - 1; i++) {
      if (_state.messages[i].id > payload) {
        _state.messages.splice(i, 1);
      } else {
        break;
      }
    }
  },
  UPDATE_MESSAGES_SEPARATORS: _state => {
    let prevDay = -1;

    for (let i = _state.messages.length - 1; i >= 0; i--) {
      if (_state.messages[i].deletedAt) continue;
      const day = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromISO(_state.messages[i].createdAt).day;
      _state.messages[i].dayFirst = prevDay !== -1 && prevDay !== day;
      prevDay = day;
    }
  },
  SET_ONLINE: (_state, payload) => _state.online = payload,
  SET_ASIDE_PC_OPENED: (_state, payload) => _state.asidePcOpened = payload,
  ADD_USER: (_state, payload) => {
    const index = _state.users.findIndex(({
      id
    }) => id === payload.id);

    if (index === -1) _state.users.push(payload);else vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(_state.users, index, payload);
  }
});
const getters = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["getterTree"])(state, {
  user: _state => id => _state.users.find(user => user.id === id)
});
const actions = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["actionTree"])({
  state,
  mutations,
  getters
}, {
  async nuxtServerInit({
    dispatch,
    commit
  }, context) {
    var _a;

    const asidePcOpened = ((_a = context.app.$cookies.get('aside_pc_opened')) !== null && _a !== void 0 ? _a : true) === true;
    commit('SET_ASIDE_PC_OPENED', asidePcOpened);
    await dispatch('getChatData', context);
  },

  async nuxtClientInit({
    dispatch
  }, context) {
    dispatch('subscribeMessageCreated', context);
    dispatch('subscribeMessageDeleted', context);
    dispatch('subscribeOnlineUpdated', context);
    dispatch('subscribeUserUpdated', context);

    if (this.app.$accessor.auth.loggedIn) {
      await dispatch('updateOnlineStatus', context);
      window.setInterval(async () => await dispatch('updateOnlineStatus', context), 30 * 1000);
    }

    await dispatch('getChatData', context);
  },

  subscribeMessageCreated({
    state,
    commit,
    dispatch
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;
    const self = context !== null && context !== void 0 ? context : this;

    if (client) {
      const messageCreatedObserver = client.subscribe({
        query: _graphql_subscriptions_message_created_graphql__WEBPACK_IMPORTED_MODULE_3___default.a
      });
      messageCreatedObserver.subscribe({
        async next({
          data
        }) {
          if (!(data === null || data === void 0 ? void 0 : data.messageCreated)) return;

          if (state.messages.length > 0) {
            let lastId;

            for (let i = 0; i < state.messages.length; i++) {
              if (state.messages[i].state === undefined && state.messages[i].id > 0) {
                lastId = state.messages[i].id;
                break;
              }
            }

            commit('ADD_MESSAGE', data.messageCreated);
            if (lastId) await dispatch('getMessages', {
              lastId
            });
          } else {
            commit('ADD_MESSAGE', data.messageCreated);
          }

          self.app.$bus.$emit('message-added');
        }

      });
    }
  },

  subscribeOnlineUpdated({
    commit
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;

    if (client) {
      const onlineUpdatedObserver = client.subscribe({
        query: _graphql_subscriptions_online_updated_graphql__WEBPACK_IMPORTED_MODULE_5___default.a
      });
      onlineUpdatedObserver.subscribe({
        next({
          data
        }) {
          if (!(data === null || data === void 0 ? void 0 : data.onlineUpdated)) return;
          commit('SET_ONLINE', data.onlineUpdated);
        }

      });
    }
  },

  subscribeMessageDeleted({
    commit
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;

    if (client) {
      const onlineUpdatedObserver = client.subscribe({
        query: _graphql_subscriptions_message_deleted_graphql__WEBPACK_IMPORTED_MODULE_4___default.a
      });
      onlineUpdatedObserver.subscribe({
        next({
          data
        }) {
          if (!(data === null || data === void 0 ? void 0 : data.messageDeleted)) return;
          commit('ADD_MESSAGE', data.messageDeleted);
        }

      });
    }
  },

  subscribeUserUpdated({
    commit
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;

    if (client) {
      const userUpdatedObserver = client.subscribe({
        query: _graphql_subscriptions_user_updated_graphql__WEBPACK_IMPORTED_MODULE_6___default.a
      });
      userUpdatedObserver.subscribe({
        next({
          data
        }) {
          var _a;

          if (!(data === null || data === void 0 ? void 0 : data.userUpdated)) return;
          commit('ADD_USER', data.userUpdated);

          if (data.userUpdated.id === ((_a = context === null || context === void 0 ? void 0 : context.app.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id)) {
            context === null || context === void 0 ? void 0 : context.app.$accessor.auth.SET_USER(data.userUpdated);
          }
        }

      });
    }
  },

  async updateOnlineStatus(_context, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;
    if (!client) return;

    try {
      await client.query({
        query: _graphql_mutations_update_online_status_graphql__WEBPACK_IMPORTED_MODULE_7___default.a
      });
    } catch (e) {}
  },

  async getMessages({
    commit
  }, payload) {
    var _a, _b, _c;

    const client = (_b = (_a = this === null || this === void 0 ? void 0 : this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_queries_get_messages_graphql__WEBPACK_IMPORTED_MODULE_12___default.a,
        variables: payload
      });
      if (errors || !data) return;

      if (payload === null || payload === void 0 ? void 0 : payload.reverse) {
        commit('ADD_MESSAGES_TO_END', data.getMessages);
      } else {
        if (payload === null || payload === void 0 ? void 0 : payload.lastId) {
          commit('DELETE_MESSAGES_AFTER_ID', payload.lastId);
        }

        commit('ADD_MESSAGES_TO_START', data.getMessages);
      }

      commit('UPDATE_MESSAGES_SEPARATORS');
    } catch (e) {}
  },

  async getChatData({
    commit
  }, context) {
    var _a, _b, _c;

    const client = (_b = (_a = context === null || context === void 0 ? void 0 : context.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient) !== null && _b !== void 0 ? _b : (_c = this.app.apolloProvider) === null || _c === void 0 ? void 0 : _c.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_queries_get_chat_data_graphql__WEBPACK_IMPORTED_MODULE_9___default.a
      });
      if (errors || !data) return;
      commit('SET_MESSAGES', data.getMessages);
      commit('UPDATE_MESSAGES_SEPARATORS');
      commit('SET_ONLINE', data.getOnline);
    } catch (e) {}
  },

  async deleteMessage({
    commit
  }, payload) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_mutations_delete_message_graphql__WEBPACK_IMPORTED_MODULE_8___default.a,
        variables: payload
      });
      if (errors || !(data === null || data === void 0 ? void 0 : data.deleteMessage)) return;
      commit('ADD_MESSAGE', data.deleteMessage);
    } catch (e) {}
  },

  async fetchUserById({
    commit
  }, payload) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_queries_get_user_by_id_graphql__WEBPACK_IMPORTED_MODULE_10___default.a,
        variables: payload
      });
      if (errors || !(data === null || data === void 0 ? void 0 : data.getUserById)) return;
      commit('ADD_USER', data.getUserById);
    } catch (e) {}
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async punishUser({
    commit
  }, payload) {
    var _a;

    const client = (_a = this.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
    if (!client) return;

    try {
      const {
        data,
        errors
      } = await client.query({
        query: _graphql_mutations_punish_graphql__WEBPACK_IMPORTED_MODULE_11___default.a,
        variables: payload
      }); // eslint-disable-next-line no-useless-return

      if (errors || !(data === null || data === void 0 ? void 0 : data.punish)) return;
    } catch (e) {}
  }

});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_vuex__WEBPACK_IMPORTED_MODULE_0__);

const namespaced = true;
const state = () => ({
  reminders: []
});
const mutations = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["mutationTree"])(state, {
  GET_REMINDERS_FROM_STORAGE: _state => {
    const storage = localStorage.getItem('reminders');
    _state.reminders = storage && JSON.parse(storage) || [];
  },
  SET_REMINDERS_TO_STORAGE: (_state, payload) => {
    localStorage.setItem('reminders', JSON.stringify(payload));
    _state.reminders = payload;
  }
});
const getters = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["getterTree"])(state, {});
const actions = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["actionTree"])({
  state,
  mutations,
  getters
}, {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  nuxtServerInit({
    dispatch
  }, context) {},

  nuxtClientInit({
    state,
    commit,
    dispatch
  }, _context) {
    var _a;

    commit('GET_REMINDERS_FROM_STORAGE');
    const userId = (_a = this.app.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) return;
    state.reminders.forEach(reminder => {
      if (reminder.disabledAt !== null && reminder.userId === userId && Date.now() > reminder.disabledAt + reminder.timeout) {
        dispatch('addReminder', reminder.type);
      }
    });
  },

  addReminder({
    state,
    commit
  }, payload) {
    var _a;

    commit('GET_REMINDERS_FROM_STORAGE');
    const reminders = JSON.parse(JSON.stringify(state.reminders));
    const userId = (_a = this.app.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) return;
    const index = reminders.findIndex(reminder => reminder.type === payload && reminder.userId === userId);

    if (index === -1) {
      reminders.push({
        type: payload,
        userId,
        timeout: 0,
        disabledAt: null
      });
    } else {
      reminders[index].disabledAt = null;
      reminders[index].timeout = 0;
    }

    commit('SET_REMINDERS_TO_STORAGE', reminders);
  },

  removeReminder({
    state,
    commit
  }, {
    type,
    timeout
  }) {
    var _a;

    commit('GET_REMINDERS_FROM_STORAGE');
    const reminders = JSON.parse(JSON.stringify(state.reminders));
    const userId = (_a = this.app.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) return;
    const index = reminders.findIndex(reminder => reminder.type === type && reminder.userId === userId);

    if (index !== -1) {
      reminders[index].disabledAt = Date.now();
      reminders[index].timeout = timeout;
    }

    commit('SET_REMINDERS_TO_STORAGE', reminders);
  }

});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_vuex__WEBPACK_IMPORTED_MODULE_0__);

const namespaced = true;
const state = () => ({
  theme: 'dark',
  compact: true
});
const mutations = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["mutationTree"])(state, {
  SET_THEME: (_state, payload) => _state.theme = payload,
  SET_COMPACT: (_state, payload) => _state.compact = payload
});
const getters = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["getterTree"])(state, {});
const actions = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["actionTree"])({
  state,
  mutations,
  getters
}, {
  nuxtServerInit({
    dispatch
  }, context) {
    const theme = context.app.$cookies.get('settings_theme');
    const compact = context.app.$cookies.get('settings_compact');
    if (theme) dispatch('setTheme', theme);
    if (compact !== null && compact !== undefined) dispatch('setCompact', compact);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  nuxtClientInit({
    commit
  }, {
    app
  }) {},

  setTheme({
    commit
  }, payload) {
    this.app.$cookies.set('settings_theme', payload, {
      path: '/',
      sameSite: 'lax',
      maxAge: 86400 * 90
    });
    commit('SET_THEME', payload);
  },

  setCompact({
    commit
  }, payload) {
    this.app.$cookies.set('settings_compact', payload, {
      path: '/',
      sameSite: 'lax',
      maxAge: 86400 * 90
    });
    commit('SET_COMPACT', payload);
  }

});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vue-apollo");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4wIiB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNNjQuNCAxNmE0OSA0OSAwIDAgMC01MCA0OCA1MSA1MSAwIDAgMCA1MCA1Mi4yIDUzIDUzIDAgMCAwIDU0LTUyYy0uNy00OC00NS01NS43LTQ1LTU1LjdzNDUuMyAzLjggNDkgNTUuNmMuOCAzMi0yNC44IDU5LjUtNTggNjAuMi0zMyAuOC02MS40LTI1LjctNjItNjBDMS4zIDI5LjggMjguOC42IDY0LjMgMGMwIDAgOC41IDAgOC43IDguNCAwIDgtOC42IDcuNi04LjYgNy42eiIvPjwvc3ZnPgo="

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("de94c39a", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4a96bc54", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("44e2ac25", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f82f029e", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("60b388eb", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f93fe718", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("08af7ee6", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1dfe5cd2", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("edf87c24", content, true, context)
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3b289a17", content, true, context)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7d9ef54c", content, true, context)
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/warning.a404a82.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bbd8bb54", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("07754c22", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5874c4ca", content, true, context)
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9d112976", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("723fc47a", content, true, context)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0beafbc6", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("75c4c25b", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1f0c644a", content, true, context)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7c8dbfe5", content, true, context)
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5cbbbd3f", content, true, context)
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("86a6b6be", content, true, context)
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7dba24b0", content, true, context)
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("02f2a002", content, true, context)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("47ec93ce", content, true, context)
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("518e2c62", content, true, context)
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8193f88c", content, true, context)
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("96aee47e", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7ae7a16c", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6b3dfd31", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d6f4b9d6", content, true, context)
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2a6dfbbe", content, true, context)
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("19c3077e", content, true)

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("c9897de0", content, true)

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0af5d4d6", content, true)

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("1182f508", content, true)

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("49f61046", content, true, context)
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2570ef5e", content, true, context)
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("041261d0", content, true, context)
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("461436d8", content, true, context)
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a9f3f868", content, true, context)
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("72a3de02", content, true, context)
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 72 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"randomId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pictures"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"randomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"randomId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pictures"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pictures"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":173}};
    doc.loc.source = {"body":"mutation CreateMessage($content: String, $randomId: String, $pictures: [Int!]) {\n  createMessage(content: $content, randomId: $randomId, pictures: $pictures) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["CreateMessage"] = oneQuery(doc, "CreateMessage");
        


/***/ }),
/* 73 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestEmailConfirmation"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestEmailConfirmation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":78}};
    doc.loc.source = {"body":"mutation RequestEmailConfirmation {\n  requestEmailConfirmation {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["RequestEmailConfirmation"] = oneQuery(doc, "RequestEmailConfirmation");
        


/***/ }),
/* 74 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":86}};
    doc.loc.source = {"body":"mutation ConfirmEmail($token: String!) {\n  confirmEmail(token: $token) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["ConfirmEmail"] = oneQuery(doc, "ConfirmEmail");
        


/***/ }),
/* 75 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pictureId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pictureId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pictureId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":335}};
    doc.loc.source = {"body":"mutation UpdateAvatar($pictureId: Int!) {\n  updateAvatar(pictureId: $pictureId) {\n    avatar {\n      id\n      s {\n        height\n        width\n        link\n        size\n      }\n      m {\n        height\n        width\n        link\n        size\n      }\n      o {\n        height\n        width\n        link\n        size\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["UpdateAvatar"] = oneQuery(doc, "UpdateAvatar");
        


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("popper.js");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("accesscontrol");

/***/ }),
/* 78 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGrants"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"emailConfirmed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wasOnlineAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":415}};
    doc.loc.source = {"body":"query GetCurrentUser {\n  getGrants\n  getCurrentUser {\n    id\n    username\n    email\n    emailConfirmed\n    avatar {\n      id\n      s {\n        height\n        width\n        link\n        size\n      }\n      m {\n        height\n        width\n        link\n        size\n      }\n      o {\n        height\n        width\n        link\n        size\n      }\n    }\n    createdAt\n    wasOnlineAt\n    roles {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["GetCurrentUser"] = oneQuery(doc, "GetCurrentUser");
        


/***/ }),
/* 79 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGrants"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGrants"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":32}};
    doc.loc.source = {"body":"query GetGrants {\n  getGrants\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["GetGrants"] = oneQuery(doc, "GetGrants");
        


/***/ }),
/* 80 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownerId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":130}};
    doc.loc.source = {"body":"mutation SignIn($email: String!, $password: String!) {\n  signIn(email: $email, password: $password) {\n    ownerId\n    value\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["SignIn"] = oneQuery(doc, "SignIn");
        


/***/ }),
/* 81 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":166}};
    doc.loc.source = {"body":"mutation SignUp($email: String!, $username: String!, $password: String!) {\n  signUp(email: $email, username: $username, password: $password) {\n    id\n    email\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["SignUp"] = oneQuery(doc, "SignUp");
        


/***/ }),
/* 82 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"directives":[]}]}}],"loc":{"start":0,"end":89}};
    doc.loc.source = {"body":"mutation RequestPasswordReset($email: String!) {\n  requestPasswordReset(email: $email)\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["RequestPasswordReset"] = oneQuery(doc, "RequestPasswordReset");
        


/***/ }),
/* 83 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownerId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":144}};
    doc.loc.source = {"body":"mutation ResetPassword($token: String!, $password: String!) {\n  resetPassword(token: $token, password: $password) {\n    ownerId\n    value\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["ResetPassword"] = oneQuery(doc, "ResetPassword");
        


/***/ }),
/* 84 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageCreated"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageCreated"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"randomId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":442}};
    doc.loc.source = {"body":"subscription MessageCreated {\n  messageCreated {\n    id\n    randomId\n    owner {\n      id\n      username\n      avatar {\n        s {\n          link\n        }\n      }\n    }\n    content\n    username\n    system\n    pictures {\n      m {\n        link\n        width\n        height\n      }\n      o {\n        link\n        width\n        height\n      }\n    }\n    deletedBy {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["MessageCreated"] = oneQuery(doc, "MessageCreated");
        


/***/ }),
/* 85 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageDeleted"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageDeleted"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"randomId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":442}};
    doc.loc.source = {"body":"subscription MessageDeleted {\n  messageDeleted {\n    id\n    randomId\n    owner {\n      id\n      username\n      avatar {\n        s {\n          link\n        }\n      }\n    }\n    content\n    username\n    system\n    pictures {\n      m {\n        link\n        width\n        height\n      }\n      o {\n        link\n        width\n        height\n      }\n    }\n    deletedBy {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["MessageDeleted"] = oneQuery(doc, "MessageDeleted");
        


/***/ }),
/* 86 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnlineUpdated"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onlineUpdated"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":124}};
    doc.loc.source = {"body":"subscription OnlineUpdated {\n  onlineUpdated {\n    id\n    username\n    avatar {\n      s {\n        link\n      }\n    }\n  }\n}\n\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["OnlineUpdated"] = oneQuery(doc, "OnlineUpdated");
        


/***/ }),
/* 87 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserUpdated"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdated"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"emailConfirmed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wasOnlineAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":405}};
    doc.loc.source = {"body":"subscription UserUpdated {\n  userUpdated {\n    id\n    username\n    email\n    emailConfirmed\n    avatar {\n      id\n      s {\n        height\n        width\n        link\n        size\n      }\n      m {\n        height\n        width\n        link\n        size\n      }\n      o {\n        height\n        width\n        link\n        size\n      }\n    }\n    createdAt\n    wasOnlineAt\n    roles {\n      name\n    }\n  }\n}\n\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["UserUpdated"] = oneQuery(doc, "UserUpdated");
        


/***/ }),
/* 88 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOnlineStatus"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOnlineStatus"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":53}};
    doc.loc.source = {"body":"mutation UpdateOnlineStatus {\n  updateOnlineStatus\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["UpdateOnlineStatus"] = oneQuery(doc, "UpdateOnlineStatus");
        


/***/ }),
/* 89 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"randomId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":477}};
    doc.loc.source = {"body":"mutation DeleteMessage($messageId: Int!) {\n  deleteMessage(messageId: $messageId) {\n    id\n    randomId\n    owner {\n      id\n      username\n      avatar {\n        s {\n          link\n        }\n      }\n    }\n    content\n    username\n    system\n    pictures {\n      m {\n        link\n        width\n        height\n      }\n      o {\n        link\n        width\n        height\n      }\n    }\n    deletedBy {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["DeleteMessage"] = oneQuery(doc, "DeleteMessage");
        


/***/ }),
/* 90 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatData"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMessages"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"randomId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"getOnline"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":517}};
    doc.loc.source = {"body":"query GetChatData {\n  getMessages {\n    id\n    randomId\n    owner {\n      id\n      username\n      avatar {\n        s {\n          link\n        }\n      }\n    }\n    content\n    username\n    system\n    pictures {\n      m {\n        link\n        width\n        height\n      }\n      o {\n        link\n        width\n        height\n      }\n    }\n    deletedBy {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    deletedAt\n  }\n  getOnline {\n    id\n    username\n    avatar {\n      s {\n        link\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["GetChatData"] = oneQuery(doc, "GetChatData");
        


/***/ }),
/* 91 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"wasOnlineAt"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":369}};
    doc.loc.source = {"body":"query GetUserById($id: Int!) {\n  getUserById(id: $id) {\n    id\n    username\n    email\n    avatar {\n      id\n      s {\n        height\n        width\n        link\n        size\n      }\n      m {\n        height\n        width\n        link\n        size\n      }\n      o {\n        height\n        width\n        link\n        size\n      }\n    }\n    createdAt\n    wasOnlineAt\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["GetUserById"] = oneQuery(doc, "GetUserById");
        


/***/ }),
/* 92 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Punish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"duration"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PunishmentTypes"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"punish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}},{"kind":"Argument","name":{"kind":"Name","value":"duration"},"value":{"kind":"Variable","name":{"kind":"Name","value":"duration"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":184}};
    doc.loc.source = {"body":"mutation Punish($userId: Int!, $reason: String!, $duration: Int, $type: PunishmentTypes!) {\n  punish(userId: $userId, reason: $reason, duration: $duration, type: $type) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["Punish"] = oneQuery(doc, "Punish");
        


/***/ }),
/* 93 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reverse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reverse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reverse"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"randomId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"s"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"o"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedBy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":569}};
    doc.loc.source = {"body":"query GetMessages($count: Int = 100, $page: Int = 1, $lastId: Int, $reverse: Boolean = false) {\n  getMessages(count: $count, page: $page, lastId: $lastId, reverse: $reverse) {\n    id\n    randomId\n    owner {\n      id\n      username\n      avatar {\n        s {\n          link\n        }\n      }\n    }\n    content\n    username\n    system\n    pictures {\n      m {\n        link\n        width\n        height\n      }\n      o {\n        link\n        width\n        height\n      }\n    }\n    deletedBy {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["GetMessages"] = oneQuery(doc, "GetMessages");
        


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(200)(module)))

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws/dist/message-types");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-state");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("vue-functional-data-merge");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  route,
  store,
  redirect
}) {
  const blockedForLoggedIn = ['modal_login', 'modal_register'];
  const blockedForLoggedOut = [];

  if (blockedForLoggedIn.includes(route.name || '') && store.state.logged && app.router) {
    redirect(302, '/');
  } else if (blockedForLoggedOut.includes(route.name || '') && !store.state.logged && app.router) {
    redirect(302, '/login');
  }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".upload-file{display:none;width:100%;height:100%;background-color:rgba(0,0,0,.502)}.upload-file_type_active{display:flex}.upload-file__wrapper{width:300px;margin:auto;background-color:var(--secondary-background);border-radius:4px}.upload-file__section{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:10px;padding:20px;color:var(--gray_600);cursor:pointer;border:2px dashed var(--primary-background);transition:all .15s ease}.upload-file__section:hover,.upload-file__section_type_hovered{color:var(--accent-text);border-color:var(--accent-background)}.upload-file__section:hover .upload-file__icon,.upload-file__section_type_hovered .upload-file__icon{fill:var(--accent-background)}.upload-file__icon{width:90px;height:90px;margin-bottom:10px;fill:var(--primary-background);transition:all .15s ease}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".message{position:relative;display:block;overflow:hidden;flex-shrink:0;min-height:60px;padding:8px 50px 8px 70px;line-height:22px;transition:background .15s ease}.message:active,.message:focus,.message:hover{background:hsla(0,0%,100%,.05)}.message_view_compact{min-height:unset;padding:2px 50px 2px 16px}.message_view_compact .message__content{display:flex}.message_view_compact .message__header{display:flex;margin-right:8px;align-self:flex-end}.message_view_compact .message__timestamp{margin-right:8px;margin-left:0}.message_view_compact .message__body{flex-shrink:1}.message_view_compact .message__text{margin-bottom:0;color:var(--primary-text)}.message_view_compact .message__avatar{display:none}.message_type_system:active,.message_type_system:focus,.message_type_system:hover{background:inherit}.message_type_system .message__header{margin-right:0}.message_type_system .message__timestamp{margin-left:0;font-style:italic}.message_type_system .message__author-name{display:none}.message_type_system .message__text{font-style:italic}.message_type_deleted{opacity:.5}.message_type_deleted .message__text{font-style:italic}.message_type_deleted .message__hidden{display:none}.message_type_deleted:hover{opacity:1}.message_type_deleted:hover .message__text{display:none}.message_type_deleted:hover .message__hidden{display:block}.message_state_not-delivered{opacity:.5}.message__avatar{position:absolute;top:33px;left:20px;width:40px;height:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}.message__avatar:first-child{top:10px}.message__avatar_type_default{font-size:18px;line-height:40px;text-align:center;text-transform:uppercase;background:hsla(0,0%,100%,.1);border-radius:50%}.message__author-name{display:inline-block;vertical-align:middle;overflow:hidden;max-width:150px;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.message__author-name:hover{text-decoration:underline}.message__header{min-height:22px;font-size:0;white-space:pre-line}.message__timestamp{display:inline;vertical-align:middle;margin-left:8px;color:var(--gray_300);font-size:11px;white-space:nowrap;cursor:default}.message__text{margin:0 0 6px;color:var(--secondary-text);line-height:20px;word-break:break-word}.message__text:last-child{margin-bottom:0}.message__emoji{vertical-align:bottom;max-width:50px;max-height:50px;padding:1px;-o-object-fit:contain;object-fit:contain}.message__body{flex-shrink:0}.message__image{display:block;max-width:100%;height:auto;cursor:pointer;-o-object-fit:cover;object-fit:cover}.message__text{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_messages_separator_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_messages_separator_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_messages_separator_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_messages_separator_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_messages_separator_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".messages-separator{position:relative;display:block;padding:8px 0;text-align:center}.messages-separator:before{content:\"\";position:absolute;top:50%;right:16px;left:16px;display:block;border-bottom:1px solid var(--secondary-background)}.messages-separator__date{position:relative;z-index:1;display:inline-block;padding:0 8px;color:var(--secondary-text);font-size:12px;font-weight:600;background:var(--primary-background)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat{position:relative;display:flex;overflow-x:hidden;overflow-y:scroll;overflow:hidden scroll;flex-direction:column-reverse;width:100%;height:100%;scroll-behavior:smooth}@-moz-document url-prefix(){.chat{background:var(--primary-background)}}.chat__messages{position:absolute;display:flex;justify-content:flex-end;flex-direction:column;width:100%;min-height:100%;padding:0 0 10px}.chat__messages-loader{position:relative;height:70px}.chat__messages-loader .icon{position:absolute;top:50%;left:50%;width:50px;height:50px;margin-top:-25px;margin-left:-25px;-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}.chat__loader{position:absolute;width:100%;height:100%}.chat__loader .icon{position:absolute;top:50%;left:50%;width:50px;height:50px;margin-top:-25px;margin-left:-25px;-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@-webkit-keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-panel{display:flex;flex-wrap:wrap;padding:12px}.emoji-panel__item{width:40px;height:40px;padding:2.5px;border-radius:5px}.emoji-panel__item:hover{background:var(--gray_700)}.emoji-panel__icon{width:35px;height:35px;cursor:pointer;background-repeat:no-repeat;background-position:50%;background-size:contain}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".attach-panel{display:flex;flex-direction:column;padding:12px;background:var(--secondary-background);border-radius:5px;box-shadow:0 0 6px rgba(0,0,0,.4)}.attach-panel__item{display:flex;align-items:center;height:40px;padding:4px 8px 4px 4px;cursor:pointer;border-radius:5px}.attach-panel__item:hover{background:var(--gray_700)}.attach-panel__item:hover .attach-panel__icon{fill:var(--accent-text)}.attach-panel__icon{width:32px;height:32px;fill:var(--primary-text)}.attach-panel__text{margin-left:12px;color:var(--primary-text);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_button_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_button_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_button_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_button_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_button_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button{position:relative;z-index:1;display:inline-block;vertical-align:middle;overflow:hidden;max-width:100%;padding:8px 16px;color:var(--primary-text);font-size:14px;line-height:1.4;text-align:center;text-decoration:none;word-break:break-all;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--background-hover);border:1px solid var(--background-hover);border-radius:.25em;outline:none;-webkit-tap-highlight-color:transparent;transition:background-color .15s ease}.button_display_block{display:block}.button_width_full{width:100%}.button_no_wrap{white-space:nowrap;text-overflow:ellipsis}.button_with_margin{margin:10px 0}.button_size_compact{padding:4px 12px}.button:active,.button:focus,.button:hover:not(:disabled),.button_type_active{color:var(--primary-text);background-color:var(--primary);border-color:var(--primary)}.button:disabled{border-color:var(--secondary);opacity:var(--disabled-alpha)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(129);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(130);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".footer{position:relative;display:flex;height:52px;padding:10px 12px;box-shadow:0 -3px 6px var(--shadow)}.footer__emoji-panel{position:absolute;left:12px;bottom:100%;overflow-y:auto;max-width:362px;height:250px;max-height:250px;background:var(--secondary-background);border-radius:5px;box-shadow:0 0 6px rgba(0,0,0,.4)}.footer__attach-panel{position:absolute;left:0;bottom:100%;padding:12px 12px 0}.footer__input-field{position:relative;display:flex;overflow:hidden;align-items:center;width:100%;height:32px;margin-right:12px;padding:0 12px;background-color:var(--secondary-background);border-radius:5px;box-shadow:0 0 6px var(--shadow)}@media screen and (min-width:768px){.footer__input-field{margin-right:0}}.footer__actions-left{position:relative;display:flex;align-items:center;flex-shrink:0;margin-right:12px}.footer__actions-button{display:block;width:24px;height:24px;fill:var(--primary-text);cursor:pointer}.footer__actions-button:hover{fill:var(--accent-text)}.footer__actions-button:not(:last-child){margin-right:8px}.footer__emoji-button{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:-48px -24px;background-size:264px 120px;image-rendering:-webkit-optimize-contrast;filter:grayscale(1)}.footer__emoji-button.footer__actions-button_type_active,.footer__emoji-button:hover{filter:grayscale(0)}.footer__attach-button{transform:rotate(225deg)}.footer__attach-button.footer__actions-button_type_active,.footer__attach-button:hover{fill:var(--accent-text)}.footer__input{display:block;flex-grow:1;flex-basis:100%;width:100%;height:100%;margin:0 8px 0 0;color:var(--primary-text);background:transparent;border:none;outline:none}.footer__input:last-child{margin-right:0}.footer__actions-right{display:flex;align-items:center;flex-shrink:0}@media screen and (min-width:768px){.footer__actions-right{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/faces.3c3e548.png";

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reminder_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reminder_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reminder_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reminder_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reminder_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".reminder{min-height:32px;padding:4px 48px 4px 16px;font-size:14px;font-weight:600;background:#6887db}.reminder__content{display:flex;justify-content:space-between;align-items:center}.reminder__text{margin:0 16px 0 0;color:var(--primary-background);text-shadow:1px 1px 1px #5b76bf}.reminder__button{padding:8px 16px;color:var(--primary-background);font-size:13px;font-weight:700;line-height:14px;cursor:pointer;background:#5b76bf;border:none;border-radius:2px;outline:none;transition:color .15s ease}.reminder__button:hover{color:#cdd3e7}.reminder__close-button{position:absolute;top:50%;right:10px;display:inline-block;margin-top:-15px;padding:6px;color:#fff;cursor:pointer;background:transparent;border:none;border-radius:2px;outline:none;transition:color .15s ease}.reminder__close-button:hover{color:var(--primary-background);background:#5b76bf}.reminder__icon{display:block;width:18px;height:18px;fill:currentColor}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main{position:relative;display:block}.main__header{position:fixed;top:0;z-index:100;width:100vw}.main__header_type_transparent{background:transparent}.main__header_type_colored{background:linear-gradient(45deg,#5c1cdd,#701bb5)}.main__player{position:fixed;bottom:0;width:100%}.main__footer{height:60px;background:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_confirmation_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_confirmation_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_confirmation_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_confirmation_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_confirmation_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_text_field_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_text_field_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_text_field_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_text_field_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_text_field_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-field{position:relative;display:block;width:200px;font-size:14px}.text-field_width_full{width:100%}.text-field_with_icon .text-field__input{padding:0 20px 0 30px}.text-field_with_margin{margin:10px 0}.text-field_size_small .text-field__input{height:34px;line-height:34px}.text-field__input{width:100%;height:38px;padding:0 20px;color:var(--primary-text);line-height:38px;background:var(--input-background);border:none;border-radius:3px;outline:none}.text-field__input:-ms-input-placeholder{color:var(--secondary-text);font-size:14px}.text-field__input::-moz-placeholder{color:var(--secondary-text);font-size:14px;opacity:1}.text-field__input::placeholder{color:var(--secondary-text);font-size:14px;opacity:1}.text-field__input:focus:not(:disabled)+.text-field__icon,.text-field_type_active .text-field__input:not(:disabled)+.text-field__icon{fill:var(--primary-dark)}.text-field__input:disabled,.text-field__input:disabled+.text-field__icon{opacity:var(--disabled-alpha)}.text-field__icon{position:absolute;top:50%;left:10px;width:12px;height:12px;margin-top:-6px;fill:#b2b2b2}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_error_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_error_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_error_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_error_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_error_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-error{position:relative;display:block;width:200px;min-height:52px;padding:16px;font-size:14px;line-height:14px;border:2px solid var(--error);border-radius:4px}.form-error_width_full{width:100%}.form-error_with_margin{margin:10px 0}.form-error__icon{position:absolute;top:-10px;left:-10px;width:24px;height:24px;padding:2px;fill:var(--error);background:var(--primary-background);border-radius:50%}.form-error__text:not(:last-child){margin-bottom:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_form_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form{display:block}.form__title{padding:0 20px;color:var(--primary-text);font-weight:400;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}.form__content{width:100%}.form__row{margin:0 0 16px}.form__row:last-child{margin-bottom:0}.form__row_align_center{text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reset_password_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reset_password_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reset_password_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reset_password_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_reset_password_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_checkbox_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_checkbox_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_checkbox_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_checkbox_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_checkbox_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checkbox{position:relative;display:block;font-size:14px;text-align:left;-webkit-tap-highlight-color:transparent}.checkbox_display_inline-block{display:inline-block}.checkbox_with_margin{margin:10px 0}.checkbox__label{display:inline;vertical-align:top;clear:both;padding-left:1px;line-height:1.25em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox__label:not(:empty){padding-left:.75em}.checkbox__label:after,.checkbox__label:before{content:\"\";position:absolute;top:0;left:0}.checkbox__label:before{width:1.25em;height:1.25em;cursor:pointer;background:transparent;border:2px solid var(--gray_500);border-radius:.125em;transition:background .3s}.checkbox__input{display:block;visibility:hidden;float:left;width:1.25em;margin:0;font-size:inherit;outline:none}.checkbox__input:checked+.checkbox__label:before{background:var(--primary-dark);border:none}.checkbox__input:checked+.checkbox__label:after{width:.85em;height:.472222222222222em;border-color:#fff;border-style:none none solid solid;border-width:.15em;transform:translate(.2em,.298076923076923em) rotate(-45deg)}.checkbox__input:disabled+.checkbox__label:after,.checkbox__input:disabled+.checkbox__label:before{opacity:var(--disabled-alpha)}.checkbox__input:disabled:checked+.checkbox__label:before{background:var(--gray_500);opacity:var(--disabled-alpha)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_tile_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_tile_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_tile_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_tile_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_tile_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tile{display:block;background:var(--primary-background);box-shadow:0 0 5px rgba(0,0,0,.3)}.tile_padding_medium{padding:16px 24px}.tile_padding_small{padding:8px 16px}.tile_borders_none{border-radius:0}.tile_borders_top{border-radius:4px 4px 0 0}.tile_borders_right{border-radius:0 4px 0 4px}.tile_borders_left{border-radius:4px 0 4px 0}.tile_borders_bottom{border-radius:0 0 4px 4px}.tile_borders_all{border-radius:4px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal{display:flex;justify-content:center;align-items:center;min-width:320px;padding:8px 16px;background:transparent}.modal__tile{display:flex;flex-direction:column;max-width:95%;max-height:85%}.modal__icon{max-width:100%;max-height:100%}.modal__header{display:flex;align-items:center;width:100%;margin:0 0 16px;padding:0 0 8px;border-bottom:1px solid hsla(0,0%,100%,.07)}.modal__header:last-child{margin-bottom:0}.modal__title{overflow:hidden;flex-grow:1;flex-shrink:1;margin:0 12px 0 0;color:var(--primary-text);font-size:19px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}.modal__title:last-child{margin-right:0}.modal__close{flex-grow:0;flex-shrink:0;width:32px;height:32px;margin-right:12px;padding:4px;color:var(--primary-text);font-size:16px;font-weight:600;cursor:pointer;background:transparent;border:none;border-radius:50%;outline:none}.modal__close:hover{background:hsla(0,0%,100%,.07)}.modal__close:last-child{margin-right:0}.modal__close .icon{fill:currentColor}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vm--container .vm--modal{background-color:transparent;box-shadow:none;border-radius:0;overflow:unset}.vm--container .vm-transition--overlay-enter-active,.vm--container .vm-transition--overlay-leave-active{transition:all .25s}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_login_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_login_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_login_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_login_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_login_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login-modal{display:block}.login-modal__row{text-align:center}.login-modal__row:after{content:\"\";display:table;clear:both}.login-modal__link{display:block;margin:8px 0;font-size:14px}.login-modal__buttons:after{content:\"\";display:table;clear:both}.login-modal__button{float:left}.login-modal__button:last-child{float:right;margin-left:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_register_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_register_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_register_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_register_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_register_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".register-modal{display:block}.register-modal__row{text-align:center}.register-modal__row:after{content:\"\";display:table;clear:both}.register-modal__link{display:block;margin:8px 0;font-size:14px}.register-modal__buttons:after{content:\"\";display:table;clear:both}.register-modal__button{float:left}.register-modal__button:last-child{float:right;margin-left:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.6997a66.png";

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_avatar_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_avatar_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_avatar_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_avatar_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_avatar_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar{position:relative;display:inline-block;overflow:hidden;width:100%;max-width:100%;height:100%;max-height:100%;color:var(--secondary-text);text-align:center;border-radius:50%}.avatar__loading{display:flex;justify-content:center;align-items:center;width:70px;height:70px}.avatar__loading-image{width:60px;height:60px}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar__content{fill:currentColor;color:#fff;font-size:16px;text-transform:uppercase}.avatar__upload{position:absolute;top:0;right:0;left:0;bottom:0;padding:20px;cursor:pointer;background-color:rgba(0,0,0,.5);opacity:0;transition:opacity .2s ease}.avatar__upload:hover{opacity:1}.avatar__upload-icon{fill:hsla(0,0%,100%,.5)}.avatar__upload-input{display:none}.avatar_size_tiny{width:30px;max-width:30px;height:30px;max-height:30px}.avatar_size_tiny .avatar__content{font-size:16px;line-height:30px}.avatar_size_medium{width:50px;max-width:50px;height:50px;max-height:50px}.avatar_size_medium .avatar__content{font-size:24px;line-height:50px}.avatar_size_large{width:70px;max-width:70px;height:70px;max-height:70px}.avatar_size_large .avatar__content{font-size:32px;line-height:70px}.avatar_size_stretch{width:100%;max-width:100%;height:100%;max-height:100%}.avatar_size_stretch .avatar__content{font-size:48px;line-height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_profile_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_profile_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_profile_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_profile_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_profile_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profile-modal{display:block}.profile-modal__user{display:flex;width:100%}.profile-modal__avatar{display:inline-block;flex-shrink:0;margin:0 16px 0 0}.profile-modal__avatar:last-child{margin-right:0}.profile-modal__username{display:block;margin:0 0 4px;font-size:20px;font-weight:600}.profile-modal__username-edit{display:inline-block;vertical-align:top;width:24px;height:24px;margin:0 0 0 4px;padding:0;fill:var(--gray_800);cursor:pointer;background:transparent;border:none;outline:none;transition:fill .2s ease}.profile-modal__username-edit:hover{fill:var(--gray_500)}.profile-modal__registered{display:block;color:var(--secondary-text);font-size:13px;font-style:italic;white-space:nowrap}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_password_reset_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_password_reset_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_password_reset_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_password_reset_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_password_reset_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".request-password-reset-modal{display:block;max-width:320px}.request-password-reset-modal__illustration{margin:0 0 16px;text-align:center}.request-password-reset-modal__illustration:last-child{margin-bottom:0}.request-password-reset-modal__image{display:inline-block;max-height:80px}.request-password-reset-modal__text{margin:0 0 16px;font-size:16px;text-align:center}.request-password-reset-modal__text:last-child{margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_email_confirmation_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_email_confirmation_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_email_confirmation_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_email_confirmation_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_request_email_confirmation_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".request-email-confirmation-modal{display:block;max-width:320px}.request-email-confirmation-modal__illustration{margin:0 0 16px;text-align:center}.request-email-confirmation-modal__illustration:last-child{margin-bottom:0}.request-email-confirmation-modal__image{display:inline-block;max-height:80px}.request-email-confirmation-modal__text{margin:0 0 16px;font-size:16px;text-align:center}.request-email-confirmation-modal__text:last-child{margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_email_confirmed_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_email_confirmed_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_email_confirmed_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_email_confirmed_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_email_confirmed_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".email-confirmed-modal{display:block;max-width:320px}.email-confirmed-modal__illustration{margin:0 0 16px;text-align:center}.email-confirmed-modal__illustration:last-child{margin-bottom:0}.email-confirmed-modal__image{display:inline-block;max-height:80px}.email-confirmed-modal__text{margin:0 0 16px;font-size:16px;text-align:center}.email-confirmed-modal__text:last-child{margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_style_index_0_id_4b0a875a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_style_index_0_id_4b0a875a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_style_index_0_id_4b0a875a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_style_index_0_id_4b0a875a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_style_index_0_id_4b0a875a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-enter-active[data-v-4b0a875a],.v-leave-active[data-v-4b0a875a]{transition:all .2s}.v-enter[data-v-4b0a875a],.v-leave-to[data-v-4b0a875a]{margin:8px 0;opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_select_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_select_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_select_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_select_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_select_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".select{position:relative;display:block}.select__title{position:relative;overflow:hidden;padding:8px 36px 8px 20px;color:var(--primary-text);white-space:nowrap;text-overflow:ellipsis;cursor:pointer;background:var(--select-background);border:1px solid var(--select-border);border-radius:3px;outline:none}.select__title:focus,.select__title:hover{background:hsla(0,0%,100%,.06)}.select__title:after{content:\"▼\";position:absolute;right:8px;font-size:11px;line-height:16px}.select__list{position:absolute;top:100%;z-index:100;overflow:hidden;min-width:100%;margin:4px 0;background:var(--primary-background);border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.6)}.select__item{padding:8px 20px;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:1px solid rgba(0,0,0,.2)}.select__item:hover{background:rgba(0,0,0,.2)}.select__item:last-child{border-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_punishment_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_punishment_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_punishment_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_punishment_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_punishment_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".punishment-modal{display:block}.punishment-modal__row{display:flex;margin:0 0 8px}.punishment-modal__row:last-child{margin-top:20px;margin-bottom:0}.punishment-modal__row-description{display:block;height:34px;margin:0 8px 0 0;line-height:34px}.punishment-modal__row-description:last-child{margin-right:0}.punishment-modal__row-content{display:block}.punishment-modal__select{margin:0 0 4px}.punishment-modal__select:last-child{margin-bottom:0}.punishment-modal__custom-time{display:flex;align-items:flex-end}.punishment-modal__custom-time .punishment-modal__input{display:inline-block;width:110px;margin:0 4px 0 0}.punishment-modal__custom-time .punishment-modal__input:last-child{margin-right:0}.punishment-modal__checkbox{margin:0 8px 0 0}.punishment-modal__checkbox:last-child{margin-right:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_switch_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_switch_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_switch_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_switch_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_switch_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".switch{display:block;margin:16px 0;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.switch_display_inline-block{display:inline-block}.switch_with_margin{margin:10px 0}.switch__input{display:none}.switch__input:checked+.switch__label:before{background:var(--primary)}.switch__input:checked+.switch__label:after{left:16px;background:var(--primary)}.switch__input:checked:disabled+.switch__label:before{opacity:.3}.switch__input:checked:disabled:checked+.switch__label{opacity:.4}.switch__input:not(:checked):disabled+.switch__label{opacity:.6}.switch__label{position:relative;display:inline-block;vertical-align:bottom;min-height:16px;margin-bottom:0;padding:0;line-height:16px;cursor:pointer}.switch__label:not(:empty){padding:0 40px}.switch__label:after,.switch__label:before{content:\"\";position:absolute;border-radius:16px;transition:all .15s ease}.switch__label:after{top:0;left:0;width:16px;height:16px;background:#fff;box-shadow:var(--shadow) 0 1px 3px}.switch__label:before{top:-2px;left:-2px;width:36px;height:20px;background:var(--primary);opacity:.4}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_settings_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_settings_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_settings_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_settings_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_settings_modal_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".punishment-modal{display:block}.punishment-modal__row{display:flex;margin:0 0 8px}.punishment-modal__row:last-child{margin-top:20px;margin-bottom:0}.punishment-modal__row-description{display:block;height:34px;margin:0 8px 0 0;line-height:34px}.punishment-modal__row-description:last-child{margin-right:0}.punishment-modal__row-content{display:block}.punishment-modal__select{margin:0 0 4px}.punishment-modal__select:last-child{margin-bottom:0}.punishment-modal__custom-time{display:flex;align-items:flex-end}.punishment-modal__custom-time .punishment-modal__input{display:inline-block;width:110px;margin:0 4px 0 0}.punishment-modal__custom-time .punishment-modal__input:last-child{margin-right:0}.punishment-modal__checkbox{margin:0 8px 0 0}.punishment-modal__checkbox:last-child{margin-right:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{margin:.67em 0;font-size:2em}hr{overflow:visible;box-sizing:content-box;height:0}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;border-bottom:none}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{position:relative;vertical-align:baseline;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}[type=button]-moz-focusring,[type=reset]-moz-focusring,[type=submit]-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{display:table;box-sizing:border-box;max-width:100%;padding:0;color:inherit;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}details{display:block}summary{display:list-item}[hidden],template{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".grid{display:block;box-sizing:border-box;min-width:320px}.grid__container{box-sizing:border-box;width:100%;max-width:1440px;margin:0 auto}.grid__container_width_full,.grid__container padding 0 grids.default.gutter_full{width:100%;max-width:100%}.grid__group{display:flex;flex-wrap:wrap;box-sizing:border-box;margin:0 -10px}.grid__group_no_gutters .grid__col{padding:0}.grid__group_align-items_start{align-items:flex-start}.grid__group_align-items_center{align-items:center}.grid__group_align-items_end{align-items:flex-end}@media screen and (min-width:1px){.grid__group_align-items_xs-start{align-items:flex-start}}@media screen and (min-width:1px){.grid__group_align-items_xs-center{align-items:center}}@media screen and (min-width:1px){.grid__group_align-items_xs-end{align-items:flex-end}}@media screen and (min-width:480px){.grid__group_align-items_s-start{align-items:flex-start}}@media screen and (min-width:480px){.grid__group_align-items_s-center{align-items:center}}@media screen and (min-width:480px){.grid__group_align-items_s-end{align-items:flex-end}}@media screen and (min-width:768px){.grid__group_align-items_m-start{align-items:flex-start}}@media screen and (min-width:768px){.grid__group_align-items_m-center{align-items:center}}@media screen and (min-width:768px){.grid__group_align-items_m-end{align-items:flex-end}}@media screen and (min-width:1025px){.grid__group_align-items_l-start{align-items:flex-start}}@media screen and (min-width:1025px){.grid__group_align-items_l-center{align-items:center}}@media screen and (min-width:1025px){.grid__group_align-items_l-end{align-items:flex-end}}@media screen and (min-width:1170px){.grid__group_align-items_xl-start{align-items:flex-start}}@media screen and (min-width:1170px){.grid__group_align-items_xl-center{align-items:center}}@media screen and (min-width:1170px){.grid__group_align-items_xl-end{align-items:flex-end}}@media screen and (min-width:1440px){.grid__group_align-items_xxl-start{align-items:flex-start}}@media screen and (min-width:1440px){.grid__group_align-items_xxl-center{align-items:center}}@media screen and (min-width:1440px){.grid__group_align-items_xxl-end{align-items:flex-end}}.grid__group_justify-content_start{justify-content:flex-start}.grid__group_justify-content_center{justify-content:center}.grid__group_justify-content_end{justify-content:flex-end}.grid__group_justify-content_around{justify-content:space-around}.grid__group_justify-content_between{justify-content:space-between}@media screen and (min-width:1px){.grid__group_justify-content_xs-start{justify-content:flex-start}}@media screen and (min-width:1px){.grid__group_justify-content_xs-center{justify-content:center}}@media screen and (min-width:1px){.grid__group_justify-content_xs-end{justify-content:flex-end}}@media screen and (min-width:1px){.grid__group_justify-content_xs-around{justify-content:space-around}}@media screen and (min-width:1px){.grid__group_justify-content_xs-between{justify-content:space-between}}@media screen and (min-width:480px){.grid__group_justify-content_s-start{justify-content:flex-start}}@media screen and (min-width:480px){.grid__group_justify-content_s-center{justify-content:center}}@media screen and (min-width:480px){.grid__group_justify-content_s-end{justify-content:flex-end}}@media screen and (min-width:480px){.grid__group_justify-content_s-around{justify-content:space-around}}@media screen and (min-width:480px){.grid__group_justify-content_s-between{justify-content:space-between}}@media screen and (min-width:768px){.grid__group_justify-content_m-start{justify-content:flex-start}}@media screen and (min-width:768px){.grid__group_justify-content_m-center{justify-content:center}}@media screen and (min-width:768px){.grid__group_justify-content_m-end{justify-content:flex-end}}@media screen and (min-width:768px){.grid__group_justify-content_m-around{justify-content:space-around}}@media screen and (min-width:768px){.grid__group_justify-content_m-between{justify-content:space-between}}@media screen and (min-width:1025px){.grid__group_justify-content_l-start{justify-content:flex-start}}@media screen and (min-width:1025px){.grid__group_justify-content_l-center{justify-content:center}}@media screen and (min-width:1025px){.grid__group_justify-content_l-end{justify-content:flex-end}}@media screen and (min-width:1025px){.grid__group_justify-content_l-around{justify-content:space-around}}@media screen and (min-width:1025px){.grid__group_justify-content_l-between{justify-content:space-between}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-start{justify-content:flex-start}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-center{justify-content:center}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-end{justify-content:flex-end}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-around{justify-content:space-around}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-between{justify-content:space-between}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-start{justify-content:flex-start}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-center{justify-content:center}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-end{justify-content:flex-end}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-around{justify-content:space-around}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-between{justify-content:space-between}}.grid__col{position:relative;flex-grow:1;flex-basis:0%;box-sizing:border-box}.grid .grid__group>.grid__col{min-height:1px;padding:0 10px}.grid .grid__group>.grid__col_align-self_start{align-items:flex-start}.grid .grid__group>.grid__col_align-self_center{align-items:center}.grid .grid__group>.grid__col_align-self_end{align-items:flex-end}@media screen and (min-width:1px){.grid .grid__group>.grid__col_align-self_xs-start{align-items:flex-start}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_align-self_xs-center{align-items:center}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_align-self_xs-end{align-items:flex-end}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_align-self_s-start{align-items:flex-start}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_align-self_s-center{align-items:center}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_align-self_s-end{align-items:flex-end}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_align-self_m-start{align-items:flex-start}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_align-self_m-center{align-items:center}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_align-self_m-end{align-items:flex-end}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_align-self_l-start{align-items:flex-start}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_align-self_l-center{align-items:center}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_align-self_l-end{align-items:flex-end}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_align-self_xl-start{align-items:flex-start}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_align-self_xl-center{align-items:center}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_align-self_xl-end{align-items:flex-end}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_align-self_xxl-start{align-items:flex-start}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_align-self_xxl-center{align-items:center}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_align-self_xxl-end{align-items:flex-end}}.grid .grid__group>.grid__col_size_auto{flex-grow:1}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-auto{flex-grow:1}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-auto{flex-grow:1}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-auto{flex-grow:1}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-auto{flex-grow:1}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-auto{flex-grow:1}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-auto{flex-grow:1}}.grid .grid__group>.grid__col_size_1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}.grid .grid__group>.grid__col_size_2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}.grid .grid__group>.grid__col_size_3{flex:0 0 25%;max-width:25%}.grid .grid__group>.grid__col_size_4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}.grid .grid__group>.grid__col_size_5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}.grid .grid__group>.grid__col_size_6{flex:0 0 50%;max-width:50%}.grid .grid__group>.grid__col_size_7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}.grid .grid__group>.grid__col_size_8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}.grid .grid__group>.grid__col_size_9{flex:0 0 75%;max-width:75%}.grid .grid__group>.grid__col_size_10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}.grid .grid__group>.grid__col_size_11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}.grid .grid__group>.grid__col_size_12{flex:0 0 100%;max-width:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-12{flex:0 0 100%;max-width:100%}}.grid .grid__group>.grid__col_order_1{order:1}.grid .grid__group>.grid__col_order_2{order:2}.grid .grid__group>.grid__col_order_3{order:3}.grid .grid__group>.grid__col_order_4{order:4}.grid .grid__group>.grid__col_order_5{order:5}.grid .grid__group>.grid__col_order_6{order:6}.grid .grid__group>.grid__col_order_7{order:7}.grid .grid__group>.grid__col_order_8{order:8}.grid .grid__group>.grid__col_order_9{order:9}.grid .grid__group>.grid__col_order_10{order:10}.grid .grid__group>.grid__col_order_11{order:11}.grid .grid__group>.grid__col_order_12{order:12}.grid .grid__group>.grid__col_order_first{order:-1}.grid .grid__group>.grid__col_order_last{order:13}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-1{order:1}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-2{order:2}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-3{order:3}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-4{order:4}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-5{order:5}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-6{order:6}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-7{order:7}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-8{order:8}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-9{order:9}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-10{order:10}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-11{order:11}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-12{order:12}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-first{order:-1}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-last{order:13}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-1{order:1}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-2{order:2}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-3{order:3}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-4{order:4}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-5{order:5}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-6{order:6}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-7{order:7}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-8{order:8}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-9{order:9}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-10{order:10}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-11{order:11}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-12{order:12}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-first{order:-1}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-last{order:13}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-1{order:1}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-2{order:2}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-3{order:3}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-4{order:4}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-5{order:5}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-6{order:6}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-7{order:7}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-8{order:8}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-9{order:9}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-10{order:10}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-11{order:11}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-12{order:12}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-first{order:-1}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-last{order:13}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-1{order:1}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-2{order:2}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-3{order:3}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-4{order:4}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-5{order:5}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-6{order:6}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-7{order:7}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-8{order:8}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-9{order:9}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-10{order:10}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-11{order:11}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-12{order:12}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-first{order:-1}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-last{order:13}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-1{order:1}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-2{order:2}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-3{order:3}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-4{order:4}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-5{order:5}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-6{order:6}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-7{order:7}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-8{order:8}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-9{order:9}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-10{order:10}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-11{order:11}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-12{order:12}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-first{order:-1}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-last{order:13}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-1{order:1}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-2{order:2}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-3{order:3}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-4{order:4}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-5{order:5}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-6{order:6}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-7{order:7}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-8{order:8}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-9{order:9}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-10{order:10}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-11{order:11}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-12{order:12}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-first{order:-1}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-last{order:13}}.grid .grid__group>.grid__col_push_1{position:relative;left:8.333333333333334%}.grid .grid__group>.grid__col_push_2{position:relative;left:16.666666666666668%}.grid .grid__group>.grid__col_push_3{position:relative;left:25%}.grid .grid__group>.grid__col_push_4{position:relative;left:33.333333333333336%}.grid .grid__group>.grid__col_push_5{position:relative;left:41.66666666666667%}.grid .grid__group>.grid__col_push_6{position:relative;left:50%}.grid .grid__group>.grid__col_push_7{position:relative;left:58.333333333333336%}.grid .grid__group>.grid__col_push_8{position:relative;left:66.66666666666667%}.grid .grid__group>.grid__col_push_9{position:relative;left:75%}.grid .grid__group>.grid__col_push_10{position:relative;left:83.33333333333334%}.grid .grid__group>.grid__col_push_11{position:relative;left:91.66666666666667%}.grid .grid__group>.grid__col_push_12{position:relative;left:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-3{position:relative;left:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-6{position:relative;left:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-9{position:relative;left:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-12{position:relative;left:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-3{position:relative;left:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-6{position:relative;left:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-9{position:relative;left:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-12{position:relative;left:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-3{position:relative;left:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-6{position:relative;left:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-9{position:relative;left:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-12{position:relative;left:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-3{position:relative;left:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-6{position:relative;left:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-9{position:relative;left:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-12{position:relative;left:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-3{position:relative;left:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-6{position:relative;left:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-9{position:relative;left:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-12{position:relative;left:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-3{position:relative;left:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-6{position:relative;left:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-9{position:relative;left:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-12{position:relative;left:100%}}.grid .grid__group>.grid__col_pull_1{position:relative;right:8.333333333333334%}.grid .grid__group>.grid__col_pull_2{position:relative;right:16.666666666666668%}.grid .grid__group>.grid__col_pull_3{position:relative;right:25%}.grid .grid__group>.grid__col_pull_4{position:relative;right:33.333333333333336%}.grid .grid__group>.grid__col_pull_5{position:relative;right:41.66666666666667%}.grid .grid__group>.grid__col_pull_6{position:relative;right:50%}.grid .grid__group>.grid__col_pull_7{position:relative;right:58.333333333333336%}.grid .grid__group>.grid__col_pull_8{position:relative;right:66.66666666666667%}.grid .grid__group>.grid__col_pull_9{position:relative;right:75%}.grid .grid__group>.grid__col_pull_10{position:relative;right:83.33333333333334%}.grid .grid__group>.grid__col_pull_11{position:relative;right:91.66666666666667%}.grid .grid__group>.grid__col_pull_12{position:relative;right:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-3{position:relative;right:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-6{position:relative;right:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-9{position:relative;right:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-12{position:relative;right:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-3{position:relative;right:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-6{position:relative;right:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-9{position:relative;right:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-12{position:relative;right:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-3{position:relative;right:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-6{position:relative;right:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-9{position:relative;right:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-12{position:relative;right:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-3{position:relative;right:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-6{position:relative;right:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-9{position:relative;right:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-12{position:relative;right:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-3{position:relative;right:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-6{position:relative;right:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-9{position:relative;right:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-12{position:relative;right:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-3{position:relative;right:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-6{position:relative;right:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-9{position:relative;right:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-12{position:relative;right:100%}}.grid .grid__group>.grid__col_offset_1{margin-left:8.333333333333334%}.grid .grid__group>.grid__col_offset_2{margin-left:16.666666666666668%}.grid .grid__group>.grid__col_offset_3{margin-left:25%}.grid .grid__group>.grid__col_offset_4{margin-left:33.333333333333336%}.grid .grid__group>.grid__col_offset_5{margin-left:41.66666666666667%}.grid .grid__group>.grid__col_offset_6{margin-left:50%}.grid .grid__group>.grid__col_offset_7{margin-left:58.333333333333336%}.grid .grid__group>.grid__col_offset_8{margin-left:66.66666666666667%}.grid .grid__group>.grid__col_offset_9{margin-left:75%}.grid .grid__group>.grid__col_offset_10{margin-left:83.33333333333334%}.grid .grid__group>.grid__col_offset_11{margin-left:91.66666666666667%}.grid .grid__group>.grid__col_offset_12{margin-left:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-1{margin-left:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-2{margin-left:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-3{margin-left:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-4{margin-left:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-5{margin-left:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-6{margin-left:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-7{margin-left:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-8{margin-left:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-9{margin-left:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-10{margin-left:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-11{margin-left:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-12{margin-left:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-1{margin-left:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-2{margin-left:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-3{margin-left:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-4{margin-left:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-5{margin-left:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-6{margin-left:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-7{margin-left:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-8{margin-left:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-9{margin-left:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-10{margin-left:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-11{margin-left:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-12{margin-left:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-1{margin-left:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-2{margin-left:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-3{margin-left:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-4{margin-left:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-5{margin-left:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-6{margin-left:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-7{margin-left:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-8{margin-left:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-9{margin-left:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-10{margin-left:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-11{margin-left:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-12{margin-left:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-1{margin-left:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-2{margin-left:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-3{margin-left:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-4{margin-left:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-5{margin-left:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-6{margin-left:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-7{margin-left:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-8{margin-left:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-9{margin-left:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-10{margin-left:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-11{margin-left:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-12{margin-left:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-3{margin-left:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-6{margin-left:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-9{margin-left:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-12{margin-left:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-3{margin-left:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-6{margin-left:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-9{margin-left:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-12{margin-left:100%}}.grid__holder{box-sizing:border-box;height:100%}.grid__panel{padding:10px}.grid__breaker,.grid__panel{display:block;box-sizing:border-box}.grid__breaker{width:100%!important}.grid__breaker_xs{display:block}@media screen and (min-width:1px){.grid__breaker_xs{display:none}}.grid__breaker_s{display:block}@media screen and (min-width:480px){.grid__breaker_s{display:none}}.grid__breaker_m{display:block}@media screen and (min-width:768px){.grid__breaker_m{display:none}}.grid__breaker_l{display:block}@media screen and (min-width:1025px){.grid__breaker_l{display:none}}.grid__breaker_xl{display:block}@media screen and (min-width:1170px){.grid__breaker_xl{display:none}}.grid__breaker_xxl{display:block}@media screen and (min-width:1440px){.grid__breaker_xxl{display:none}}.grid__view-panel{box-sizing:border-box;padding:30px 0}.grid_name_type .grid__container_width_full,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_full{width:100%;max-width:100%}@media screen and (min-width:1px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:320px}}@media screen and (min-width:480px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:380px}}@media screen and (min-width:768px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:668px}}@media screen and (min-width:1025px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:925px}}@media screen and (min-width:1170px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:1070px}}@media screen and (min-width:1440px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:1340px}}.grid_name_type .grid__group>.grid__col{min-height:1px;padding:0 10px}.grid_name_type .grid__group>.grid__col_align-self_start{align-items:flex-start}.grid_name_type .grid__group>.grid__col_align-self_center{align-items:center}.grid_name_type .grid__group>.grid__col_align-self_end{align-items:flex-end}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_align-self_xs-start{align-items:flex-start}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_align-self_xs-center{align-items:center}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_align-self_xs-end{align-items:flex-end}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_align-self_s-start{align-items:flex-start}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_align-self_s-center{align-items:center}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_align-self_s-end{align-items:flex-end}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_align-self_m-start{align-items:flex-start}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_align-self_m-center{align-items:center}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_align-self_m-end{align-items:flex-end}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_align-self_l-start{align-items:flex-start}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_align-self_l-center{align-items:center}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_align-self_l-end{align-items:flex-end}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_align-self_xl-start{align-items:flex-start}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_align-self_xl-center{align-items:center}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_align-self_xl-end{align-items:flex-end}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_align-self_xxl-start{align-items:flex-start}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_align-self_xxl-center{align-items:center}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_align-self_xxl-end{align-items:flex-end}}.grid_name_type .grid__group>.grid__col_size_auto{flex-grow:1}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-auto{flex-grow:1}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-auto{flex-grow:1}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-auto{flex-grow:1}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-auto{flex-grow:1}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-auto{flex-grow:1}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-auto{flex-grow:1}}.grid_name_type .grid__group>.grid__col_size_1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}.grid_name_type .grid__group>.grid__col_size_2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}.grid_name_type .grid__group>.grid__col_size_3{flex:0 0 25%;max-width:25%}.grid_name_type .grid__group>.grid__col_size_4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}.grid_name_type .grid__group>.grid__col_size_5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}.grid_name_type .grid__group>.grid__col_size_6{flex:0 0 50%;max-width:50%}.grid_name_type .grid__group>.grid__col_size_7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}.grid_name_type .grid__group>.grid__col_size_8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}.grid_name_type .grid__group>.grid__col_size_9{flex:0 0 75%;max-width:75%}.grid_name_type .grid__group>.grid__col_size_10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}.grid_name_type .grid__group>.grid__col_size_11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}.grid_name_type .grid__group>.grid__col_size_12{flex:0 0 100%;max-width:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-12{flex:0 0 100%;max-width:100%}}.grid_name_type .grid__group>.grid__col_order_1{order:1}.grid_name_type .grid__group>.grid__col_order_2{order:2}.grid_name_type .grid__group>.grid__col_order_3{order:3}.grid_name_type .grid__group>.grid__col_order_4{order:4}.grid_name_type .grid__group>.grid__col_order_5{order:5}.grid_name_type .grid__group>.grid__col_order_6{order:6}.grid_name_type .grid__group>.grid__col_order_7{order:7}.grid_name_type .grid__group>.grid__col_order_8{order:8}.grid_name_type .grid__group>.grid__col_order_9{order:9}.grid_name_type .grid__group>.grid__col_order_10{order:10}.grid_name_type .grid__group>.grid__col_order_11{order:11}.grid_name_type .grid__group>.grid__col_order_12{order:12}.grid_name_type .grid__group>.grid__col_order_first{order:-1}.grid_name_type .grid__group>.grid__col_order_last{order:13}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-1{order:1}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-2{order:2}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-3{order:3}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-4{order:4}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-5{order:5}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-6{order:6}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-7{order:7}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-8{order:8}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-9{order:9}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-10{order:10}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-11{order:11}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-12{order:12}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-first{order:-1}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-last{order:13}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-1{order:1}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-2{order:2}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-3{order:3}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-4{order:4}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-5{order:5}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-6{order:6}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-7{order:7}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-8{order:8}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-9{order:9}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-10{order:10}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-11{order:11}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-12{order:12}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-first{order:-1}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-last{order:13}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-1{order:1}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-2{order:2}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-3{order:3}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-4{order:4}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-5{order:5}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-6{order:6}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-7{order:7}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-8{order:8}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-9{order:9}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-10{order:10}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-11{order:11}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-12{order:12}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-first{order:-1}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-last{order:13}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-1{order:1}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-2{order:2}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-3{order:3}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-4{order:4}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-5{order:5}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-6{order:6}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-7{order:7}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-8{order:8}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-9{order:9}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-10{order:10}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-11{order:11}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-12{order:12}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-first{order:-1}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-last{order:13}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-1{order:1}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-2{order:2}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-3{order:3}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-4{order:4}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-5{order:5}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-6{order:6}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-7{order:7}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-8{order:8}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-9{order:9}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-10{order:10}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-11{order:11}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-12{order:12}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-first{order:-1}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-last{order:13}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-1{order:1}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-2{order:2}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-3{order:3}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-4{order:4}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-5{order:5}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-6{order:6}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-7{order:7}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-8{order:8}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-9{order:9}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-10{order:10}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-11{order:11}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-12{order:12}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-first{order:-1}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-last{order:13}}.grid_name_type .grid__group>.grid__col_push_1{position:relative;left:8.333333333333334%}.grid_name_type .grid__group>.grid__col_push_2{position:relative;left:16.666666666666668%}.grid_name_type .grid__group>.grid__col_push_3{position:relative;left:25%}.grid_name_type .grid__group>.grid__col_push_4{position:relative;left:33.333333333333336%}.grid_name_type .grid__group>.grid__col_push_5{position:relative;left:41.66666666666667%}.grid_name_type .grid__group>.grid__col_push_6{position:relative;left:50%}.grid_name_type .grid__group>.grid__col_push_7{position:relative;left:58.333333333333336%}.grid_name_type .grid__group>.grid__col_push_8{position:relative;left:66.66666666666667%}.grid_name_type .grid__group>.grid__col_push_9{position:relative;left:75%}.grid_name_type .grid__group>.grid__col_push_10{position:relative;left:83.33333333333334%}.grid_name_type .grid__group>.grid__col_push_11{position:relative;left:91.66666666666667%}.grid_name_type .grid__group>.grid__col_push_12{position:relative;left:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-3{position:relative;left:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-6{position:relative;left:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-9{position:relative;left:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-12{position:relative;left:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-3{position:relative;left:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-6{position:relative;left:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-9{position:relative;left:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-12{position:relative;left:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-3{position:relative;left:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-6{position:relative;left:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-9{position:relative;left:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-12{position:relative;left:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-3{position:relative;left:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-6{position:relative;left:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-9{position:relative;left:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-12{position:relative;left:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-3{position:relative;left:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-6{position:relative;left:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-9{position:relative;left:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-12{position:relative;left:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-3{position:relative;left:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-6{position:relative;left:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-9{position:relative;left:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-12{position:relative;left:100%}}.grid_name_type .grid__group>.grid__col_pull_1{position:relative;right:8.333333333333334%}.grid_name_type .grid__group>.grid__col_pull_2{position:relative;right:16.666666666666668%}.grid_name_type .grid__group>.grid__col_pull_3{position:relative;right:25%}.grid_name_type .grid__group>.grid__col_pull_4{position:relative;right:33.333333333333336%}.grid_name_type .grid__group>.grid__col_pull_5{position:relative;right:41.66666666666667%}.grid_name_type .grid__group>.grid__col_pull_6{position:relative;right:50%}.grid_name_type .grid__group>.grid__col_pull_7{position:relative;right:58.333333333333336%}.grid_name_type .grid__group>.grid__col_pull_8{position:relative;right:66.66666666666667%}.grid_name_type .grid__group>.grid__col_pull_9{position:relative;right:75%}.grid_name_type .grid__group>.grid__col_pull_10{position:relative;right:83.33333333333334%}.grid_name_type .grid__group>.grid__col_pull_11{position:relative;right:91.66666666666667%}.grid_name_type .grid__group>.grid__col_pull_12{position:relative;right:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-3{position:relative;right:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-6{position:relative;right:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-9{position:relative;right:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-12{position:relative;right:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-3{position:relative;right:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-6{position:relative;right:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-9{position:relative;right:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-12{position:relative;right:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-3{position:relative;right:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-6{position:relative;right:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-9{position:relative;right:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-12{position:relative;right:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-3{position:relative;right:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-6{position:relative;right:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-9{position:relative;right:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-12{position:relative;right:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-3{position:relative;right:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-6{position:relative;right:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-9{position:relative;right:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-12{position:relative;right:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-3{position:relative;right:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-6{position:relative;right:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-9{position:relative;right:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-12{position:relative;right:100%}}.grid_name_type .grid__group>.grid__col_offset_1{margin-left:8.333333333333334%}.grid_name_type .grid__group>.grid__col_offset_2{margin-left:16.666666666666668%}.grid_name_type .grid__group>.grid__col_offset_3{margin-left:25%}.grid_name_type .grid__group>.grid__col_offset_4{margin-left:33.333333333333336%}.grid_name_type .grid__group>.grid__col_offset_5{margin-left:41.66666666666667%}.grid_name_type .grid__group>.grid__col_offset_6{margin-left:50%}.grid_name_type .grid__group>.grid__col_offset_7{margin-left:58.333333333333336%}.grid_name_type .grid__group>.grid__col_offset_8{margin-left:66.66666666666667%}.grid_name_type .grid__group>.grid__col_offset_9{margin-left:75%}.grid_name_type .grid__group>.grid__col_offset_10{margin-left:83.33333333333334%}.grid_name_type .grid__group>.grid__col_offset_11{margin-left:91.66666666666667%}.grid_name_type .grid__group>.grid__col_offset_12{margin-left:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-1{margin-left:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-2{margin-left:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-3{margin-left:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-4{margin-left:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-5{margin-left:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-6{margin-left:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-7{margin-left:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-8{margin-left:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-9{margin-left:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-10{margin-left:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-11{margin-left:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-12{margin-left:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-1{margin-left:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-2{margin-left:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-3{margin-left:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-4{margin-left:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-5{margin-left:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-6{margin-left:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-7{margin-left:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-8{margin-left:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-9{margin-left:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-10{margin-left:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-11{margin-left:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-12{margin-left:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-1{margin-left:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-2{margin-left:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-3{margin-left:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-4{margin-left:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-5{margin-left:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-6{margin-left:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-7{margin-left:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-8{margin-left:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-9{margin-left:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-10{margin-left:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-11{margin-left:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-12{margin-left:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-1{margin-left:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-2{margin-left:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-3{margin-left:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-4{margin-left:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-5{margin-left:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-6{margin-left:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-7{margin-left:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-8{margin-left:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-9{margin-left:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-10{margin-left:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-11{margin-left:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-12{margin-left:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-3{margin-left:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-6{margin-left:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-9{margin-left:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-12{margin-left:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-3{margin-left:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-6{margin-left:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-9{margin-left:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-12{margin-left:100%}}.grid_name_type .grid__group_no_gutters .grid__col{padding:0}.grid_style_debug .grid__col{outline:1px solid red}.grid_style_debug .grid__panel{background:#f4f4f4}.grid_style_debug .grid__holder{outline:1px solid green}.grid_style_demo .grid__col{padding-top:5px;padding-bottom:5px}.grid_style_demo .grid__panel{color:#7d7d7d;font-size:14px;line-height:1.2;background:#f4f4f4;border:1px solid #c7c7c7}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt{height:100%}a{color:var(--primary-light);text-decoration:none}a:active,a:focus,a:hover{color:var(--primary);text-decoration:none}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:8px}.scrollbar::-webkit-scrollbar-track{background-color:var(--scrollbar-track)}.link_no_styles{color:inherit;text-decoration:none}ul{margin:0;padding:0;list-style:none}.icon{max-width:100%;max-height:100%}.page{overflow:hidden;height:100%;min-height:100%}.page__wrapper{display:flex;flex-direction:column;height:100%}.page__body{height:100%;min-height:100%;color:var(--primary-text);font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:1.4;background:var(--primary-background)}.page__body,.page__body_overflow_hidden{overflow:hidden}.page__header{z-index:99;width:100%}.page__main{position:relative;display:flex;overflow:hidden;flex-grow:1;flex-basis:100%}.page__main_state_mobile-open .page__aside-footer{right:0}@media screen and (min-width:768px){.page__main_state_mobile-open .page__aside-footer{right:-210px}}@media screen and (min-width:768px){.page__main_state_pc-open .page__chat{margin-right:250px}.page__main_state_pc-open .page__footer{margin-right:-4px}.page__main_state_pc-open .page__aside-footer{right:0}.page__main_state_pc-open .page__aside-menu{transform:rotate(180deg)}}.page__chat{position:relative;display:flex;flex-direction:column;width:100%;height:100%;margin:0 20px 0 0;transition:margin-right .15s ease}@media screen and (min-width:768px){.page__chat{margin-right:4px}}.page__footer{background:transparent;transition:margin-right .15s ease}@media screen and (min-width:768px){.page__footer{margin-right:36px}}.page__aside{position:absolute;top:0;right:-250px;bottom:0;z-index:100;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;flex-shrink:0;width:250px;transition:all .15s ease}.page__aside_state_mobile-open{right:0}@media screen and (min-width:768px){.page__aside_state_mobile-open{right:-250px}}.page__aside_state_mobile-open+.page__aside-button{right:250px}@media screen and (min-width:768px){.page__aside_state_pc-open{right:0}}.page__aside-button{position:absolute;top:0;right:0;bottom:0;z-index:3;display:flex;justify-content:center;align-items:center;width:18px;fill:currentColor;cursor:pointer;background-color:var(--gray_700);transition:all .15s ease}@media screen and (min-width:768px){.page__aside-button{display:none}}.page__aside-icon{width:17px;height:17px}.page__aside-footer{position:absolute;right:-250px;bottom:0;z-index:200;display:flex;width:250px;height:52px;padding:4px;background-color:var(--primary-background);transition:right .15s ease}@media screen and (min-width:768px){.page__aside-footer{right:-210px;padding:4px 4px 4px 50px}}.page__aside-menu{position:absolute;top:10px;left:4px;display:none;width:32px;height:32px;margin:0;padding:4px 0;color:var(--primary-text);cursor:pointer;background:transparent;border:none;outline:none}@media screen and (min-width:768px){.page__aside-menu{display:block}}.page__aside-menu:hover{color:var(--accent-text)}.page__aside-menu .icon{fill:currentColor}.page__reminder{position:absolute;top:0;right:0;left:0;z-index:10}.page__error{margin:0 auto;align-self:center}.page-error{max-width:320px;padding:24px;background:var(--secondary-background);border-radius:4px;box-shadow:var(--shadow) 0 1px 3px}.page-error__illustration{margin:0 0 16px;text-align:center}.page-error__illustration:last-child{margin-bottom:0}.page-error__image{display:inline-block;max-height:100px}.page-error__text{margin:0 0 16px;font-size:20px;text-align:center}.page-error__text:last-child{margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page{--error:#c0392b;--gray_20:#fafafa;--gray_40:#f4f4f4;--gray_50:#f0f0f0;--gray_100:#e2e2e2;--gray_200:#c6c6c6;--gray_300:#afafaf;--gray_400:#959595;--gray_500:#7a7a7a;--gray_600:#606060;--gray_700:#454545;--gray_800:#2f2f2f;--gray_850:#202020;--gray_900:#1a1a1a;--gray_950:#0a0a0a;--green_100:#9591dd;--green_200:#8883d2;--green_300:#817bc8;--green_400:#706bbc;--green_500:#645fac;--green_600:#423e92}.page_theme_light{--primary:var(--green_300);--primary-dark:var(--green_500);--primary-light:var(--green_200);--primary-text:var(--gray_800);--secondary-text:var(--gray_700);--accent-text:var(--green_300);--contrast-text:var(--gray_100);--primary-background:var(--gray_20);--secondary-background:var(--gray_100);--accent-background:var(--green_600);--contrast-background:var(--gray_950);--input-background:var(--gray_50);--input-border:var(--gray_50);--scrollbar-thumb:var(--gray_100);--scrollbar-track:var(--gray_50);--background-hover:var(--gray_50);--background-active:var(--gray_20);--shadow:hsla(0,0%,58.8%,0.14)}.page_theme_dark{--primary:var(--green_400);--primary-dark:var(--green_500);--primary-light:var(--green_200);--primary-text:var(--gray_100);--secondary-text:var(--gray_300);--accent-text:var(--green_200);--contrast-text:var(--gray_950);--primary-background:#201e2f;--secondary-background:#2f2e40;--accent-background:#333;--contrast-background:var(--gray_100);--input-background:hsla(0,0%,100%,0.04);--select-background:hsla(0,0%,100%,0.08);--select-border:hsla(0,0%,100%,0.08);--input-border:var(--gray_800);--scrollbar-thumb:#121212;--scrollbar-track:#1a1a1a;--background-hover:hsla(0,0%,100%,0.05);--background-active:hsla(0,0%,100%,0.1);--shadow:rgba(0,0,0,0.14)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".users-list{display:block;list-style:none}.users-list__item{display:flex;align-items:center;height:46px;margin-bottom:2px;padding:5px 10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:5px;transition:all .15s ease}.users-list__item:hover{background-color:var(--background-hover)}.users-list__item:active{background-color:var(--background-active)}.users-list__item:last-child{margin-bottom:0}.users-list__info{overflow:hidden}.users-list__avatar{flex-shrink:0;width:34px;height:34px;margin-right:10px;border-radius:50%;-o-object-fit:cover;object-fit:cover}.users-list__avatar_type_default{font-size:18px;line-height:34px;text-align:center;text-transform:uppercase;background:hsla(0,0%,100%,.1);border-radius:50%}.users-list__username{font-size:14px;font-weight:400;line-height:20px}.users-list__status,.users-list__username{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.users-list__status{color:var(--secondary-text);font-size:12px;line-height:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aside-panel{display:block;min-height:100%;background-color:var(--secondary-background)}.aside-panel__section{padding:0 17px 30px 10px}.aside-panel__section-title{margin-bottom:10px;padding:0 5px;color:var(--primary-text);font-size:14px;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.aside-panel__section:first-child{padding-top:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aside_footer_vue_vue_type_style_index_0_id_3de8956c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aside_footer_vue_vue_type_style_index_0_id_3de8956c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aside_footer_vue_vue_type_style_index_0_id_3de8956c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aside_footer_vue_vue_type_style_index_0_id_3de8956c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aside_footer_vue_vue_type_style_index_0_id_3de8956c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-enter-active[data-v-3de8956c],.v-leave-active[data-v-3de8956c]{transition:all .2s}.v-enter[data-v-3de8956c],.v-leave-to[data-v-3de8956c]{margin:8px 0;opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_footer_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_footer_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_footer_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_footer_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_footer_styl_vue_type_style_index_1_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aside-footer{display:block;width:100%}.aside-footer__profile{position:relative;display:flex;align-items:center;flex-direction:row-reverse;padding:5px 10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:5px;transition:all .15s ease}.aside-footer__profile:hover{background-color:var(--background-hover)}.aside-footer__profile:active{background-color:var(--background-active)}.aside-footer__profile:last-child{margin-bottom:0}.aside-footer__avatar{flex-shrink:0;width:34px;height:34px;border-radius:50%;-o-object-fit:cover;object-fit:cover}.aside-footer__avatar_type_default{font-size:18px;line-height:34px;text-align:center;text-transform:uppercase;background:hsla(0,0%,100%,.1);border-radius:50%}.aside-footer__username{overflow:hidden;margin-right:10px;font-size:14px;font-weight:400;line-height:20px;white-space:nowrap;text-overflow:ellipsis}.aside-footer__dropdown{position:absolute;right:0;left:0;bottom:calc(100% + 2px);margin:0 0 4px;padding:4px;background:var(--primary-background);border:none;border-radius:4px}.aside-footer__dropdown-item{margin:0 0 4px}.aside-footer__dropdown-item:last-child{margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".context-menu{position:relative;z-index:100;display:block;padding:8px;background:#101010;border-radius:3px;box-shadow:var(--shadow) 0 1px 3px}.context-menu__item{margin:0 0 4px}.context-menu__item:last-child{margin-bottom:0}.context-menu__item_display_only-child{display:none}.context-menu__item_display_only-child:only-child{display:block}.context-menu__item_color_danger{color:#f04747}.context-menu__button{display:flex;align-items:center;width:100%;height:32px;padding:4px;color:inherit;font-size:13px;font-weight:600;cursor:pointer;background:transparent;border:none;outline:none}.context-menu__button:disabled{opacity:.3}.context-menu__button:not(:disabled):hover{color:var(--primary-text);background:var(--primary-dark);border-radius:3px}.context-menu__icon{display:inline-block;width:24px;height:24px;margin-right:8px;fill:currentColor}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_item_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_item_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_item_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_item_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_context_menu_item_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".context-menu-item{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessorType", function() { return accessorType; });
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var typed_vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_auth_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _store_chat_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _store_modals_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _store_settings_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);





const state = () => ({
  now: 0,
  emojisPanelActive: false,
  attachPanelActive: false
});
const mutations = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["mutationTree"])(state, {
  SET_NOW: (_state, payload) => _state.now = payload,
  SET_EMOJIS_PANEL_ACTIVE: (_state, payload) => _state.emojisPanelActive = payload,
  TOGGLE_EMOJIS_PANEL: _state => _state.emojisPanelActive = !_state.emojisPanelActive,
  SET_ATTACH_PANEL_ACTIVE: (_state, payload) => _state.attachPanelActive = payload,
  TOGGLE_ATTACH_PANEL: _state => _state.attachPanelActive = !_state.attachPanelActive
});
const getters = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["getterTree"])(state, {});
const actions = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["actionTree"])({
  state,
  getters,
  mutations
}, {
  async nuxtServerInit({
    commit
  }, context) {
    await Promise.allSettled([context.app.$accessor.auth.nuxtServerInit(context), context.app.$accessor.chat.nuxtServerInit(context), context.app.$accessor.modals.nuxtServerInit(context), context.app.$accessor.settings.nuxtServerInit(context)]);
    commit('SET_NOW', Date.now());
  },

  async nuxtClientInit({
    commit
  }, context) {
    await Promise.allSettled([context.app.$accessor.auth.nuxtClientInit(context), context.app.$accessor.chat.nuxtClientInit(context), context.app.$accessor.modals.nuxtClientInit(context), context.app.$accessor.settings.nuxtClientInit(context)]);
    commit('SET_NOW', Date.now());
    setInterval(() => commit('SET_NOW', Date.now()), 1000);
  }

});
const accessorType = Object(typed_vuex__WEBPACK_IMPORTED_MODULE_0__["getAccessorType"])({
  state,
  actions,
  mutations,
  modules: {
    auth: _store_auth_ts__WEBPACK_IMPORTED_MODULE_1__,
    chat: _store_chat_ts__WEBPACK_IMPORTED_MODULE_2__,
    modals: _store_modals_ts__WEBPACK_IMPORTED_MODULE_3__,
    settings: _store_settings_ts__WEBPACK_IMPORTED_MODULE_4__
  }
});

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("is-https");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLanguageAsync", function() { return loadLanguageAsync; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = [];
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const localeObject = app.i18n.locales.find(l => l[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_CODE_KEY */ "b"]] === locale);

    if (localeObject) {
      const file = localeObject[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_FILE_KEY */ "d"]];

      if (file) {
        // Hiding template directives from eslint so that parsing doesn't break.

        /*  */
        let messages;

        if (false) {}

        if (!messages) {
          try {
            const langFileModule = await __webpack_require__(203)(`./${file}`);
            const getter = langFileModule.default || langFileModule;
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
          }
        }

        if (messages) {
          app.i18n.setLocaleMessage(locale, messages);
          app.i18n.loadedLanguages.push(locale);
        }
        /*  */

      } else {
        // eslint-disable-next-line no-console
        console.warn(`[${_options__WEBPACK_IMPORTED_MODULE_0__[/* MODULE_NAME */ "f"]}] Could not find lang file for locale ${locale}`);
      }
    }
  }
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-US": [
		107,
		0
	],
	"./en-US.js": [
		107,
		0
	],
	"./ru-RU": [
		108,
		1
	],
	"./ru-RU.js": [
		108,
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  const errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_0__["onError"])(({
    response,
    graphQLErrors
  }) => {
    var _a;

    if (response) {
      response.errors = [graphQLErrors && graphQLErrors[0] && ((_a = graphQLErrors[0].extensions) === null || _a === void 0 ? void 0 : _a.exception.response) || {
        message: 'Неизвестная ошибка',
        error: 'UNKNOWN'
      }];
    }

    if (graphQLErrors) {
      graphQLErrors.forEach(error => {
        var _a;

        const response = graphQLErrors && graphQLErrors[0] && ((_a = graphQLErrors[0].extensions) === null || _a === void 0 ? void 0 : _a.exception.response);
        if (!response) return;
        const statusCode = response.statusCode;
        if (!statusCode || statusCode !== 401) return;
        const isLoginPath = Array.isArray(error.path) && error.path.find(p => p === 'signIn');
        if (isLoginPath) return;
        ctx.app.$accessor.auth.logout();
      });
    }
  });
  return {
    link: errorLink,
    httpEndpoint: "https://im.everhoof.ru/api/graphql" || false,
    wsEndpoint: "wss://im.everhoof.ru/api/graphql" || false,
    httpLinkOptions: {
      fetch: (uri, options) => {
        // const lang: string = new Cookies().get('i18n_redirected');
        const uriWithLang = `${uri}?lang=ru`;
        return fetch(uriWithLang, options);
      }
    },
    inMemoryCacheOptions: {
      addTypename: false
    },
    apollo: {
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        },
        mutate: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        }
      }
    }
  };
});

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("vue-apollo/ssr");

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons.svg": 208
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 207;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f34b832e1f258617d6009fc859d13a0d.svg";

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(70);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(71);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['authenticated'] = __webpack_require__(110);
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "API_HTTP": "https://im.everhoof.ru/api/",
        "GRAPHQL_HTTP": "https://im.everhoof.ru/api/graphql",
        "GRAPHQL_WS": "wss://im.everhoof.ru/api/graphql"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(8);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(19);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(20);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/main/main.vue?vue&type=template&id=488e8216&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page__chat"},[_vm._ssrNode("<div class=\"page__reminder\">","</div>",[_c('b-reminder',{attrs:{"id":_vm.reminderId},on:{"click":function($event){return _vm.confirmEmail()}},scopedSlots:_vm._u([{key:"default",fn:function(){return [_vm._v("Подтвердите адрес эл. почты, чтобы использовать все возможности чата")]},proxy:true},{key:"button",fn:function(){return [_vm._v("Подтвердить")]},proxy:true}])})],1),_vm._ssrNode(" "),_c('b-chat'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__footer\">","</div>",[_c('b-footer')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/main/main.vue?vue&type=template&id=488e8216&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/chat.vue?vue&type=template&id=babb4e8e&
var chatvue_type_template_id_babb4e8e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scroll",staticClass:"chat scrollbar",on:{"scroll":_vm.onScroll}},[_c('b-upload-file'),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"chat__loader"},[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__(24),"alt":""}})])]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading),expression:"!loading"}],staticClass:"chat__messages"},[(_vm.loadingMoreMessages)?_c('div',{staticClass:"chat__messages-loader"},[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__(24),"alt":""}})]):_vm._e(),_vm._v(" "),_vm._l((_vm.messages.length),function(i){return _c('div',{key:_vm.messages[_vm.messages.length - i].id,staticClass:"chat__message"},[(_vm.messages[_vm.messages.length - i].dayFirst)?_c('b-messages-separator',{attrs:{"message":_vm.messages[_vm.messages.length - i]}}):_vm._e(),_vm._v(" "),_c('b-message',{attrs:{"message":_vm.messages[_vm.messages.length - i]}})],1)})],2)])],2)}
var chatvue_type_template_id_babb4e8e_staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/chat.vue?vue&type=template&id=babb4e8e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/upload-file/upload-file.vue?vue&type=template&id=41116998&
var upload_filevue_type_template_id_41116998_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-file"},[_vm._ssrNode("<div class=\"upload-file__wrapper\">","</div>",[_vm._ssrNode("<div class=\"upload-file__section\">","</div>",[_c('svg-icon',{staticClass:"upload-file__icon",attrs:{"name":"description"}}),_vm._ssrNode("\n      Upload as document\n    ")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"upload-file__section\">","</div>",[_c('svg-icon',{staticClass:"upload-file__icon",attrs:{"name":"image"}}),_vm._ssrNode("\n      Upload as image\n    ")],2)],2)])}
var upload_filevue_type_template_id_41116998_staticRenderFns = []


// CONCATENATED MODULE: ./components/upload-file/upload-file.vue?vue&type=template&id=41116998&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/upload-file/upload-file.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let upload_filevue_type_script_lang_ts_UploadFile = class UploadFile extends external_nuxt_property_decorator_["Vue"] {};
upload_filevue_type_script_lang_ts_UploadFile = __decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-upload-file'
})], upload_filevue_type_script_lang_ts_UploadFile);
/* harmony default export */ var upload_filevue_type_script_lang_ts_ = (upload_filevue_type_script_lang_ts_UploadFile);
// CONCATENATED MODULE: ./components/upload-file/upload-file.vue?vue&type=script&lang=ts&
 /* harmony default export */ var upload_file_upload_filevue_type_script_lang_ts_ = (upload_filevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./components/upload-file/upload-file.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(111)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var upload_file_component = normalizeComponent(
  upload_file_upload_filevue_type_script_lang_ts_,
  upload_filevue_type_template_id_41116998_render,
  upload_filevue_type_template_id_41116998_staticRenderFns,
  false,
  injectStyles,
  null,
  "5e21b5c1"
  
)

/* harmony default export */ var upload_file = (upload_file_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/message/message.vue?vue&type=template&id=4349dd9c&
var messagevue_type_template_id_4349dd9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message",class:{
    message_view_compact: _vm.compact,
    message_type_system: _vm.system,
    message_type_deleted: _vm.deleted,
    'message_state_not-delivered': !_vm.delivered,
  },on:{"contextmenu":_vm.openContextMenu}},[_vm._ssrNode(((_vm.avatar)?("<img"+(_vm._ssrAttr("src",_vm.avatar))+" class=\"message__avatar\">"):("<div class=\"message__avatar message__avatar_type_default\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.avatarColor }, null))+">"+_vm._ssrEscape("\n    "+_vm._s(_vm.message.username && _vm.message.username[0])+"\n  ")+"</div>"))+" "),_vm._ssrNode("<div class=\"message__content\">","</div>",[(_vm.compact)?_vm._ssrNode("<div class=\"message__header\">","</div>",[_vm._ssrNode("<time"+(_vm._ssrAttr("datetime",_vm.timestamp))+(_vm._ssrAttr("title",_vm.localDateTimeFull))+" class=\"message__timestamp\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.localDateTime)+"\n      ")+"</time> "),_c('router-link',{staticClass:"message__author-name link_no_styles",style:({ color: _vm.avatarColor }),attrs:{"to":{ name: 'modal_profile', params: { id: _vm.ownerId } }}},[_vm._v("\n        "+_vm._s(_vm.message.username + ':')+"\n      ")])],2):_vm._ssrNode("<div class=\"message__header\">","</div>",[_c('router-link',{staticClass:"message__author-name link_no_styles",attrs:{"to":{ name: 'modal_profile', params: { id: _vm.ownerId } }}},[_vm._v("\n        "+_vm._s(_vm.message.username)+"\n      ")]),_vm._ssrNode(" <time"+(_vm._ssrAttr("datetime",_vm.timestamp))+(_vm._ssrAttr("title",_vm.localDateTimeFull))+" class=\"message__timestamp\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.localDateTime)+"\n      ")+"</time>")],2),_vm._ssrNode(" <div class=\"message__body\">"+((_vm.deleted)?("<span class=\"message__text\">Сообщение удалено</span>"):("<span class=\"message__text\">"+(_vm._s(_vm.text))+"</span>"))+" "+((_vm.deleted)?("<span class=\"message__hidden\">"+(_vm._s(_vm.text))+"</span>"):"<!---->")+" "+(_vm._ssrList((_vm.pictures),function(picture){return ("<img"+(_vm._ssrAttr("src",picture.m.link))+(_vm._ssrAttr("width",picture.m.width))+(_vm._ssrAttr("height",picture.m.height))+" class=\"message__image\">")}))+"</div>")],2)],2)}
var messagevue_type_template_id_4349dd9c_staticRenderFns = []


// CONCATENATED MODULE: ./components/message/message.vue?vue&type=template&id=4349dd9c&

// EXTERNAL MODULE: external "luxon"
var external_luxon_ = __webpack_require__(6);

// CONCATENATED MODULE: ./tools/filters.ts

function toHHMMSS(time) {
  const secs = parseFloat(String(time));
  const hours = Math.floor(secs / (60 * 60));
  let minutes = Math.floor((secs - hours * 60 * 60) / 60);
  let seconds = Math.floor(secs - minutes * 60 - hours * 60 * 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (hours && minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`;
}
function toLocalDateTime(iso, compact = false) {
  const date = external_luxon_["DateTime"].fromISO(iso);
  const currentDate = external_luxon_["DateTime"].local();

  if (currentDate.startOf('day').toSeconds() === date.startOf('day').toSeconds()) {
    if (compact) return date.setLocale('ru').toFormat('HH:mm');
    return date.setLocale('ru').toFormat('Сегодня, в HH:mm');
  }

  if (currentDate.minus({
    days: 1
  }).startOf('day').toSeconds() === date.startOf('day').toSeconds()) {
    if (compact) return date.setLocale('ru').toFormat('HH:mm');
    return date.setLocale('ru').toFormat('Вчера, в HH:mm');
  }

  if (compact) return date.setLocale('ru').toFormat('HH:mm');
  return date.setLocale('ru').toFormat('dd.LL.yyyy HH:mm');
}
// CONCATENATED MODULE: ./tools/util.ts
// [0, 1)
function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomString(length = 64) {
  return Array(length).fill(null).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}
function getUserColor(id) {
  const colors = ['#EF5350', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#26A69A', '#66BB6A', '#FFA726', '#FF7043', '#8D6E63', '#BDBDBD', '#78909C'];
  return id ? colors[(id - 1) % colors.length] : '#BDBDBD';
}
// CONCATENATED MODULE: ./types/messages.ts
var ChatMessageState;

(function (ChatMessageState) {
  ChatMessageState["sent"] = "sent";
  ChatMessageState["delivered"] = "delivered";
})(ChatMessageState || (ChatMessageState = {}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/message/message.vue?vue&type=script&lang=ts&
var messagevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let messagevue_type_script_lang_ts_Message = class Message extends external_nuxt_property_decorator_["Vue"] {
  get text() {
    const message = this.message.content.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*))/gm, '<a href="$1" target="_blank">$1</a>');
    const emojiRegex = new RegExp(`:(${this.$accessor.chat.emoji.map(({
      name
    }) => name).join('|')}):`, 'mg');
    return message.replace(emojiRegex, (_match, p1) => {
      const emoji = this.$accessor.chat.emoji.find(e => e.name === p1);
      if (!emoji) return p1;
      return `<img src="/emoji/${emoji.name}.${emoji.ext}" class="message__emoji" title=":${emoji.name}:" width="70px" height="70px" />`;
    });
  }

  get ownerId() {
    var _a, _b;

    return ((_b = (_a = this.message) === null || _a === void 0 ? void 0 : _a.owner) === null || _b === void 0 ? void 0 : _b.id) || 0;
  }

  get pictures() {
    return this.message.pictures || [];
  }

  get timestamp() {
    return this.message.createdAt;
  }

  get compact() {
    return this.$accessor.settings.compact;
  }

  get system() {
    return this.message.system;
  }

  get deleted() {
    return !!this.message.deletedAt;
  }

  get delivered() {
    return this.message.state === undefined || this.message.state === ChatMessageState.delivered;
  }

  get avatar() {
    var _a, _b, _c;

    return (_c = (_b = (_a = this.message) === null || _a === void 0 ? void 0 : _a.owner) === null || _b === void 0 ? void 0 : _b.avatar) === null || _c === void 0 ? void 0 : _c.s.link;
  }

  get avatarColor() {
    var _a, _b;

    return getUserColor((_b = (_a = this.message) === null || _a === void 0 ? void 0 : _a.owner) === null || _b === void 0 ? void 0 : _b.id);
  }

  get localDateTime() {
    return toLocalDateTime(this.timestamp, this.compact);
  }

  get localDateTimeFull() {
    return external_luxon_["DateTime"].fromISO(this.timestamp).toFormat('cccc, dd LLLL yyyy г., HH:mm');
  }

  openPicture(picture) {
    const limits = {
      width: 1000,
      height: 1000
    };
    const dimensions = {
      width: picture.o.width,
      height: picture.o.height
    };

    if (picture.o.width > limits.width || picture.o.height > limits.height) {
      if (picture.o.width > picture.o.height) {
        dimensions.width = limits.width;
        dimensions.height = picture.o.height * (limits.width / picture.o.width);
      } else {
        dimensions.height = limits.height;
        dimensions.width = picture.o.width * (limits.height / picture.o.height);
      }
    }

    window.open(picture.o.link, picture.o.link, `height=${dimensions.height}px,width=${dimensions.width}px,resizable=1`);
  }

  openContextMenu(event) {
    var _a;

    if (this.message.system) return;

    if (this.$accessor.auth.can.deleteAny('message') || this.$accessor.auth.can.deleteOwn('message') && this.message.id === ((_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id)) {
      event.preventDefault();
      event.stopPropagation();
      this.contextMenu.open(event, {
        message: this.message
      });
    }
  }

};

messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["InjectReactive"])('message-context-menu')], messagevue_type_script_lang_ts_Message.prototype, "contextMenu", void 0);

messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: true,
  type: Object,
  default: () => {}
})], messagevue_type_script_lang_ts_Message.prototype, "message", void 0);

messagevue_type_script_lang_ts_Message = messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-message'
})], messagevue_type_script_lang_ts_Message);
/* harmony default export */ var messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_Message);
// CONCATENATED MODULE: ./components/message/message.vue?vue&type=script&lang=ts&
 /* harmony default export */ var message_messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/message/message.vue



function message_injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var message_component = normalizeComponent(
  message_messagevue_type_script_lang_ts_,
  messagevue_type_template_id_4349dd9c_render,
  messagevue_type_template_id_4349dd9c_staticRenderFns,
  false,
  message_injectStyles,
  null,
  "11b27e82"
  
)

/* harmony default export */ var message_message = (message_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/messages-separator/messages-separator.vue?vue&type=template&id=cfdc786c&
var messages_separatorvue_type_template_id_cfdc786c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"messages-separator"},[_vm._ssrNode("<span class=\"messages-separator__date\">"+_vm._ssrEscape(_vm._s(_vm.date))+"</span>")])}
var messages_separatorvue_type_template_id_cfdc786c_staticRenderFns = []


// CONCATENATED MODULE: ./components/messages-separator/messages-separator.vue?vue&type=template&id=cfdc786c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/messages-separator/messages-separator.vue?vue&type=script&lang=ts&
var messages_separatorvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let messages_separatorvue_type_script_lang_ts_MessagesSeparator = class MessagesSeparator extends external_nuxt_property_decorator_["Vue"] {
  get date() {
    return external_luxon_["DateTime"].fromISO(this.message.createdAt).toFormat('dd LLLL yyyy');
  }

};

messages_separatorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: true,
  type: Object,
  default: () => {}
})], messages_separatorvue_type_script_lang_ts_MessagesSeparator.prototype, "message", void 0);

messages_separatorvue_type_script_lang_ts_MessagesSeparator = messages_separatorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-messages-separator'
})], messages_separatorvue_type_script_lang_ts_MessagesSeparator);
/* harmony default export */ var messages_separatorvue_type_script_lang_ts_ = (messages_separatorvue_type_script_lang_ts_MessagesSeparator);
// CONCATENATED MODULE: ./components/messages-separator/messages-separator.vue?vue&type=script&lang=ts&
 /* harmony default export */ var messages_separator_messages_separatorvue_type_script_lang_ts_ = (messages_separatorvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/messages-separator/messages-separator.vue



function messages_separator_injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var messages_separator_component = normalizeComponent(
  messages_separator_messages_separatorvue_type_script_lang_ts_,
  messages_separatorvue_type_template_id_cfdc786c_render,
  messages_separatorvue_type_template_id_cfdc786c_staticRenderFns,
  false,
  messages_separator_injectStyles,
  null,
  "f56986a2"
  
)

/* harmony default export */ var messages_separator = (messages_separator_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/chat.vue?vue&type=script&lang=ts&
var chatvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let chatvue_type_script_lang_ts_Chat = class Chat extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.loading = true;
    this.loadingMoreMessages = false;
  }

  async onMessagesChange(force = false) {
    await this.$nextTick();

    if (this.scroll && (Math.abs(this.scroll.scrollTop) < 300 || force)) {
      this.scroll.scrollTo({
        top: this.scroll.scrollHeight
      });
    }
  }

  get messages() {
    return this.loading ? [] : this.$accessor.chat.messages.filter(m => !m.deletedAt);
  }

  mounted() {
    this.loading = false;
    this.$bus.$on('message-added', this.onMessagesChange);
  }

  beforeDestroy() {
    this.$bus.$off('message-added');
  }

  async onScroll(event) {
    var _a;

    const offsetTop = event.target.scrollHeight - (Math.abs(event.target.scrollTop) + event.target.clientHeight);

    if (!this.loadingMoreMessages && offsetTop < 50) {
      this.loadingMoreMessages = true;

      try {
        const lastId = (_a = this.messages[this.messages.length - 1]) === null || _a === void 0 ? void 0 : _a.id;
        await this.$accessor.chat.getMessages({
          count: 50,
          reverse: true,
          lastId
        });
      } finally {
        await this.$nextTick();
        this.loadingMoreMessages = false;
      }
    }
  }

};

chatvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])('scroll')], chatvue_type_script_lang_ts_Chat.prototype, "scroll", void 0);

chatvue_type_script_lang_ts_Chat = chatvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-chat',
  components: {
    BMessagesSeparator: messages_separator,
    BMessage: message_message,
    BUploadFile: upload_file
  }
})], chatvue_type_script_lang_ts_Chat);
/* harmony default export */ var chatvue_type_script_lang_ts_ = (chatvue_type_script_lang_ts_Chat);
// CONCATENATED MODULE: ./components/chat/chat.vue?vue&type=script&lang=ts&
 /* harmony default export */ var chat_chatvue_type_script_lang_ts_ = (chatvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/chat/chat.vue



function chat_injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(119)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var chat_component = normalizeComponent(
  chat_chatvue_type_script_lang_ts_,
  chatvue_type_template_id_babb4e8e_render,
  chatvue_type_template_id_babb4e8e_staticRenderFns,
  false,
  chat_injectStyles,
  null,
  "6901a86f"
  
)

/* harmony default export */ var chat = (chat_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=364a1f69&
var footervue_type_template_id_364a1f69_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer__emoji-panel scrollbar\""+(_vm._ssrStyle(null,null, { display: (_vm.emojisPanelActive) ? '' : 'none' }))+">","</div>",[_c('b-emoji-panel')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__attach-panel\""+(_vm._ssrStyle(null,null, { display: (_vm.attachPanelActive) ? '' : 'none' }))+">","</div>",[_c('b-attach-panel')],1),_vm._ssrNode(" "),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loggedIn),expression:"!loggedIn"}],staticClass:"button_size_compact",attrs:{"to":{ name: 'modal_login' }}},[_vm._v("\n    Войти в чат\n  ")]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__input-field\""+(_vm._ssrStyle(null,null, { display: (_vm.loggedIn) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"footer__actions-left\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("footer__actions-button footer__emoji-button",{ 'footer__actions-button_type_active': _vm.emojisPanelActive }))+"></div> "),(false)?undefined:_vm._e()],2),_vm._ssrNode(" <input name=\"message\" autocomplete=\"off\" type=\"text\" placeholder=\"Введите сообщение\""+(_vm._ssrAttr("value",_vm.$accessor.chat.message))+" class=\"footer__input\">")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__actions-right\""+(_vm._ssrStyle(null,null, { display: (_vm.loggedIn) ? '' : 'none' }))+">","</div>",[_c('svg-icon',{staticClass:"footer__actions-button footer__send-button",attrs:{"name":"paper_plane"}})],1)],2)}
var footervue_type_template_id_364a1f69_staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=364a1f69&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/emoji-panel/emoji-panel.vue?vue&type=template&id=ae2f94a4&
var emoji_panelvue_type_template_id_ae2f94a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emoji-panel"},[_vm._ssrNode((_vm._ssrList((_vm.emoji),function(item,i){return ("<div class=\"emoji-panel__item\"><div class=\"emoji-panel__icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(/emoji/" + (item.name) + "." + (item.ext) + ")") }, null))+"></div></div>")})))])}
var emoji_panelvue_type_template_id_ae2f94a4_staticRenderFns = []


// CONCATENATED MODULE: ./components/emoji-panel/emoji-panel.vue?vue&type=template&id=ae2f94a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/emoji-panel/emoji-panel.vue?vue&type=script&lang=ts&
var emoji_panelvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let emoji_panelvue_type_script_lang_ts_EmojiPanel = class EmojiPanel extends external_nuxt_property_decorator_["Vue"] {
  get emoji() {
    if (Array.isArray(this.$accessor.chat.emoji)) {
      return Array.from(this.$accessor.chat.emoji).sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
    }

    return this.$accessor.chat.emoji || [];
  }

  selectEmoji(event, name) {
    if (this.$accessor.chat.message && this.$accessor.chat.message.slice(-1) !== ' ') {
      this.$accessor.chat.SET_MESSAGE(this.$accessor.chat.message + ' ');
    }

    this.$accessor.chat.SET_MESSAGE(this.$accessor.chat.message + `:${name}: `);
    if (!event.shiftKey) this.$accessor.SET_EMOJIS_PANEL_ACTIVE(false);
  }

};
emoji_panelvue_type_script_lang_ts_EmojiPanel = emoji_panelvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-emoji-panel'
})], emoji_panelvue_type_script_lang_ts_EmojiPanel);
/* harmony default export */ var emoji_panelvue_type_script_lang_ts_ = (emoji_panelvue_type_script_lang_ts_EmojiPanel);
// CONCATENATED MODULE: ./components/emoji-panel/emoji-panel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var emoji_panel_emoji_panelvue_type_script_lang_ts_ = (emoji_panelvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/emoji-panel/emoji-panel.vue



function emoji_panel_injectStyles (context) {
  
  var style0 = __webpack_require__(121)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var emoji_panel_component = normalizeComponent(
  emoji_panel_emoji_panelvue_type_script_lang_ts_,
  emoji_panelvue_type_template_id_ae2f94a4_render,
  emoji_panelvue_type_template_id_ae2f94a4_staticRenderFns,
  false,
  emoji_panel_injectStyles,
  null,
  "8366edaa"
  
)

/* harmony default export */ var emoji_panel = (emoji_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/attach-panel/attach-panel.vue?vue&type=template&id=f2181762&
var attach_panelvue_type_template_id_f2181762_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"attach-panel"},_vm._l((_vm.items),function(item,i){return _vm._ssrNode("<div class=\"attach-panel__item\">","</div>",[_c('svg-icon',{staticClass:"attach-panel__icon",attrs:{"name":item.icon}}),_vm._ssrNode(" <div class=\"attach-panel__text\">"+_vm._ssrEscape(_vm._s(item.text))+"</div>")],2)}),0)}
var attach_panelvue_type_template_id_f2181762_staticRenderFns = []


// CONCATENATED MODULE: ./components/attach-panel/attach-panel.vue?vue&type=template&id=f2181762&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/attach-panel/attach-panel.vue?vue&type=script&lang=ts&
var attach_panelvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let attach_panelvue_type_script_lang_ts_AttachPanel = class AttachPanel extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.items = [{
      icon: 'image',
      text: 'Picture'
    }, {
      icon: 'description',
      text: 'Document'
    }];
  }

};
attach_panelvue_type_script_lang_ts_AttachPanel = attach_panelvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-attach-panel'
})], attach_panelvue_type_script_lang_ts_AttachPanel);
/* harmony default export */ var attach_panelvue_type_script_lang_ts_ = (attach_panelvue_type_script_lang_ts_AttachPanel);
// CONCATENATED MODULE: ./components/attach-panel/attach-panel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var attach_panel_attach_panelvue_type_script_lang_ts_ = (attach_panelvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/attach-panel/attach-panel.vue



function attach_panel_injectStyles (context) {
  
  var style0 = __webpack_require__(123)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var attach_panel_component = normalizeComponent(
  attach_panel_attach_panelvue_type_script_lang_ts_,
  attach_panelvue_type_template_id_f2181762_render,
  attach_panelvue_type_template_id_f2181762_staticRenderFns,
  false,
  attach_panel_injectStyles,
  null,
  "8f2d6822"
  
)

/* harmony default export */ var attach_panel = (attach_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/button/button.vue?vue&type=template&id=002079b8&
var buttonvue_type_template_id_002079b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('router-link',{staticClass:"button",class:{
    button_size_small: _vm.small,
    button_size_medium: _vm.medium,
    button_size_large: _vm.large,
    button_display_block: _vm.block,
    button_width_full: _vm.widthFull,
    button_type_active: _vm.active,
    button_no_wrap: _vm.noWrap,
    button_with_margin: _vm.margin,
  },attrs:{"to":_vm.to,"disabled":_vm.disabled},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default")],2):_c(_vm.tag,{tag:"component",staticClass:"button",class:{
    button_size_small: _vm.small,
    button_size_medium: _vm.medium,
    button_size_large: _vm.large,
    button_display_block: _vm.block,
    button_width_full: _vm.widthFull,
    button_type_active: _vm.active,
    button_no_wrap: _vm.noWrap,
    button_with_margin: _vm.margin,
  },attrs:{"disabled":_vm.disabled},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default")],2)}
var buttonvue_type_template_id_002079b8_staticRenderFns = []


// CONCATENATED MODULE: ./components/button/button.vue?vue&type=template&id=002079b8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/button/button.vue?vue&type=script&lang=ts&
var buttonvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let buttonvue_type_script_lang_ts_Button = class Button extends external_nuxt_property_decorator_["Vue"] {};

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  default: 'button',
  type: String
})], buttonvue_type_script_lang_ts_Button.prototype, "tag", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "small", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "medium", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "large", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "block", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "widthFull", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "active", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "disabled", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "noWrap", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], buttonvue_type_script_lang_ts_Button.prototype, "margin", void 0);

buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])()], buttonvue_type_script_lang_ts_Button.prototype, "to", void 0);

buttonvue_type_script_lang_ts_Button = buttonvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-button'
})], buttonvue_type_script_lang_ts_Button);
/* harmony default export */ var buttonvue_type_script_lang_ts_ = (buttonvue_type_script_lang_ts_Button);
// CONCATENATED MODULE: ./components/button/button.vue?vue&type=script&lang=ts&
 /* harmony default export */ var button_buttonvue_type_script_lang_ts_ = (buttonvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/button/button.vue



function button_injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var button_component = normalizeComponent(
  button_buttonvue_type_script_lang_ts_,
  buttonvue_type_template_id_002079b8_render,
  buttonvue_type_template_id_002079b8_staticRenderFns,
  false,
  button_injectStyles,
  null,
  "6035316f"
  
)

/* harmony default export */ var button_button = (button_component.exports);
// EXTERNAL MODULE: ./graphql/mutations/create-message.graphql
var create_message_graphql = __webpack_require__(72);
var create_message_graphql_default = /*#__PURE__*/__webpack_require__.n(create_message_graphql);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=script&lang=ts&
var footervue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let footervue_type_script_lang_ts_Footer = class Footer extends external_nuxt_property_decorator_["Vue"] {
  get loggedIn() {
    return this.$accessor.auth.loggedIn;
  }

  get emojisPanelActive() {
    return this.$accessor.emojisPanelActive;
  }

  get attachPanelActive() {
    return this.$accessor.attachPanelActive;
  }

  changeEmoji() {
    const options = {
      rows: 5,
      cols: 11,
      count: 50,
      size: 24
    };
    const emojiIndex = getRandomIntInRange(1, options.count);
    const y = Math.floor((emojiIndex - 1) / options.cols) + 1;
    const x = emojiIndex - options.cols * (y - 1);
    this.emoji.style.backgroundPosition = `-${(x - 1) * options.size}px -${(y - 1) * options.size}px`;
  }

  mounted() {
    document.body.addEventListener('click', event => {
      if (!this.emoji.contains(event.target) && !this.emojiPanel.contains(event.target)) this.$accessor.SET_EMOJIS_PANEL_ACTIVE(false); // if (!this.attach.contains(event.target as Node) && !this.attachPanel.contains(event.target as Node))
      //   this.$accessor.SET_ATTACH_PANEL_ACTIVE(false);
    });
  }

  input(event) {
    const input = event.target;
    this.$accessor.chat.SET_MESSAGE(input.value);
  }

  async createMessage() {
    var _a;

    if (!this.$accessor.chat.message.trim()) return;
    const randomId = getRandomString(32);
    const message = {
      id: getRandomIntInRange(0, 10000),
      content: this.$accessor.chat.message,
      state: ChatMessageState.sent,
      system: false,
      randomId,
      username: (_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.username,
      owner: this.$accessor.auth.user,
      createdAt: external_luxon_["DateTime"].local().toISO(),
      updatedAt: external_luxon_["DateTime"].local().toISO(),
      pictures: []
    };
    this.$accessor.chat.ADD_MESSAGE(message);
    this.$bus.$emit('message-added', true);
    const content = this.$accessor.chat.message;
    this.$accessor.chat.SET_MESSAGE('');
    const {
      errors
    } = await this.$apollo.mutate({
      mutation: create_message_graphql_default.a,
      variables: {
        content,
        randomId
      }
    });

    if (errors) {
      if (errors[0] && errors[0].message) {
        message.content = errors && errors[0].message;
        message.system = true;
        this.$accessor.chat.ADD_MESSAGE(message);
      }
    }
  }

};

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "emoji", void 0);

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "emojiPanel", void 0);

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "attach", void 0);

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "attachPanel", void 0);

footervue_type_script_lang_ts_Footer = footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-footer',
  components: {
    BButton: button_button,
    BAttachPanel: attach_panel,
    BEmojiPanel: emoji_panel
  }
})], footervue_type_script_lang_ts_Footer);
/* harmony default export */ var footervue_type_script_lang_ts_ = (footervue_type_script_lang_ts_Footer);
// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var footer_footervue_type_script_lang_ts_ = (footervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/footer/footer.vue



function footer_injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var footer_component = normalizeComponent(
  footer_footervue_type_script_lang_ts_,
  footervue_type_template_id_364a1f69_render,
  footervue_type_template_id_364a1f69_staticRenderFns,
  false,
  footer_injectStyles,
  null,
  "b5c42d62"
  
)

/* harmony default export */ var footer = (footer_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/reminder/reminder.vue?vue&type=template&id=7fc85c3c&
var remindervue_type_template_id_7fc85c3c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"reminder"},[_vm._ssrNode("<div class=\"reminder__content\">","</div>",[_vm._ssrNode("<div class=\"reminder__text\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),(_vm.$slots.button)?_vm._ssrNode("<button class=\"reminder__button\">","</button>",[_vm._t("button")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<button class=\"reminder__close-button\">","</button>",[_c('svg-icon',{staticClass:"reminder__icon",attrs:{"name":"close"}})],1)],2)}
var remindervue_type_template_id_7fc85c3c_staticRenderFns = []


// CONCATENATED MODULE: ./components/reminder/reminder.vue?vue&type=template&id=7fc85c3c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/reminder/reminder.vue?vue&type=script&lang=ts&
var remindervue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let remindervue_type_script_lang_ts_Reminder = class Reminder extends external_nuxt_property_decorator_["Vue"] {
  get show() {
    var _a;

    const userId = (_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) return false;
    const reminder = this.$accessor.modals.reminders.find(reminder => reminder.type === this.id && reminder.userId === userId);
    return !!(reminder && reminder.disabledAt === null);
  }

  close() {
    this.$accessor.modals.removeReminder({
      type: this.id,
      timeout: 1000 * 60 * 60 * 24 * 31
    });
  }

};

remindervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: true,
  type: String
})], remindervue_type_script_lang_ts_Reminder.prototype, "id", void 0);

remindervue_type_script_lang_ts_Reminder = remindervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-reminder'
})], remindervue_type_script_lang_ts_Reminder);
/* harmony default export */ var remindervue_type_script_lang_ts_ = (remindervue_type_script_lang_ts_Reminder);
// CONCATENATED MODULE: ./components/reminder/reminder.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reminder_remindervue_type_script_lang_ts_ = (remindervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/reminder/reminder.vue



function reminder_injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var reminder_component = normalizeComponent(
  reminder_remindervue_type_script_lang_ts_,
  remindervue_type_template_id_7fc85c3c_render,
  remindervue_type_template_id_7fc85c3c_staticRenderFns,
  false,
  reminder_injectStyles,
  null,
  "7cb2ba2f"
  
)

/* harmony default export */ var reminder_reminder = (reminder_component.exports);
// CONCATENATED MODULE: ./types/reminderTypes.ts
var ReminderTypes;

(function (ReminderTypes) {
  ReminderTypes["EMAIL_CONFIRMATION"] = "email_confirmation";
})(ReminderTypes || (ReminderTypes = {}));
// EXTERNAL MODULE: ./graphql/mutations/request-email-confirmation.graphql
var request_email_confirmation_graphql = __webpack_require__(73);
var request_email_confirmation_graphql_default = /*#__PURE__*/__webpack_require__.n(request_email_confirmation_graphql);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/main/main.vue?vue&type=script&lang=ts&
var mainvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let mainvue_type_script_lang_ts_MainPage = class MainPage extends external_nuxt_property_decorator_["Vue"] {
  get reminderId() {
    return ReminderTypes.EMAIL_CONFIRMATION;
  }

  async confirmEmail() {
    const {
      errors
    } = await this.$apolloProvider.defaultClient.mutate({
      mutation: request_email_confirmation_graphql_default.a
    });
    if (errors) return;
    await this.$router.push({
      name: 'modal_request_email_confirmation'
    });
  }

};
mainvue_type_script_lang_ts_MainPage = mainvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  components: {
    BReminder: reminder_reminder,
    BFooter: footer,
    BChat: chat
  }
})], mainvue_type_script_lang_ts_MainPage);
/* harmony default export */ var mainvue_type_script_lang_ts_ = (mainvue_type_script_lang_ts_MainPage);
// CONCATENATED MODULE: ./pages/main/main.vue?vue&type=script&lang=ts&
 /* harmony default export */ var main_mainvue_type_script_lang_ts_ = (mainvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/main/main.vue



function main_injectStyles (context) {
  
  var style0 = __webpack_require__(133)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var main_component = normalizeComponent(
  main_mainvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  main_injectStyles,
  null,
  "3fa3424a"
  
)

/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/confirmation/confirmation.vue?vue&type=template&id=4e9bc38c&
var confirmationvue_type_template_id_4e9bc38c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page__error"},[(_vm.error)?_vm._ssrNode("<div class=\"page-error\">","</div>",[_vm._ssrNode("<div class=\"page-error__illustration\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt class=\"page-error__image\"></div> <div class=\"page-error__text\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.error)+"\n    ")+"</div> "),_c('router-link',{attrs:{"to":{ name: 'main' },"custom":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var href = ref.href;
var navigate = ref.navigate;
return [_c('b-button',{attrs:{"tag":"a","href":href,"large":"","width-full":""},on:{"click":navigate}},[_vm._v("Вернуться в чат")])]}}],null,false,2274148816)})],2):_vm._e()])}
var confirmationvue_type_template_id_4e9bc38c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/confirmation/confirmation.vue?vue&type=template&id=4e9bc38c&

// EXTERNAL MODULE: ./graphql/mutations/confirm-email.graphql
var confirm_email_graphql = __webpack_require__(74);
var confirm_email_graphql_default = /*#__PURE__*/__webpack_require__.n(confirm_email_graphql);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/confirmation/confirmation.vue?vue&type=script&lang=ts&
var confirmationvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let confirmationvue_type_script_lang_ts_ConfirmationPage = class ConfirmationPage extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.error = '';
  }

};
confirmationvue_type_script_lang_ts_ConfirmationPage = confirmationvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  layout: 'confirmation',
  components: {
    BButton: button_button
  },

  async asyncData(ctx) {
    var _a;

    const token = ctx.route.query.code;
    let error = '';

    if (typeof token === 'string') {
      const client = (_a = ctx.app.apolloProvider) === null || _a === void 0 ? void 0 : _a.defaultClient;
      if (!client) return;

      if (ctx.route.name === 'confirm_email') {
        try {
          const {
            data,
            errors
          } = await client.mutate({
            mutation: confirm_email_graphql_default.a,
            variables: {
              token
            }
          });

          if (errors) {
            error = errors.length > 0 ? errors[0].message : 'Произошла неизвестная ошибка';
          } else if (!(data === null || data === void 0 ? void 0 : data.confirmEmail)) {
            error = 'Произошла неизвестная ошибка';
          } else {
            await ctx.redirect({
              name: 'modal_email_confirmed',
              replace: true
            });
          }
        } catch (e) {
          error = 'Произошла неизвестная ошибка';
        }
      } else {
        await ctx.redirect({
          name: 'main',
          replace: true
        });
      }

      return {
        error
      };
    } else {
      await ctx.redirect({
        name: 'main',
        replace: true
      });
    }
  }

})], confirmationvue_type_script_lang_ts_ConfirmationPage);
/* harmony default export */ var confirmationvue_type_script_lang_ts_ = (confirmationvue_type_script_lang_ts_ConfirmationPage);
// CONCATENATED MODULE: ./pages/confirmation/confirmation.vue?vue&type=script&lang=ts&
 /* harmony default export */ var confirmation_confirmationvue_type_script_lang_ts_ = (confirmationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/confirmation/confirmation.vue



function confirmation_injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var confirmation_component = normalizeComponent(
  confirmation_confirmationvue_type_script_lang_ts_,
  confirmationvue_type_template_id_4e9bc38c_render,
  confirmationvue_type_template_id_4e9bc38c_staticRenderFns,
  false,
  confirmation_injectStyles,
  null,
  "089daa5b"
  
)

/* harmony default export */ var confirmation = (confirmation_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/reset-password/reset-password.vue?vue&type=template&id=555aa86a&
var reset_passwordvue_type_template_id_555aa86a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.error)?_c('div',{staticClass:"page__error"},[(_vm.error)?_vm._ssrNode("<div class=\"page-error\">","</div>",[_vm._ssrNode("<div class=\"page-error__illustration\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt class=\"page-error__image\"></div> <div class=\"page-error__text\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.error)+"\n    ")+"</div> "),_c('router-link',{attrs:{"to":{ name: 'main' },"custom":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var href = ref.href;
var navigate = ref.navigate;
return [_c('b-button',{attrs:{"tag":"a","href":href,"large":"","width-full":""},on:{"click":navigate}},[_vm._v("Вернуться в чат")])]}}],null,false,2274148816)})],2):_vm._e()]):_c('div',{staticClass:"page__error"},[_c('b-form',{attrs:{"errors":_vm.errors,"name":"login-form"}},[_c('div',{staticClass:"form__row"},[_c('b-text-field',{attrs:{"id":"reset_password","name":"username","placeholder":"Новый пароль","width-full":"","type":"password"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.passwordInput.focus()}},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-text-field',{ref:"passwordInput",attrs:{"id":"reset_password_confirm","name":"password","placeholder":"Подтверждение пароля","width-full":"","type":"password"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.reset()}},model:{value:(_vm.passwordConfirm),callback:function ($$v) {_vm.passwordConfirm=$$v},expression:"passwordConfirm"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-button',{attrs:{"large":"","width-full":""},on:{"click":function($event){$event.preventDefault();return _vm.reset()}}},[_vm._v("Восстановить пароль")])],1)])],1)}
var reset_passwordvue_type_template_id_555aa86a_staticRenderFns = []


// CONCATENATED MODULE: ./pages/reset-password/reset-password.vue?vue&type=template&id=555aa86a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/text-field/text-field.vue?vue&type=template&id=3a3acc56&
var text_fieldvue_type_template_id_3a3acc56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"text-field",class:{
    'text-field_type_active': _vm.active,
    'text-field_width_full': _vm.widthFull,
    'text-field_with_margin': _vm.margin,
    'text-field_with_icon': _vm.icon,
    'text-field_size_small': _vm.small,
  },attrs:{"for":_vm.id}},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("value",_vm.value))+" class=\"text-field__input\"> "),(_vm.icon)?_c('svg-icon',{staticClass:"text-field__icon",attrs:{"name":_vm.icon}}):_vm._e()],2)}
var text_fieldvue_type_template_id_3a3acc56_staticRenderFns = []


// CONCATENATED MODULE: ./components/text-field/text-field.vue?vue&type=template&id=3a3acc56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/text-field/text-field.vue?vue&type=script&lang=ts&
var text_fieldvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let text_fieldvue_type_script_lang_ts_TextField = class TextField extends external_nuxt_property_decorator_["Vue"] {
  focus() {
    this.input.focus();
  }

};

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  required: true
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "id", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  default: 'text'
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "type", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "placeholder", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "value", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "active", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "disabled", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "widthFull", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "icon", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "margin", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "name", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], text_fieldvue_type_script_lang_ts_TextField.prototype, "small", void 0);

text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], text_fieldvue_type_script_lang_ts_TextField.prototype, "input", void 0);

text_fieldvue_type_script_lang_ts_TextField = text_fieldvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-text-field'
})], text_fieldvue_type_script_lang_ts_TextField);
/* harmony default export */ var text_fieldvue_type_script_lang_ts_ = (text_fieldvue_type_script_lang_ts_TextField);
// CONCATENATED MODULE: ./components/text-field/text-field.vue?vue&type=script&lang=ts&
 /* harmony default export */ var text_field_text_fieldvue_type_script_lang_ts_ = (text_fieldvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/text-field/text-field.vue



function text_field_injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var text_field_component = normalizeComponent(
  text_field_text_fieldvue_type_script_lang_ts_,
  text_fieldvue_type_template_id_3a3acc56_render,
  text_fieldvue_type_template_id_3a3acc56_staticRenderFns,
  false,
  text_field_injectStyles,
  null,
  "3a750c22"
  
)

/* harmony default export */ var text_field = (text_field_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=template&id=57b1c9a2&
var formvue_type_template_id_57b1c9a2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"form",attrs:{"name":_vm.name}},[_vm._ssrNode(((_vm.title)?("<h3 class=\"form__title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h3>"):"<!---->")+" "),_vm._ssrNode("<div class=\"form__content\">","</div>",[(_vm.errors.length > 0)?_vm._ssrNode("<div class=\"form__row\">","</div>",[_c('b-form-error',{attrs:{"errors":_vm.errors,"width-full":""}})],1):_vm._e(),_vm._ssrNode(" "),_vm._t("default")],2)],2)}
var formvue_type_template_id_57b1c9a2_staticRenderFns = []


// CONCATENATED MODULE: ./components/form/form.vue?vue&type=template&id=57b1c9a2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/form-error/form-error.vue?vue&type=template&id=1f5dfeda&
var form_errorvue_type_template_id_1f5dfeda_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-error",class:{
    'form-error_width_full': _vm.widthFull,
    'form-error_with_margin': _vm.margin,
  }},[_c('svg-icon',{staticClass:"form-error__icon",attrs:{"name":_vm.icon}}),_vm._ssrNode(" "+(_vm._ssrList((_vm.errors),function(error,i){return ("<p class=\"form-error__text\">"+_vm._ssrEscape("– "+_vm._s(error))+"</p>")})))],2)}
var form_errorvue_type_template_id_1f5dfeda_staticRenderFns = []


// CONCATENATED MODULE: ./components/form-error/form-error.vue?vue&type=template&id=1f5dfeda&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/form-error/form-error.vue?vue&type=script&lang=ts&
var form_errorvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let form_errorvue_type_script_lang_ts_FormError = class FormError extends external_nuxt_property_decorator_["Vue"] {};

form_errorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Array,
  default: () => []
})], form_errorvue_type_script_lang_ts_FormError.prototype, "errors", void 0);

form_errorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  default: 'error_outline'
})], form_errorvue_type_script_lang_ts_FormError.prototype, "icon", void 0);

form_errorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], form_errorvue_type_script_lang_ts_FormError.prototype, "widthFull", void 0);

form_errorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], form_errorvue_type_script_lang_ts_FormError.prototype, "margin", void 0);

form_errorvue_type_script_lang_ts_FormError = form_errorvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-form-error'
})], form_errorvue_type_script_lang_ts_FormError);
/* harmony default export */ var form_errorvue_type_script_lang_ts_ = (form_errorvue_type_script_lang_ts_FormError);
// CONCATENATED MODULE: ./components/form-error/form-error.vue?vue&type=script&lang=ts&
 /* harmony default export */ var form_error_form_errorvue_type_script_lang_ts_ = (form_errorvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/form-error/form-error.vue



function form_error_injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var form_error_component = normalizeComponent(
  form_error_form_errorvue_type_script_lang_ts_,
  form_errorvue_type_template_id_1f5dfeda_render,
  form_errorvue_type_template_id_1f5dfeda_staticRenderFns,
  false,
  form_error_injectStyles,
  null,
  "2ae868cf"
  
)

/* harmony default export */ var form_error = (form_error_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=script&lang=ts&
var formvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let formvue_type_script_lang_ts_Form = class Form extends external_nuxt_property_decorator_["Vue"] {};

formvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Array,
  default: () => []
})], formvue_type_script_lang_ts_Form.prototype, "errors", void 0);

formvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], formvue_type_script_lang_ts_Form.prototype, "title", void 0);

formvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  required: true
})], formvue_type_script_lang_ts_Form.prototype, "name", void 0);

formvue_type_script_lang_ts_Form = formvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-form',
  components: {
    BFormError: form_error
  }
})], formvue_type_script_lang_ts_Form);
/* harmony default export */ var formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_Form);
// CONCATENATED MODULE: ./components/form/form.vue?vue&type=script&lang=ts&
 /* harmony default export */ var form_formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/form/form.vue



function form_injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var form_component = normalizeComponent(
  form_formvue_type_script_lang_ts_,
  formvue_type_template_id_57b1c9a2_render,
  formvue_type_template_id_57b1c9a2_staticRenderFns,
  false,
  form_injectStyles,
  null,
  "6622ebef"
  
)

/* harmony default export */ var form_form = (form_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/reset-password/reset-password.vue?vue&type=script&lang=ts&
var reset_passwordvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let reset_passwordvue_type_script_lang_ts_ResetPasswordPage = class ResetPasswordPage extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.error = '';
    this.errors = [];
    this.password = '';
    this.passwordConfirm = '';
  }

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();
    return this.validatePassword();
  }

  validatePassword() {
    const isFilled = this.password.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('password_fill_error').toString());
      return false;
    }

    const matchesLength = this.password.length <= 255 && this.password.length >= 5;

    if (!matchesLength) {
      this.errors.push(this.$t('passport_length_error').toString());
      return false;
    }

    if (this.password !== this.passwordConfirm) {
      this.errors.push(this.$t('passwords_do_not_match').toString());
      return false;
    }

    return true;
  }

  async reset() {
    if (!this.validateForm()) return;
    const {
      errors
    } = await this.$accessor.auth.resetPassword({
      token: this.$route.query.code,
      password: this.password
    });
    if (errors) this.errors.push(errors[0].message);else await this.$router.replace({
      name: 'main'
    });
  }

};

reset_passwordvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], reset_passwordvue_type_script_lang_ts_ResetPasswordPage.prototype, "passwordInput", void 0);

reset_passwordvue_type_script_lang_ts_ResetPasswordPage = reset_passwordvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  layout: 'confirmation',
  components: {
    BForm: form_form,
    BTextField: text_field,
    BButton: button_button
  },

  asyncData(ctx) {
    const token = ctx.route.query.code;
    let error = '';

    if (typeof token !== 'string') {
      error = 'Произошла неизвестная ошибка';
    }

    return {
      error
    };
  }

})], reset_passwordvue_type_script_lang_ts_ResetPasswordPage);
/* harmony default export */ var reset_passwordvue_type_script_lang_ts_ = (reset_passwordvue_type_script_lang_ts_ResetPasswordPage);
// CONCATENATED MODULE: ./pages/reset-password/reset-password.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reset_password_reset_passwordvue_type_script_lang_ts_ = (reset_passwordvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/reset-password/reset-password.vue



function reset_password_injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var reset_password_component = normalizeComponent(
  reset_password_reset_passwordvue_type_script_lang_ts_,
  reset_passwordvue_type_template_id_555aa86a_render,
  reset_passwordvue_type_template_id_555aa86a_staticRenderFns,
  false,
  reset_password_injectStyles,
  null,
  "c925354a"
  
)

/* harmony default export */ var reset_password = (reset_password_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/login-modal/login-modal.vue?vue&type=template&id=3dfffd3b&
var login_modalvue_type_template_id_3dfffd3b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Вход")]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"login-modal"},[_c('b-form',{attrs:{"errors":_vm.errors,"name":"login-form"}},[_c('div',{staticClass:"form__row"},[_c('b-text-field',{attrs:{"id":"login_username","name":"username","placeholder":"Логин","width-full":""},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.passwordInput.focus()}},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-text-field',{ref:"passwordInput",attrs:{"id":"login_password","name":"password","placeholder":"Пароль","width-full":"","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-button',{attrs:{"large":"","width-full":""},on:{"click":function($event){$event.preventDefault();return _vm.signIn()}}},[_vm._v("Войти")])],1),_vm._v(" "),_c('div',{staticClass:"form__row form__row_align_center"},[_c('router-link',{attrs:{"to":{ name: 'modal_request_password_reset' }}},[_vm._v("Восстановить пароль")])],1),_vm._v(" "),_c('div',{staticClass:"form__row form__row_align_center"},[_c('router-link',{attrs:{"to":{ name: 'modal_register' }}},[_vm._v("Нет аккаунта")])],1)])],1)]},proxy:true}])})}
var login_modalvue_type_template_id_3dfffd3b_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/login-modal/login-modal.vue?vue&type=template&id=3dfffd3b&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/checkbox/checkbox.vue?vue&type=template&id=b2f076da&
var checkboxvue_type_template_id_b2f076da_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"checkbox",class:{
    'checkbox_display_inline-block': _vm.inline,
    checkbox_with_margin: _vm.margin,
  }},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.id))+" type=\"checkbox\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("checked",_vm.value))+" class=\"checkbox__input\"> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"checkbox__label\">","</label>",[_vm._t("default")],2)],2)}
var checkboxvue_type_template_id_b2f076da_staticRenderFns = []


// CONCATENATED MODULE: ./components/checkbox/checkbox.vue?vue&type=template&id=b2f076da&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/checkbox/checkbox.vue?vue&type=script&lang=ts&
var checkboxvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let checkboxvue_type_script_lang_ts_Checkbox = class Checkbox extends external_nuxt_property_decorator_["Vue"] {};

checkboxvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  required: true
})], checkboxvue_type_script_lang_ts_Checkbox.prototype, "id", void 0);

checkboxvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], checkboxvue_type_script_lang_ts_Checkbox.prototype, "disabled", void 0);

checkboxvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: Boolean,
  default: false
})], checkboxvue_type_script_lang_ts_Checkbox.prototype, "value", void 0);

checkboxvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], checkboxvue_type_script_lang_ts_Checkbox.prototype, "inline", void 0);

checkboxvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], checkboxvue_type_script_lang_ts_Checkbox.prototype, "margin", void 0);

checkboxvue_type_script_lang_ts_Checkbox = checkboxvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-checkbox'
})], checkboxvue_type_script_lang_ts_Checkbox);
/* harmony default export */ var checkboxvue_type_script_lang_ts_ = (checkboxvue_type_script_lang_ts_Checkbox);
// CONCATENATED MODULE: ./components/checkbox/checkbox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var checkbox_checkboxvue_type_script_lang_ts_ = (checkboxvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/checkbox/checkbox.vue



function checkbox_injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var checkbox_component = normalizeComponent(
  checkbox_checkboxvue_type_script_lang_ts_,
  checkboxvue_type_template_id_b2f076da_render,
  checkboxvue_type_template_id_b2f076da_staticRenderFns,
  false,
  checkbox_injectStyles,
  null,
  "25db554f"
  
)

/* harmony default export */ var checkbox_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/modal/modal.vue?vue&type=template&id=90d644e4&
var modalvue_type_template_id_90d644e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.$emit('close', $event)}}},[_c('b-tile',{staticClass:"tile_padding_medium tile_borders_all modal__tile"},[_c('div',{staticClass:"modal__header"},[_c('h3',{staticClass:"modal__title"},[_vm._t("title")],2),_vm._v(" "),_c('button',{staticClass:"modal__close",on:{"click":function($event){return _vm.$emit('close', $event)}}},[_c('svg-icon',{attrs:{"name":"close"}})],1)]),_vm._v(" "),_vm._t("default")],2)],1)}
var modalvue_type_template_id_90d644e4_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/modal/modal.vue?vue&type=template&id=90d644e4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/tile/tile.vue?vue&type=template&id=9ef863fc&
var tilevue_type_template_id_9ef863fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tile"},[_vm._t("default")],2)}
var tilevue_type_template_id_9ef863fc_staticRenderFns = []


// CONCATENATED MODULE: ./components/tile/tile.vue?vue&type=template&id=9ef863fc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/tile/tile.vue?vue&type=script&lang=ts&
var tilevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let tilevue_type_script_lang_ts_Tile = class Tile extends external_nuxt_property_decorator_["Vue"] {};
tilevue_type_script_lang_ts_Tile = tilevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-tile'
})], tilevue_type_script_lang_ts_Tile);
/* harmony default export */ var tilevue_type_script_lang_ts_ = (tilevue_type_script_lang_ts_Tile);
// CONCATENATED MODULE: ./components/tile/tile.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tile_tilevue_type_script_lang_ts_ = (tilevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/tile/tile.vue



function tile_injectStyles (context) {
  
  var style0 = __webpack_require__(147)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var tile_component = normalizeComponent(
  tile_tilevue_type_script_lang_ts_,
  tilevue_type_template_id_9ef863fc_render,
  tilevue_type_template_id_9ef863fc_staticRenderFns,
  false,
  tile_injectStyles,
  null,
  "ec8e23a2"
  
)

/* harmony default export */ var tile = (tile_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/modal/modal.vue?vue&type=script&lang=ts&
var modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let modalvue_type_script_lang_ts_Modal = class Modal extends external_nuxt_property_decorator_["Vue"] {
  onRouteChanged(newRoute, oldRoute) {
    if (newRoute.name !== oldRoute.name) {
      this.$emit('close', {
        route: true
      });
    }
  }

};

modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Watch"])('$route')], modalvue_type_script_lang_ts_Modal.prototype, "onRouteChanged", null);

modalvue_type_script_lang_ts_Modal = modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-modal',
  components: {
    BTile: tile
  }
})], modalvue_type_script_lang_ts_Modal);
/* harmony default export */ var modalvue_type_script_lang_ts_ = (modalvue_type_script_lang_ts_Modal);
// CONCATENATED MODULE: ./components/modals/modal/modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var modal_modalvue_type_script_lang_ts_ = (modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/modal/modal.vue



function modal_injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(151)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var modal_component = normalizeComponent(
  modal_modalvue_type_script_lang_ts_,
  modalvue_type_template_id_90d644e4_render,
  modalvue_type_template_id_90d644e4_staticRenderFns,
  false,
  modal_injectStyles,
  null,
  "33824492"
  
)

/* harmony default export */ var modal = (modal_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/login-modal/login-modal.vue?vue&type=script&lang=ts&
var login_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let login_modalvue_type_script_lang_ts_Login = class Login extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.errors = [];
    this.username = '';
    this.password = '';
  }

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();
    const usernameValid = this.validateUsername();
    const passwordValid = this.validatePassword();
    return usernameValid && passwordValid;
  }

  validateUsername() {
    const isFilled = this.username.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('username_fill_error').toString());
      return false;
    }

    return true;
  }

  validatePassword() {
    const isFilled = this.password.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('password_fill_error').toString());
      return false;
    }

    return true;
  }

  async signIn() {
    if (!this.validateForm()) return;
    const {
      errors
    } = await this.$accessor.auth.signIn({
      email: this.username,
      password: this.password
    });
    if (errors) this.errors.push(errors[0].message);else await this.$emit('close');
  }

};

login_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], login_modalvue_type_script_lang_ts_Login.prototype, "passwordInput", void 0);

login_modalvue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], login_modalvue_type_script_lang_ts_Login.prototype, "setMyId", void 0);

login_modalvue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], login_modalvue_type_script_lang_ts_Login.prototype, "login", void 0);

login_modalvue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Action"]], login_modalvue_type_script_lang_ts_Login.prototype, "getUser", void 0);

login_modalvue_type_script_lang_ts_Login = login_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-login-modal',
  components: {
    BModal: modal,
    BButton: button_button,
    BCheckbox: checkbox_checkbox,
    BTextField: text_field,
    BForm: form_form
  }
})], login_modalvue_type_script_lang_ts_Login);
/* harmony default export */ var login_modalvue_type_script_lang_ts_ = (login_modalvue_type_script_lang_ts_Login);
// CONCATENATED MODULE: ./components/modals/login-modal/login-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var login_modal_login_modalvue_type_script_lang_ts_ = (login_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/login-modal/login-modal.vue



function login_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var login_modal_component = normalizeComponent(
  login_modal_login_modalvue_type_script_lang_ts_,
  login_modalvue_type_template_id_3dfffd3b_render,
  login_modalvue_type_template_id_3dfffd3b_staticRenderFns,
  false,
  login_modal_injectStyles,
  null,
  "14bb22ca"
  
)

/* harmony default export */ var login_modal = (login_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/register-modal/register-modal.vue?vue&type=template&id=4dcd9e77&
var register_modalvue_type_template_id_4dcd9e77_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Регистрация")]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"register-modal"},[_c('b-form',{attrs:{"errors":_vm.errors,"name":"register-form"}},[_c('div',{staticClass:"form__row"},[_c('b-text-field',{attrs:{"id":"register_email","name":"email","placeholder":"E-mail","width-full":""},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.usernameInput.focus()}},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-text-field',{ref:"usernameInput",attrs:{"id":"register_username","name":"username","placeholder":"Логин","width-full":""},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.passwordInput.focus()}},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-text-field',{ref:"passwordInput",attrs:{"id":"register_password","name":"password","placeholder":"Пароль","width-full":"","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-button',{attrs:{"large":"","width-full":""},on:{"click":function($event){$event.preventDefault();return _vm.signUp()}}},[_vm._v("Зарегистрироваться")])],1),_vm._v(" "),_c('div',{staticClass:"form__row form__row_align_center"},[_c('router-link',{attrs:{"to":{ name: 'modal_login' }}},[_vm._v("Уже есть аккаунт? Войти.")])],1)])],1)]},proxy:true}])})}
var register_modalvue_type_template_id_4dcd9e77_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/register-modal/register-modal.vue?vue&type=template&id=4dcd9e77&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/register-modal/register-modal.vue?vue&type=script&lang=ts&
var register_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let register_modalvue_type_script_lang_ts_RegisterModal = class RegisterModal extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.errors = [];
    this.email = '';
    this.username = '';
    this.password = '';
    this.patterns = {
      username: /^[a-zA-Z0-9\-_]+$/,
      email: /.{3,}@.+\..{2,}/i
    };
  }

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();
    const emailValid = this.validateEmail();
    const usernameValid = this.validateUsername();
    const passwordValid = this.validatePassword();
    return usernameValid && emailValid && passwordValid;
  }

  validateEmail() {
    const isFilled = this.email.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('email_fill_error').toString());
      return false;
    }

    const matchesLength = this.email.length <= 191;

    if (!matchesLength) {
      this.errors.push(this.$t('email_length_error').toString());
      return false;
    }

    const matchesRegex = this.patterns.email.test(this.email);

    if (!matchesRegex) {
      this.errors.push(this.$t('email_regex_error').toString());
      return false;
    }

    return true;
  }

  validateUsername() {
    const isFilled = this.username.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('username_fill_error').toString());
      return false;
    }

    const matchesLength = this.username.length <= 32 && this.username.length >= 3;

    if (!matchesLength) {
      this.errors.push(this.$t('username_length_error').toString());
      return false;
    }

    const matchesRegex = this.patterns.username.test(this.username);

    if (!matchesRegex) {
      this.errors.push(this.$t('username_regex_error').toString());
      return false;
    }

    return true;
  }

  validatePassword() {
    const isFilled = this.password.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('password_fill_error').toString());
      return false;
    }

    const matchesLength = this.password.length <= 255 && this.password.length >= 5;

    if (!matchesLength) {
      this.errors.push(this.$t('passport_length_error').toString());
      return false;
    }

    return true;
  }

  async signUp() {
    if (!this.validateForm()) return;
    const {
      errors
    } = await this.$accessor.auth.signUp({
      email: this.email,
      password: this.password,
      username: this.username
    });
    if (errors) this.errors.push(errors[0].message);else await this.$emit('close');
  }

};

register_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], register_modalvue_type_script_lang_ts_RegisterModal.prototype, "usernameInput", void 0);

register_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], register_modalvue_type_script_lang_ts_RegisterModal.prototype, "passwordInput", void 0);

register_modalvue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], register_modalvue_type_script_lang_ts_RegisterModal.prototype, "setMyId", void 0);

register_modalvue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], register_modalvue_type_script_lang_ts_RegisterModal.prototype, "login", void 0);

register_modalvue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Action"]], register_modalvue_type_script_lang_ts_RegisterModal.prototype, "getUser", void 0);

register_modalvue_type_script_lang_ts_RegisterModal = register_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-register-modal',
  components: {
    BModal: modal,
    BButton: button_button,
    BCheckbox: checkbox_checkbox,
    BTextField: text_field,
    BForm: form_form
  }
})], register_modalvue_type_script_lang_ts_RegisterModal);
/* harmony default export */ var register_modalvue_type_script_lang_ts_ = (register_modalvue_type_script_lang_ts_RegisterModal);
// CONCATENATED MODULE: ./components/modals/register-modal/register-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var register_modal_register_modalvue_type_script_lang_ts_ = (register_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/register-modal/register-modal.vue



function register_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var register_modal_component = normalizeComponent(
  register_modal_register_modalvue_type_script_lang_ts_,
  register_modalvue_type_template_id_4dcd9e77_render,
  register_modalvue_type_template_id_4dcd9e77_staticRenderFns,
  false,
  register_modal_injectStyles,
  null,
  "9592e8d4"
  
)

/* harmony default export */ var register_modal = (register_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/profile-modal/profile-modal.vue?vue&type=template&id=23b34cc6&
var profile_modalvue_type_template_id_23b34cc6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Профиль")]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"profile-modal"},[_c('div',{staticClass:"profile-modal__user"},[_c('b-avatar',{staticClass:"profile-modal__avatar",attrs:{"user":_vm.user,"large":""}}),_vm._v(" "),_c('div',{staticClass:"profile-modal__user-info"},[_c('div',{staticClass:"profile-modal__username"},[_c('span',[_vm._v(_vm._s(_vm.username))]),_vm._v(" "),(false)?undefined:_vm._e()]),_vm._v(" "),_c('div',{staticClass:"profile-modal__registered"},[_vm._v("\n            "+_vm._s(_vm.$t('modals.profile.registered'))+": "+_vm._s(_vm.registered)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"profile-modal__registered"},[_vm._v(_vm._s(_vm.$t('modals.profile.was_online'))+": "+_vm._s(_vm.online))])])],1)])]},proxy:true}])})}
var profile_modalvue_type_template_id_23b34cc6_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/profile-modal/profile-modal.vue?vue&type=template&id=23b34cc6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/avatar/avatar.vue?vue&type=template&id=11928367&
var avatarvue_type_template_id_11928367_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"avatar",class:{
    avatar_size_tiny: _vm.tiny,
    avatar_size_medium: _vm.medium,
    avatar_size_large: _vm.large,
    avatar_size_stretch: _vm.stretch,
  },style:({ backgroundColor: _vm.color ? _vm.color : 'var(--input-background)' })},[_vm._ssrNode(((_vm.avatar)?("<img"+(_vm._ssrAttr("src",_vm.avatar))+" alt=\"avatar\" class=\"avatar__image\">"):("<span class=\"avatar__content\">"+_vm._ssrEscape(_vm._s(_vm.letter))+"</span>"))+" "),(_vm.isOwner && !_vm.loading)?_vm._ssrNode("<label for=\"avatar-upload\" class=\"avatar__upload\">","</label>",[_c('svg-icon',{staticClass:"avatar__upload-icon",attrs:{"name":"upload"}}),_vm._ssrNode(" <input id=\"avatar-upload\" type=\"file\" class=\"avatar__upload-input\">")],2):_vm._e(),_vm._ssrNode(" "+((_vm.loading)?("<div class=\"avatar__loading\"><img"+(_vm._ssrAttr("src",__webpack_require__(157)))+" alt=\"loading\" class=\"avatar__loading-image\"></div>"):"<!---->"))],2)}
var avatarvue_type_template_id_11928367_staticRenderFns = []


// CONCATENATED MODULE: ./components/avatar/avatar.vue?vue&type=template&id=11928367&

// EXTERNAL MODULE: ./graphql/mutations/update-avatar.graphql
var update_avatar_graphql = __webpack_require__(75);
var update_avatar_graphql_default = /*#__PURE__*/__webpack_require__.n(update_avatar_graphql);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(10);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// CONCATENATED MODULE: ./tools/http-client.ts

class http_client_HttpClient {
  static async uploadPicture(payload) {
    try {
      const cookies = new external_universal_cookie_default.a();
      const body = new FormData();
      body.append('file', payload);
      const response = await fetch("https://im.everhoof.ru/api/" + '/upload/image', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${decodeURIComponent(cookies.get('token'))}`
        },
        body
      });
      const json = await response.json();
      if (!json) return;
      return json.id;
    } catch (e) {}
  }

}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/avatar/avatar.vue?vue&type=script&lang=ts&
var avatarvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let avatarvue_type_script_lang_ts_Avatar = class Avatar extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.loading = false;
  }

  get avatar() {
    var _a, _b;

    return ((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.avatar) === null || _b === void 0 ? void 0 : _b.s.link) || '';
  }

  get letter() {
    var _a, _b;

    return ((_a = this.user) === null || _a === void 0 ? void 0 : _a.username) && ((_b = this.user) === null || _b === void 0 ? void 0 : _b.username[0]) || '';
  }

  get color() {
    var _a;

    return this.avatar ? 'transparent' : getUserColor((_a = this.user) === null || _a === void 0 ? void 0 : _a.id);
  }

  get isOwner() {
    var _a, _b;

    return !!this.$accessor.auth.user && ((_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.user) === null || _b === void 0 ? void 0 : _b.id);
  }

  async onFileChanged(e) {
    this.loading = true;

    try {
      const file = e.target.files[0];
      const id = await http_client_HttpClient.uploadPicture(file);
      if (id) await this.updateAvatar(id);
    } finally {
      this.loading = false;
    }
  }

  async updateAvatar(pictureId) {
    const {
      errors,
      data
    } = await this.$apollo.mutate({
      mutation: update_avatar_graphql_default.a,
      variables: {
        pictureId
      }
    });
    if (errors || !(data === null || data === void 0 ? void 0 : data.updateAvatar)) return;
    const user = this.$accessor.auth.user;

    if (user) {
      user.avatar = data === null || data === void 0 ? void 0 : data.updateAvatar.avatar;
      this.$accessor.auth.SET_USER(user);
    }
  }

};

avatarvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: true
})], avatarvue_type_script_lang_ts_Avatar.prototype, "user", void 0);

avatarvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: Boolean,
  default: false
})], avatarvue_type_script_lang_ts_Avatar.prototype, "tiny", void 0);

avatarvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: Boolean,
  default: false
})], avatarvue_type_script_lang_ts_Avatar.prototype, "medium", void 0);

avatarvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: Boolean,
  default: false
})], avatarvue_type_script_lang_ts_Avatar.prototype, "large", void 0);

avatarvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: Boolean,
  default: false
})], avatarvue_type_script_lang_ts_Avatar.prototype, "stretch", void 0);

avatarvue_type_script_lang_ts_Avatar = avatarvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-avatar'
})], avatarvue_type_script_lang_ts_Avatar);
/* harmony default export */ var avatarvue_type_script_lang_ts_ = (avatarvue_type_script_lang_ts_Avatar);
// CONCATENATED MODULE: ./components/avatar/avatar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var avatar_avatarvue_type_script_lang_ts_ = (avatarvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/avatar/avatar.vue



function avatar_injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var avatar_component = normalizeComponent(
  avatar_avatarvue_type_script_lang_ts_,
  avatarvue_type_template_id_11928367_render,
  avatarvue_type_template_id_11928367_staticRenderFns,
  false,
  avatar_injectStyles,
  null,
  "2c09b78f"
  
)

/* harmony default export */ var avatar = (avatar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/profile-modal/profile-modal.vue?vue&type=script&lang=ts&
var profile_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let profile_modalvue_type_script_lang_ts_ProfileModal = class ProfileModal extends external_nuxt_property_decorator_["Vue"] {
  async created() {
    if (!this.id || this.id === -1) return;
    await this.$accessor.chat.fetchUserById({
      id: this.id
    });
  }

  get id() {
    return parseInt(this.$route.params.id);
  }

  get user() {
    return this.$accessor.chat.user(this.id);
  }

  get username() {
    var _a;

    return ((_a = this.user) === null || _a === void 0 ? void 0 : _a.username) || 'Loading...';
  }

  get registered() {
    var _a, _b;

    return ((_a = this.user) === null || _a === void 0 ? void 0 : _a.createdAt) ? external_luxon_["DateTime"].fromISO((_b = this.user) === null || _b === void 0 ? void 0 : _b.createdAt).toLocaleString(external_luxon_["DateTime"].DATE_FULL) : 'loading...';
  }

  get online() {
    var _a, _b;

    return ((_a = this.user) === null || _a === void 0 ? void 0 : _a.createdAt) ? external_luxon_["DateTime"].fromISO((_b = this.user) === null || _b === void 0 ? void 0 : _b.wasOnlineAt).toLocaleString(external_luxon_["DateTime"].DATE_FULL) : 'loading...';
  }

};
profile_modalvue_type_script_lang_ts_ProfileModal = profile_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-profile-modal',
  components: {
    BModal: modal,
    BAvatar: avatar
  }
})], profile_modalvue_type_script_lang_ts_ProfileModal);
/* harmony default export */ var profile_modalvue_type_script_lang_ts_ = (profile_modalvue_type_script_lang_ts_ProfileModal);
// CONCATENATED MODULE: ./components/modals/profile-modal/profile-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var profile_modal_profile_modalvue_type_script_lang_ts_ = (profile_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/profile-modal/profile-modal.vue



function profile_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var profile_modal_component = normalizeComponent(
  profile_modal_profile_modalvue_type_script_lang_ts_,
  profile_modalvue_type_template_id_23b34cc6_render,
  profile_modalvue_type_template_id_23b34cc6_staticRenderFns,
  false,
  profile_modal_injectStyles,
  null,
  "f3449d6c"
  
)

/* harmony default export */ var profile_modal = (profile_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/request-password-reset-modal/request-password-reset-modal.vue?vue&type=template&id=6cc8aaa5&
var request_password_reset_modalvue_type_template_id_6cc8aaa5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Восстановление пароля")]},proxy:true},{key:"default",fn:function(){return [(!_vm.requested)?_c('div',{staticClass:"request-password-reset-modal"},[_c('b-form',{attrs:{"errors":_vm.errors,"name":"request-password-reset-form"}},[_c('div',{staticClass:"form__row"},[_c('b-text-field',{attrs:{"id":"password_reset_email","name":"email","placeholder":"E-mail","width-full":""},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.reset()}},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('div',{staticClass:"form__row"},[_c('b-button',{attrs:{"large":"","width-full":""},on:{"click":function($event){$event.preventDefault();return _vm.reset()}}},[_vm._v("Восстановить")])],1)])],1):_c('div',{staticClass:"request-password-reset-modal"},[_c('div',{staticClass:"request-password-reset-modal__illustration"},[_c('img',{staticClass:"request-password-reset-modal__image",attrs:{"src":__webpack_require__(13),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"request-password-reset-modal__text"},[_vm._v("\n        Письмо для восстановления пароля будет отправлено, если пользователь с таким E-mail зарегистрирован\n      ")]),_vm._v(" "),(_vm.domain)?_c('b-button',{attrs:{"href":("https://" + _vm.domain),"target":"_blank","tag":"a","width-full":"","large":""}},[_vm._v("\n        Перейти в почтовый ящик\n      ")]):_vm._e()],1)]},proxy:true}])})}
var request_password_reset_modalvue_type_template_id_6cc8aaa5_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/request-password-reset-modal/request-password-reset-modal.vue?vue&type=template&id=6cc8aaa5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/request-password-reset-modal/request-password-reset-modal.vue?vue&type=script&lang=ts&
var request_password_reset_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let request_password_reset_modalvue_type_script_lang_ts_RequestPasswordResetModal = class RequestPasswordResetModal extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.errors = [];
    this.email = '';
    this.patterns = {
      email: /.{3,}@.+\..{2,}/i
    };
    this.requested = false;
  }

  get domain() {
    if (this.email) {
      const split = this.email.split('@');
      return split && split[1] || '';
    }

    return '';
  }

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();
    return this.validateEmail();
  }

  validateEmail() {
    const isFilled = this.email.length !== 0;

    if (!isFilled) {
      this.errors.push(this.$t('email_fill_error').toString());
      return false;
    }

    const matchesLength = this.email.length <= 191;

    if (!matchesLength) {
      this.errors.push(this.$t('email_length_error').toString());
      return false;
    }

    const matchesRegex = this.patterns.email.test(this.email);

    if (!matchesRegex) {
      this.errors.push(this.$t('email_regex_error').toString());
      return false;
    }

    return true;
  }

  async reset() {
    if (!this.validateForm()) return;
    this.requested = await this.$accessor.auth.requestPasswordReset({
      email: this.email
    });
  }

};
request_password_reset_modalvue_type_script_lang_ts_RequestPasswordResetModal = request_password_reset_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-request-password-reset-modal',
  components: {
    BModal: modal,
    BTextField: text_field,
    BForm: form_form,
    BButton: button_button
  }
})], request_password_reset_modalvue_type_script_lang_ts_RequestPasswordResetModal);
/* harmony default export */ var request_password_reset_modalvue_type_script_lang_ts_ = (request_password_reset_modalvue_type_script_lang_ts_RequestPasswordResetModal);
// CONCATENATED MODULE: ./components/modals/request-password-reset-modal/request-password-reset-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var request_password_reset_modal_request_password_reset_modalvue_type_script_lang_ts_ = (request_password_reset_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/request-password-reset-modal/request-password-reset-modal.vue



function request_password_reset_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var request_password_reset_modal_component = normalizeComponent(
  request_password_reset_modal_request_password_reset_modalvue_type_script_lang_ts_,
  request_password_reset_modalvue_type_template_id_6cc8aaa5_render,
  request_password_reset_modalvue_type_template_id_6cc8aaa5_staticRenderFns,
  false,
  request_password_reset_modal_injectStyles,
  null,
  "55f745d4"
  
)

/* harmony default export */ var request_password_reset_modal = (request_password_reset_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/request-email-confirmation-modal/request-email-confirmation-modal.vue?vue&type=template&id=49ed37a0&
var request_email_confirmation_modalvue_type_template_id_49ed37a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Подтверждение E-mail")]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"request-email-confirmation-modal"},[_c('div',{staticClass:"request-email-confirmation-modal__illustration"},[_c('img',{staticClass:"request-email-confirmation-modal__image",attrs:{"src":__webpack_require__(13),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"request-email-confirmation-modal__text"},[_vm._v("\n        Письмо было отправлено на адрес, указанный при регистрации.\n      ")]),_vm._v(" "),(_vm.domain)?_c('b-button',{attrs:{"href":("https://" + _vm.domain),"tag":"a","target":"_blank","width-full":"","large":""}},[_vm._v("\n        Перейти в почтовый ящик\n      ")]):_vm._e()],1)]},proxy:true}])})}
var request_email_confirmation_modalvue_type_template_id_49ed37a0_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/request-email-confirmation-modal/request-email-confirmation-modal.vue?vue&type=template&id=49ed37a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/request-email-confirmation-modal/request-email-confirmation-modal.vue?vue&type=script&lang=ts&
var request_email_confirmation_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let request_email_confirmation_modalvue_type_script_lang_ts_RequestEmailConfirmationModal = class RequestEmailConfirmationModal extends external_nuxt_property_decorator_["Vue"] {
  get domain() {
    var _a, _b;

    if ((_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.email) {
      const split = (_b = this.$accessor.auth.user) === null || _b === void 0 ? void 0 : _b.email.split('@');
      return split && split[1] || '';
    }

    return '';
  }

};
request_email_confirmation_modalvue_type_script_lang_ts_RequestEmailConfirmationModal = request_email_confirmation_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-request-email-confirmation-modal',
  components: {
    BModal: modal,
    BButton: button_button
  }
})], request_email_confirmation_modalvue_type_script_lang_ts_RequestEmailConfirmationModal);
/* harmony default export */ var request_email_confirmation_modalvue_type_script_lang_ts_ = (request_email_confirmation_modalvue_type_script_lang_ts_RequestEmailConfirmationModal);
// CONCATENATED MODULE: ./components/modals/request-email-confirmation-modal/request-email-confirmation-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var request_email_confirmation_modal_request_email_confirmation_modalvue_type_script_lang_ts_ = (request_email_confirmation_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/request-email-confirmation-modal/request-email-confirmation-modal.vue



function request_email_confirmation_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var request_email_confirmation_modal_component = normalizeComponent(
  request_email_confirmation_modal_request_email_confirmation_modalvue_type_script_lang_ts_,
  request_email_confirmation_modalvue_type_template_id_49ed37a0_render,
  request_email_confirmation_modalvue_type_template_id_49ed37a0_staticRenderFns,
  false,
  request_email_confirmation_modal_injectStyles,
  null,
  "37239536"
  
)

/* harmony default export */ var request_email_confirmation_modal = (request_email_confirmation_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/email-confirmed-modal/email-confirmed-modal.vue?vue&type=template&id=65c38e9c&
var email_confirmed_modalvue_type_template_id_65c38e9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Подтверждение E-mail")]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"email-confirmed-modal"},[_c('div',{staticClass:"email-confirmed-modal__illustration"},[_c('img',{staticClass:"email-confirmed-modal__image",attrs:{"src":__webpack_require__(13),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"email-confirmed-modal__text"},[_vm._v("\n        Ваш e-mail адрес подтверждён. Теперь вам доступен весь функционал чата.\n      ")]),_vm._v(" "),_c('b-button',{staticClass:"email-confirmed-modal__button",attrs:{"width-full":"","large":""},on:{"click":function($event){return _vm.$emit('close', $event)}}},[_vm._v("\n        Закрыть\n      ")])],1)]},proxy:true}])})}
var email_confirmed_modalvue_type_template_id_65c38e9c_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/email-confirmed-modal/email-confirmed-modal.vue?vue&type=template&id=65c38e9c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/email-confirmed-modal/email-confirmed-modal.vue?vue&type=script&lang=ts&
var email_confirmed_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let email_confirmed_modalvue_type_script_lang_ts_EmailConfirmedModal = class EmailConfirmedModal extends external_nuxt_property_decorator_["Vue"] {};
email_confirmed_modalvue_type_script_lang_ts_EmailConfirmedModal = email_confirmed_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-email-confirmed-modal',
  components: {
    BModal: modal,
    BButton: button_button
  }
})], email_confirmed_modalvue_type_script_lang_ts_EmailConfirmedModal);
/* harmony default export */ var email_confirmed_modalvue_type_script_lang_ts_ = (email_confirmed_modalvue_type_script_lang_ts_EmailConfirmedModal);
// CONCATENATED MODULE: ./components/modals/email-confirmed-modal/email-confirmed-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var email_confirmed_modal_email_confirmed_modalvue_type_script_lang_ts_ = (email_confirmed_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/email-confirmed-modal/email-confirmed-modal.vue



function email_confirmed_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var email_confirmed_modal_component = normalizeComponent(
  email_confirmed_modal_email_confirmed_modalvue_type_script_lang_ts_,
  email_confirmed_modalvue_type_template_id_65c38e9c_render,
  email_confirmed_modalvue_type_template_id_65c38e9c_staticRenderFns,
  false,
  email_confirmed_modal_injectStyles,
  null,
  "dc2586d8"
  
)

/* harmony default export */ var email_confirmed_modal = (email_confirmed_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/punishment-modal/punishment-modal.vue?vue&type=template&id=5d122632&
var punishment_modalvue_type_template_id_5d122632_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v(_vm._s(_vm.$t('modals.punishment.mute'))+" "+_vm._s(_vm.username))]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"punishment-modal"},[_c('div',{staticClass:"punishment-modal__row"},[_c('span',{staticClass:"punishment-modal__row-description"},[_vm._v(_vm._s(_vm.$t('modals.punishment.mute_reason'))+":")]),_vm._v(" "),_c('div',{staticClass:"punishment-modal__row-content"},[_c('b-text-field',{staticClass:"punishment-modal__input",attrs:{"id":"punishment-custom-time","width-full":"","small":""},model:{value:(_vm.reason),callback:function ($$v) {_vm.reason=$$v},expression:"reason"}})],1)]),_vm._v(" "),_c('div',{staticClass:"punishment-modal__row"},[_c('span',{staticClass:"punishment-modal__row-description"},[_vm._v(_vm._s(_vm.$t('modals.punishment.mute_time'))+":")]),_vm._v(" "),_c('div',{staticClass:"punishment-modal__row-content"},[_c('b-select',{staticClass:"punishment-modal__select",attrs:{"items":_vm.time,"value":_vm.selectedTimeIndex},on:{"input":_vm.setSelectedTimeIndex}}),_vm._v(" "),(_vm.isCustomTime)?_c('div',{staticClass:"punishment-modal__custom-time"},[_c('b-text-field',{staticClass:"punishment-modal__input",attrs:{"id":"punishment-custom-time","width-full":"","small":""},model:{value:(_vm.customTime),callback:function ($$v) {_vm.customTime=$$v},expression:"customTime"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('modals.punishment.times.minutes')))])],1):_vm._e()],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],staticClass:"punishment-modal__row"},[_c('b-checkbox',{attrs:{"id":"punishment-delete-messages"},model:{value:(_vm.deleteMessages),callback:function ($$v) {_vm.deleteMessages=$$v},expression:"deleteMessages"}},[_vm._v("\n          "+_vm._s(_vm.$t('modals.punishment.delete_all_users_messages'))+"\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"punishment-modal__row"},[_c('b-button',{attrs:{"width-full":""},on:{"click":function($event){return _vm.punish()}}},[_vm._v(_vm._s(_vm.$t('modals.punishment.mute'))+"!")])],1)])]},proxy:true}])})}
var punishment_modalvue_type_template_id_5d122632_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/punishment-modal/punishment-modal.vue?vue&type=template&id=5d122632&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/select/select.vue?vue&type=template&id=4b0a875a&scoped=true&
var selectvue_type_template_id_4b0a875a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"parent",staticClass:"select"},[_vm._ssrNode("<button class=\"select__title\" data-v-4b0a875a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.title)+"\n  ")+"</button> "),_c('transition',[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.focused),expression:"focused"}],ref:"options",staticClass:"select__list"},_vm._l((_vm.items),function(item,i){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(item !== _vm.title),expression:"item !== title"}],key:i,staticClass:"select__item",on:{"click":function($event){return _vm.select(i)}}},[_vm._v("\n        "+_vm._s(item)+"\n      ")])}),0)])],2)}
var selectvue_type_template_id_4b0a875a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/select/select.vue?vue&type=template&id=4b0a875a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/select/select.vue?vue&type=script&lang=ts&
var selectvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let selectvue_type_script_lang_ts_Select = class Select extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.focused = false;
  }

  get index() {
    return typeof this.value === 'string' ? parseInt(this.value) : this.value || 0;
  }

  get title() {
    return this.items && this.items[this.index] ? this.items[this.index] : 'EMPTY';
  }

  mounted() {
    document.addEventListener('click', e => {
      var _a;

      if (!((_a = this.parent) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && this.focused) this.blur();
    });
  }

  focus() {
    this.focused = true;
  }

  blur() {
    this.focused = false;
  }

  mousedown() {
    if (!this.focused) this.focus();else this.blur();
  }

  select(i) {
    this.$emit('input', i);
    this.blur();
  }

};

selectvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Array,
  default: () => []
})], selectvue_type_script_lang_ts_Select.prototype, "items", void 0);

selectvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: [Number, String],
  default: 0
})], selectvue_type_script_lang_ts_Select.prototype, "value", void 0);

selectvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], selectvue_type_script_lang_ts_Select.prototype, "parent", void 0);

selectvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], selectvue_type_script_lang_ts_Select.prototype, "options", void 0);

selectvue_type_script_lang_ts_Select = selectvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-select'
})], selectvue_type_script_lang_ts_Select);
/* harmony default export */ var selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_Select);
// CONCATENATED MODULE: ./components/select/select.vue?vue&type=script&lang=ts&
 /* harmony default export */ var select_selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/select/select.vue



function select_injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(170)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var select_component = normalizeComponent(
  select_selectvue_type_script_lang_ts_,
  selectvue_type_template_id_4b0a875a_scoped_true_render,
  selectvue_type_template_id_4b0a875a_scoped_true_staticRenderFns,
  false,
  select_injectStyles,
  "4b0a875a",
  "1f779a2f"
  
)

/* harmony default export */ var select_select = (select_component.exports);
// CONCATENATED MODULE: ./graphql/schema.ts
var PunishmentTypes;

(function (PunishmentTypes) {
  PunishmentTypes["Ban"] = "ban";
  PunishmentTypes["Mute"] = "mute";
})(PunishmentTypes || (PunishmentTypes = {}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/punishment-modal/punishment-modal.vue?vue&type=script&lang=ts&
var punishment_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let punishment_modalvue_type_script_lang_ts_PunishmentModal = class PunishmentModal extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.types = ['Бан', 'Мут'];
    this.time = [this.$t('modals.punishment.times.forever').toString(), this.$t('modals.punishment.times.day').toString(), this.$t('modals.punishment.times.hour').toString(), this.$t('modals.punishment.times.ten_minutes').toString(), this.$t('modals.punishment.times.custom').toString()];
    this.timeValues = [undefined, 1440, 60, 10, undefined];
    this.selectedTypeIndex = 0;
    this.selectedTimeIndex = 0;
    this.customTime = '30';
    this.deleteMessages = false;
    this.reason = this.$t('modals.punishment.mute_reason_placeholder').toString();
  }

  async created() {
    if (!this.username) {
      await this.$accessor.chat.fetchUserById({
        id: this.id
      });
    }

    if (!this.username) {
      this.$emit('close');
    }
  }

  get id() {
    return parseInt(this.$route.params.id);
  }

  get username() {
    var _a;

    return ((_a = this.$accessor.chat.user(this.id)) === null || _a === void 0 ? void 0 : _a.username) || '';
  }

  get isCustomTime() {
    return this.selectedTimeIndex === this.time.length - 1;
  }

  get duration() {
    return this.isCustomTime ? +this.customTime : this.timeValues[this.selectedTimeIndex];
  }

  setSelectedTypeIndex(value) {
    this.selectedTypeIndex = value;
  }

  setSelectedTimeIndex(value) {
    this.selectedTimeIndex = value;
  }

  async punish() {
    await this.$accessor.chat.punishUser({
      userId: this.id,
      type: PunishmentTypes.Mute,
      duration: this.duration,
      reason: this.reason
    });
    await this.$emit('close');
  }

};
punishment_modalvue_type_script_lang_ts_PunishmentModal = punishment_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-punishment-modal',
  components: {
    BModal: modal,
    BButton: button_button,
    BCheckbox: checkbox_checkbox,
    BTextField: text_field,
    BSelect: select_select
  }
})], punishment_modalvue_type_script_lang_ts_PunishmentModal);
/* harmony default export */ var punishment_modalvue_type_script_lang_ts_ = (punishment_modalvue_type_script_lang_ts_PunishmentModal);
// CONCATENATED MODULE: ./components/modals/punishment-modal/punishment-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var punishment_modal_punishment_modalvue_type_script_lang_ts_ = (punishment_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/punishment-modal/punishment-modal.vue



function punishment_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var punishment_modal_component = normalizeComponent(
  punishment_modal_punishment_modalvue_type_script_lang_ts_,
  punishment_modalvue_type_template_id_5d122632_render,
  punishment_modalvue_type_template_id_5d122632_staticRenderFns,
  false,
  punishment_modal_injectStyles,
  null,
  "7b3acb16"
  
)

/* harmony default export */ var punishment_modal = (punishment_modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/settings-modal/settings-modal.vue?vue&type=template&id=e363a80a&
var settings_modalvue_type_template_id_e363a80a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{on:{"close":function($event){return _vm.$emit('close', $event)}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("Регистрация")]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"settings-modal"},[_c('b-switch',{attrs:{"id":"settings_theme","checked":_vm.dark},on:{"update:checked":_vm.setTheme}},[_vm._v("Тёмная тема")]),_vm._v(" "),_c('b-switch',{attrs:{"id":"settings_compact","checked":_vm.compact},on:{"update:checked":_vm.setCompact}},[_vm._v("\n        Компактный вид\n      ")])],1)]},proxy:true}])})}
var settings_modalvue_type_template_id_e363a80a_staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/settings-modal/settings-modal.vue?vue&type=template&id=e363a80a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/switch/switch.vue?vue&type=template&id=2289afdc&
var switchvue_type_template_id_2289afdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"switch",class:{
    switch_with_margin: _vm.margin,
  }},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.id))+" type=\"checkbox\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedSynced)?_vm._i(_vm.checkedSynced,null)>-1:(_vm.checkedSynced)))+" class=\"switch__input\"> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"switch__label\">","</label>",[_vm._t("default")],2)],2)}
var switchvue_type_template_id_2289afdc_staticRenderFns = []


// CONCATENATED MODULE: ./components/switch/switch.vue?vue&type=template&id=2289afdc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/switch/switch.vue?vue&type=script&lang=ts&
var switchvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let switchvue_type_script_lang_ts_Switch = class Switch extends external_nuxt_property_decorator_["Vue"] {};

switchvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  required: true
})], switchvue_type_script_lang_ts_Switch.prototype, "id", void 0);

switchvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], switchvue_type_script_lang_ts_Switch.prototype, "label", void 0);

switchvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], switchvue_type_script_lang_ts_Switch.prototype, "disabled", void 0);

switchvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: Boolean
})], switchvue_type_script_lang_ts_Switch.prototype, "margin", void 0);

switchvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["PropSync"])('checked', {
  required: false,
  type: Boolean
})], switchvue_type_script_lang_ts_Switch.prototype, "checkedSynced", void 0);

switchvue_type_script_lang_ts_Switch = switchvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-switch'
})], switchvue_type_script_lang_ts_Switch);
/* harmony default export */ var switchvue_type_script_lang_ts_ = (switchvue_type_script_lang_ts_Switch);
// CONCATENATED MODULE: ./components/switch/switch.vue?vue&type=script&lang=ts&
 /* harmony default export */ var switch_switchvue_type_script_lang_ts_ = (switchvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/switch/switch.vue



function switch_injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var switch_component = normalizeComponent(
  switch_switchvue_type_script_lang_ts_,
  switchvue_type_template_id_2289afdc_render,
  switchvue_type_template_id_2289afdc_staticRenderFns,
  false,
  switch_injectStyles,
  null,
  "1bd2ab2f"
  
)

/* harmony default export */ var switch_switch = (switch_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/settings-modal/settings-modal.vue?vue&type=script&lang=ts&
var settings_modalvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let settings_modalvue_type_script_lang_ts_SettingsModal = class SettingsModal extends external_nuxt_property_decorator_["Vue"] {
  get dark() {
    return this.$accessor.settings.theme === 'dark';
  }

  get compact() {
    return this.$accessor.settings.compact;
  }

  setTheme(value) {
    this.$accessor.settings.setTheme(value ? 'dark' : 'light');
  }

  setCompact(value) {
    this.$accessor.settings.setCompact(value);
  }

};
settings_modalvue_type_script_lang_ts_SettingsModal = settings_modalvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-settings-modal',
  components: {
    BModal: modal,
    BSwitch: switch_switch
  }
})], settings_modalvue_type_script_lang_ts_SettingsModal);
/* harmony default export */ var settings_modalvue_type_script_lang_ts_ = (settings_modalvue_type_script_lang_ts_SettingsModal);
// CONCATENATED MODULE: ./components/modals/settings-modal/settings-modal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var settings_modal_settings_modalvue_type_script_lang_ts_ = (settings_modalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/modals/settings-modal/settings-modal.vue



function settings_modal_injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var settings_modal_component = normalizeComponent(
  settings_modal_settings_modalvue_type_script_lang_ts_,
  settings_modalvue_type_template_id_e363a80a_render,
  settings_modalvue_type_template_id_e363a80a_staticRenderFns,
  false,
  settings_modal_injectStyles,
  null,
  "669448d4"
  
)

/* harmony default export */ var settings_modal = (settings_modal_component.exports);
// CONCATENATED MODULE: ./router.js




 // Modals









external_vue_default.a.use(external_vue_router_default.a);
function createRouter() {
  return new external_vue_router_default.a({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'main',
      component: main,
      children: [{
        path: 'login',
        name: 'modal_login',
        component: login_modal
      }, {
        path: 'register',
        name: 'modal_register',
        component: register_modal
      }, {
        path: 'profile/:id',
        name: 'modal_profile',
        component: profile_modal
      }, {
        path: 'request_password_reset',
        name: 'modal_request_password_reset',
        component: request_password_reset_modal
      }, {
        path: 'request_email_confirmation',
        name: 'modal_request_email_confirmation',
        component: request_email_confirmation_modal
      }, {
        path: 'email_confirmed',
        name: 'modal_email_confirmed',
        component: email_confirmed_modal
      }, {
        path: 'profile/:id/punish',
        name: 'modal_punishment',
        component: punishment_modal
      }, {
        path: 'settings',
        name: 'modal_settings',
        component: settings_modal
      }]
    }, {
      path: '/confirm_email',
      name: 'confirm_email',
      component: confirmation
    }, {
      path: '/reset_password',
      name: 'reset_password',
      component: reset_password
    }, {
      path: '*',
      redirect: '/'
    }]
  });
}
// CONCATENATED MODULE: ./.nuxt/router.js

const createDefaultRouter = null;
const routerOptions = null;
function router_createRouter(ssrContext) {
  return createRouter(ssrContext, createDefaultRouter, routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var nuxt_errorvue_type_template_id_38a3918a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var nuxt_errorvue_type_template_id_38a3918a_staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function nuxt_error_injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = normalizeComponent(
  components_nuxt_errorvue_type_script_lang_js_,
  nuxt_errorvue_type_template_id_38a3918a_render,
  nuxt_errorvue_type_template_id_38a3918a_staticRenderFns,
  false,
  nuxt_error_injectStyles,
  null,
  "9011f3e0"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = normalizeComponent(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "0ca4bf44"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/confirmation.vue?vue&type=template&id=ba92d4d4&
var confirmationvue_type_template_id_ba92d4d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page__wrapper"},[_vm._ssrNode("<div class=\"page__header\"></div> "),_vm._ssrNode("<div class=\"page__main\">","</div>",[_c('nuxt')],1)],2)}
var confirmationvue_type_template_id_ba92d4d4_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/confirmation.vue?vue&type=template&id=ba92d4d4&

// EXTERNAL MODULE: ./assets/stylus/normalize.styl
var normalize = __webpack_require__(60);

// EXTERNAL MODULE: ./assets/stylus/grid.styl
var grid = __webpack_require__(61);

// EXTERNAL MODULE: ./assets/stylus/global.styl
var stylus_global = __webpack_require__(62);

// EXTERNAL MODULE: ./assets/stylus/colors.styl
var colors = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./layouts/confirmation.vue?vue&type=script&lang=ts&
var lib_vue_loader_options_layouts_confirmationvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let confirmationvue_type_script_lang_ts_Confirmation = class Confirmation extends external_nuxt_property_decorator_["Vue"] {};
confirmationvue_type_script_lang_ts_Confirmation = lib_vue_loader_options_layouts_confirmationvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  head() {
    return {
      htmlAttrs: {
        class: ['page_theme_' + this.$accessor.settings.theme]
      }
    };
  }

})], confirmationvue_type_script_lang_ts_Confirmation);
/* harmony default export */ var lib_vue_loader_options_layouts_confirmationvue_type_script_lang_ts_ = (confirmationvue_type_script_lang_ts_Confirmation);
// CONCATENATED MODULE: ./layouts/confirmation.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_confirmationvue_type_script_lang_ts_ = (lib_vue_loader_options_layouts_confirmationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./layouts/confirmation.vue





/* normalize component */

var layouts_confirmation_component = normalizeComponent(
  layouts_confirmationvue_type_script_lang_ts_,
  confirmationvue_type_template_id_ba92d4d4_render,
  confirmationvue_type_template_id_ba92d4d4_staticRenderFns,
  false,
  null,
  null,
  "01a20bf4"
  
)

/* harmony default export */ var layouts_confirmation = (layouts_confirmation_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=f3ce36aa&
var defaultvue_type_template_id_f3ce36aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:(_vm.swipeLeft),expression:"swipeLeft",arg:"swipe",modifiers:{"left":true}},{name:"touch",rawName:"v-touch:swipe.right",value:(_vm.swipeRight),expression:"swipeRight",arg:"swipe",modifiers:{"right":true}}],staticClass:"page__wrapper",on:{"contextmenu":_vm.openContextMenu}},[_vm._ssrNode("<div class=\"page__header\"></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("page__main",{
      'page__main_state_pc-open': _vm.asidePcOpened,
      'page__main_state_mobile-open': _vm.asideMobileOpened,
    }))+">","</div>",[_c('nuxt'),_vm._ssrNode(" "),_vm._ssrNode("<aside"+(_vm._ssrClass("page__aside scrollbar",{
        'page__aside_state_mobile-open': _vm.asideMobileOpened,
        'page__aside_state_pc-open': _vm.asidePcOpened,
      }))+">","</aside>",[_c('b-aside-panel')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__aside-button page__aside-button_type_mobile\">","</div>",[_c('svg-icon',{staticClass:"page__aside-icon",attrs:{"name":"menu"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__aside-footer\">","</div>",[_vm._ssrNode("<button class=\"page__aside-menu\">","</button>",[_c('svg-icon',{attrs:{"name":"menu_open"}})],1),_vm._ssrNode(" "),(_vm.$accessor.auth.loggedIn)?_c('b-aside-footer'):_vm._e()],2)],2),_vm._ssrNode(" "),_c('b-context-menu',{ref:"message-context-menu"},[_c('b-context-menu-item',{on:{"click":_vm.openProfileModal}},[_vm._v("Профиль")]),_vm._v(" "),(_vm.showDeleteMessage)?_c('b-context-menu-item',{attrs:{"icon":"delete"},on:{"click":_vm.deleteMessage}},[_vm._v("\n      Удалить сообщение\n    ")]):_vm._e(),_vm._v(" "),(_vm.showPunish)?_c('b-context-menu-item',{attrs:{"icon":"hammer","important":""},on:{"click":_vm.punish}},[_vm._v("\n      "+_vm._s(_vm.$t('modals.punishment.mute'))+"\n    ")]):_vm._e()],1),_vm._ssrNode(" "),_c('b-context-menu',{ref:"context-menu"})],2)}
var defaultvue_type_template_id_f3ce36aa_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=f3ce36aa&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/aside-panel/aside-panel.vue?vue&type=template&id=2054ecc8&
var aside_panelvue_type_template_id_2054ecc8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aside-panel"},[_vm._ssrNode("<section class=\"aside-panel__section\">","</section>",[_vm._ssrNode("<h2 class=\"aside-panel__section-title\">"+_vm._ssrEscape("Пользователи в сети – "+_vm._s(_vm.users.length))+"</h2> "),_vm._ssrNode("<div class=\"aside-panel__section-body\">","</div>",[_c('b-users-list',{attrs:{"users":_vm.users}})],1)],2)])}
var aside_panelvue_type_template_id_2054ecc8_staticRenderFns = []


// CONCATENATED MODULE: ./components/aside-panel/aside-panel.vue?vue&type=template&id=2054ecc8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/users-list/users-list.vue?vue&type=template&id=7e689f28&
var users_listvue_type_template_id_7e689f28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"users-list"},_vm._l((_vm.users),function(user){return _c('router-link',{key:user.id,staticClass:"users-list__item",attrs:{"to":{ name: 'modal_profile', params: { id: user.id } },"tag":"li"}},[(user.avatar)?_c('img',{staticClass:"users-list__avatar",attrs:{"src":user.avatar.s.link,"alt":""}}):_c('div',{staticClass:"users-list__avatar users-list__avatar_type_default",style:({ backgroundColor: _vm.avatarColor(user.id) })},[_vm._v("\n      "+_vm._s(user.username[0])+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"users-list__info"},[_c('h3',{staticClass:"users-list__username"},[_vm._v(_vm._s(user.username))])])])}),1)}
var users_listvue_type_template_id_7e689f28_staticRenderFns = []


// CONCATENATED MODULE: ./components/users-list/users-list.vue?vue&type=template&id=7e689f28&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/users-list/users-list.vue?vue&type=script&lang=ts&
var users_listvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let users_listvue_type_script_lang_ts_UsersList = class UsersList extends external_nuxt_property_decorator_["Vue"] {
  get avatarColor() {
    return id => getUserColor(id);
  }

};

users_listvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: true
})], users_listvue_type_script_lang_ts_UsersList.prototype, "users", void 0);

users_listvue_type_script_lang_ts_UsersList = users_listvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-users-list'
})], users_listvue_type_script_lang_ts_UsersList);
/* harmony default export */ var users_listvue_type_script_lang_ts_ = (users_listvue_type_script_lang_ts_UsersList);
// CONCATENATED MODULE: ./components/users-list/users-list.vue?vue&type=script&lang=ts&
 /* harmony default export */ var users_list_users_listvue_type_script_lang_ts_ = (users_listvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/users-list/users-list.vue



function users_list_injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var users_list_component = normalizeComponent(
  users_list_users_listvue_type_script_lang_ts_,
  users_listvue_type_template_id_7e689f28_render,
  users_listvue_type_template_id_7e689f28_staticRenderFns,
  false,
  users_list_injectStyles,
  null,
  "5a1d4e4f"
  
)

/* harmony default export */ var users_list = (users_list_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/aside-panel/aside-panel.vue?vue&type=script&lang=ts&
var aside_panelvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let aside_panelvue_type_script_lang_ts_AsidePanel = class AsidePanel extends external_nuxt_property_decorator_["Vue"] {
  get users() {
    return this.$accessor.chat.online;
  }

};
aside_panelvue_type_script_lang_ts_AsidePanel = aside_panelvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-aside-panel',
  components: {
    BUsersList: users_list
  }
})], aside_panelvue_type_script_lang_ts_AsidePanel);
/* harmony default export */ var aside_panelvue_type_script_lang_ts_ = (aside_panelvue_type_script_lang_ts_AsidePanel);
// CONCATENATED MODULE: ./components/aside-panel/aside-panel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var aside_panel_aside_panelvue_type_script_lang_ts_ = (aside_panelvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/aside-panel/aside-panel.vue



function aside_panel_injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var aside_panel_component = normalizeComponent(
  aside_panel_aside_panelvue_type_script_lang_ts_,
  aside_panelvue_type_template_id_2054ecc8_render,
  aside_panelvue_type_template_id_2054ecc8_staticRenderFns,
  false,
  aside_panel_injectStyles,
  null,
  "f5b629e2"
  
)

/* harmony default export */ var aside_panel = (aside_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/aside-footer/aside-footer.vue?vue&type=template&id=3de8956c&scoped=true&
var aside_footervue_type_template_id_3de8956c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aside-footer"},[_vm._ssrNode("<div class=\"aside-footer__profile\" data-v-3de8956c>","</div>",[_vm._ssrNode(((_vm.avatar)?("<img"+(_vm._ssrAttr("src",_vm.avatar))+" class=\"aside-footer__avatar\" data-v-3de8956c>"):("<div class=\"aside-footer__avatar aside-footer__avatar_type_default\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.avatarColor }, null))+" data-v-3de8956c>"+_vm._ssrEscape("\n      "+_vm._s(_vm.username[0])+"\n    ")+"</div>"))+" <div class=\"aside-footer__info\" data-v-3de8956c><h3 class=\"aside-footer__username\" data-v-3de8956c>"+_vm._ssrEscape(_vm._s(_vm.username))+"</h3></div> "),_c('transition',[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdown),expression:"dropdown"}],ref:"dropdown",staticClass:"aside-footer__dropdown"},[_c('li',{staticClass:"aside-footer__dropdown-item"},[_c('b-button',{attrs:{"to":{ name: 'modal_profile', params: { id: _vm.user.id } },"width-full":""}},[_vm._v("Профиль")])],1),_vm._v(" "),_c('li',{staticClass:"aside-footer__dropdown-item"},[_c('b-button',{attrs:{"to":{ name: 'modal_settings' },"width-full":""}},[_vm._v("Настройки")])],1),_vm._v(" "),_c('li',{staticClass:"aside-footer__dropdown-item"},[_c('b-button',{attrs:{"width-full":""},on:{"click":function($event){$event.stopPropagation();return _vm.logout($event)}}},[_vm._v("Выйти")])],1)])])],2)])}
var aside_footervue_type_template_id_3de8956c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/aside-footer/aside-footer.vue?vue&type=template&id=3de8956c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/aside-footer/aside-footer.vue?vue&type=script&lang=ts&
var aside_footervue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let aside_footervue_type_script_lang_ts_AsideFooter = class AsideFooter extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.dropdown = false;
  }

  mounted() {
    document.addEventListener('click', event => {
      if (!this.dropdownEl.contains(event.target)) {
        this.dropdown = false;
      }
    });
  }

  get user() {
    return this.$accessor.auth.user;
  }

  get username() {
    var _a;

    return ((_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.username) || ' ';
  }

  get avatar() {
    var _a, _b;

    return ((_b = (_a = this.$accessor.auth.user) === null || _a === void 0 ? void 0 : _a.avatar) === null || _b === void 0 ? void 0 : _b.s.link) || '';
  }

  get avatarColor() {
    var _a;

    return getUserColor(((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) || 0);
  }

  logout() {
    this.$apolloHelpers.onLogout();
    this.$accessor.auth.SET_LOGGED_IN(false);
  }

};

aside_footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])('dropdown')], aside_footervue_type_script_lang_ts_AsideFooter.prototype, "dropdownEl", void 0);

aside_footervue_type_script_lang_ts_AsideFooter = aside_footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-aside-footer',
  components: {
    BButton: button_button
  }
})], aside_footervue_type_script_lang_ts_AsideFooter);
/* harmony default export */ var aside_footervue_type_script_lang_ts_ = (aside_footervue_type_script_lang_ts_AsideFooter);
// CONCATENATED MODULE: ./components/aside-footer/aside-footer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var aside_footer_aside_footervue_type_script_lang_ts_ = (aside_footervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/aside-footer/aside-footer.vue



function aside_footer_injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(192)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var aside_footer_component = normalizeComponent(
  aside_footer_aside_footervue_type_script_lang_ts_,
  aside_footervue_type_template_id_3de8956c_scoped_true_render,
  aside_footervue_type_template_id_3de8956c_scoped_true_staticRenderFns,
  false,
  aside_footer_injectStyles,
  "3de8956c",
  "3aba946f"
  
)

/* harmony default export */ var aside_footer = (aside_footer_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/context-menu/context-menu.vue?vue&type=template&id=8654dade&
var context_menuvue_type_template_id_8654dade_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],ref:"popper",staticClass:"context-menu",attrs:{"tabindex":"-1"},on:{"!contextmenu":function($event){$event.preventDefault();}}},[_vm._ssrNode("<ul class=\"context-menu__items\">","</ul>",[_vm._ssrNode("<li class=\"context-menu__item context-menu__item_display_only-child\"><button disabled=\"disabled\" class=\"context-menu__button\">Нет действий</button></li> "),_vm._t("default")],2)])}
var context_menuvue_type_template_id_8654dade_staticRenderFns = []


// CONCATENATED MODULE: ./components/context-menu/context-menu.vue?vue&type=template&id=8654dade&

// EXTERNAL MODULE: external "popper.js"
var external_popper_js_ = __webpack_require__(76);
var external_popper_js_default = /*#__PURE__*/__webpack_require__.n(external_popper_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/context-menu/context-menu.vue?vue&type=script&lang=ts&
var context_menuvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let context_menuvue_type_script_lang_ts_ContextMenu = class ContextMenu extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.opened = false;
    this.contextData = null;
  }

  get isVisible() {
    return this.opened;
  }

  mounted() {
    document.addEventListener('click', this.documentClick);
    document.addEventListener('keydown', this.documentKeyDown);
  }

  documentClick(event) {
    if (!this.popperElm.contains(event.target)) {
      this.close();
    }
  }

  documentKeyDown(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  open(evt, contextData = {}) {
    var _a, _b;

    (_a = this.contextMenu) === null || _a === void 0 ? void 0 : _a.close();
    (_b = this.messageContextMenu) === null || _b === void 0 ? void 0 : _b.close();
    this.opened = true;
    this.contextData = contextData;

    if (this.popper) {
      this.popper.destroy();
    }

    this.popper = new external_popper_js_default.a(this.referenceObject(evt), this.popperElm, {
      placement: 'right-start',
      modifiers: {
        preventOverflow: {
          boundariesElement: document.querySelector(this.boundariesElement)
        }
      }
    }); // Recalculate position

    this.$nextTick(() => {
      var _a;

      (_a = this.popper) === null || _a === void 0 ? void 0 : _a.scheduleUpdate();
    });
  }

  close() {
    this.opened = false;
    this.contextData = null;
  }

  referenceObject(evt) {
    const left = evt.clientX;
    const top = evt.clientY;
    const right = left + 1;
    const bottom = top + 1;
    const clientWidth = 1;
    const clientHeight = 1;

    function getBoundingClientRect() {
      return {
        left,
        top,
        right,
        bottom,
        height: clientHeight,
        width: clientWidth
      };
    }

    return {
      getBoundingClientRect,
      clientWidth,
      clientHeight
    };
  }

  beforeDestroy() {
    document.removeEventListener('click', this.documentClick);
    document.removeEventListener('keydown', this.documentKeyDown);

    if (this.popper !== undefined) {
      this.popper.destroy();
    }
  }

};

context_menuvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["InjectReactive"])('context-menu')], context_menuvue_type_script_lang_ts_ContextMenu.prototype, "contextMenu", void 0);

context_menuvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["InjectReactive"])('message-context-menu')], context_menuvue_type_script_lang_ts_ContextMenu.prototype, "messageContextMenu", void 0);

context_menuvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String,
  default: 'body'
})], context_menuvue_type_script_lang_ts_ContextMenu.prototype, "boundariesElement", void 0);

context_menuvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])('popper')], context_menuvue_type_script_lang_ts_ContextMenu.prototype, "popperElm", void 0);

context_menuvue_type_script_lang_ts_ContextMenu = context_menuvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-context-menu'
})], context_menuvue_type_script_lang_ts_ContextMenu);
/* harmony default export */ var context_menuvue_type_script_lang_ts_ = (context_menuvue_type_script_lang_ts_ContextMenu);
// CONCATENATED MODULE: ./components/context-menu/context-menu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var context_menu_context_menuvue_type_script_lang_ts_ = (context_menuvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/context-menu/context-menu.vue



function context_menu_injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var context_menu_component = normalizeComponent(
  context_menu_context_menuvue_type_script_lang_ts_,
  context_menuvue_type_template_id_8654dade_render,
  context_menuvue_type_template_id_8654dade_staticRenderFns,
  false,
  context_menu_injectStyles,
  null,
  "a64e24e2"
  
)

/* harmony default export */ var context_menu = (context_menu_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/context-menu-item/context-menu-item.vue?vue&type=template&id=081032d9&
var context_menu_itemvue_type_template_id_081032d9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"context-menu__item",class:{ 'context-menu__item_color_danger': _vm.important }},[_vm._ssrNode("<button class=\"context-menu__button\">","</button>",[(_vm.icon)?_c('svg-icon',{staticClass:"context-menu__icon",attrs:{"name":_vm.icon}}):_vm._e(),_vm._ssrNode(" "),_vm._t("default")],2)])}
var context_menu_itemvue_type_template_id_081032d9_staticRenderFns = []


// CONCATENATED MODULE: ./components/context-menu-item/context-menu-item.vue?vue&type=template&id=081032d9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/context-menu-item/context-menu-item.vue?vue&type=script&lang=ts&
var context_menu_itemvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let context_menu_itemvue_type_script_lang_ts_ContextMenuItem = class ContextMenuItem extends external_nuxt_property_decorator_["Vue"] {
  click(event) {
    var _a, _b;

    this.$emit('click', event);
    (_a = this.contextMenu) === null || _a === void 0 ? void 0 : _a.close();
    (_b = this.messageContextMenu) === null || _b === void 0 ? void 0 : _b.close();
  }

};

context_menu_itemvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["InjectReactive"])('context-menu')], context_menu_itemvue_type_script_lang_ts_ContextMenuItem.prototype, "contextMenu", void 0);

context_menu_itemvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["InjectReactive"])('message-context-menu')], context_menu_itemvue_type_script_lang_ts_ContextMenuItem.prototype, "messageContextMenu", void 0);

context_menu_itemvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: Boolean,
  default: false
})], context_menu_itemvue_type_script_lang_ts_ContextMenuItem.prototype, "important", void 0);

context_menu_itemvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  required: false,
  type: String
})], context_menu_itemvue_type_script_lang_ts_ContextMenuItem.prototype, "icon", void 0);

context_menu_itemvue_type_script_lang_ts_ContextMenuItem = context_menu_itemvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'b-context-menu-item'
})], context_menu_itemvue_type_script_lang_ts_ContextMenuItem);
/* harmony default export */ var context_menu_itemvue_type_script_lang_ts_ = (context_menu_itemvue_type_script_lang_ts_ContextMenuItem);
// CONCATENATED MODULE: ./components/context-menu-item/context-menu-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var context_menu_item_context_menu_itemvue_type_script_lang_ts_ = (context_menu_itemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/context-menu-item/context-menu-item.vue



function context_menu_item_injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var context_menu_item_component = normalizeComponent(
  context_menu_item_context_menu_itemvue_type_script_lang_ts_,
  context_menu_itemvue_type_template_id_081032d9_render,
  context_menu_itemvue_type_template_id_081032d9_staticRenderFns,
  false,
  context_menu_item_injectStyles,
  null,
  "456cc3f7"
  
)

/* harmony default export */ var context_menu_item = (context_menu_item_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=ts&
var defaultvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let defaultvue_type_script_lang_ts_Default = class Default extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.contextMenu = null;
    this.messageContextMenu = null;
    this.asideMobileOpened = false;
  }

  created() {
    this.onRouteChanged();
  }

  mounted() {
    this.onUserChanged();
    this.contextMenu = this.$refs['context-menu'];
    this.messageContextMenu = this.$refs['message-context-menu'];
  }

  onUserChanged() {
    if (true) return;
    const user = this.$accessor.auth.user;
    if (!user) return;

    if ((user === null || user === void 0 ? void 0 : user.emailConfirmed) === false) {
      const reminder = this.$accessor.modals.reminders.find(reminder => reminder.type === ReminderTypes.EMAIL_CONFIRMATION);

      if (reminder && reminder.disabledAt !== null && reminder.userId === user.id && Date.now() > reminder.disabledAt + reminder.timeout || !reminder) {
        this.$accessor.modals.addReminder(ReminderTypes.EMAIL_CONFIRMATION);
      }
    }
  }

  onRouteChanged(newRoute, oldRoute) {
    var _a, _b;

    if (!newRoute || !oldRoute || newRoute.name !== oldRoute.name) {
      if (!((_a = this.$route) === null || _a === void 0 ? void 0 : _a.name) || !/^modal_.*/.test((_b = this.$route) === null || _b === void 0 ? void 0 : _b.name)) return;
      const components = this.$router.getMatchedComponents();
      const component = components.find(c => c.options.name.includes('modal'));
      if (component) this.openModal(component);
    }
  }

  openModal(component) {
    if (false) {}
  }

  get asidePcOpened() {
    return this.$accessor.chat.asidePcOpened;
  }

  swipeLeft() {
    this.asideMobileOpened = true;
  }

  swipeRight() {
    this.asideMobileOpened = false;
  }

  setAsidePcOpened(value) {
    this.$accessor.chat.SET_ASIDE_PC_OPENED(value);
    this.$cookies.set('aside_pc_opened', value.toString(), {
      path: '/',
      sameSite: 'lax',
      maxAge: 86400 * 365 * 10
    });
  }

  closeContextMenus() {
    var _a, _b;

    (_a = this.contextMenu) === null || _a === void 0 ? void 0 : _a.close();
    (_b = this.messageContextMenu) === null || _b === void 0 ? void 0 : _b.close();
  }

  openContextMenu(event) {
    event.preventDefault();
    this.closeContextMenus();
  }

  get showDeleteMessage() {
    var _a, _b, _c, _d;

    const ownerId = (_c = (_b = (_a = this.messageContextMenu) === null || _a === void 0 ? void 0 : _a.contextData) === null || _b === void 0 ? void 0 : _b.message.owner) === null || _c === void 0 ? void 0 : _c.id;
    return this.$accessor.auth.can.deleteAny('message').granted || this.$accessor.auth.can.deleteOwn('message').granted && ownerId && ownerId === ((_d = this.$accessor.auth.user) === null || _d === void 0 ? void 0 : _d.id);
  }

  get showPunish() {
    var _a, _b, _c, _d;

    const ownerId = (_c = (_b = (_a = this.messageContextMenu) === null || _a === void 0 ? void 0 : _a.contextData) === null || _b === void 0 ? void 0 : _b.message.owner) === null || _c === void 0 ? void 0 : _c.id;
    return (this.$accessor.auth.can.update('ban').granted || this.$accessor.auth.can.update('mute').granted) && ownerId !== ((_d = this.$accessor.auth.user) === null || _d === void 0 ? void 0 : _d.id);
  }

  async deleteMessage() {
    var _a, _b;

    const messageId = (_b = (_a = this.messageContextMenu) === null || _a === void 0 ? void 0 : _a.contextData) === null || _b === void 0 ? void 0 : _b.message.id;
    this.closeContextMenus();
    if (!messageId) return;
    await this.$accessor.chat.deleteMessage({
      messageId
    });
  }

  punish() {
    var _a, _b, _c;

    const ownerId = (_c = (_b = (_a = this.messageContextMenu) === null || _a === void 0 ? void 0 : _a.contextData) === null || _b === void 0 ? void 0 : _b.message.owner) === null || _c === void 0 ? void 0 : _c.id;
    this.$router.push({
      name: 'modal_punishment',
      params: {
        id: ownerId
      }
    });
  }

  openProfileModal() {
    var _a, _b, _c;

    const ownerId = (_c = (_b = (_a = this.messageContextMenu) === null || _a === void 0 ? void 0 : _a.contextData) === null || _b === void 0 ? void 0 : _b.message.owner) === null || _c === void 0 ? void 0 : _c.id;
    this.$router.push({
      name: 'modal_profile',
      params: {
        id: ownerId
      }
    });
  }

};

defaultvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["ProvideReactive"])('context-menu')], defaultvue_type_script_lang_ts_Default.prototype, "contextMenu", void 0);

defaultvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["ProvideReactive"])('message-context-menu')], defaultvue_type_script_lang_ts_Default.prototype, "messageContextMenu", void 0);

defaultvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Watch"])('$accessor.auth.user')], defaultvue_type_script_lang_ts_Default.prototype, "onUserChanged", null);

defaultvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Watch"])('$route')], defaultvue_type_script_lang_ts_Default.prototype, "onRouteChanged", null);

defaultvue_type_script_lang_ts_Default = defaultvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  head() {
    return {
      htmlAttrs: {
        class: ['page_theme_' + this.$accessor.settings.theme]
      }
    };
  },

  components: {
    BContextMenuItem: context_menu_item,
    BContextMenu: context_menu,
    BAsideFooter: aside_footer,
    BButton: button_button,
    BModal: modal,
    BAsidePanel: aside_panel
  }
})], defaultvue_type_script_lang_ts_Default);
/* harmony default export */ var defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_Default);
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = normalizeComponent(
  layouts_defaultvue_type_script_lang_ts_,
  defaultvue_type_template_id_f3ce36aa_render,
  defaultvue_type_template_id_f3ce36aa_staticRenderFns,
  false,
  null,
  null,
  "74902452"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_confirmation": sanitizeComponent(layouts_confirmation),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(198), 'store/index.ts'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(15), 'auth.ts');
  resolveStoreModules(__webpack_require__(16), 'chat.ts');
  resolveStoreModules(__webpack_require__(17), 'modals.ts');
  resolveStoreModules(__webpack_require__(18), 'settings.ts'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs|ts)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js

/** @type {import('@nuxt/types').Middleware} */

_nuxt_middleware.nuxti18n = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/options.js
var nuxt_i18n_options = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js




function localePath(route, locale) {
  const localizedRoute = localeRoute.call(this, route, locale);

  if (!localizedRoute) {
    return;
  }

  return localizedRoute.fullPath;
}

function localeRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  const localizedRoute = Object.assign({}, route);

  if (route.path && !route.name) {
    const isDefaultLocale = locale === nuxt_i18n_options["j" /* defaultLocale */]; // if route has a path defined but no name, resolve full route using the path

    const isPrefixed = // don't prefix default locale
    !(isDefaultLocale && [nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["t" /* strategy */])) && // no prefix for any language
    !(nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) && // no prefix for different domains
    !i18n.differentDomains;
    let path = isPrefixed ? `/${locale}${route.path}` : route.path;
    path = path.replace(/\/+$/, '') + (nuxt_i18n_options["u" /* trailingSlash */] ? '/' : '') || '/';
    localizedRoute.path = path;
  } else {
    if (!route.name && !route.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  return this.router.resolve(localizedRoute).route;
}

function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;

  if (!route) {
    return '';
  }

  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["w" /* vuex */].moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const lang = i18n.locales.find(l => l[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]] === locale);

    if (lang && lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]]) {
      let protocol;

      if (true) {
        const isHTTPS = __webpack_require__(199);

        protocol = this.req && isHTTPS(this.req) ? 'https' : 'http';
      } else {}

      path = protocol + '://' + lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]] + path;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Could not find domain name for locale ${locale}`);
    }
  }

  return path;
}

function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return null;
  }

  return route.name.split(nuxt_i18n_options["s" /* routesNameSeparator */])[0];
}

function getLocaleRouteName(routeName, locale) {
  let name = routeName + (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX ? '' : nuxt_i18n_options["s" /* routesNameSeparator */] + locale);

  if (locale === nuxt_i18n_options["j" /* defaultLocale */] && nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    name += nuxt_i18n_options["s" /* routesNameSeparator */] + nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */];
  }

  return name;
}

const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app
  } = context;
  app.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = NuxtContextProxy(context, localeRoute);
  app.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
});
// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__(94);
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(21);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/seo-head.js


const nuxtI18nSeo = function () {
  if (!(external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) || !this.$i18n || !this.$i18n.locale || !this.$i18n.locales || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] === false || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] && this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]].seo === false) {
    return {};
  }

  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.locales.find(l => codeFromLocale(l) === this.$i18n.locale);
  const currentLocaleIso = isoFromLocale(currentLocale);

  if (currentLocale && currentLocaleIso) {
    metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
  }

  addHreflangLinks.bind(this)(this.$i18n.locales, this.$i18n.__baseUrl, metaObject.link);
  addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
  addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
  addAlternateOgLocales.bind(this)(this.$i18n.locales, currentLocaleIso, metaObject.meta);
  return metaObject;
};

function addHreflangLinks(locales, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
    return;
  }

  const localeMap = new Map();

  for (const locale of locales) {
    const localeIso = isoFromLocale(locale);

    if (!localeIso) {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Locale ISO code is required to generate alternate link`);
      continue;
    }

    const [language, region] = localeIso.split('-');

    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }

    localeMap.set(localeIso, locale);
  }

  for (const [iso, mapLocale] of localeMap.entries()) {
    link.push({
      hid: `i18n-alt-${iso}`,
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(mapLocale.code),
      hreflang: iso
    });
  }

  if (nuxt_i18n_options["j" /* defaultLocale */]) {
    link.push({
      hid: 'i18n-xd',
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(nuxt_i18n_options["j" /* defaultLocale */]),
      hreflang: 'x-default'
    });
  }
}

function addCanonicalLinks(baseUrl, link) {
  const currentRoute = this.localeRoute({ ...this.$route,
    name: this.getRouteBaseName()
  });
  const canonicalPath = currentRoute ? currentRoute.path : null;

  if (!canonicalPath) {
    return;
  }

  link.push({
    hid: 'i18n-can',
    rel: 'canonical',
    href: baseUrl + canonicalPath
  });
}

function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

  if (!hasCurrentLocaleAndIso) {
    return;
  }

  meta.push({
    hid: 'i18n-og',
    property: 'og:locale',
    // Replace dash with underscore as defined in spec: language_TERRITORY
    content: underscoreIsoFromLocale(currentLocale)
  });
}

function addAlternateOgLocales(locales, currentLocaleIso, meta) {
  const localesWithoutCurrent = locales.filter(locale => {
    const localeIso = isoFromLocale(locale);
    return localeIso && localeIso !== currentLocaleIso;
  });
  const alternateLocales = localesWithoutCurrent.map(locale => ({
    hid: `i18n-og-alt-${isoFromLocale(locale)}`,
    property: 'og:locale:alternate',
    content: underscoreIsoFromLocale(locale)
  }));
  meta.push(...alternateLocales);
}

function isoFromLocale(locale) {
  return locale[nuxt_i18n_options["e" /* LOCALE_ISO_KEY */]];
}

function underscoreIsoFromLocale(locale) {
  return isoFromLocale(locale).replace(/-/g, '_');
}

function codeFromLocale(locale) {
  return locale[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]];
}
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(22);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(201);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/**
 * Parses locales provided from browser through `accept-language` header.
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

const parseAcceptLanguage = input => {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
};
/**
 * Find locale code that best matches provided list of browser locales.
 * @param {string[]} appLocales The user-configured locale codes that are to be matched.
 * @param {string[]} browserLocales The locales to match against configured.
 * @return {string?}
 */

const matchBrowserLocale = (appLocales, browserLocales) => {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // First pass: match exact locale.

  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedCode = appLocales.find(appCode => appCode.toLowerCase() === browserCode.toLowerCase());

    if (matchedCode) {
      matchedLocales.push({
        code: matchedCode,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    if (browserCode.includes('-')) {
      // For backwards-compatibility, this is lower-cased before comparing.
      const languageCode = browserCode.split('-')[0].toLowerCase();

      if (appLocales.includes(languageCode)) {
        // Deduct a thousandth for being non-exact match.
        matchedLocales.push({
          code: languageCode,
          score: 0.999 - index / browserLocales.length
        });
        break;
      }
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : null;
};
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 * @param {string | function} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @return {string}
 */

const resolveBaseUrl = (baseUrl, context) => {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  return baseUrl;
};
/**
 * Get locale code that corresponds to current hostname
 * @param  {object} locales
 * @param  {object} [req] Request object
 * @param  {{ localDomainKey: string, localeCodeKey: string }} options
 * @return {string | null} Locade code found if any
 */

const getLocaleDomain = (locales, req, {
  localDomainKey,
  localeCodeKey
}) => {
  let host = null;

  if (false) {} else if (req) {
    host = req.headers['x-forwarded-host'] || req.headers.host;
  }

  if (host) {
    const matchingLocale = locales.find(l => l[localDomainKey] === host);

    if (matchingLocale) {
      return matchingLocale[localeCodeKey];
    }
  }

  return null;
};
/**
 * Creates getter for getLocaleFromRoute
 * @param  {string[]} localeCodes
 * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
 * @return {(route) => string| null}
 */

const createLocaleFromRouteGetter = (localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) => {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = new RegExp(`^/${localesPattern}/`, 'i');
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {Object} route
   * @param  {string[]} localeCodes
   * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
   * @return {string | null} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return null;
  };

  return getLocaleFromRoute;
};
/**
 * @param {object} [req]
 * @param {{ useCookie: boolean, localeCodes: string[], cookieKey: string}} options
 * @return {string | void}
 */

const getLocaleCookie = (req, {
  useCookie,
  cookieKey,
  localeCodes
}) => {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
};
/**
 * @param {string} locale
 * @param {object} [res]
 * @param {{ useCookie: boolean, cookieDomain: string, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

const setLocaleCookie = (locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) => {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (typeof headers === 'string') {
      headers = [headers];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
};
const registerStore = (store, vuex, localeCodes, moduleName) => {
  store.registerModule(vuex.moduleName, {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => locale => routeParams[locale] || {}
      } : {})
    }
  }, {
    preserveState: !!store.state[vuex.moduleName]
  });
};
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 * @param  {Store} store     Vuex store
 * @param  {String} locale   Current locale
 * @param  {Object} messages Current messages
 * @param  {{ vuex: object }} options
 * @return {Promise(void)}
 */

const syncVuex = async (store, locale = null, messages = null, {
  vuex
}) => {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
};

const isObject = value => value && !Array.isArray(value) && typeof value === 'object';
/**
 * Validate setRouteParams action's payload
 * @param {object} routeParams The action's payload
 * @param {string[]} localeCodes
 * @param {string} moduleName
 */


const validateRouteParams = (routeParams, localeCodes, moduleName) => {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(`[${moduleName}] Route params should be an object`);
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for key ${key} which is not a valid locale`);
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for locale ${key} with a non-object value`);
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js






external_vue_default.a.use(external_vue_i18n_default.a);
const {
  alwaysRedirect,
  onlyOnRoot,
  fallbackLocale
} = nuxt_i18n_options["l" /* detectBrowserLanguage */];
const getLocaleFromRoute = createLocaleFromRouteGetter(nuxt_i18n_options["o" /* localeCodes */], {
  routesNameSeparator: nuxt_i18n_options["s" /* routesNameSeparator */],
  defaultLocaleRouteNameSuffix: nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */]
});
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (nuxt_i18n_options["w" /* vuex */] && store) {
    registerStore(store, nuxt_i18n_options["w" /* vuex */], nuxt_i18n_options["o" /* localeCodes */], nuxt_i18n_options["f" /* MODULE_NAME */]);
  }

  if ( true && nuxt_i18n_options["n" /* lazy */]) {
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale) {
        langs[locale] = app.i18n.getLocaleMessage(locale);
      }

      if (fallbackLocale && locale !== fallbackLocale) {
        langs[fallbackLocale] = app.i18n.getLocaleMessage(fallbackLocale);
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } = nuxt_i18n_options["l" /* detectBrowserLanguage */];

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    } // Abort if newLocale did not change


    if (newLocale === app.i18n.locale) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    } // Lazy-loading enabled


    if (nuxt_i18n_options["n" /* lazy */]) {
      const {
        loadLanguageAsync
      } = __webpack_require__(202); // Load fallback locale.


      if (app.i18n.fallbackLocale && newLocale !== app.i18n.fallbackLocale) {
        await loadLanguageAsync(context, app.i18n.fallbackLocale);
      }

      await loadLanguageAsync(context, newLocale);
    }

    app.i18n.locale = newLocale;
    await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), {
      vuex: nuxt_i18n_options["w" /* vuex */]
    }); // Must retrieve from context as it might have changed since plugin initialization.

    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getRedirectPathForLocale = (route, locale) => {
    if (!locale || app.i18n.differentDomains || nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!onlyOnRoot || locale !== nuxt_i18n_options["j" /* defaultLocale */] || nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (redirectPath === route.fullPath) {
      return '';
    }

    return redirectPath;
  }; // Called by middleware on navigation (also on the initial one).


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["r" /* rootRedirect */]) {
      let statusCode = 302;
      let path = nuxt_i18n_options["r" /* rootRedirect */];

      if (typeof nuxt_i18n_options["r" /* rootRedirect */] !== 'string') {
        statusCode = nuxt_i18n_options["r" /* rootRedirect */].statusCode;
        path = nuxt_i18n_options["r" /* rootRedirect */].path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
    const finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    await app.i18n.setLocale(finalLocale);
    return [null, null];
  };

  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}

    if (onlyOnRoot && nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX && route.path !== '/') {
      return false;
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      matchedLocale = matchBrowserLocale(nuxt_i18n_options["o" /* localeCodes */], parseAcceptLanguage(req.headers['accept-language']));
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return false;
  };

  const extendVueI18nInstance = i18n => {
    i18n.locales = nuxt_i18n_options["p" /* locales */];
    i18n.defaultLocale = nuxt_i18n_options["j" /* defaultLocale */];
    i18n.differentDomains = nuxt_i18n_options["m" /* differentDomains */];
    i18n.beforeLanguageSwitch = nuxt_i18n_options["i" /* beforeLanguageSwitch */];
    i18n.onLanguageSwitched = nuxt_i18n_options["q" /* onLanguageSwitched */];

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["o" /* localeCodes */]
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.__baseUrl = app.i18n.__baseUrl;
  }; // Set instance options


  const vueI18nOptions = typeof nuxt_i18n_options["v" /* vueI18n */] === 'function' ? Object(nuxt_i18n_options["v" /* vueI18n */])(context) : lodash_clonedeep_default()(nuxt_i18n_options["v" /* vueI18n */]);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  app.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
  app.i18n.__onNavigate = onNavigate; // Inject seo function

  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      app.i18n.locales.forEach(locale => {
        locale.domain = store.state.localeDomains[locale.code];
      });
    }
  }

  let finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage(route);

  if (!finalLocale) {
    if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncLocale && store && store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale !== '') {
      finalLocale = store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const options = {
        localDomainKey: nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */],
        localeCodeKey: nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]
      };
      const domainLocale = getLocaleDomain(nuxt_i18n_options["p" /* locales */], req, options);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    } else if (useCookie) {
      finalLocale = app.i18n.getLocaleCookie();
    }
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: external "vue-apollo"
var external_vue_apollo_ = __webpack_require__(23);
var external_vue_apollo_default = /*#__PURE__*/__webpack_require__.n(external_vue_apollo_);

// EXTERNAL MODULE: external "cross-fetch/polyfill"
var polyfill_ = __webpack_require__(204);

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__(95);

// EXTERNAL MODULE: external "apollo-link"
var external_apollo_link_ = __webpack_require__(9);

// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__(96);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__(11);

// EXTERNAL MODULE: external "subscriptions-transport-ws"
var external_subscriptions_transport_ws_ = __webpack_require__(97);

// EXTERNAL MODULE: external "subscriptions-transport-ws/dist/message-types"
var message_types_ = __webpack_require__(98);
var message_types_default = /*#__PURE__*/__webpack_require__.n(message_types_);

// EXTERNAL MODULE: external "apollo-link-ws"
var external_apollo_link_ws_ = __webpack_require__(99);

// EXTERNAL MODULE: external "apollo-utilities"
var external_apollo_utilities_ = __webpack_require__(100);

// EXTERNAL MODULE: external "apollo-link-persisted-queries"
var external_apollo_link_persisted_queries_ = __webpack_require__(101);

// EXTERNAL MODULE: external "apollo-link-context"
var external_apollo_link_context_ = __webpack_require__(102);

// EXTERNAL MODULE: external "apollo-link-state"
var external_apollo_link_state_ = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/vue-cli-plugin-apollo/graphql-client/src/index.js












// Create the apollo client
function createApolloClient ({
  // Client ID if using multiple Clients
  clientId = 'defaultClient',
  // URL to the HTTP API
  httpEndpoint,
  // Url to the Websocket API
  wsEndpoint = null,
  // Token used in localstorage
  tokenName = 'apollo-token',
  // Enable this if you use Query persisting with Apollo Engine
  persisting = false,
  // Is currently Server-Side Rendering or not
  ssr = false,
  // Only use Websocket for all requests (including queries and mutations)
  websocketsOnly = false,
  // Custom starting link.
  // If you want to replace the default HttpLink, set `defaultHttpLink` to false
  link = null,
  // Custom pre-auth links
  // Useful if you want, for example, to set a custom middleware for refreshing an access token.
  preAuthLinks = [],
  // If true, add the default HttpLink.
  // Disable it if you want to replace it with a terminating link using `link` option.
  defaultHttpLink = true,
  // Options for the default HttpLink
  httpLinkOptions = {},
  // Custom Apollo cache implementation (default is apollo-cache-inmemory)
  cache = null,
  // Options for the default cache
  inMemoryCacheOptions = {},
  // Additional Apollo client options
  apollo = {},
  // apollo-link-state options
  clientState = null,
  // Function returning Authorization header token
  getAuth = src_defaultGetAuth,
  // Local Schema
  typeDefs = undefined,
  // Local Resolvers
  resolvers = undefined,
  // Hook called when you should write local state in the cache
  onCacheInit = undefined,
}) {
  let wsClient, authLink, stateLink
  const disableHttp = websocketsOnly && !ssr && wsEndpoint

  // Apollo cache
  if (!cache) {
    cache = new external_apollo_cache_inmemory_["InMemoryCache"](inMemoryCacheOptions)
  }

  if (!disableHttp) {
    const httpLink = Object(external_apollo_upload_client_["createUploadLink"])({
      uri: httpEndpoint,
      ...httpLinkOptions,
    })

    if (!link) {
      link = httpLink
    } else if (defaultHttpLink) {
      link = Object(external_apollo_link_["from"])([link, httpLink])
    }

    // HTTP Auth header injection
    authLink = Object(external_apollo_link_context_["setContext"])(async (_, { headers }) => {
      const Authorization = await getAuth(tokenName)
      const authorizationHeader = Authorization ? { Authorization } : {}
      return {
        headers: {
          ...headers,
          ...authorizationHeader,
        },
      }
    })

    // Concat all the http link parts
    link = authLink.concat(link)

    if (preAuthLinks.length) {
      link = Object(external_apollo_link_["from"])(preAuthLinks).concat(authLink)
    }
  }

  // On the server, we don't want WebSockets and Upload links
  if (!ssr) {
    // If on the client, recover the injected state
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-underscore-dangle
      const state = window.__APOLLO_STATE__
      if (state && state[clientId]) {
        // Restore state
        cache.restore(state[clientId])
      }
    }

    if (!disableHttp) {
      let persistingOpts = {}
      if (typeof persisting === 'object' && persisting != null) {
        persistingOpts = persisting
        persisting = true
      }
      if (persisting === true) {
        link = Object(external_apollo_link_persisted_queries_["createPersistedQueryLink"])(persistingOpts).concat(link)
      }
    }

    // Web socket
    if (wsEndpoint) {
      wsClient = new external_subscriptions_transport_ws_["SubscriptionClient"](wsEndpoint, {
        reconnect: true,
        connectionParams: () => {
          const Authorization = getAuth(tokenName)
          return Authorization ? { Authorization, headers: { Authorization } } : {}
        },
      })

      // Create the subscription websocket link
      const wsLink = new external_apollo_link_ws_["WebSocketLink"](wsClient)

      if (disableHttp) {
        link = link ? link.concat(wsLink) : wsLink
      } else {
        link = Object(external_apollo_link_["split"])(
          // split based on operation type
          ({ query }) => {
            const { kind, operation } = Object(external_apollo_utilities_["getMainDefinition"])(query)
            return kind === 'OperationDefinition' &&
              operation === 'subscription'
          },
          wsLink,
          link,
        )
      }
    }
  }

  if (clientState) {
    console.warn('clientState is deprecated, see https://vue-cli-plugin-apollo.netlify.com/guide/client-state.html')
    stateLink = Object(external_apollo_link_state_["withClientState"])({
      cache,
      ...clientState,
    })
    link = Object(external_apollo_link_["from"])([stateLink, link])
  }

  const apolloClient = new external_apollo_client_["ApolloClient"]({
    link,
    cache,
    // Additional options
    ...(ssr ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
      // Apollo devtools
      connectToDevTools: "production" !== 'production',
    }),
    typeDefs,
    resolvers,
    ...apollo,
  })

  // Re-write the client state defaults on cache reset
  if (stateLink) {
    apolloClient.onResetStore(stateLink.writeDefaults)
  }

  if (onCacheInit) {
    onCacheInit(cache)
    apolloClient.onResetStore(() => onCacheInit(cache))
  }

  return {
    apolloClient,
    wsClient,
    stateLink,
  }
}

function restartWebsockets (wsClient) {
  // Copy current operations
  const operations = Object.assign({}, wsClient.operations)

  // Close connection
  wsClient.close(true)

  // Open a new one
  wsClient.connect()

  // Push all current operations to the new connection
  Object.keys(operations).forEach(id => {
    wsClient.sendMessage(
      id,
      message_types_default.a.GQL_START,
      operations[id].options,
    )
  })
}

function src_defaultGetAuth (tokenName) {
  if (typeof window !== 'undefined') {
    // get the authentication token from local storage if it exists
    const token = window.localStorage.getItem(tokenName)
    // return the headers to the context so httpLink can read them
    return token ? `Bearer ${token}` : ''
  }
}

// CONCATENATED MODULE: ./.nuxt/apollo-module.js






external_vue_default.a.use(external_vue_apollo_default.a);
/* harmony default export */ var apollo_module = ((ctx, inject) => {
  const providerOptions = {
    clients: {}
  };
  const {
    app,
    beforeNuxtRender,
    req
  } = ctx;
  const AUTH_TOKEN_NAME = 'token';
  const COOKIE_ATTRIBUTES = {
    "maxAge": 315360000,
    "sameSite": "lax",
    "path": "\u002F"
  };
  const AUTH_TYPE = 'Bearer ';
  const cookies = new external_universal_cookie_default.a(req && req.headers.cookie); // Config

  const defaultTokenName =  false || AUTH_TOKEN_NAME;

  function defaultGetAuth() {
    const token = cookies.get(defaultTokenName);
    return token && defaultClientConfig.validateToken(token) ? AUTH_TYPE + token : '';
  }

  let defaultClientConfig;
  defaultClientConfig = __webpack_require__(205);

  if ('default' in defaultClientConfig) {
    defaultClientConfig = defaultClientConfig.default;
  }

  defaultClientConfig = defaultClientConfig(ctx);

  const defaultValidateToken = () => true;

  if (!defaultClientConfig.validateToken) {
    defaultClientConfig.validateToken = defaultValidateToken;
  }

  const defaultCache = defaultClientConfig.cache ? defaultClientConfig.cache : new external_apollo_cache_inmemory_["InMemoryCache"](defaultClientConfig.inMemoryCacheOptions ? defaultClientConfig.inMemoryCacheOptions : undefined);

  if (false) {}

  if (!defaultClientConfig.getAuth) {
    defaultClientConfig.getAuth = defaultGetAuth;
  }

  if (false) {}

  defaultClientConfig.ssr = !!true;
  defaultClientConfig.cache = defaultCache;
  defaultClientConfig.tokenName = defaultTokenName; // if ssr we'd still like to have our webclient's cookies

  if ( true && req && req.headers && req.headers.cookie) {
    if (!defaultClientConfig.httpLinkOptions) {
      defaultClientConfig.httpLinkOptions = {};
    }

    if (!defaultClientConfig.httpLinkOptions.headers) {
      defaultClientConfig.httpLinkOptions.headers = {};
    }

    defaultClientConfig.httpLinkOptions.headers.cookie = req.headers.cookie;
  } // Create apollo client


  let defaultApolloCreation = createApolloClient({ ...defaultClientConfig
  });
  defaultApolloCreation.apolloClient.wsClient = defaultApolloCreation.wsClient;
  providerOptions.defaultClient = defaultApolloCreation.apolloClient;
  const vueApolloOptions = Object.assign(providerOptions, {
    errorHandler(error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    }

  });
  const apolloProvider = new external_vue_apollo_default.a(vueApolloOptions); // Allow access to the provider in the context

  app.apolloProvider = apolloProvider;

  if (true) {
    const ApolloSSR = __webpack_require__(206);

    beforeNuxtRender(({
      nuxtState
    }) => {
      nuxtState.apollo = ApolloSSR.getStates(apolloProvider);
    });
  }

  inject('apolloHelpers', {
    onLogin: async (token, apolloClient = apolloProvider.defaultClient, cookieAttributes = COOKIE_ATTRIBUTES, skipResetStore = false) => {
      // Fallback for tokenExpires param
      if (typeof cookieAttributes === 'number') cookieAttributes = {
        expires: cookieAttributes
      };

      if (typeof cookieAttributes.expires === 'number') {
        cookieAttributes.expires = new Date(Date.now() + 86400 * 1000 * cookieAttributes.expires);
      }

      if (token) {
        cookies.set(AUTH_TOKEN_NAME, token, cookieAttributes);
      } else {
        cookies.remove(AUTH_TOKEN_NAME, cookieAttributes);
      }

      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);

      if (!skipResetStore) {
        try {
          await apolloClient.resetStore();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (setToken)', 'color: orange;', e.message);
        }
      }
    },
    onLogout: async (apolloClient = apolloProvider.defaultClient, skipResetStore = false) => {
      cookies.remove(AUTH_TOKEN_NAME, COOKIE_ATTRIBUTES);
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);

      if (!skipResetStore) {
        try {
          await apolloClient.resetStore();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
        }
      }
    },
    getToken: (tokenName = AUTH_TOKEN_NAME) => {
      return cookies.get(tokenName);
    }
  });
});
// EXTERNAL MODULE: external "vue-functional-data-merge"
var external_vue_functional_data_merge_ = __webpack_require__(105);

// CONCATENATED MODULE: ./.nuxt/nuxt-svg-sprite.js



function generateName(name) {
  return name.toLowerCase().replace(/\.svg$/, '').replace(/[^a-z0-9-]/g, '-');
}
/**
 * Find sprite file name after nuxt build
 * @param {string} sprite Name of a sprite
 */


function getSpritePath(sprite) {
  const module = __webpack_require__(207)("./" + sprite + ".svg");

  if (typeof module === 'string') {
    return module;
  } // nuxt-edge v3.0.0-26398097.20b0379b returns object instead of string


  if (typeof module === 'object' && typeof module.default === 'string') {
    return module.default;
  }

  return '';
}

function getIcon(info) {
  const {
    icon,
    sprite
  } = info;
  return getSpritePath(sprite) + `#i-${generateName(icon)}`;
}

function getInfo(name) {
  let [sprite, icon] = name.split('/');

  if (!icon) {
    icon = sprite;
    sprite = 'icons';
  }

  return {
    icon,
    sprite
  };
} // @vue/component


const SvgIcon = {
  name: 'SvgIcon',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    viewBox: {
      type: String,
      default: null,

      validator(value) {
        return value.split(' ').every(v => {
          return !isNaN(parseInt(v));
        });
      }

    }
  },

  render(h, {
    props,
    data
  }) {
    const info = getInfo(props.name);
    const icon = getIcon(info);
    const use = h('use', {
      attrs: {
        // Since SVG 2, the xlink:href attribute is deprecated in favor of simply href.
        href: icon,
        // xlink:href can still be required in practice for cross-browser compatibility.
        'xlink:href': icon
      }
    });
    const title = props.title ? h('title', props.title) : null;
    const desc = props.desc ? h('desc', props.desc) : null;
    const {
      sprite
    } = info;
    const componentData = {
      class: 'icon sprite-' + sprite,
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: props.viewBox
      }
    };
    return h('svg', Object(external_vue_functional_data_merge_["mergeData"])(data, componentData), [title, desc, use].filter(Boolean));
  }

};
external_vue_default.a.component(SvgIcon.name, SvgIcon);
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(106);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./node_modules/typed-vuex/lib/index.js
var lib = __webpack_require__(5);

// CONCATENATED MODULE: ./.nuxt/nuxt-typed-vuex.js


const storeAccessor = Object(lib["getAccessorFromStore"])(createStore());
/* harmony default export */ var nuxt_typed_vuex = (async ({
  store
}, inject) => {
  inject('accessor', storeAccessor(store));
});
// CONCATENATED MODULE: ./plugins/bus.ts


const eventBusPlugin = (_, inject) => {
  inject('bus', new external_vue_default.a());
};

/* harmony default export */ var bus = (eventBusPlugin);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(14);

// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ./apollo-module.js (mode: 'all')

 // Source: ./nuxt-svg-sprite.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./nuxt-typed-vuex.js (mode: 'all')

 // Source: ./router.js (mode: 'all')

 // Source: ../plugins/bus.ts (mode: 'all')

 // Source: ../plugins/nuxt-client-init.client.ts (mode: 'client')

 // Source: ../plugins/vue2-touch-events.ts (mode: 'client')

 // Source: ../plugins/vue-js-modal.ts (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await router_createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Чат - Everhoof Radio",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Чат интернет-радиостанции Everhoof Radio"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fpng",
        "href": "\u002Ffavicon.png"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap\" rel=\"stylesheet"
      }],
      "htmlAttrs": {
        "class": ["page"]
      },
      "bodyAttrs": {
        "class": ["page__body grid grid_type_default"]
      },
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof apollo_module === 'function') {
    await apollo_module(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-svg-sprite.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-svg-sprite.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof nuxt_typed_vuex === 'function') {
    await nuxt_typed_vuex(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/router.js" (known exports: createRouter, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/router.js" (known exports: createRouter, known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof bus === 'function') {
    await bus(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["authenticated", "nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map