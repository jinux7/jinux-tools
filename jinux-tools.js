/**
 * @description 工具库的总文件
 */

//引入所有的依赖
//导入type依赖
import {
    type_isArray,
    type_isFunction,
    type_isObject,
    type_isString,
    type_isNumber,
    type_isBoolean,
    type_isNull,
    type_isEmpty,
    type_isDateFormat,
    type_isEmail,
    type_isIP,
    type_isURL
} from './src/type';
//导入object依赖
import { object_deepClone } from './src/object';
//导入cookie
import {
    cookie_set,
    cookie_get,
    cookie_unset
    } from './src/cookie';

(function(window,undefined){
    var jinuxTools = {
        type_isArray,
        type_isFunction,
        type_isObject,
        type_isString,
        type_isNumber,
        type_isBoolean,
        type_isNull,
        type_isEmpty,
        type_isDateFormat,
        type_isEmail,
        type_isIP,
        type_isURL,
        object_deepClone,
        cookie_set,
        cookie_get,
        cookie_unset
    };
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = jinuxTools;
    } else {
        window.jinuxTools = jinuxTools;
    }
})(window,undefined);