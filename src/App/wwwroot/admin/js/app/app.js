// ReSharper disable CommentTypo
/// <reference path="../../../lib/Typings/jquery.typescript.definitelytyped/3.1.2/Content/Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../../lib/Typings/toastr.typescript.definitelytyped/0.3.3/Content/Scripts/typings/toastr/toastr.d.ts"/>
// ReSharper restore CommentTypo
// ReSharper disable IdentifierTypo
var selectAllCheckbox = $('#selectAll');
var actionBtns = $('#multiActionBtns .btn');
var itemCheckbox = '.item-checkbox';
$(selectAllCheckbox).change(function () {
    $(".item-checkbox").not(":hidden").prop('checked', $(this).prop("checked")); //change all ".item-checkbox" checked status
    toggleActionBtns();
});
$(itemCheckbox).on('change', function () {
    //uncheck "select all", if one of the listed checkbox item is unchecked
    if (false === $(this).prop("checked")) { //if this item is unchecked
        $(selectAllCheckbox).prop('checked', false); //change "select all" checked status to false
    }
    if ($(itemCheckbox + ':checked').not(":hidden").length == $(itemCheckbox).not(":hidden").length) { //check "select all" if all checkbox items are checked
        $(selectAllCheckbox).prop('checked', true);
    }
    toggleActionBtns();
});
function toggleActionBtns() {
    var bxs = $(itemCheckbox + ':checked').length;
    if (bxs && bxs > 0) {
        $(actionBtns).removeAttr('disabled');
    }
    else {
        $(actionBtns).attr('disabled', 'disabled');
    }
}
// Toastr Options --------
toastr.options.positionClass = 'toast-bottom-right';
toastr.options.backgroundpositionClass = 'toast-bottom-right';
profileLogOut = (profileLogOut != null
    ? profileLogOut
    : () => {
        $("#frmLogOut").submit();
    });
function getDate(date) {
    var d = new Date(Date.parse(date));
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
function fromQueryString(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(window.location.href);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0)
        return '0 Byte';
    var i = parseInt((Math.floor(Math.log(bytes) / Math.log(1024))).toString());
    return roundToPrecision(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
// round X off at a specific number of digits.  In Radix 10, 
// precision 2 is two decimal places
function roundToPrecision(x, precision, radix = 10) {
    return Math.round(x * Math.pow(radix, precision)) / Math.pow(radix, precision);
}
function getMonthName(i) {
    var m = new Array();
    m[0] = "January";
    m[1] = "February";
    m[2] = "March";
    m[3] = "April";
    m[4] = "May";
    m[5] = "June";
    m[6] = "July";
    m[7] = "August";
    m[8] = "September";
    m[9] = "October";
    m[10] = "November";
    m[11] = "December";
    return m[i];
}
// setup page
$(".bf-setup-form #AuthorName").keyup(function () {
    var authorUrl = $(this).val();
    authorUrl = authorUrl.replace(/\s+/g, '-').toLowerCase();
    $(".bf-setup-url").text(window.location.host + '/blog/' + authorUrl);
    if ($(this).val() === '') {
        $(".bf-setup-url").text('');
    }
});
// Tooltips
$("[data-tooltip]").tooltip({
    container: 'body'
});
// Taskbar Tooltip - this option will toggle the placement of the Tooltip on Desktop and Mobile
var taskbarTooltipOptions = {
    placement: function (context, source) {
        if ($(window).width() > 991) {
            return "right";
        }
        else {
            return "bottom";
        }
    }
};
$(".taskbar-item-link").tooltip(taskbarTooltipOptions);
// Sidebar Toggle mobile
$(".bf-header").on("click", function () {
    $(this).toggleClass("active");
    $(".bf-sidebar").stop(true, true).slideToggle();
});
// autofocus for modals that has "autofocus" attribute
// http://getbootstrap.com/docs/4.0/components/modal/#how-it-works
$('.modal').on('shown.bs.modal', function () {
    $(this).find('[autofocus]').trigger('focus');
});
// Dropdown
$('.dropdown-custom .dropdown-item').on('click', function () {
    var thisValue = $(this).text();
    $(this).parent().parent().find(".dropdown-toggle .dropdown-value").text(thisValue);
});
function reload(msg) {
    toastr.success(msg);
    setTimeout(function () { window.location.reload(); }, 1000);
}
function fail(jqXHR, exception) {
    var msg = '';
    if (jqXHR.status === 0) {
        msg = 'Not connected.\n Verify Network.';
    }
    else if (jqXHR.status === 404) {
        msg = 'Requested page not found. [404]';
    }
    else if (jqXHR.status === 500) {
        msg = 'Internal Server Error [500].';
    }
    else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
    }
    else if (exception === 'timeout') {
        msg = 'Time out error.';
    }
    else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
    }
    else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
    }
    $('.loading').fadeOut('fast');
    toastr.error(msg);
}
function emptyCallback() { }
// ReSharper restore IdentifierTypo
//# sourceMappingURL=app.js.map