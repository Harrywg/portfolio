function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};function o(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var i=/*@__PURE__*/e(n=/******/function(e){/******/// The module cache
/******/var t={};/******//******/// The require function
/******/function n(o){/******//******/// Check if module is in cache
/******/if(t[o])/******/return t[o].exports;/******/// Create a new module (and put it into the cache)
/******/var i=t[o]={/******/i:o,/******/l:!1,/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/e[o].call(i.exports,i,i.exports,n),/******//******/// Flag the module as loaded
/******/i.l=!0,i.exports);/******/}/******//******//******/// Load entry module and return exports
/******/return(/******//******//******/// expose the modules object (__webpack_modules__)
/******/n.m=e,/******//******/// expose the module cache
/******/n.c=t,/******//******/// define getter function for harmony exports
/******/n.d=function(e,t,o){n.o(e,t)||/******/Object.defineProperty(e,t,{enumerable:!0,get:o});/******/},/******//******/// define __esModule on exports
/******/n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(e,"__esModule",{value:!0});/******/},/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/n.t=function(e,t){/******/if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;/******/var o=Object.create(null);/******/if(/******/n.r(o),/******/Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,(function(t){return e[t]}).bind(null,i));/******/return o;/******/},/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){/******/var t=e&&e.__esModule?/******/function(){return e.default}:/******/function(){return e};/******/return /******/n.d(t,"a",t),t;/******/},/******//******/// Object.prototype.hasOwnProperty.call
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******//******/// __webpack_public_path__
/******/n.p="",n(n.s=21));/******/}([/* 0 *//***/function(e,n){/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/var o,i={};e.exports=i,i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i._warnedOnce={},i._decomp=null,/**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */i.extend=function(e,t){var n,o;"boolean"==typeof t?(n=2,o=t):(n=1,o=!0);for(var r=n;r<arguments.length;r++){var a=arguments[r];if(a)for(var s in a)o&&a[s]&&a[s].constructor===Object?e[s]&&e[s].constructor!==Object?e[s]=a[s]:(e[s]=e[s]||{},i.extend(e[s],o,a[s])):e[s]=a[s]}return e},/**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */i.clone=function(e,t){return i.extend({},t,e)},/**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */i.keys=function(e){if(Object.keys)return Object.keys(e);// avoid hasOwnProperty for performance
var t=[];for(var n in e)t.push(n);return t},/**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */i.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),o=0;o<n.length;o++)t.push(e[n[o]]);return t}// avoid hasOwnProperty for performance
for(var i in e)t.push(e[i]);return t},/**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */i.get=function(e,t,n,o){t=t.split(".").slice(n,o);for(var i=0;i<t.length;i+=1)e=e[t[i]];return e},/**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */i.set=function(e,t,n,o,r){var a=t.split(".").slice(o,r);return i.get(e,t,0,-1)[a[a.length-1]]=n,n},/**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */i.shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(i.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e},/**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */i.choose=function(e){return e[Math.floor(i.random()*e.length)]},/**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */i.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},/**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */i.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},/**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */i.isFunction=function(e){return"function"==typeof e},/**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */i.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},/**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */i.isString=function(e){return"[object String]"===toString.call(e)},/**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */i.clamp=function(e,t,n){return e<t?t:e>n?n:e},/**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */i.sign=function(e){return e<0?-1:1},/**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */i.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-i._nowStartTime},/**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */i.random=function(e,t){return t=void 0!==t?t:1,(e=void 0!==e?e:0)+o()*(t-e)},o=function(){return(// https://en.wikipedia.org/wiki/Linear_congruential_generator
i._seed=(9301*i._seed+49297)%233280,i._seed/233280)},/**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */i.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},/**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */i.logLevel=1,/**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},/**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},/**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},/**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */i.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(" ");i._warnedOnce[e]||(i.warn(e),i._warnedOnce[e]=!0)},/**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */i.deprecated=function(e,t,n){e[t]=i.chain(function(){i.warnOnce("\uD83D\uDD05 deprecated \uD83D\uDD05",n)},e[t])},/**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */i.nextId=function(){return i._nextId++},/**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */i.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return -1},/**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */i.map=function(e,t){if(e.map)return e.map(t);for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n},/**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */i.topologicalSort=function(e){// https://github.com/mgechev/javascript-algorithms
// Copyright (c) Minko Gechev (MIT license)
// Modifications: tidy formatting and naming
var t=[],n=[],o=[];for(var r in e)n[r]||o[r]||i._topologicalSort(r,n,o,e,t);return t},i._topologicalSort=function(e,t,n,o,r){var a=o[e]||[];n[e]=!0;for(var s=0;s<a.length;s+=1){var l=a[s];n[l]||t[l]||i._topologicalSort(l,t,n,o,r)}n[e]=!1,t[e]=!0,r.push(e)},/**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */i.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var o=function(){for(var t,n=Array(arguments.length),o=0,i=arguments.length;o<i;o++)n[o]=arguments[o];for(o=0;o<e.length;o+=1){var r=e[o].apply(t,n);void 0!==r&&(t=r)}return t};return o._chained=e,o},/**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */i.chainPathBefore=function(e,t,n){return i.set(e,t,i.chain(n,i.get(e,t)))},/**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */i.chainPathAfter=function(e,t,n){return i.set(e,t,i.chain(i.get(e,t),n))},/**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */i.setDecomp=function(e){i._decomp=e},/**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */i.getDecomp=function(){// get user provided decomp if set
var e=i._decomp;try{e||"undefined"==typeof window||(e=window.decomp),e||void 0===t||(e=t.decomp)}catch(t){// decomp not available
e=null}return e};/***/},/* 1 *//***/function(e,t){/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/var n={};e.exports=n,/**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},/**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var o=0;o<t.length;o++){var i=t[o];i.x>e.max.x&&(e.max.x=i.x),i.x<e.min.x&&(e.min.x=i.x),i.y>e.max.y&&(e.max.y=i.y),i.y<e.min.y&&(e.min.y=i.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},/**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},/**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},/**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},/**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */n.shift=function(e,t){var n=e.max.x-e.min.x,o=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+o};/***/},/* 2 *//***/function(e,t){/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/// TODO: consider params for reusing vector objects
var n={};e.exports=n,/**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */n.create=function(e,t){return{x:e||0,y:t||0}},/**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */n.clone=function(e){return{x:e.x,y:e.y}},/**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},/**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},/**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */n.rotate=function(e,t,n){var o=Math.cos(t),i=Math.sin(t);n||(n={});var r=e.x*o-e.y*i;return n.y=e.x*i+e.y*o,n.x=r,n},/**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */n.rotateAbout=function(e,t,n,o){var i=Math.cos(t),r=Math.sin(t);o||(o={});var a=n.x+((e.x-n.x)*i-(e.y-n.y)*r);return o.y=n.y+((e.x-n.x)*r+(e.y-n.y)*i),o.x=a,o},/**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */n.normalise=function(e){var t=n.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},/**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */n.dot=function(e,t){return e.x*t.x+e.y*t.y},/**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */n.cross=function(e,t){return e.x*t.y-e.y*t.x},/**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},/**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */n.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},/**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */n.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},/**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},/**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */n.div=function(e,t){return{x:e.x/t,y:e.y/t}},/**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */n.perp=function(e,t){return{x:-((t=!0===t?-1:1)*e.y),y:t*e.x}},/**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */n.neg=function(e){return{x:-e.x,y:-e.y}},/**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},/**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()];/***/},/* 3 *//***/function(e,t,n){/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/var o={};e.exports=o;var i=n(2),r=n(0);/**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */o.create=function(e,t){for(var n=[],o=0;o<e.length;o++){var i=e[o],r={x:i.x,y:i.y,index:o,body:t,isInternal:!1};n.push(r)}return n},/**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */o.fromPath=function(e,t){var n=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,function(e,t,o){n.push({x:parseFloat(t),y:parseFloat(o)})}),o.create(n,t)},/**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */o.centre=function(e){for(var t,n,r,a=o.area(e,!0),s={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=i.cross(e[l],e[r]),n=i.mult(i.add(e[l],e[r]),t),s=i.add(s,n);return i.div(s,6*a)},/**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */o.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return i.div(t,e.length)},/**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */o.area=function(e,t){for(var n=0,o=e.length-1,i=0;i<e.length;i++)n+=(e[o].x-e[i].x)*(e[o].y+e[i].y),o=i;return t?n/2:Math.abs(n)/2},/**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */o.inertia=function(e,t){// find the polygon's moment of inertia, using second moment of area
// from equations at http://www.physicsforums.com/showthread.php?t=25293
for(var n,o,r=0,a=0,s=0;s<e.length;s++)o=(s+1)%e.length,r+=(n=Math.abs(i.cross(e[o],e[s])))*(i.dot(e[o],e[o])+i.dot(e[o],e[s])+i.dot(e[s],e[s])),a+=n;return t/6*(r/a)},/**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */o.translate=function(e,t,n){n=void 0!==n?n:1;var o,i=e.length,r=t.x*n,a=t.y*n;for(o=0;o<i;o++)e[o].x+=r,e[o].y+=a;return e},/**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */o.rotate=function(e,t,n){if(0!==t){var o,i,r,a,s=Math.cos(t),l=Math.sin(t),c=n.x,u=n.y,d=e.length;for(a=0;a<d;a++)i=(o=e[a]).x-c,r=o.y-u,o.x=c+(i*s-r*l),o.y=u+(i*l+r*s);return e}},/**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */o.contains=function(e,t){for(var n,o=t.x,i=t.y,r=e.length,a=e[r-1],s=0;s<r;s++){if(n=e[s],(o-a.x)*(n.y-a.y)+(i-a.y)*(a.x-n.x)>0)return!1;a=n}return!0},/**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */o.scale=function(e,t,n,r){if(1===t&&1===n)return e;r=r||o.centre(e);for(var a,s,l=0;l<e.length;l++)a=e[l],s=i.sub(a,r),e[l].x=r.x+s.x*t,e[l].y=r.y+s.y*n;return e},/**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */o.chamfer=function(e,t,n,o,a){t="number"==typeof t?[t]:t||[8],// quality defaults to -1, which is auto
n=void 0!==n?n:-1,o=o||2,a=a||14;for(var s=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],u=e[l],d=e[(l+1)%e.length],p=t[l<t.length?l:t.length-1];if(0===p){s.push(u);continue}var f=i.normalise({x:u.y-c.y,y:c.x-u.x}),v=i.normalise({x:d.y-u.y,y:u.x-d.x}),m=Math.sqrt(2*Math.pow(p,2)),y=i.mult(r.clone(f),p),g=i.normalise(i.mult(i.add(f,v),.5)),x=i.sub(u,i.mult(g,m)),h=n;-1===n&&(h=1.75*Math.pow(p,.32)),(h=r.clamp(h,o,a))%2==1&&(h+=1);for(var b=Math.acos(i.dot(f,v))/h,S=0;S<h;S++)s.push(i.add(i.rotate(y,b*S),x))}return s},/**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */o.clockwiseSort=function(e){var t=o.mean(e);return e.sort(function(e,n){return i.angle(t,e)-i.angle(t,n)}),e},/**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */o.isConvex=function(e){// http://paulbourke.net/geometry/polygonmesh/
// Copyright (c) Paul Bourke (use permitted)
var t,n,o,i,r=0,a=e.length;if(a<3)return null;for(t=0;t<a;t++)if(n=(t+1)%a,o=(t+2)%a,(i=(e[n].x-e[t].x)*(e[o].y-e[n].y)-(e[n].y-e[t].y)*(e[o].x-e[n].x))<0?r|=1:i>0&&(r|=2),3===r)return!1;return 0!==r||null},/**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */o.hull=function(e){// http://geomalgorithms.com/a10-_hull-1.html
var t,n,o=[],r=[];// build lower hull
for(// sort vertices on x-axis (y-axis for ties)
(e=e.slice(0)).sort(function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y}),n=0;n<e.length;n+=1){for(t=e[n];r.length>=2&&0>=i.cross3(r[r.length-2],r[r.length-1],t);)r.pop();r.push(t)}// build upper hull
for(n=e.length-1;n>=0;n-=1){for(t=e[n];o.length>=2&&0>=i.cross3(o[o.length-2],o[o.length-1],t);)o.pop();o.push(t)}return(// concatenation of the lower and upper hulls gives the convex hull
// omit last points because they are repeated at the beginning of the other list
o.pop(),r.pop(),o.concat(r))};/***/},/* 4 *//***/function(e,t,n){/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/var o={};e.exports=o;var i=n(0);/**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */o.on=function(e,t,n){for(var o,i=t.split(" "),r=0;r<i.length;r++)o=i[r],e.events=e.events||{},e.events[o]=e.events[o]||[],e.events[o].push(n);return n},/**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */o.off=function(e,t,n){if(!t){e.events={};return}"function"==typeof t&&(n=t,t=i.keys(e.events).join(" "));for(var o=t.split(" "),r=0;r<o.length;r++){var a=e.events[o[r]],s=[];if(n&&a)for(var l=0;l<a.length;l++)a[l]!==n&&s.push(a[l]);e.events[o[r]]=s}},/**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */o.trigger=function(e,t,n){var o,r,a,s,l=e.events;if(l&&i.keys(l).length>0){n||(n={}),o=t.split(" ");for(var c=0;c<o.length;c++)if(a=l[r=o[c]]){(s=i.clone(n,!1)).name=r,s.source=e;for(var u=0;u<a.length;u++)a[u].apply(e,[s])}}};/***/},/* 5 *//***/function(e,t,n){/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/var o={};e.exports=o;var i=n(4),r=n(0),a=n(1),s=n(6);/**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */o.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},e)},/**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */o.setModified=function(e,t,n,i){if(e.isModified=t,t&&e.cache&&(e.cache.allBodies=null,e.cache.allConstraints=null,e.cache.allComposites=null),n&&e.parent&&o.setModified(e.parent,t,n,i),i)for(var r=0;r<e.composites.length;r++){var a=e.composites[r];o.setModified(a,t,n,i)}},/**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */o.add=function(e,t){var n=[].concat(t);i.trigger(e,"beforeAdd",{object:t});for(var a=0;a<n.length;a++){var s=n[a];switch(s.type){case"body":// skip adding compound parts
if(s.parent!==s){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}o.addBody(e,s);break;case"constraint":o.addConstraint(e,s);break;case"composite":o.addComposite(e,s);break;case"mouseConstraint":o.addConstraint(e,s.constraint)}}return i.trigger(e,"afterAdd",{object:t}),e},/**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */o.remove=function(e,t,n){var r=[].concat(t);i.trigger(e,"beforeRemove",{object:t});for(var a=0;a<r.length;a++){var s=r[a];switch(s.type){case"body":o.removeBody(e,s,n);break;case"constraint":o.removeConstraint(e,s,n);break;case"composite":o.removeComposite(e,s,n);break;case"mouseConstraint":o.removeConstraint(e,s.constraint)}}return i.trigger(e,"afterRemove",{object:t}),e},/**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */o.addComposite=function(e,t){return e.composites.push(t),t.parent=e,o.setModified(e,!0,!0,!1),e},/**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */o.removeComposite=function(e,t,n){var i=r.indexOf(e.composites,t);if(-1!==i&&o.removeCompositeAt(e,i),n)for(var a=0;a<e.composites.length;a++)o.removeComposite(e.composites[a],t,!0);return e},/**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */o.removeCompositeAt=function(e,t){return e.composites.splice(t,1),o.setModified(e,!0,!0,!1),e},/**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */o.addBody=function(e,t){return e.bodies.push(t),o.setModified(e,!0,!0,!1),e},/**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */o.removeBody=function(e,t,n){var i=r.indexOf(e.bodies,t);if(-1!==i&&o.removeBodyAt(e,i),n)for(var a=0;a<e.composites.length;a++)o.removeBody(e.composites[a],t,!0);return e},/**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */o.removeBodyAt=function(e,t){return e.bodies.splice(t,1),o.setModified(e,!0,!0,!1),e},/**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */o.addConstraint=function(e,t){return e.constraints.push(t),o.setModified(e,!0,!0,!1),e},/**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */o.removeConstraint=function(e,t,n){var i=r.indexOf(e.constraints,t);if(-1!==i&&o.removeConstraintAt(e,i),n)for(var a=0;a<e.composites.length;a++)o.removeConstraint(e.composites[a],t,!0);return e},/**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */o.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),o.setModified(e,!0,!0,!1),e},/**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */o.clear=function(e,t,n){if(n)for(var i=0;i<e.composites.length;i++)o.clear(e.composites[i],t,!0);return t?e.bodies=e.bodies.filter(function(e){return e.isStatic}):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,o.setModified(e,!0,!0,!1),e},/**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */o.allBodies=function(e){if(e.cache&&e.cache.allBodies)return e.cache.allBodies;for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(o.allBodies(e.composites[n]));return e.cache&&(e.cache.allBodies=t),t},/**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */o.allConstraints=function(e){if(e.cache&&e.cache.allConstraints)return e.cache.allConstraints;for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(o.allConstraints(e.composites[n]));return e.cache&&(e.cache.allConstraints=t),t},/**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */o.allComposites=function(e){if(e.cache&&e.cache.allComposites)return e.cache.allComposites;for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(o.allComposites(e.composites[n]));return e.cache&&(e.cache.allComposites=t),t},/**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */o.get=function(e,t,n){var i,r;switch(n){case"body":i=o.allBodies(e);break;case"constraint":i=o.allConstraints(e);break;case"composite":i=o.allComposites(e).concat(e)}return i?0===(r=i.filter(function(e){return e.id.toString()===t.toString()})).length?null:r[0]:null},/**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */o.move=function(e,t,n){return o.remove(e,t),o.add(n,t),e},/**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */o.rebase=function(e){for(var t=o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)),n=0;n<t.length;n++)t[n].id=r.nextId();return e},/**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */o.translate=function(e,t,n){for(var i=n?o.allBodies(e):e.bodies,r=0;r<i.length;r++)s.translate(i[r],t);return e},/**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */o.rotate=function(e,t,n,i){for(var r=Math.cos(t),a=Math.sin(t),l=i?o.allBodies(e):e.bodies,c=0;c<l.length;c++){var u=l[c],d=u.position.x-n.x,p=u.position.y-n.y;s.setPosition(u,{x:n.x+(d*r-p*a),y:n.y+(d*a+p*r)}),s.rotate(u,t)}return e},/**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */o.scale=function(e,t,n,i,r){for(var a=r?o.allBodies(e):e.bodies,l=0;l<a.length;l++){var c=a[l],u=c.position.x-i.x,d=c.position.y-i.y;s.setPosition(c,{x:i.x+u*t,y:i.y+d*n}),s.scale(c,t,n)}return e},/**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */o.bounds=function(e){for(var t=o.allBodies(e),n=[],i=0;i<t.length;i+=1){var r=t[i];n.push(r.bounds.min,r.bounds.max)}return a.create(n)};/***/},/* 6 *//***/function(e,t,n){/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/var o,i={};e.exports=i;var r=n(3),a=n(2),s=n(7);n(16);var l=n(0),c=n(1),u=n(11);i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,/**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */i.create=function(e){var t={id:l.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},n=l.extend(t,e);return o(n,e),n},/**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */i.nextGroup=function(e){return e?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},/**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory},o=function(e,t){t=t||{},// init required properties (order is important)
i.set(e,{bounds:e.bounds||c.create(e.vertices),positionPrev:e.positionPrev||a.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),r.rotate(e.vertices,e.angle,e.position),u.rotate(e.axes,e.angle),c.update(e.bounds,e.vertices,e.velocity),// allow options to override the automatically calculated properties
i.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});// render properties
var n=e.isStatic?"#14151f":l.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),o=e.isStatic?"#555":"#ccc",s=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||o,e.render.lineWidth=e.render.lineWidth||s,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)},/**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */i.set=function(e,t,n){var o;for(o in"string"==typeof t&&(o=t,(t={})[o]=n),t)if(Object.prototype.hasOwnProperty.call(t,o))switch(n=t[o],o){case"isStatic":i.setStatic(e,n);break;case"isSleeping":s.set(e,n);break;case"mass":i.setMass(e,n);break;case"density":i.setDensity(e,n);break;case"inertia":i.setInertia(e,n);break;case"vertices":i.setVertices(e,n);break;case"position":i.setPosition(e,n);break;case"angle":i.setAngle(e,n);break;case"velocity":i.setVelocity(e,n);break;case"angularVelocity":i.setAngularVelocity(e,n);break;case"parts":i.setParts(e,n);break;case"centre":i.setCentre(e,n);break;default:e[o]=n}},/**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */i.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var o=e.parts[n];o.isStatic=t,t?(o._original={restitution:o.restitution,friction:o.friction,mass:o.mass,inertia:o.inertia,density:o.density,inverseMass:o.inverseMass,inverseInertia:o.inverseInertia},o.restitution=0,o.friction=1,o.mass=o.inertia=o.density=1/0,o.inverseMass=o.inverseInertia=0,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.anglePrev=o.angle,o.angularVelocity=0,o.speed=0,o.angularSpeed=0,o.motion=0):o._original&&(o.restitution=o._original.restitution,o.friction=o._original.friction,o.mass=o._original.mass,o.inertia=o._original.inertia,o.density=o._original.density,o.inverseMass=o._original.inverseMass,o.inverseInertia=o._original.inverseInertia,o._original=null)}},/**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */i.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},/**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */i.setDensity=function(e,t){i.setMass(e,t*e.area),e.density=t},/**
     * Sets the moment of inertia (i.e. second moment of area) of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */i.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},/**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */i.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=r.create(t,e),// update properties
