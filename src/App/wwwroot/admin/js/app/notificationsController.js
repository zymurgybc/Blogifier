// ReSharper disable once CommentTypo
/// <reference path="../../../lib/Typings/toastr.typescript.definitelytyped/0.3.3/Content/Scripts/typings/toastr/toastr.d.ts"/>
/// <reference path="../../js/app/dataService.ts"/>
// ReSharper restore once CommentTypo
// ReSharper disable InconsistentNaming
var notificationsController = ((dataService) => {
    function remove(id) {
        dataService.remove("api/settings/removenotification/" + id, removeCallback, fail);
    }
    function removeCallback() {
        toastr.success('Removed');
    }
    function fail(jqXHR, textStatus, errorThrown) {
        toastr.error("Remove failed");
    }
    return {
        open: open,
        remove: remove
    };
})(dataService);
// ReSharper restore InconsistentNaming
//# sourceMappingURL=notificationsController.js.map