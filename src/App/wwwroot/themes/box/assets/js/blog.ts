// ReSharper disable CommentTypo
/// @reference "../../../../lib/Typings/jquery.typescript.definitelytyped/3.1.2/Content/Scripts/typings/jquery/jquery.d.ts"
/// @reference "../../../../lib/Typings/toastr.typescript.definitelytyped/0.3.3/Content/Scripts/typings/toastr/toastr.d.ts"
// ReSharper restore CommentTypo

// logout
declare var profileLogOut: () => void;
profileLogOut = (profileLogOut !== null
    ? profileLogOut
    : () => {
        $("#frmLogOut").submit();
    });

// tooltip
$('[data-toggle="tooltip"]').tooltip();

// Create the measurement node for scrollbar
var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
document.body.appendChild(scrollDiv);
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
document.body.removeChild(scrollDiv);

$('#blog-search').on('show.bs.modal', function() {
  $(".blog-header").css({
    "right": scrollbarWidth
  });
})
$('#blog-search').on('hidden.bs.modal', function() {
  $(".blog-header").css({
    "right": "0"
  });
})
$('#blog-search').on('shown.bs.modal', function() {
  $('#blog-search .form-control').trigger('focus');
})
