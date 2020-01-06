

declare var webRoot : string; // in App/Pages/Admin/Shared/_Layout.cshtml

// from App/Pages/Account/_Layout.cshtml
function goHome() {
    window.location.href = webRoot;
};

// from App/Pages/Admin/Shared/_Layout.cshtml
function getUrl(str) : string {
    return webRoot + str;
};