e.axes=u.fromVertices(e.vertices),e.area=r.area(e.vertices),i.setMass(e,e.density*e.area);// orient vertices around the centre of mass at origin (0, 0)
var n=r.centre(e.vertices);r.translate(e.vertices,n,-1),// update inertia while vertices are at origin (0, 0)
i.setInertia(e,i._inertiaScale*r.inertia(e.vertices,e.mass)),// update geometry
r.translate(e.vertices,e.position),c.update(e.bounds,e.vertices,e.velocity)},/**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */i.setParts=function(e,t,n){for(// add all the parts, ensuring that the first part is always the parent body
t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,o=0;o<t.length;o++){var o,a=t[o];a!==e&&(a.parent=e,e.parts.push(a))}if(1!==e.parts.length){// find the convex hull of all parts to set on the parent body
if(n=void 0===n||n){var s=[];for(o=0;o<t.length;o++)s=s.concat(t[o].vertices);r.clockwiseSort(s);var l=r.hull(s),c=r.centre(l);i.setVertices(e,l),r.translate(e.vertices,c)}// sum the properties of all compound parts of the parent body
var u=i._totalProperties(e);e.area=u.area,e.parent=e,e.position.x=u.centre.x,e.position.y=u.centre.y,e.positionPrev.x=u.centre.x,e.positionPrev.y=u.centre.y,i.setMass(e,u.mass),i.setInertia(e,u.inertia),i.setPosition(e,u.centre)}},/**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */i.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},/**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */i.setPosition=function(e,t){var n=a.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var o=0;o<e.parts.length;o++){var i=e.parts[o];i.position.x+=n.x,i.position.y+=n.y,r.translate(i.vertices,n),c.update(i.bounds,i.vertices,e.velocity)}},/**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */i.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var o=0;o<e.parts.length;o++){var i=e.parts[o];i.angle+=n,r.rotate(i.vertices,n,e.position),u.rotate(i.axes,n),c.update(i.bounds,i.vertices,e.velocity),o>0&&a.rotateAbout(i.position,n,e.position,i.position)}},/**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */i.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=a.magnitude(e.velocity)},/**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */i.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},/**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */i.translate=function(e,t){i.setPosition(e,a.add(e.position,t))},/**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */i.rotate=function(e,t,n){if(n){var o=Math.cos(t),r=Math.sin(t),a=e.position.x-n.x,s=e.position.y-n.y;i.setPosition(e,{x:n.x+(a*o-s*r),y:n.y+(a*r+s*o)}),i.setAngle(e,e.angle+t)}else i.setAngle(e,e.angle+t)},/**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */i.scale=function(e,t,n,o){var a=0,s=0;o=o||e.position;for(var l=0;l<e.parts.length;l++){var d=e.parts[l];// scale vertices
r.scale(d.vertices,t,n,o),// update properties
d.axes=u.fromVertices(d.vertices),d.area=r.area(d.vertices),i.setMass(d,e.density*d.area),// update inertia (requires vertices to be at origin)
r.translate(d.vertices,{x:-d.position.x,y:-d.position.y}),i.setInertia(d,i._inertiaScale*r.inertia(d.vertices,d.mass)),r.translate(d.vertices,{x:d.position.x,y:d.position.y}),l>0&&(a+=d.area,s+=d.inertia),// scale position
d.position.x=o.x+(d.position.x-o.x)*t,d.position.y=o.y+(d.position.y-o.y)*n,// update bounds
c.update(d.bounds,d.vertices,e.velocity)}e.parts.length>1&&(e.area=a,e.isStatic||(i.setMass(e,e.density*a),i.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},/**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */i.update=function(e,t,n,o){var i=Math.pow(t*n*e.timeScale,2),s=1-e.frictionAir*n*e.timeScale,l=e.position.x-e.positionPrev.x,d=e.position.y-e.positionPrev.y;// update velocity with Verlet integration
e.velocity.x=l*s*o+e.force.x/e.mass*i,e.velocity.y=d*s*o+e.force.y/e.mass*i,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,// update angular velocity with Verlet integration
e.angularVelocity=(e.angle-e.anglePrev)*s*o+e.torque/e.inertia*i,e.anglePrev=e.angle,e.angle+=e.angularVelocity,// track speed and acceleration
e.speed=a.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);// transform the body geometry
for(var p=0;p<e.parts.length;p++){var f=e.parts[p];r.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(r.rotate(f.vertices,e.angularVelocity,e.position),u.rotate(f.axes,e.angularVelocity),p>0&&a.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),c.update(f.bounds,f.vertices,e.velocity)}},/**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */i.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var o={x:t.x-e.position.x,y:t.y-e.position.y};e.torque+=o.x*n.y-o.y*n.x},/**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */i._totalProperties=function(e){// sum the properties of all compound parts of the parent body
for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var o=e.parts[n],i=o.mass!==1/0?o.mass:1;t.mass+=i,t.area+=o.area,t.inertia+=o.inertia,t.centre=a.add(t.centre,a.mult(o.position,i))}return t.centre=a.div(t.centre,t.mass),t};/***/},/* 7 *//***/function(e,t,n){/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/var o={};e.exports=o;var i=n(4);o._motionWakeThreshold=.18,o._motionSleepThreshold=.08,o._minBias=.9,/**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */o.update=function(e,t){// update bodies sleeping status
for(var n=t*t*t,i=0;i<e.length;i++){var r=e[i],a=r.speed*r.speed+r.angularSpeed*r.angularSpeed;// wake up bodies if they have a force applied
if(0!==r.force.x||0!==r.force.y){o.set(r,!1);continue}var s=Math.min(r.motion,a),l=Math.max(r.motion,a);// biased average motion estimation between frames
r.motion=o._minBias*s+(1-o._minBias)*l,r.sleepThreshold>0&&r.motion<o._motionSleepThreshold*n?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&o.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}},/**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */o.afterCollisions=function(e,t){// wake up bodies involved in collisions
for(var n=t*t*t,i=0;i<e.length;i++){var r=e[i];// don't wake inactive pairs
if(r.isActive){var a=r.collision,s=a.bodyA.parent,l=a.bodyB.parent;// don't wake if at least one body is static
if((!s.isSleeping||!l.isSleeping)&&!s.isStatic&&!l.isStatic&&(s.isSleeping||l.isSleeping)){var c=s.isSleeping&&!s.isStatic?s:l,u=c===s?l:s;!c.isStatic&&u.motion>o._motionWakeThreshold*n&&o.set(c,!1)}}}},/**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */o.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||i.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&i.trigger(e,"sleepEnd"))};/***/},/* 8 *//***/function(e,t,n){/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/var o,i,r,a={};e.exports=a;var s=n(3),l=n(9);o=[],i={overlap:0,axis:null},r={overlap:0,axis:null},/**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */a.create=function(e,t){return{pair:null,collided:!1,bodyA:e,bodyB:t,parentA:e.parent,parentB:t.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},/**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */a.collides=function(e,t,n){if(a._overlapAxes(i,e.vertices,t.vertices,e.axes),i.overlap<=0||(a._overlapAxes(r,t.vertices,e.vertices,t.axes),r.overlap<=0))return null;// reuse collision records for gc efficiency
var o,c,u=n&&n.table[l.id(e,t)];u?c=u.collision:((c=a.create(e,t)).collided=!0,c.bodyA=e.id<t.id?e:t,c.bodyB=e.id<t.id?t:e,c.parentA=c.bodyA.parent,c.parentB=c.bodyB.parent),e=c.bodyA,t=c.bodyB,o=i.overlap<r.overlap?i:r;var d=c.normal,p=c.supports,f=o.axis,v=f.x,m=f.y;v*(t.position.x-e.position.x)+m*(t.position.y-e.position.y)<0?(d.x=v,d.y=m):(d.x=-v,d.y=-m),c.tangent.x=-d.y,c.tangent.y=d.x,c.depth=o.overlap,c.penetration.x=d.x*c.depth,c.penetration.y=d.y*c.depth;// find support points, there is always either exactly one or two
var y=a._findSupports(e,t,d,1),g=0;// find the supports from bodyA that are inside bodyB
if(s.contains(e.vertices,y[0])&&(p[g++]=y[0]),s.contains(e.vertices,y[1])&&(p[g++]=y[1]),g<2){var x=a._findSupports(t,e,d,-1);s.contains(t.vertices,x[0])&&(p[g++]=x[0]),g<2&&s.contains(t.vertices,x[1])&&(p[g++]=x[1])}return 0===g&&(p[g++]=y[0]),// update supports array size
p.length=g,c},/**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */a._overlapAxes=function(e,t,n,o){var i,r,a,s,l,c,u=t.length,d=n.length,p=t[0].x,f=t[0].y,v=n[0].x,m=n[0].y,y=o.length,g=Number.MAX_VALUE,x=0;for(l=0;l<y;l++){var h=o[l],b=h.x,S=h.y,w=p*b+f*S,A=v*b+m*S,P=w,C=A;for(c=1;c<u;c+=1)(s=t[c].x*b+t[c].y*S)>P?P=s:s<w&&(w=s);for(c=1;c<d;c+=1)(s=n[c].x*b+n[c].y*S)>C?C=s:s<A&&(A=s);if((i=(r=P-A)<(a=C-w)?r:a)<g&&(g=i,x=l,i<=0))break}e.axis=o[x],e.overlap=g},/**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */a._projectToAxis=function(e,t,n){for(var o=t[0].x*n.x+t[0].y*n.y,i=o,r=1;r<t.length;r+=1){var a=t[r].x*n.x+t[r].y*n.y;a>i?i=a:a<o&&(o=a)}e.min=o,e.max=i},/**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */a._findSupports=function(e,t,n,i){var r,a,s,l,c,u=t.vertices,d=u.length,p=e.position.x,f=e.position.y,v=n.x*i,m=n.y*i,y=Number.MAX_VALUE;// find deepest vertex relative to the axis
for(c=0;c<d;c+=1)(l=v*(p-(a=u[c]).x)+m*(f-a.y))<y&&(y=l,r=a);return(y=v*(p-// measure next vertex
(s=u[(d+r.index-1)%d]).x)+m*(f-s.y),v*(p-// compare with previous vertex
(a=u[(r.index+1)%d]).x)+m*(f-a.y)<y)?(o[0]=r,o[1]=a):(o[0]=r,o[1]=s),o};/***/},/* 9 *//***/function(e,t,n){/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/var o={};e.exports=o;var i=n(17);/**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */o.create=function(e,t){var n=e.bodyA,i=e.bodyB,r={id:o.id(n,i),bodyA:n,bodyB:i,collision:e,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||i.isSensor,timeCreated:t,timeUpdated:t,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return o.update(r,e,t),r},/**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */o.update=function(e,t,n){var o=e.contacts,r=t.supports,a=e.activeContacts,s=t.parentA,l=t.parentB,c=s.vertices.length;e.isActive=!0,e.timeUpdated=n,e.collision=t,e.separation=t.depth,e.inverseMass=s.inverseMass+l.inverseMass,e.friction=s.friction<l.friction?s.friction:l.friction,e.frictionStatic=s.frictionStatic>l.frictionStatic?s.frictionStatic:l.frictionStatic,e.restitution=s.restitution>l.restitution?s.restitution:l.restitution,e.slop=s.slop>l.slop?s.slop:l.slop,t.pair=e,a.length=0;for(var u=0;u<r.length;u++){var d=r[u],p=d.body===s?d.index:c+d.index,f=o[p];f?a.push(f):a.push(o[p]=i.create(d))}},/**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */o.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},/**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */o.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id};/***/},/* 10 *//***/function(e,t,n){/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/var o={};e.exports=o;var i=n(3),r=n(2),a=n(7),s=n(1),l=n(11),c=n(0);o._warming=.4,o._torqueDampen=1,o._minLength=1e-6,/**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */o.create=function(e){e.bodyA&&!e.pointA&&(e.pointA={x:0,y:0}),e.bodyB&&!e.pointB&&(e.pointB={x:0,y:0});// calculate static length using initial world space points
var t=e.bodyA?r.add(e.bodyA.position,e.pointA):e.pointA,n=e.bodyB?r.add(e.bodyB.position,e.pointB):e.pointB,o=r.magnitude(r.sub(t,n));e.length=void 0!==e.length?e.length:o,// option defaults
e.id=e.id||c.nextId(),e.label=e.label||"Constraint",e.type="constraint",e.stiffness=e.stiffness||(e.length>0?1:.7),e.damping=e.damping||0,e.angularStiffness=e.angularStiffness||0,e.angleA=e.bodyA?e.bodyA.angle:e.angleA,e.angleB=e.bodyB?e.bodyB.angle:e.angleB,e.plugin={};// render
var i={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===e.length&&e.stiffness>.1?(i.type="pin",i.anchors=!1):e.stiffness<.9&&(i.type="spring"),e.render=c.extend(i,e.render),e},/**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */o.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],o=n.constraintImpulse;n.isStatic||0===o.x&&0===o.y&&0===o.angle||(n.position.x+=o.x,n.position.y+=o.y,n.angle+=o.angle)}},/**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */o.solveAll=function(e,t){// Solve fixed constraints first.
for(var n=0;n<e.length;n+=1){var i=e[n],r=!i.bodyA||i.bodyA&&i.bodyA.isStatic,a=!i.bodyB||i.bodyB&&i.bodyB.isStatic;(r||a)&&o.solve(e[n],t)}// Solve free constraints last.
for(n=0;n<e.length;n+=1)r=!(i=e[n]).bodyA||i.bodyA&&i.bodyA.isStatic,a=!i.bodyB||i.bodyB&&i.bodyB.isStatic,r||a||o.solve(e[n],t)},/**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */o.solve=function(e,t){var n=e.bodyA,i=e.bodyB,a=e.pointA,s=e.pointB;if(n||i){n&&!n.isStatic&&(r.rotate(a,n.angle-e.angleA,a),e.angleA=n.angle),i&&!i.isStatic&&(r.rotate(s,i.angle-e.angleB,s),e.angleB=i.angle);var l=a,c=s;if(n&&(l=r.add(n.position,a)),i&&(c=r.add(i.position,s)),l&&c){var u=r.sub(l,c),d=r.magnitude(u);d<o._minLength&&(d=o._minLength);// solve distance constraint with Gauss-Siedel method
var p,f,v,m,y,g=(d-e.length)/d,x=e.stiffness<1?e.stiffness*t:e.stiffness,h=r.mult(u,g*x),b=(n?n.inverseMass:0)+(i?i.inverseMass:0),S=b+((n?n.inverseInertia:0)+(i?i.inverseInertia:0));if(e.damping){var w=r.create();v=r.div(u,d),y=r.sub(i&&r.sub(i.position,i.positionPrev)||w,n&&r.sub(n.position,n.positionPrev)||w),m=r.dot(v,y)}n&&!n.isStatic&&(f=n.inverseMass/b,// keep track of applied impulses for post solving
n.constraintImpulse.x-=h.x*f,n.constraintImpulse.y-=h.y*f,// apply forces
n.position.x-=h.x*f,n.position.y-=h.y*f,e.damping&&(n.positionPrev.x-=e.damping*v.x*m*f,n.positionPrev.y-=e.damping*v.y*m*f),// apply torque
p=r.cross(a,h)/S*o._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),i&&!i.isStatic&&(f=i.inverseMass/b,// keep track of applied impulses for post solving
i.constraintImpulse.x+=h.x*f,i.constraintImpulse.y+=h.y*f,// apply forces
i.position.x+=h.x*f,i.position.y+=h.y*f,e.damping&&(i.positionPrev.x+=e.damping*v.x*m*f,i.positionPrev.y+=e.damping*v.y*m*f),// apply torque
p=r.cross(s,h)/S*o._torqueDampen*i.inverseInertia*(1-e.angularStiffness),i.constraintImpulse.angle+=p,i.angle+=p)}}},/**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */o.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],c=n.constraintImpulse;if(!n.isStatic&&(0!==c.x||0!==c.y||0!==c.angle)){a.set(n,!1);// update geometry and reset
for(var u=0;u<n.parts.length;u++){var d=n.parts[u];i.translate(d.vertices,c),u>0&&(d.position.x+=c.x,d.position.y+=c.y),0!==c.angle&&(i.rotate(d.vertices,c.angle,n.position),l.rotate(d.axes,c.angle),u>0&&r.rotateAbout(d.position,c.angle,n.position,d.position)),s.update(d.bounds,d.vertices,n.velocity)}// dampen the cached impulse for warming next step
c.angle*=o._warming,c.x*=o._warming,c.y*=o._warming}}},/**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */o.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+e.pointA.x,y:(e.bodyA?e.bodyA.position.y:0)+e.pointA.y}},/**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */o.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+e.pointB.x,y:(e.bodyB?e.bodyB.position.y:0)+e.pointB.y}};/***/},/* 11 *//***/function(e,t,n){/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/var o={};e.exports=o;var i=n(2),r=n(0);/**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */o.fromVertices=function(e){// find the unique axes, using edge normal gradients
for(var t={},n=0;n<e.length;n++){var o=(n+1)%e.length,a=i.normalise({x:e[o].y-e[n].y,y:e[n].x-e[o].x}),s=0===a.y?1/0:a.x/a.y;t[// limit precision
s=s.toFixed(3).toString()]=a}return r.values(t)},/**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */o.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),o=Math.sin(t),i=0;i<e.length;i++){var r,a=e[i];r=a.x*n-a.y*o,a.y=a.x*o+a.y*n,a.x=r}};/***/},/* 12 *//***/function(e,t,n){/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/// TODO: true circle bodies
var o={};e.exports=o;var i=n(3),r=n(0),a=n(6),s=n(1),l=n(2);/**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */o.rectangle=function(e,t,n,o,s){s=s||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:i.fromPath("L 0 0 L "+n+" 0 L "+n+" "+o+" L 0 "+o)};if(s.chamfer){var c=s.chamfer;l.vertices=i.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete s.chamfer}return a.create(r.extend({},l,s))},/**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */o.trapezoid=function(e,t,n,o,s,l){l=l||{};var c,u=(1-2*(s*=.5))*n,d=n*s,p=d+u,f=p+d;c=s<.5?"L 0 0 L "+d+" "+-o+" L "+p+" "+-o+" L "+f+" 0":"L 0 0 L "+p+" "+-o+" L "+f+" 0";var v={label:"Trapezoid Body",position:{x:e,y:t},vertices:i.fromPath(c)};if(l.chamfer){var m=l.chamfer;v.vertices=i.chamfer(v.vertices,m.radius,m.quality,m.qualityMin,m.qualityMax),delete l.chamfer}return a.create(r.extend({},v,l))},/**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */o.circle=function(e,t,n,i,a){i=i||{};var s=Math.ceil(Math.max(10,Math.min(// approximate circles with polygons until true circles implemented in SAT
a=a||25,n)));return s%2==1&&(s+=1),o.polygon(e,t,s,n,r.extend({},{label:"Circle Body",circleRadius:n},i))},/**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */o.polygon=function(e,t,n,s,l){if(l=l||{},n<3)return o.circle(e,t,s,l);for(var c=2*Math.PI/n,u="",d=.5*c,p=0;p<n;p+=1){var f=d+p*c,v=Math.cos(f)*s,m=Math.sin(f)*s;u+="L "+v.toFixed(3)+" "+m.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:e,y:t},vertices:i.fromPath(u)};if(l.chamfer){var g=l.chamfer;y.vertices=i.chamfer(y.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete l.chamfer}return a.create(r.extend({},y,l))},/**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */o.fromVertices=function(e,t,n,o,c,u,d,p){var f,v,m,y,g,x,h,b,S,w,A=r.getDecomp();for(// check decomp is as expected
f=!!(A&&A.quickDecomp),o=o||{},m=[],c=void 0!==c&&c,u=void 0!==u?u:.01,d=void 0!==d?d:10,p=void 0!==p?p:.01,r.isArray(n[0])||(n=[n]),S=0;S<n.length;S+=1)if(g=n[S],(y=i.isConvex(g))||f||r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),y||!f)g=y?i.clockwiseSort(g):i.hull(g),m.push({position:{x:e,y:t},vertices:g});else{// initialise a decomposition
var P=g.map(function(e){return[e.x,e.y]});// vertices are concave and simple, we can decompose into parts
A.makeCCW(P),!1!==u&&A.removeCollinearPoints(P,u),!1!==p&&A.removeDuplicatePoints&&A.removeDuplicatePoints(P,p);// use the quick decomposition algorithm (Bayazit)
var C=A.quickDecomp(P);// for each decomposed chunk
for(x=0;x<C.length;x++){// convert vertices into the correct structure
var B=C[x].map(function(e){return{x:e[0],y:e[1]}});d>0&&i.area(B)<d||// create a compound part
m.push({position:i.centre(B),vertices:B})}}// create body parts
for(x=0;x<m.length;x++)m[x]=a.create(r.extend(m[x],o));// flag internal edges (coincident part edges)
if(c)for(x=0;x<m.length;x++){var M=m[x];for(h=x+1;h<m.length;h++){var k=m[h];if(s.overlaps(M.bounds,k.bounds)){var _=M.vertices,I=k.vertices;// iterate vertices of both parts
for(b=0;b<M.vertices.length;b++)for(w=0;w<k.vertices.length;w++){// find distances between the vertices
var T=l.magnitudeSquared(l.sub(_[(b+1)%_.length],I[w])),R=l.magnitudeSquared(l.sub(_[b],I[(w+1)%I.length]));T<5&&R<5&&(_[b].isInternal=!0,I[w].isInternal=!0)}}}}return m.length>1?(// create the parent body to be returned, that contains generated compound parts
v=a.create(r.extend({parts:m.slice(0)},o)),// offset such that body.position is at the centre off mass
a.setPosition(v,{x:e,y:t}),v):m[0]};/***/},/* 13 *//***/function(e,t,n){/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/var o={};e.exports=o;var i=n(0);/**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */o.create=function(e){var t={};return e||i.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=o._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=o._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=o._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},o.setElement(t,t.element),t},/**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */o.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},/**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */o.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},/**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */o.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},/**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */o.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},/**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */o._getRelativeMousePosition=function(e,t,n){var o,i,r=t.getBoundingClientRect(),a=document.documentElement||document.body.parentNode||document.body,s=void 0!==window.pageXOffset?window.pageXOffset:a.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:a.scrollTop,c=e.changedTouches;return c?(o=c[0].pageX-r.left-s,i=c[0].pageY-r.top-l):(o=e.pageX-r.left-s,i=e.pageY-r.top-l),{x:o/(t.clientWidth/(t.width||t.clientWidth)*n),y:i/(t.clientHeight/(t.height||t.clientHeight)*n)}};/***/},/* 14 *//***/function(e,t,n){/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/var o={};e.exports=o;var i=n(0),r=n(8);/**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */o.create=function(e){return i.extend({bodies:[],pairs:null},e)},/**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */o.setBodies=function(e,t){e.bodies=t.slice(0)},/**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */o.clear=function(e){e.bodies=[]},/**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */o.collisions=function(e){var t,n,i=[],a=e.pairs,s=e.bodies,l=s.length,c=o.canCollide,u=r.collides;for(s.sort(o._compareBoundsX),t=0;t<l;t++){var d=s[t],p=d.bounds,f=d.bounds.max.x,v=d.bounds.max.y,m=d.bounds.min.y,y=d.isStatic||d.isSleeping,g=d.parts.length,x=1===g;for(n=t+1;n<l;n++){var h=s[n],b=h.bounds;if(b.min.x>f)break;if(!(v<b.min.y)&&!(m>b.max.y)&&(!y||!h.isStatic&&!h.isSleeping)&&c(d.collisionFilter,h.collisionFilter)){var S=h.parts.length;if(x&&1===S){var w=u(d,h,a);w&&i.push(w)}else for(var A=g>1?1:0,P=S>1?1:0,C=A;C<g;C++)for(var B=d.parts[C],p=B.bounds,M=P;M<S;M++){var k=h.parts[M],b=k.bounds;if(!(p.min.x>b.max.x)&&!(p.max.x<b.min.x)&&!(p.max.y<b.min.y)&&!(p.min.y>b.max.y)){var w=u(B,k,a);w&&i.push(w)}}}}}return i},/**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */o.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:(e.mask&t.category)!=0&&(t.mask&e.category)!=0},/**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */o._compareBoundsX=function(e,t){return e.bounds.min.x-t.bounds.min.x};/***/},/* 15 *//***/function(e,t,n){/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/var o={};e.exports=o;var i=n(0);o._registry={},/**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */o.register=function(e){if(o.isPlugin(e)||i.warn("Plugin.register:",o.toString(e),"does not implement all required fields."),e.name in o._registry){var t=o._registry[e.name],n=o.versionParse(e.version).number,r=o.versionParse(t.version).number;n>r?(i.warn("Plugin.register:",o.toString(t),"was upgraded to",o.toString(e)),o._registry[e.name]=e):n<r?i.warn("Plugin.register:",o.toString(t),"can not be downgraded to",o.toString(e)):e!==t&&i.warn("Plugin.register:",o.toString(e),"is already registered to different plugin object")}else o._registry[e.name]=e;return e},/**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */o.resolve=function(e){return o._registry[o.dependencyParse(e).name]},/**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */o.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},/**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */o.isPlugin=function(e){return e&&e.name&&e.version&&e.install},/**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */o.isUsed=function(e,t){return e.used.indexOf(t)>-1},/**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */o.isFor=function(e,t){var n=e.for&&o.dependencyParse(e.for);return!e.for||t.name===n.name&&o.versionSatisfies(t.version,n.range)},/**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */o.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0===e.uses.length){i.warn("Plugin.use:",o.toString(e),"does not specify any dependencies to install.");return}for(var n=o.dependencies(e),r=i.topologicalSort(n),a=[],s=0;s<r.length;s+=1)if(r[s]!==e.name){var l=o.resolve(r[s]);if(!l){a.push("❌ "+r[s]);continue}o.isUsed(e,l.name)||(o.isFor(l,e)||(i.warn("Plugin.use:",o.toString(l),"is for",l.for,"but installed on",o.toString(e)+"."),l._warned=!0),l.install?l.install(e):(i.warn("Plugin.use:",o.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(a.push("\uD83D\uDD36 "+o.toString(l)),delete l._warned):a.push("✅ "+o.toString(l)),e.used.push(l.name))}a.length>0&&i.info(a.join("  "))},/**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */o.dependencies=function(e,t){var n=o.dependencyParse(e),r=n.name;if(!(r in(t=t||{}))){e=o.resolve(e)||e,t[r]=i.map(e.uses||[],function(t){o.isPlugin(t)&&o.register(t);var r=o.dependencyParse(t),a=o.resolve(t);return a&&!o.versionSatisfies(a.version,r.range)?(i.warn("Plugin.dependencies:",o.toString(a),"does not satisfy",o.toString(r),"used by",o.toString(n)+"."),a._warned=!0,e._warned=!0):a||(i.warn("Plugin.dependencies:",o.toString(t),"used by",o.toString(n),"could not be resolved."),e._warned=!0),r.name});for(var a=0;a<t[r].length;a+=1)o.dependencies(t[r][a],t);return t}},/**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */o.dependencyParse=function(e){return i.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e)||i.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},/**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */o.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;t.test(e)||i.warn("Plugin.versionParse:",e,"is not a valid version or range.");var n=t.exec(e),o=Number(n[4]),r=Number(n[5]),a=Number(n[6]);return{isRange:!!(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||"",major:o,minor:r,patch:a,parts:[o,r,a],prerelease:n[7],number:1e8*o+1e4*r+a}},/**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */o.versionSatisfies=function(e,t){t=t||"*";var n=o.versionParse(t),i=o.versionParse(e);if(n.isRange){if("*"===n.operator||"*"===e)return!0;if(">"===n.operator)return i.number>n.number;if(">="===n.operator)return i.number>=n.number;if("~"===n.operator)return i.major===n.major&&i.minor===n.minor&&i.patch>=n.patch;if("^"===n.operator)return n.major>0?i.major===n.major&&i.number>=n.number:n.minor>0?i.minor===n.minor&&i.patch>=n.patch:i.patch===n.patch}return e===t||"*"===e};/***/},/* 16 *//***/function(e,t,n){/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/var o,i,r,a,s,l,c,u,d={};e.exports=d;var p=n(0),f=n(5),v=n(1),m=n(4),y=n(2),g=n(13);"undefined"!=typeof window&&(o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(p.now())},1e3/60)},i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),d._goodFps=30,d._goodDelta=1e3/60,/**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */d.create=function(e){var t={controller:d,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},n=p.extend(t,e);return n.canvas&&(n.canvas.width=n.options.width||n.canvas.width,n.canvas.height=n.options.height||n.canvas.height),n.mouse=e.mouse,n.engine=e.engine,n.canvas=n.canvas||s(n.options.width,n.options.height),n.context=n.canvas.getContext("2d"),n.textures={},n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.canvas.width,y:n.canvas.height}},// for temporary back compatibility only
n.options.showBroadphase=!1,1!==n.options.pixelRatio&&d.setPixelRatio(n,n.options.pixelRatio),p.isElement(n.element)?n.element.appendChild(n.canvas):n.canvas.parentNode||p.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),n},/**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */d.run=function(e){!function t(n){e.frameRequestId=o(t),r(e,n),d.world(e,n),(e.options.showStats||e.options.showDebug)&&d.stats(e,e.context,n),(e.options.showPerformance||e.options.showDebug)&&d.performance(e,e.context,n)}()},/**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */d.stop=function(e){i(e.frameRequestId)},/**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */d.setPixelRatio=function(e,t){var n=e.options,o=e.canvas;"auto"===t&&(t=l(o)),n.pixelRatio=t,o.setAttribute("data-pixel-ratio",t),o.width=n.width*t,o.height=n.height*t,o.style.width=n.width+"px",o.style.height=n.height+"px"},/**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */d.lookAt=function(e,t,n,o){o=void 0===o||o,t=p.isArray(t)?t:[t],n=n||{x:0,y:0};for(var i={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},r=0;r<t.length;r+=1){var a=t[r],s=a.bounds?a.bounds.min:a.min||a.position||a,l=a.bounds?a.bounds.max:a.max||a.position||a;s&&l&&(s.x<i.min.x&&(i.min.x=s.x),l.x>i.max.x&&(i.max.x=l.x),s.y<i.min.y&&(i.min.y=s.y),l.y>i.max.y&&(i.max.y=l.y))}// find bounds of all objects
var c=i.max.x-i.min.x+2*n.x,u=i.max.y-i.min.y+2*n.y,d=e.canvas.height,f=e.canvas.width/d,v=c/u,m=1,y=1;v>f?y=v/f:m=f/v,// enable bounds
e.options.hasBounds=!0,// position and size
e.bounds.min.x=i.min.x,e.bounds.max.x=i.min.x+c*m,e.bounds.min.y=i.min.y,e.bounds.max.y=i.min.y+u*y,o&&(e.bounds.min.x+=.5*c-c*m*.5,e.bounds.max.x+=.5*c-c*m*.5,e.bounds.min.y+=.5*u-u*y*.5,e.bounds.max.y+=.5*u-u*y*.5),// padding
e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(g.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),g.setOffset(e.mouse,e.bounds.min))},/**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */d.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,o=t/e.options.width,i=n/e.options.height;e.context.setTransform(e.options.pixelRatio/o,0,0,e.options.pixelRatio/i,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},/**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */d.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},/**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */d.world=function(e,t){var n,o=p.now(),i=e.engine,r=i.world,a=e.canvas,s=e.context,l=e.options,c=e.timing,x=f.allBodies(r),h=f.allConstraints(r),b=l.wireframes?l.wireframeBackground:l.background,S=[],w=[],A={timestamp:i.timing.timestamp};// handle bounds
if(m.trigger(e,"beforeRender",A),e.currentBackground!==b&&u(e,b),// clear the canvas with a transparent fill, to allow the canvas background to show
s.globalCompositeOperation="source-in",s.fillStyle="transparent",s.fillRect(0,0,a.width,a.height),s.globalCompositeOperation="source-over",l.hasBounds){// filter out bodies that are not in view
for(n=0;n<x.length;n++){var P=x[n];v.overlaps(P.bounds,e.bounds)&&S.push(P)}// filter out constraints that are not in view
for(n=0;n<h.length;n++){var C=h[n],B=C.bodyA,M=C.bodyB,k=C.pointA,_=C.pointB;B&&(k=y.add(B.position,C.pointA)),M&&(_=y.add(M.position,C.pointB)),k&&_&&(v.contains(e.bounds,k)||v.contains(e.bounds,_))&&w.push(C)}// transform the view
d.startViewTransform(e),e.mouse&&(g.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),g.setOffset(e.mouse,e.bounds.min))}else w=h,S=x,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!l.wireframes||i.enableSleeping&&l.showSleeping?d.bodies(e,S,s):(l.showConvexHulls&&d.bodyConvexHulls(e,S,s),// optimised method for wireframes only
d.bodyWireframes(e,S,s)),l.showBounds&&d.bodyBounds(e,S,s),(l.showAxes||l.showAngleIndicator)&&d.bodyAxes(e,S,s),l.showPositions&&d.bodyPositions(e,S,s),l.showVelocity&&d.bodyVelocity(e,S,s),l.showIds&&d.bodyIds(e,S,s),l.showSeparations&&d.separations(e,i.pairs.list,s),l.showCollisions&&d.collisions(e,i.pairs.list,s),l.showVertexNumbers&&d.vertexNumbers(e,S,s),l.showMousePosition&&d.mousePosition(e,e.mouse,s),d.constraints(w,s),l.hasBounds&&d.endViewTransform(e),m.trigger(e,"afterRender",A),// log the time elapsed computing this update
c.lastElapsed=p.now()-o},/**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */d.stats=function(e,t,n){// count parts
for(var o=e.engine,i=o.world,r=f.allBodies(i),a=0,s=0,l=0;l<r.length;l+=1)a+=r[l].parts.length;var c={Part:a,Body:r.length,Cons:f.allConstraints(i).length,Comp:f.allComposites(i).length,Pair:o.pairs.list.length};// sections
for(var u in // background
t.fillStyle="#0e0f19",t.fillRect(s,0,302.5,44),t.font="12px Arial",t.textBaseline="top",t.textAlign="right",c){var d=c[u];// label
t.fillStyle="#aaa",t.fillText(u,s+55,8),// value
t.fillStyle="#eee",t.fillText(d,s+55,26),s+=55}},/**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */d.performance=function(e,t){var n=e.engine,o=e.timing,i=o.deltaHistory,r=o.elapsedHistory,s=o.timestampElapsedHistory,l=o.engineDeltaHistory,c=o.engineElapsedHistory,u=n.timing.lastDelta,p=a(i),f=a(r),v=a(l),m=a(c),y=a(s)/p||0,g=1e3/p||0;// background
t.fillStyle="#0e0f19",t.fillRect(0,50,370,34),// show FPS
d.status(t,10,69,60,4,i.length,Math.round(g)+" fps",g/d._goodFps,function(e){return i[e]/p-1}),// show engine delta
d.status(t,82,69,60,4,l.length,u.toFixed(2)+" dt",d._goodDelta/u,function(e){return l[e]/v-1}),// show engine update time
d.status(t,154,69,60,4,c.length,m.toFixed(2)+" ut",1-m/d._goodFps,function(e){return c[e]/m-1}),// show render time
d.status(t,226,69,60,4,r.length,f.toFixed(2)+" rt",1-f/d._goodFps,function(e){return r[e]/f-1}),// show effective speed
d.status(t,298,69,60,4,s.length,y.toFixed(2)+" x",y*y*y,function(e){return(s[e]/i[e]/y||0)-1})},/**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */d.status=function(e,t,n,o,i,r,a,s,l){// background
e.strokeStyle="#888",e.fillStyle="#444",e.lineWidth=1,e.fillRect(t,n+7,o,1),// chart
e.beginPath(),e.moveTo(t,n+7-i*p.clamp(.4*l(0),-2,2));for(var c=0;c<o;c+=1)e.lineTo(t+c,n+7-(c<r?i*p.clamp(.4*l(c),-2,2):0));e.stroke(),// indicator
e.fillStyle="hsl("+p.clamp(25+95*s,0,120)+",100%,60%)",e.fillRect(t,n-7,4,4),// label
e.font="12px Arial",e.textBaseline="middle",e.textAlign="right",e.fillStyle="#eee",e.fillText(a,t+o,n-5)},/**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */d.constraints=function(e,t){for(var n=0;n<e.length;n++){var o=e[n];if(o.render.visible&&o.pointA&&o.pointB){var i,r,a=o.bodyA,s=o.bodyB;if(i=a?y.add(a.position,o.pointA):o.pointA,"pin"===o.render.type)t.beginPath(),t.arc(i.x,i.y,3,0,2*Math.PI),t.closePath();else{if(r=s?y.add(s.position,o.pointB):o.pointB,t.beginPath(),t.moveTo(i.x,i.y),"spring"===o.render.type)for(var l,c=y.sub(r,i),u=y.perp(y.normalise(c)),d=Math.ceil(p.clamp(o.length/5,12,20)),f=1;f<d;f+=1)l=f%2==0?1:-1,t.lineTo(i.x+c.x*(f/d)+u.x*l*4,i.y+c.y*(f/d)+u.y*l*4);t.lineTo(r.x,r.y)}o.render.lineWidth&&(t.lineWidth=o.render.lineWidth,t.strokeStyle=o.render.strokeStyle,t.stroke()),o.render.anchors&&(t.fillStyle=o.render.strokeStyle,t.beginPath(),t.arc(i.x,i.y,3,0,2*Math.PI),t.arc(r.x,r.y,3,0,2*Math.PI),t.closePath(),t.fill())}}},/**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodies=function(e,t,n){e.engine;var o,i,r,a,s=e.options,l=s.showInternalEdges||!s.wireframes;for(r=0;r<t.length;r++)if((o=t[r]).render.visible)// handle compound parts
{for(a=o.parts.length>1?1:0;a<o.parts.length;a++)if((i=o.parts[a]).render.visible){if(s.showSleeping&&o.isSleeping?n.globalAlpha=.5*i.render.opacity:1!==i.render.opacity&&(n.globalAlpha=i.render.opacity),i.render.sprite&&i.render.sprite.texture&&!s.wireframes){// part sprite
var u=i.render.sprite,d=c(e,u.texture);n.translate(i.position.x,i.position.y),n.rotate(i.angle),n.drawImage(d,-(d.width*u.xOffset)*u.xScale,-(d.height*u.yOffset)*u.yScale,d.width*u.xScale,d.height*u.yScale),// revert translation, hopefully faster than save / restore
n.rotate(-i.angle),n.translate(-i.position.x,-i.position.y)}else{// part polygon
if(i.circleRadius)n.beginPath(),n.arc(i.position.x,i.position.y,i.circleRadius,0,2*Math.PI);else{n.beginPath(),n.moveTo(i.vertices[0].x,i.vertices[0].y);for(var p=1;p<i.vertices.length;p++)!i.vertices[p-1].isInternal||l?n.lineTo(i.vertices[p].x,i.vertices[p].y):n.moveTo(i.vertices[p].x,i.vertices[p].y),i.vertices[p].isInternal&&!l&&n.moveTo(i.vertices[(p+1)%i.vertices.length].x,i.vertices[(p+1)%i.vertices.length].y);n.lineTo(i.vertices[0].x,i.vertices[0].y),n.closePath()}s.wireframes?(n.lineWidth=1,n.strokeStyle="#bbb",n.stroke()):(n.fillStyle=i.render.fillStyle,i.render.lineWidth&&(n.lineWidth=i.render.lineWidth,n.strokeStyle=i.render.strokeStyle,n.stroke()),n.fill())}n.globalAlpha=1}}},/**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyWireframes=function(e,t,n){var o,i,r,a,s,l=e.options.showInternalEdges;// render all bodies
for(n.beginPath(),r=0;r<t.length;r++)if((o=t[r]).render.visible)// handle compound parts
for(s=o.parts.length>1?1:0;s<o.parts.length;s++){for(i=o.parts[s],n.moveTo(i.vertices[0].x,i.vertices[0].y),a=1;a<i.vertices.length;a++)!i.vertices[a-1].isInternal||l?n.lineTo(i.vertices[a].x,i.vertices[a].y):n.moveTo(i.vertices[a].x,i.vertices[a].y),i.vertices[a].isInternal&&!l&&n.moveTo(i.vertices[(a+1)%i.vertices.length].x,i.vertices[(a+1)%i.vertices.length].y);n.lineTo(i.vertices[0].x,i.vertices[0].y)}n.lineWidth=1,n.strokeStyle="#bbb",n.stroke()},/**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyConvexHulls=function(e,t,n){var o,i,r;// render convex hulls
for(n.beginPath(),i=0;i<t.length;i++)if((o=t[i]).render.visible&&1!==o.parts.length){for(n.moveTo(o.vertices[0].x,o.vertices[0].y),r=1;r<o.vertices.length;r++)n.lineTo(o.vertices[r].x,o.vertices[r].y);n.lineTo(o.vertices[0].x,o.vertices[0].y)}n.lineWidth=1,n.strokeStyle="rgba(255,255,255,0.2)",n.stroke()},/**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.vertexNumbers=function(e,t,n){var o,i,r;for(o=0;o<t.length;o++){var a=t[o].parts;for(r=a.length>1?1:0;r<a.length;r++){var s=a[r];for(i=0;i<s.vertices.length;i++)n.fillStyle="rgba(255,255,255,0.2)",n.fillText(o+"_"+i,s.position.x+(s.vertices[i].x-s.position.x)*.8,s.position.y+(s.vertices[i].y-s.position.y)*.8)}}},/**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */d.mousePosition=function(e,t,n){n.fillStyle="rgba(255,255,255,0.8)",n.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},/**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyBounds=function(e,t,n){e.engine;var o=e.options;n.beginPath();for(var i=0;i<t.length;i++)if(t[i].render.visible)for(var r=t[i].parts,a=r.length>1?1:0;a<r.length;a++){var s=r[a];n.rect(s.bounds.min.x,s.bounds.min.y,s.bounds.max.x-s.bounds.min.x,s.bounds.max.y-s.bounds.min.y)}o.wireframes?n.strokeStyle="rgba(255,255,255,0.08)":n.strokeStyle="rgba(0,0,0,0.1)",n.lineWidth=1,n.stroke()},/**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyAxes=function(e,t,n){e.engine;var o,i,r,a,s=e.options;for(n.beginPath(),i=0;i<t.length;i++){var l=t[i],c=l.parts;if(l.render.visible){if(s.showAxes)for(r=c.length>1?1:0;r<c.length;r++)for(a=0,o=c[r];a<o.axes.length;a++){var u=o.axes[a];n.moveTo(o.position.x,o.position.y),n.lineTo(o.position.x+20*u.x,o.position.y+20*u.y)}else for(r=c.length>1?1:0;r<c.length;r++)for(a=0,o=c[r];a<o.axes.length;a++)// render a single axis indicator
n.moveTo(o.position.x,o.position.y),n.lineTo((o.vertices[0].x+o.vertices[o.vertices.length-1].x)/2,(o.vertices[0].y+o.vertices[o.vertices.length-1].y)/2)}}s.wireframes?(n.strokeStyle="indianred",n.lineWidth=1):(n.strokeStyle="rgba(255, 255, 255, 0.4)",n.globalCompositeOperation="overlay",n.lineWidth=2),n.stroke(),n.globalCompositeOperation="source-over"},/**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyPositions=function(e,t,n){e.engine;var o,i,r,a,s=e.options;// render current positions
for(n.beginPath(),r=0;r<t.length;r++)if((o=t[r]).render.visible)// handle compound parts
for(a=0;a<o.parts.length;a++)i=o.parts[a],n.arc(i.position.x,i.position.y,3,0,2*Math.PI,!1),n.closePath();// render previous positions
for(s.wireframes?n.fillStyle="indianred":n.fillStyle="rgba(0,0,0,0.5)",n.fill(),n.beginPath(),r=0;r<t.length;r++)(o=t[r]).render.visible&&(n.arc(o.positionPrev.x,o.positionPrev.y,2,0,2*Math.PI,!1),n.closePath());n.fillStyle="rgba(255,165,0,0.8)",n.fill()},/**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyVelocity=function(e,t,n){n.beginPath();for(var o=0;o<t.length;o++){var i=t[o];i.render.visible&&(n.moveTo(i.position.x,i.position.y),n.lineTo(i.position.x+(i.position.x-i.positionPrev.x)*2,i.position.y+(i.position.y-i.positionPrev.y)*2))}n.lineWidth=3,n.strokeStyle="cornflowerblue",n.stroke()},/**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */d.bodyIds=function(e,t,n){var o,i;for(o=0;o<t.length;o++)if(t[o].render.visible){var r=t[o].parts;for(i=r.length>1?1:0;i<r.length;i++){var a=r[i];n.font="12px Arial",n.fillStyle="rgba(255,255,255,0.5)",n.fillText(a.id,a.position.x+10,a.position.y-10)}}},/**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */d.collisions=function(e,t,n){var o,i,r,a,s=e.options;// render collision positions
for(n.beginPath(),r=0;r<t.length;r++)if((o=t[r]).isActive)for(a=0,i=o.collision;a<o.activeContacts.length;a++){var l=o.activeContacts[a].vertex;n.rect(l.x-1.5,l.y-1.5,3.5,3.5)}// render collision normals
for(s.wireframes?n.fillStyle="rgba(255,255,255,0.7)":n.fillStyle="orange",n.fill(),n.beginPath(),r=0;r<t.length;r++)if((o=t[r]).isActive&&(i=o.collision,o.activeContacts.length>0)){var c=o.activeContacts[0].vertex.x,u=o.activeContacts[0].vertex.y;2===o.activeContacts.length&&(c=(o.activeContacts[0].vertex.x+o.activeContacts[1].vertex.x)/2,u=(o.activeContacts[0].vertex.y+o.activeContacts[1].vertex.y)/2),i.bodyB===i.supports[0].body||!0===i.bodyA.isStatic?n.moveTo(c-8*i.normal.x,u-8*i.normal.y):n.moveTo(c+8*i.normal.x,u+8*i.normal.y),n.lineTo(c,u)}s.wireframes?n.strokeStyle="rgba(255,165,0,0.7)":n.strokeStyle="orange",n.lineWidth=1,n.stroke()},/**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */d.separations=function(e,t,n){var o,i,r,a,s,l=e.options;// render separations
for(n.beginPath(),s=0;s<t.length;s++)if((o=t[s]).isActive){r=(i=o.collision).bodyA;var c=1;(a=i.bodyB).isStatic||r.isStatic||(c=.5),a.isStatic&&(c=0),n.moveTo(a.position.x,a.position.y),n.lineTo(a.position.x-i.penetration.x*c,a.position.y-i.penetration.y*c),c=1,a.isStatic||r.isStatic||(c=.5),r.isStatic&&(c=0),n.moveTo(r.position.x,r.position.y),n.lineTo(r.position.x+i.penetration.x*c,r.position.y+i.penetration.y*c)}l.wireframes?n.strokeStyle="rgba(255,165,0,0.5)":n.strokeStyle="orange",n.stroke()},/**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */d.inspector=function(e,t){e.engine;var n,o=e.selected,i=e.render,r=i.options;if(r.hasBounds){var a=i.bounds.max.x-i.bounds.min.x,s=i.bounds.max.y-i.bounds.min.y,l=a/i.options.width,c=s/i.options.height;t.scale(1/l,1/c),t.translate(-i.bounds.min.x,-i.bounds.min.y)}for(var u=0;u<o.length;u++){var d=o[u].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),d.type){case"body":// render body selections
n=d.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":// render constraint selections
var p=d.pointA;d.bodyA&&(p=d.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)},r=function(e,t){var n=e.engine,o=e.timing,i=o.historySize,r=n.timing.timestamp;o.delta=t-o.lastTime||d._goodDelta,o.lastTime=t,o.timestampElapsed=r-o.lastTimestamp||0,o.lastTimestamp=r,o.deltaHistory.unshift(o.delta),o.deltaHistory.length=Math.min(o.deltaHistory.length,i),o.engineDeltaHistory.unshift(n.timing.lastDelta),o.engineDeltaHistory.length=Math.min(o.engineDeltaHistory.length,i),o.timestampElapsedHistory.unshift(o.timestampElapsed),o.timestampElapsedHistory.length=Math.min(o.timestampElapsedHistory.length,i),o.engineElapsedHistory.unshift(n.timing.lastElapsed),o.engineElapsedHistory.length=Math.min(o.engineElapsedHistory.length,i),o.elapsedHistory.unshift(o.lastElapsed),o.elapsedHistory.length=Math.min(o.elapsedHistory.length,i)},a=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length||0},s=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},l=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},c=function(e,t){var n=e.textures[t];return n||((n=e.textures[t]=new Image).src=t),n},u=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t};/***/},/* 17 *//***/function(e,t){/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/var n={};e.exports=n,/**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */n.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}};/***/},/* 18 *//***/function(e,t,n){/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/var o={};e.exports=o;var i=n(7),r=n(19),a=n(14),s=n(20),l=n(4),c=n(5),u=n(10),d=n(0),p=n(6);/**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */o.create=function(e){e=e||{};var t=d.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},e);return t.world=e.world||c.create({label:"World"}),t.pairs=e.pairs||s.create(),t.detector=e.detector||a.create(),// for temporary back compatibility only
t.grid={buckets:[]},t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},/**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */o.update=function(e,t,n){var p=d.now();t=t||1e3/60,n=n||1;var f,v=e.world,m=e.detector,y=e.pairs,g=e.timing,x=g.timestamp;// increment timestamp
g.timestamp+=t*g.timeScale,g.lastDelta=t*g.timeScale;// create an event object
var h={timestamp:g.timestamp};l.trigger(e,"beforeUpdate",h);// get all bodies and all constraints in the world
var b=c.allBodies(v),S=c.allConstraints(v);for(v.isModified&&a.setBodies(m,b),v.isModified&&c.setModified(v,!1,!1,!0),e.enableSleeping&&i.update(b,g.timeScale),// apply gravity to all bodies
o._bodiesApplyGravity(b,e.gravity),// update all body position and rotation by integration
o._bodiesUpdate(b,t,g.timeScale,n,v.bounds),// update all constraints (first pass)
u.preSolveAll(b),f=0;f<e.constraintIterations;f++)u.solveAll(S,g.timeScale);u.postSolveAll(b),// find all collisions
m.pairs=e.pairs;var w=a.collisions(m);for(// update collision pairs
s.update(y,w,x),e.enableSleeping&&i.afterCollisions(y.list,g.timeScale),y.collisionStart.length>0&&l.trigger(e,"collisionStart",{pairs:y.collisionStart}),// iteratively resolve position between collisions
r.preSolvePosition(y.list),f=0;f<e.positionIterations;f++)r.solvePosition(y.list,g.timeScale);for(r.postSolvePosition(b),// update all constraints (second pass)
u.preSolveAll(b),f=0;f<e.constraintIterations;f++)u.solveAll(S,g.timeScale);for(u.postSolveAll(b),// iteratively resolve velocity between collisions
r.preSolveVelocity(y.list),f=0;f<e.velocityIterations;f++)r.solveVelocity(y.list,g.timeScale);return y.collisionActive.length>0&&l.trigger(e,"collisionActive",{pairs:y.collisionActive}),y.collisionEnd.length>0&&l.trigger(e,"collisionEnd",{pairs:y.collisionEnd}),// clear force buffers
o._bodiesClearForces(b),l.trigger(e,"afterUpdate",h),// log the time elapsed computing this update
e.timing.lastElapsed=d.now()-p,e},/**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */o.merge=function(e,t){if(d.extend(e,t),t.world){e.world=t.world,o.clear(e);for(var n=c.allBodies(e.world),r=0;r<n.length;r++){var a=n[r];i.set(a,!1),a.id=d.nextId()}}},/**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */o.clear=function(e){s.clear(e.pairs),a.clear(e.detector)},/**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */o._bodiesClearForces=function(e){for(var t=0;t<e.length;t++){var n=e[t];// reset force buffers
n.force.x=0,n.force.y=0,n.torque=0}},/**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */o._bodiesApplyGravity=function(e,t){var n=void 0!==t.scale?t.scale:.001;if((0!==t.x||0!==t.y)&&0!==n)for(var o=0;o<e.length;o++){var i=e[o];i.isStatic||i.isSleeping||(// apply gravity
i.force.y+=i.mass*t.y*n,i.force.x+=i.mass*t.x*n)}},/**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */o._bodiesUpdate=function(e,t,n,o,i){for(var r=0;r<e.length;r++){var a=e[r];a.isStatic||a.isSleeping||p.update(a,t,n,o)}};/***/},/* 19 *//***/function(e,t,n){/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/var o={};e.exports=o;var i=n(3),r=n(1);o._restingThresh=4,o._restingThreshTangent=6,o._positionDampen=.9,o._positionWarming=.8,o._frictionNormalMultiplier=5,/**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */o.preSolvePosition=function(e){var t,n,o,i=e.length;// find total contacts on each body
for(t=0;t<i;t++)(n=e[t]).isActive&&(o=n.activeContacts.length,n.collision.parentA.totalContacts+=o,n.collision.parentB.totalContacts+=o)},/**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */o.solvePosition=function(e,t){var n,i,r,a,s,l,c,u,d=o._positionDampen,p=e.length;// find impulses required to resolve penetration
for(n=0;n<p;n++)(i=e[n]).isActive&&!i.isSensor&&(a=(r=i.collision).parentA,s=r.parentB,l=r.normal,// get current separation between body edges involved in collision
i.separation=l.x*(s.positionImpulse.x+r.penetration.x-a.positionImpulse.x)+l.y*(s.positionImpulse.y+r.penetration.y-a.positionImpulse.y));for(n=0;n<p;n++)!(i=e[n]).isActive||i.isSensor||(a=(r=i.collision).parentA,s=r.parentB,l=r.normal,u=(i.separation-i.slop)*t,(a.isStatic||s.isStatic)&&(u*=2),a.isStatic||a.isSleeping||(c=d/a.totalContacts,a.positionImpulse.x+=l.x*u*c,a.positionImpulse.y+=l.y*u*c),s.isStatic||s.isSleeping||(c=d/s.totalContacts,s.positionImpulse.x-=l.x*u*c,s.positionImpulse.y-=l.y*u*c))},/**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */o.postSolvePosition=function(e){for(var t=o._positionWarming,n=e.length,a=i.translate,s=r.update,l=0;l<n;l++){var c=e[l],u=c.positionImpulse,d=u.x,p=u.y,f=c.velocity;if(// reset contact count
c.totalContacts=0,0!==d||0!==p){// update body geometry
for(var v=0;v<c.parts.length;v++){var m=c.parts[v];a(m.vertices,u),s(m.bounds,m.vertices,f),m.position.x+=d,m.position.y+=p}// move the body without changing velocity
c.positionPrev.x+=d,c.positionPrev.y+=p,d*f.x+p*f.y<0?(// reset cached impulse if the body has velocity along it
u.x=0,u.y=0):(// warm the next iteration
u.x*=t,u.y*=t)}}},/**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */o.preSolveVelocity=function(e){var t,n,o=e.length;for(t=0;t<o;t++){var i=e[t];if(i.isActive&&!i.isSensor){var r=i.activeContacts,a=r.length,s=i.collision,l=s.parentA,c=s.parentB,u=s.normal,d=s.tangent;// resolve each contact
for(n=0;n<a;n++){var p=r[n],f=p.vertex,v=p.normalImpulse,m=p.tangentImpulse;if(0!==v||0!==m){// total impulse from contact
var y=u.x*v+d.x*m,g=u.y*v+d.y*m;l.isStatic||l.isSleeping||(l.positionPrev.x+=y*l.inverseMass,l.positionPrev.y+=g*l.inverseMass,l.anglePrev+=l.inverseInertia*((f.x-l.position.x)*g-(f.y-l.position.y)*y)),c.isStatic||c.isSleeping||(c.positionPrev.x-=y*c.inverseMass,c.positionPrev.y-=g*c.inverseMass,c.anglePrev-=c.inverseInertia*((f.x-c.position.x)*g-(f.y-c.position.y)*y))}}}}},/**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */o.solveVelocity=function(e,t){var n,i,r,a,s=t*t,l=o._restingThresh*s,c=o._frictionNormalMultiplier,u=o._restingThreshTangent*s,d=Number.MAX_VALUE,p=e.length;for(r=0;r<p;r++){var f=e[r];if(f.isActive&&!f.isSensor){var v=f.collision,m=v.parentA,y=v.parentB,g=m.velocity,x=y.velocity,h=v.normal.x,b=v.normal.y,S=v.tangent.x,w=v.tangent.y,A=f.activeContacts,P=A.length,C=1/P,B=m.inverseMass+y.inverseMass,M=f.friction*f.frictionStatic*c*s;// resolve each contact
for(a=0,// update body velocities
g.x=m.position.x-m.positionPrev.x,g.y=m.position.y-m.positionPrev.y,x.x=y.position.x-y.positionPrev.x,x.y=y.position.y-y.positionPrev.y,m.angularVelocity=m.angle-m.anglePrev,y.angularVelocity=y.angle-y.anglePrev;a<P;a++){var k=A[a],_=k.vertex,I=_.x-m.position.x,T=_.y-m.position.y,R=_.x-y.position.x,E=_.y-y.position.y,L=g.x-T*m.angularVelocity,V=g.y+I*m.angularVelocity,D=x.x-E*y.angularVelocity,F=x.y+R*y.angularVelocity,O=L-D,H=V-F,W=h*O+b*H,q=S*O+w*H,j=f.separation+W,G=Math.min(j,1),N=(G=j<0?0:G)*M;q>N||-q>N?(i=q>0?q:-q,(n=f.friction*(q>0?1:-1)*s)<-i?n=-i:n>i&&(n=i)):(n=q,i=d);// account for mass, inertia and contact offset
var U=I*b-T*h,z=R*b-E*h,X=C/(B+m.inverseInertia*U*U+y.inverseInertia*z*z),Q=(1+f.restitution)*W*X;// handle high velocity and resting collisions separately
if(n*=X,W*W>l&&W<0)k.normalImpulse=0;else{// solve resting collision constraints using Erin Catto's method (GDC08)
// impulse constraint tends to 0
var Y=k.normalImpulse;k.normalImpulse+=Q,k.normalImpulse=Math.min(k.normalImpulse,0),Q=k.normalImpulse-Y}// handle high velocity and resting collisions separately
if(q*q>u)k.tangentImpulse=0;else{// solve resting collision constraints using Erin Catto's method (GDC08)
// tangent impulse tends to -tangentSpeed or +tangentSpeed
var Z=k.tangentImpulse;k.tangentImpulse+=n,k.tangentImpulse<-i&&(k.tangentImpulse=-i),k.tangentImpulse>i&&(k.tangentImpulse=i),n=k.tangentImpulse-Z}// total impulse from contact
var $=h*Q+S*n,J=b*Q+w*n;m.isStatic||m.isSleeping||(m.positionPrev.x+=$*m.inverseMass,m.positionPrev.y+=J*m.inverseMass,m.anglePrev+=(I*J-T*$)*m.inverseInertia),y.isStatic||y.isSleeping||(y.positionPrev.x-=$*y.inverseMass,y.positionPrev.y-=J*y.inverseMass,y.anglePrev-=(R*J-E*$)*y.inverseInertia)}}}};/***/},/* 20 *//***/function(e,t,n){/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/var o={};e.exports=o;var i=n(9),r=n(0);/**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */o.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},/**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */o.update=function(e,t,n){var o,r,a,s,l=e.list,c=l.length,u=e.table,d=t.length,p=e.collisionStart,f=e.collisionEnd,v=e.collisionActive;for(s=0,// clear collision state arrays, but maintain old reference
p.length=0,f.length=0,v.length=0;s<c;s++)l[s].confirmedActive=!1;for(s=0;s<d;s++)(a=(o=t[s]).pair)?(a.isActive?v.push(a):p.push(a),// update the pair
i.update(a,o,n),a.confirmedActive=!0):(u[// pair did not exist, create a new pair
(a=i.create(o,n)).id]=a,// push the new pair
p.push(a),l.push(a));// find pairs that are no longer active
var m=[];for(s=0,c=l.length;s<c;s++)(a=l[s]).confirmedActive||(i.setActive(a,!1,n),f.push(a),a.collision.bodyA.isSleeping||a.collision.bodyB.isSleeping||m.push(s));// remove inactive pairs
for(s=0;s<m.length;s++)a=l[r=m[s]-s],l.splice(r,1),delete u[a.id]},/**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */o.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e};/***/},/* 21 *//***/function(e,t,n){var o=e.exports=n(22);o.Axes=n(11),o.Bodies=n(12),o.Body=n(6),o.Bounds=n(1),o.Collision=n(8),o.Common=n(0),o.Composite=n(5),o.Composites=n(23),o.Constraint=n(10),o.Contact=n(17),o.Detector=n(14),o.Engine=n(18),o.Events=n(4),o.Grid=n(24),o.Mouse=n(13),o.MouseConstraint=n(25),o.Pair=n(9),o.Pairs=n(20),o.Plugin=n(15),o.Query=n(26),o.Render=n(16),o.Resolver=n(19),o.Runner=n(27),o.SAT=n(28),o.Sleeping=n(7),o.Svg=n(29),o.Vector=n(2),o.Vertices=n(3),o.World=n(30),// temporary back compatibility
o.Engine.run=o.Runner.run,o.Common.deprecated(o.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead");/***/},/* 22 *//***/function(e,t,n){/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/var o={};e.exports=o;var i=n(15),r=n(0);/**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */o.name="matter-js",/**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */o.version="0.18.0",/**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */o.uses=[],/**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */o.used=[],/**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */o.use=function(){i.use(o,Array.prototype.slice.call(arguments))},/**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */o.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(o,e,t)},/**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */o.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(o,e,t)};/***/},/* 23 *//***/function(e,t,n){/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/var o={};e.exports=o;var i=n(5),r=n(10),a=n(0),s=n(6),l=n(12),c=a.deprecated;/**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */o.stack=function(e,t,n,o,r,a,l){for(var c,u=i.create({label:"Stack"}),d=e,p=t,f=0,v=0;v<o;v++){for(var m=0,y=0;y<n;y++){var g=l(d,p,y,v,c,f);if(g){var x=g.bounds.max.y-g.bounds.min.y,h=g.bounds.max.x-g.bounds.min.x;x>m&&(m=x),s.translate(g,{x:.5*h,y:.5*x}),d=g.bounds.max.x+r,i.addBody(u,g),c=g,f+=1}else d+=r}p+=m+a,d=e}return u},/**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */o.chain=function(e,t,n,o,s,l){for(var c=e.bodies,u=1;u<c.length;u++){var d=c[u-1],p=c[u],f=d.bounds.max.y-d.bounds.min.y,v=d.bounds.max.x-d.bounds.min.x,m=p.bounds.max.y-p.bounds.min.y,y=p.bounds.max.x-p.bounds.min.x,g={bodyA:d,pointA:{x:v*t,y:f*n},bodyB:p,pointB:{x:y*o,y:m*s}},x=a.extend(g,l);i.addConstraint(e,r.create(x))}return e.label+=" Chain",e},/**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */o.mesh=function(e,t,n,o,s){var l,c,u,d,p,f=e.bodies;for(l=0;l<n;l++){for(c=1;c<t;c++)u=f[c-1+l*t],d=f[c+l*t],i.addConstraint(e,r.create(a.extend({bodyA:u,bodyB:d},s)));if(l>0)for(c=0;c<t;c++)u=f[c+(l-1)*t],d=f[c+l*t],i.addConstraint(e,r.create(a.extend({bodyA:u,bodyB:d},s))),o&&c>0&&(p=f[c-1+(l-1)*t],i.addConstraint(e,r.create(a.extend({bodyA:p,bodyB:d},s)))),o&&c<t-1&&(p=f[c+1+(l-1)*t],i.addConstraint(e,r.create(a.extend({bodyA:p,bodyB:d},s))))}return e.label+=" Mesh",e},/**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */o.pyramid=function(e,t,n,i,r,a,l){return o.stack(e,t,n,i,r,a,function(t,o,a,c,u,d){var p=Math.min(i,Math.ceil(n/2)),f=u?u.bounds.max.x-u.bounds.min.x:0;if(!(c>p)){var v=// reverse row order
c=p-c,m=n-1-c;if(!(a<v)&&!(a>m))return 1===d&&s.translate(u,{x:(a+(n%2==1?1:-1))*f,y:0}),l(e+(u?a*f:0)+a*r,o,a,c,u,d)}})},/**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */o.newtonsCradle=function(e,t,n,o,a){for(var s=i.create({label:"Newtons Cradle"}),c=0;c<n;c++){var u=l.circle(e+c*(1.9*o),t+a,o,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),d=r.create({pointA:{x:e+c*(1.9*o),y:t},bodyB:u});i.addBody(s,u),i.addConstraint(s,d)}return s},c(o,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),/**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */o.car=function(e,t,n,o,a){var c=s.nextGroup(!0),u=-(.5*n)+20,d=.5*n-20,p=i.create({label:"Car"}),f=l.rectangle(e,t,n,o,{collisionFilter:{group:c},chamfer:{radius:.5*o},density:2e-4}),v=l.circle(e+u,t+0,a,{collisionFilter:{group:c},friction:.8}),m=l.circle(e+d,t+0,a,{collisionFilter:{group:c},friction:.8}),y=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:v,stiffness:1,length:0}),g=r.create({bodyB:f,pointB:{x:d,y:0},bodyA:m,stiffness:1,length:0});return i.addBody(p,f),i.addBody(p,v),i.addBody(p,m),i.addConstraint(p,y),i.addConstraint(p,g),p},c(o,"car","Composites.car ➤ moved to car example"),/**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */o.softBody=function(e,t,n,i,r,s,c,u,d,p){d=a.extend({inertia:1/0},d),p=a.extend({stiffness:.2,render:{type:"line",anchors:!1}},p);var f=o.stack(e,t,n,i,r,s,function(e,t){return l.circle(e,t,u,d)});return o.mesh(f,n,i,c,p),f.label="Soft Body",f},c(o,"softBody","Composites.softBody ➤ moved to softBody and cloth examples");/***/},/* 24 *//***/function(e,t,n){/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/var o={};e.exports=o;var i=n(9),r=n(0),a=r.deprecated;/**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */o.create=function(e){return r.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},/**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     *//**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     *//**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */o.update=function(e,t,n,i){var r,a,s,l,c,u=n.world,d=e.buckets,p=!1;for(r=0;r<t.length;r++){var f=t[r];if((!f.isSleeping||i)&&(!u.bounds||!(f.bounds.max.x<u.bounds.min.x)&&!(f.bounds.min.x>u.bounds.max.x)&&!(f.bounds.max.y<u.bounds.min.y)&&!(f.bounds.min.y>u.bounds.max.y))){var v=o._getRegion(e,f);// if the body has changed grid region
if(!f.region||v.id!==f.region.id||i){(!f.region||i)&&(f.region=v);var m=o._regionUnion(v,f.region);// update grid buckets affected by region change
// iterate over the union of both regions
for(a=m.startCol;a<=m.endCol;a++)for(s=m.startRow;s<=m.endRow;s++){l=d[c=o._getBucketId(a,s)];var y=a>=v.startCol&&a<=v.endCol&&s>=v.startRow&&s<=v.endRow,g=a>=f.region.startCol&&a<=f.region.endCol&&s>=f.region.startRow&&s<=f.region.endRow;!y&&g&&g&&l&&o._bucketRemoveBody(e,l,f),(f.region===v||y&&!g||i)&&(l||(l=o._createBucket(d,c)),o._bucketAddBody(e,l,f))}// set the new region
f.region=v,// flag changes so we can update pairs
p=!0}}}p&&(e.pairsList=o._createActivePairsList(e))},a(o,"update","Grid.update ➤ replaced by Matter.Detector"),/**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */o.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},a(o,"clear","Grid.clear ➤ replaced by Matter.Detector"),/**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */o._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),i=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),a=Math.max(e.endRow,t.endRow);return o._createRegion(n,i,r,a)},/**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */o._getRegion=function(e,t){var n=t.bounds,i=Math.floor(n.min.x/e.bucketWidth),r=Math.floor(n.max.x/e.bucketWidth),a=Math.floor(n.min.y/e.bucketHeight),s=Math.floor(n.max.y/e.bucketHeight);return o._createRegion(i,r,a,s)},/**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */o._createRegion=function(e,t,n,o){return{id:e+","+t+","+n+","+o,startCol:e,endCol:t,startRow:n,endRow:o}},/**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */o._getBucketId=function(e,t){return"C"+e+"R"+t},/**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */o._createBucket=function(e,t){return e[t]=[]},/**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */o._bucketAddBody=function(e,t,n){var o,r=e.pairs,a=i.id,s=t.length;// add new pairs
for(o=0;o<s;o++){var l=t[o];if(n.id!==l.id&&(!n.isStatic||!l.isStatic)){// keep track of the number of buckets the pair exists in
// important for Grid.update to work
var c=a(n,l),u=r[c];u?u[2]+=1:r[c]=[n,l,1]}}// add to bodies (after pairs, otherwise pairs with self)
t.push(n)},/**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */o._bucketRemoveBody=function(e,t,n){var o,a=e.pairs,s=i.id;// remove from bucket
t.splice(r.indexOf(t,n),1);var l=t.length;// update pair counts
for(o=0;o<l;o++){// keep track of the number of buckets the pair exists in
// important for _createActivePairsList to work
var c=a[s(n,t[o])];c&&(c[2]-=1)}},/**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */o._createActivePairsList=function(e){var t,n,o=e.pairs,i=r.keys(o),a=i.length,s=[];// iterate over grid.pairs
for(n=0;n<a;n++)(t=o[i[n]])[2]>0?s.push(t):delete o[i[n]];return s};/***/},/* 25 *//***/function(e,t,n){/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/var o={};e.exports=o;var i=n(3),r=n(7),a=n(13),s=n(4),l=n(14),c=n(10),u=n(5),d=n(0),p=n(1);/**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */o.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=a.create(e.render.canvas):t&&t.element?n=a.create(t.element):(n=a.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var i=c.create({label:"Mouse Constraint",pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),r={type:"mouseConstraint",mouse:n,element:null,body:null,constraint:i,collisionFilter:{category:1,mask:4294967295,group:0}},l=d.extend(r,t);return s.on(e,"beforeUpdate",function(){var t=u.allBodies(e.world);o.update(l,t),o._triggerEvents(l)}),l},/**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */o.update=function(e,t){var n=e.mouse,o=e.constraint,a=e.body;if(0===n.button){if(o.bodyB)r.set(o.bodyB,!1),o.pointA=n.position;else for(var c=0;c<t.length;c++)if(a=t[c],p.contains(a.bounds,n.position)&&l.canCollide(a.collisionFilter,e.collisionFilter))for(var u=a.parts.length>1?1:0;u<a.parts.length;u++){var d=a.parts[u];if(i.contains(d.vertices,n.position)){o.pointA=n.position,o.bodyB=e.body=a,o.pointB={x:n.position.x-a.position.x,y:n.position.y-a.position.y},o.angleB=a.angle,r.set(a,!1),s.trigger(e,"startdrag",{mouse:n,body:a});break}}}else o.bodyB=e.body=null,o.pointB=null,a&&s.trigger(e,"enddrag",{mouse:n,body:a})},/**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */o._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&s.trigger(e,"mousemove",{mouse:t}),n.mousedown&&s.trigger(e,"mousedown",{mouse:t}),n.mouseup&&s.trigger(e,"mouseup",{mouse:t}),// reset the mouse state ready for the next step
a.clearSourceEvents(t)};/***/},/* 26 *//***/function(e,t,n){/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/var o={};e.exports=o;var i=n(2),r=n(8),a=n(1),s=n(12),l=n(3);/**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */o.collides=function(e,t){for(var n=[],o=t.length,i=e.bounds,s=r.collides,l=a.overlaps,c=0;c<o;c++){var u=t[c],d=u.parts.length,p=1===d?0:1;if(l(u.bounds,i))for(var f=p;f<d;f++){var v=u.parts[f];if(l(v.bounds,i)){var m=s(v,e);if(m){n.push(m);break}}}}return n},/**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */o.ray=function(e,t,n,r){r=r||1e-100;for(var a=i.angle(t,n),l=i.magnitude(i.sub(t,n)),c=(n.x+t.x)*.5,u=(n.y+t.y)*.5,d=s.rectangle(c,u,l,r,{angle:a}),p=o.collides(d,e),f=0;f<p.length;f+=1){var v=p[f];v.body=v.bodyB=v.bodyA}return p},/**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */o.region=function(e,t,n){for(var o=[],i=0;i<e.length;i++){var r=e[i],s=a.overlaps(r.bounds,t);(s&&!n||!s&&n)&&o.push(r)}return o},/**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */o.point=function(e,t){for(var n=[],o=0;o<e.length;o++){var i=e[o];if(a.contains(i.bounds,t))for(var r=1===i.parts.length?0:1;r<i.parts.length;r++){var s=i.parts[r];if(a.contains(s.bounds,t)&&l.contains(s.vertices,t)){n.push(i);break}}}return n};/***/},/* 27 *//***/function(e,t,n){/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/var o,i,r,a={};e.exports=a;var s=n(4),l=n(18),c=n(0);"undefined"!=typeof window&&(o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),o||(o=function(e){r=setTimeout(function(){e(c.now())},1e3/60)},i=function(){clearTimeout(r)}),/**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */a.create=function(e){var t=c.extend({fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},e);return t.delta=t.delta||1e3/t.fps,t.deltaMin=t.deltaMin||1e3/t.fps,t.deltaMax=t.deltaMax||1e3/(.5*t.fps),t.fps=1e3/t.delta,t},/**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */a.run=function(e,t){return void 0!==e.positionIterations&&(t=e,e=a.create()),function n(i){e.frameRequestId=o(n),i&&e.enabled&&a.tick(e,t,i)}(),e},/**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */a.tick=function(e,t,n){var o,i=t.timing,r=1,a={timestamp:i.timestamp};s.trigger(e,"beforeTick",a),e.isFixed?o=e.delta:(// dynamic timestep based on wall clock between calls
o=n-e.timePrev||e.delta,e.timePrev=n,// optimistically filter delta over a few frames, to improve stability
e.deltaHistory.push(o),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),// correction for delta
r=(o=// limit delta
(o=(o=Math.min.apply(null,e.deltaHistory))<e.deltaMin?e.deltaMin:o)>e.deltaMax?e.deltaMax:o)/e.delta,// update engine timing object
e.delta=o),0!==e.timeScalePrev&&(r*=i.timeScale/e.timeScalePrev),0===i.timeScale&&(r=0),e.timeScalePrev=i.timeScale,e.correction=r,// fps counter
e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),e.counterTimestamp=n,e.frameCounter=0),s.trigger(e,"tick",a),// update
s.trigger(e,"beforeUpdate",a),l.update(t,o,r),s.trigger(e,"afterUpdate",a),s.trigger(e,"afterTick",a)},/**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */a.stop=function(e){i(e.frameRequestId)},/**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */a.start=function(e,t){a.run(e,t)};/***/},/* 28 *//***/function(e,t,n){/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/var o={};e.exports=o;var i=n(8),r=n(0).deprecated;/**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */o.collides=function(e,t){return i.collides(e,t)},r(o,"collides","SAT.collides ➤ replaced by Collision.collides");/***/},/* 29 *//***/function(e,t,n){/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/var o={};e.exports=o,n(1);var i=n(0);/**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */o.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||i.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");// https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
var n,r,a,s,l,c,u,d,p,f,v,m=[],y=0,g=0,x=0;t=t||15;var h=function(e,t,n){// all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
var o=n%2==1&&n>1;// when the last point doesn't equal the current point add the current point
if(!p||e!=p.x||t!=p.y){p&&o?(f=p.x,v=p.y):(f=0,v=0);var i={x:f+e,y:v+t};(o||!p)&&(p=i),m.push(i),g=f+e,x=v+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();// skip path ends
if("Z"!==t){// map segment to x and y
switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":g=e.x,x=e.y;break;case"H":g=e.x;break;case"V":x=e.y}h(g,x,e.pathSegType)}};for(// ensure path is absolute
o._svgPathToAbsolute(e),// get total length
a=e.getTotalLength(),// queue segments
c=[],n=0;n<e.pathSegList.numberOfItems;n+=1)c.push(e.pathSegList.getItem(n));// sample through path
for(u=c.concat();y<a;){// new segment
if((l=c[e.getPathSegAtLength(y)])!=d){for(;u.length&&u[0]!=l;)b(u.shift());d=l}// add points in between when curving
// TODO: adaptive sampling
switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h((s=e.getPointAtLength(y)).x,s.y,0)}// increment by sample value
y+=t}// add remaining segments not passed by sampling
for(n=0,r=u.length;n<r;++n)b(u[n]);return m},o._svgPathToAbsolute=function(e){for(var t,n,o,i,r,a,s=e.pathSegList,l=0,c=0,u=s.numberOfItems,d=0;d<u;++d){var p=s.getItem(d),f=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in p&&(l=p.x),"y"in p&&(c=p.y);else switch("x1"in p&&(o=l+p.x1),"x2"in p&&(r=l+p.x2),"y1"in p&&(i=c+p.y1),"y2"in p&&(a=c+p.y2),"x"in p&&(l+=p.x),"y"in p&&(c+=p.y),f){case"m":s.replaceItem(e.createSVGPathSegMovetoAbs(l,c),d);break;case"l":s.replaceItem(e.createSVGPathSegLinetoAbs(l,c),d);break;case"h":s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),d);break;case"v":s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),d);break;case"c":s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,o,i,r,a),d);break;case"s":s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,a),d);break;case"q":s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,o,i),d);break;case"t":s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),d);break;case"a":s.replaceItem(e.createSVGPathSegArcAbs(l,c,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),d);break;case"z":case"Z":l=t,c=n}("M"==f||"m"==f)&&(t=l,n=c)}};/***/},/* 30 *//***/function(e,t,n){/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/var o={};e.exports=o;var i=n(5);n(0),/**
     * See above, aliases for back compatibility only
     */o.create=i.create,o.add=i.add,o.remove=i.remove,o.clear=i.clear,o.addComposite=i.addComposite,o.addBody=i.addBody,o.addConstraint=i.addConstraint;/***/}])).Engine,r=/*@__PURE__*/e(n).Render,a=/*@__PURE__*/e(n).Runner,s=/*@__PURE__*/e(n).Bodies,l=/*@__PURE__*/e(n).Composite,c=(/*@__PURE__*/e(n).Constraint,/*@__PURE__*/e(n).MouseConstraint),u=/*@__PURE__*/e(n).Mouse,d=/*@__PURE__*/e(n).World;/*@__PURE__*/e(n).Events,/*@__PURE__*/e(n).Body;var p=i.create();let f=document.getElementById("physics-engine-wrap");var v=r.create({element:f,engine:p,options:{wireframes:!1}});//Size dimensions to parent el (100vw/h)
