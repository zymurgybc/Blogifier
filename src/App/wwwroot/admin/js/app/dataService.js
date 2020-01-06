// ReSharper disable CommentTypo
/// <reference path="../../../lib/Typings/jquery.typescript.definitelytyped/3.1.2/Content/Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../../lib/Typings/toastr.typescript.definitelytyped/0.3.3/Content/Scripts/typings/toastr/toastr.d.ts"/>
/// <reference path="../../../lib/js/common.ts"/>
// ReSharper restore CommentTypo
// ReSharper disable IdentifierTypo
var dataService = (() => {
    var get = (url, done, fail, obj = null) => {
        var data = obj ? JSON.stringify(obj) : {};
        var options = {
            url: getUrl(url),
            type: "GET",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: done,
            error: fail
        };
        $.ajax(options);
    };
    var post = (url, obj, done, fail) => {
        var options = {
            url: getUrl(url),
            type: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "html",
            success: done,
            error: fail
        };
        $.ajax(options);
    };
    var put = (url, obj, done, fail) => {
        var data = obj ? JSON.stringify(obj) : {};
        var options = {
            url: getUrl(url),
            type: "PUT",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "html",
            success: done,
            error: fail
        };
        $.ajax(options);
    };
    var remove = (url, done, fail) => {
        var options = {
            url: getUrl(url),
            type: "DELETE",
            dataType: "html",
            success: done,
            error: fail
        };
        $.ajax(options);
    };
    var upload = (url, obj, done, fail) => {
        var options = {
            type: "POST",
            url: getUrl(url),
            enctype: 'multipart/form-data',
            contentType: false,
            processData: false,
            cache: false,
            data: obj,
            success: done,
            error: fail
        };
        $.ajax(options);
    };
    return {
        get: get,
        post: post,
        remove: remove,
        put: put,
        upload: upload
    };
})();
// ReSharper restore  IdentifierTypo
//# sourceMappingURL=dataService.js.map