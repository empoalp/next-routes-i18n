"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _getIterator = require("@babel/runtime-corejs3/core-js/get-iterator");

var _Array$isArray2 = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _sliceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/entries"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _pathToRegexp = require("path-to-regexp");

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _router = _interopRequireDefault(require("next/router"));

var _url = require("url");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context11; _forEachInstanceProperty2(_context11 = ownKeys(Object(source), true)).call(_context11, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context12; _forEachInstanceProperty2(_context12 = ownKeys(Object(source))).call(_context12, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _Symbol === "undefined" || _getIteratorMethod(o) == null) { if (_Array$isArray2(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _getIterator(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context10; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty2(_context10 = Object.prototype.toString.call(o)).call(_context10, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

module.exports = function (opts) {
  return new Routes(opts);
};

var Routes = /*#__PURE__*/function () {
  function Routes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Link = _ref.Link,
        Link = _ref$Link === void 0 ? _link["default"] : _ref$Link,
        _ref$Router = _ref.Router,
        Router = _ref$Router === void 0 ? _router["default"] : _ref$Router,
        locale = _ref.locale,
        _ref$hideDefaultLocal = _ref.hideDefaultLocale,
        hideDefaultLocale = _ref$hideDefaultLocal === void 0 ? false : _ref$hideDefaultLocal,
        _ref$hideLocalePrefix = _ref.hideLocalePrefix,
        hideLocalePrefix = _ref$hideLocalePrefix === void 0 ? false : _ref$hideLocalePrefix;

    (0, _classCallCheck2["default"])(this, Routes);
    this.routes = [];
    this.Link = this.getLink(Link);
    this.Router = this.getRouter(Router);
    this.locale = locale;
    this.defaultLocale = locale;
    this.hideDefaultLocale = hideDefaultLocale;
    this.hideLocalePrefix = hideLocalePrefix;
  }

  (0, _createClass2["default"])(Routes, [{
    key: "add",
    value: function add(name) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.locale;
      var pattern = arguments.length > 2 ? arguments[2] : undefined;
      var page = arguments.length > 3 ? arguments[3] : undefined;
      var data = arguments.length > 4 ? arguments[4] : undefined;
      var update = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var prefetch = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var options;

      if (name instanceof Object) {
        options = name;

        if (!options.name) {
          throw new Error('Unnamed routes not supported');
        }

        name = options.name;

        if (!options.page) {
          options.page = options.name;
        }

        locale = options.locale || this.locale;
        update = options.update || false;
      } else {
        if ((0, _typeof2["default"])(page) === 'object') {
          data = page;
          page = name;
        } else {
          page = page || name;
        }

        options = {
          name: name,
          locale: locale,
          pattern: pattern,
          page: page,
          prefetch: prefetch
        };

        if (data) {
          options.data = data;
        }
      }

      options.hideLocale = !!this.hideDefaultLocale && options.locale === this.defaultLocale || this.hideLocalePrefix;

      if (this.findByName(name, locale)) {
        if (update) {
          var _context;

          // remove old route on update
          this.routes = (0, _filter["default"])(_context = this.routes).call(_context, function (route) {
            return route.name !== name || route.locale !== locale;
          });
        } else {
          throw new Error("Route \"".concat(name, "\" already exists"));
        }
      }

      this.routes.push(new Route(options));
      return this;
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this.locale = locale;
    }
  }, {
    key: "setRoutes",
    value: function setRoutes(routes) {
      var _this = this;

      if ((0, _isArray["default"])(routes)) {
        this.routes = [];
        (0, _forEach["default"])(routes).call(routes, function (route) {
          _this.add(route.name, route.locale, route.pattern, route.page, route.data);
        });
      } else if ((0, _typeof2["default"])(routes) === 'object') {
        this.routes = [];
        this.add(routes.name, routes.locale, routes.pattern, routes.page, routes.data);
      } else {
        throw new Error('Data passed to setRoutes is neither an array nor an object');
      }
    }
  }, {
    key: "findByName",
    value: function findByName(name, locale) {
      if (name) {
        var _context2;

        return (0, _filter["default"])(_context2 = this.routes).call(_context2, function (route) {
          return route.name === name && route.locale === locale;
        })[0];
      }
    }
  }, {
    key: "match",
    value: function match(url) {
      var _context3;

      var parsedUrl = new _url.URL(url, (0, _indexOf["default"])(url).call(url, '//') === -1 ? 'http://localhost' : undefined);
      var pathname = parsedUrl.pathname,
          searchParams = parsedUrl.searchParams;
      var query = {};

      var _iterator = _createForOfIteratorHelper((0, _entries["default"])(searchParams).call(searchParams)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          query[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return (0, _reduce["default"])(_context3 = this.routes).call(_context3, function (result, route) {
        var _context4;

        if (result.route) {
          return result;
        }

        var params = route.match(pathname);

        if (!params) {
          return result;
        }

        (0, _forEach["default"])(_context4 = (0, _keys2["default"])(params)).call(_context4, function (key) {
          params[key] = decodeURIComponent(params[key]);
        });
        return _objectSpread(_objectSpread({}, result), {}, {
          route: route,
          params: params,
          query: _objectSpread(_objectSpread(_objectSpread({}, query), params), {}, {
            nextRoute: route.name,
            __nextLocale: route.locale
          })
        });
      }, {
        query: query,
        parsedUrl: parsedUrl
      });
    }
  }, {
    key: "findAndGetUrls",
    value: function findAndGetUrls(name, locale, params) {
      locale = locale || this.locale;
      var route = this.findByName(name, locale);

      if (route) {
        return {
          route: route,
          urls: route.getUrls(params),
          byName: true
        };
      } else {
        return {
          route: this.routes[0],
          urls: this.routes[0].getUrls(params),
          byName: true
        }; // throw new Error(`Route "${name}" not found`)
      }
    }
  }, {
    key: "getRequestHandler",
    value: function getRequestHandler(app, customHandler) {
      var _this2 = this;

      var nextHandler = app.getRequestHandler();
      return function (req, res) {
        var _this2$match = _this2.match(req.url),
            route = _this2$match.route,
            query = _this2$match.query,
            parsedUrl = _this2$match.parsedUrl;

        if (route) {
          req.locale = route.locale;
          req.nextRoute = route;
          query.__nextLocale = route.locale;

          if (customHandler) {
            customHandler({
              req: req,
              res: res,
              route: route,
              query: query
            });
          } else {
            app.render(req, res, route.page, query);
          }
        } else {
          nextHandler(req, res, _url.parse(req.url, true));
        }
      };
    }
  }, {
    key: "getLink",
    value: function getLink(Link) {
      var _this3 = this;

      return function (props) {
        var href = props.href,
            locale = props.locale,
            params = props.params,
            newProps = (0, _objectWithoutProperties2["default"])(props, ["href", "locale", "params"]);
        var locale2 = locale || _this3.locale;
        var prefetch = props.prefetch || false;

        if ((0, _indexOf["default"])(href).call(href, '//') !== -1 || href[0] === '/' || href[0] === '#') {
          var propsToPass;

          if (Link.propTypes) {
            var allowedKeys = (0, _keys2["default"])(Link.propTypes);
            propsToPass = (0, _reduce["default"])(allowedKeys).call(allowedKeys, function (obj, key) {
              Object.prototype.hasOwnProperty.call(props, key) && (obj[key] = props[key]);
              return obj;
            }, {});
          } else {
            propsToPass = props;
          }

          return /*#__PURE__*/_react["default"].createElement(Link, propsToPass);
        }

        newProps.prefetch = prefetch;
        (0, _assign["default"])(newProps, _this3.findAndGetUrls(href, locale2, params).urls);
        return /*#__PURE__*/_react["default"].createElement(Link, newProps);
      };
    }
  }, {
    key: "getRouter",
    value: function getRouter(Router) {
      var _this4 = this;

      var wrap = function wrap(method) {
        return function (route, params, locale, options) {
          var _this4$findAndGetUrls = _this4.findAndGetUrls(route, locale, params),
              byName = _this4$findAndGetUrls.byName,
              _this4$findAndGetUrls2 = _this4$findAndGetUrls.urls,
              as = _this4$findAndGetUrls2.as,
              href = _this4$findAndGetUrls2.href;

          return Router[method](href, as, byName ? options : params);
        };
      };

      Router.pushRoute = wrap('push');
      Router.replaceRoute = wrap('replace');
      Router.prefetchRoute = wrap('prefetch');
      return Router;
    }
  }]);
  return Routes;
}();

var Route = /*#__PURE__*/function () {
  function Route(_ref2) {
    var _context5;

    var name = _ref2.name,
        locale = _ref2.locale,
        pattern = _ref2.pattern,
        page = _ref2.page,
        data = _ref2.data,
        hideLocale = _ref2.hideLocale,
        prefetch = _ref2.prefetch;
    (0, _classCallCheck2["default"])(this, Route);

    if (!name && !page) {
      throw new Error("Missing page to render for route \"".concat(pattern, "\""));
    }

    this.name = name;
    this.locale = locale;
    this.pattern = name === 'homepage' ? '' : pattern || "/".concat(name);
    this.page = page.replace(/(^|\/)homepage/, '').replace(/^\/?/, '/');
    this.regex = (0, _pathToRegexp.pathToRegexp)(this.pattern, this.keys = []);
    this.keyNames = (0, _map["default"])(_context5 = (0, _keys["default"])(this)).call(_context5, function (key) {
      return key.name;
    });
    this.toPath = (0, _pathToRegexp.compile)(this.pattern);
    this.data = data || {};
    this.hideLocale = hideLocale || false;
    this.prefetch = prefetch || false;
  }

  (0, _createClass2["default"])(Route, [{
    key: "match",
    value: function match(path) {
      if (!this.hideLocale && path.substring(1, this.locale.length + 1) === this.locale) {
        path = path.substring(this.locale.length + 1);

        if (!path) {
          return {};
        }
      }

      var values = this.regex.exec(path);

      if (values) {
        return this.valuesToParams((0, _slice["default"])(values).call(values, 1));
      }
    }
  }, {
    key: "valuesToParams",
    value: function valuesToParams(values) {
      var _this5 = this;

      return (0, _reduce["default"])(values).call(values, function (params, val, i) {
        return (0, _assign["default"])(params, (0, _defineProperty2["default"])({}, (0, _keys["default"])(_this5)[i].name, val));
      }, {});
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var _context6;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _concat["default"])(_context6 = "".concat(this.page, "?")).call(_context6, toQuerystring(_objectSpread(_objectSpread({}, params), {}, {
        nextRoute: this.name
      })));
    }
  }, {
    key: "getAs",
    value: function getAs() {
      var _this6 = this,
          _context8;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var as = (this.hideLocale ? '' : '/' + this.locale) + this.toPath(params);
      var keys = (0, _keys2["default"])(params);
      var qsKeys = (0, _filter["default"])(keys).call(keys, function (key) {
        var _context7;

        return (0, _indexOf["default"])(_context7 = _this6.keyNames).call(_context7, key) === -1;
      });

      if (as === '') {
        as = '/';
      }

      if (!qsKeys.length) return as;
      var qsParams = (0, _reduce["default"])(qsKeys).call(qsKeys, function (qs, key) {
        return (0, _assign["default"])(qs, (0, _defineProperty2["default"])({}, key, params[key]));
      }, {});
      return (0, _concat["default"])(_context8 = "".concat(as, "?")).call(_context8, toQuerystring(qsParams));
    }
  }, {
    key: "getUrls",
    value: function getUrls(params) {
      var as = this.getAs(params);
      var href = this.getHref(params);
      return {
        as: as,
        href: href
      };
    }
  }]);
  return Route;
}();

var toQuerystring = function toQuerystring(obj) {
  var _context9;

  return (0, _map["default"])(_context9 = (0, _keys2["default"])(obj)).call(_context9, function (key) {
    var value = obj[key];

    if ((0, _isArray["default"])(value)) {
      value = value.join('/');
    }

    return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
  }).join('&');
};