v.options.wireframeBackground="transparent",v.options.background="transparent",v.bounds.max.x=f.getBoundingClientRect().width,v.bounds.max.y=2*f.getBoundingClientRect().height,v.options.width=f.getBoundingClientRect().width,v.options.height=2*f.getBoundingClientRect().height,v.canvas.width=f.getBoundingClientRect().width,v.canvas.height=2*f.getBoundingClientRect().height,window.addEventListener("resize",()=>{v.bounds.max.x=f.getBoundingClientRect().width,v.bounds.max.y=2*f.getBoundingClientRect().height,v.options.width=f.getBoundingClientRect().width,v.options.height=2*f.getBoundingClientRect().height,v.canvas.width=f.getBoundingClientRect().width,v.canvas.height=2*f.getBoundingClientRect().height});//Creates invisible cursor hitbox
var m=s.circle(450,50,37,37);m.render.visible=!1;//Add cursor to world
let y=p.world;l.add(y,[m]),p.gravity.y=.05,r.run(v);// run the engine
var g=a.create();a.run(g,p);// create mouse that engine understands
let x=document.querySelector("canvas"),h=u.create(x),b=c.create(p,{mouse:h,constraint:{render:{visible:!1}}});d.add(y,b),//Change default event listeners for Matter.Mouse
h.element.removeEventListener("mousedown",h.mousedown),h.element.removeEventListener("mouseup",h.mouseup),//Makes mouse always mousedown
document.addEventListener("mousemove",h.mousedown),document.addEventListener("mousemove",h.mousemove),o()||document.addEventListener("mousemove",function(){S>5||(S++,/*@__PURE__*/e(n).Body.setPosition(m,h.position))});//Helps with reliability
let S=0,w=1e6/document.getElementById("main").clientWidth,A=document.getElementById("main").clientWidth/40,P=()=>setInterval(()=>{if(!document.hidden){let t,o,i;d.add(y,(t=100*Math.random()+20,o=-document.getElementById("main").scrollTop,(i=s.rectangle(Math.random()*v.options.width,o-3*t,t,t)).render.fillStyle="transparent",i.render.strokeStyle="#BCFFE3",Math.random()>.9&&(i.render.strokeStyle="#FF8A00"),i.render.lineWidth="3",/*@__PURE__*/e(n).Body.setVelocity(i,{x:(Math.random()-.5)*10,y:(Math.random()-.5)*2}),/*@__PURE__*/e(n).Body.setAngularVelocity(i,Math.random()/5),i))}let t=l.allBodies(y);if(t.length>1e3){let e=t.length-1e3;for(let n=1;n<e;n++)l.remove(y,t[n])}},w);function C(){if(!document.hidden)for(let t=0;t<A;t++){let t=100*Math.random()+20,o=-document.getElementById("main").scrollTop,i=s.rectangle(Math.random()*v.options.width,o-3*t,t,t);i.render.fillStyle="transparent",i.render.strokeStyle="#BCFFE3",Math.random()>.9&&(i.render.strokeStyle="#FF8A00"),i.render.lineWidth="3",/*@__PURE__*/e(n).Body.setVelocity(i,{x:(Math.random()-.5)*10,y:(Math.random()-.5)*10}),/*@__PURE__*/e(n).Body.setAngularVelocity(i,Math.random()/5),d.add(y,i)}}o()?(P(),C()):(document.addEventListener("mousemove",P,{once:!0}),document.addEventListener("mousemove",C,{once:!0}));let B=document.getElementById("main"),M=0;if(B.addEventListener("scroll",e=>{let t=M-B.scrollTop;B.scrollTop,l.translate(y,{x:0,y:.8*t}),M=B.scrollTop}),o()){let e=l.allBodies(y);l.remove(y,e[0]),l.remove(y,b)}o()||document.addEventListener("mousemove",e=>{0===document.getElementById("page-wrap").classList.length&&(Array.from(document.elementsFromPoint(e.pageX,e.pageY)).includes(document.getElementById("home"))?l.allBodies(y)[0].collisionFilter.category=1:l.allBodies(y)[0].collisionFilter.category=0)});//# sourceMappingURL=index.b4bd9a05.js.map

//# sourceMappingURL=index.b4bd9a05.js.map
