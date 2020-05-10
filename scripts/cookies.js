function hovered() {
    document.getElementById("hcks").style.background = "#f9ca24";
}
function unhovered() {
    document.getElementById("hcks").style.background = "#f9ca24";
}
function hidecks() {
    document.getElementById("cookie").style.display = "none";
    setCookie("ck_836b758de6069304", "y", 30);
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = ";expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + ";path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}
if (window.addEventListener) {
    window.addEventListener('load', skr_ckz)
} else {
    window.attachEvent('onload', skr_ckz)
}
function skr_ckz() {
    let x = getCookie("ck_836b758de6069304");
    if (!x) {
        let c = document.createElement("aside");
        let hc = document.createElement("span");
        c.setAttribute("id", "cookie");
        c.style.zIndex = 999999;
        hc.setAttribute("id", "hcks");
        document.body.appendChild(c);
        c.style.background = "#2c3e50";
        c.style.color = "#ecf0f1";
        hc.style.background = "#f9ca24";
        hc.style.color = "#000000";
        c.innerHTML = "<span id=\"cinfo\" style=\"flex: 1 1 auto; margin-top: 2px;\">Na swojej stronie wykorzystujÄ pliki cookie. [&nbsp;<a href=\"https://skrypt-cookies.pl/czym-sa-ciasteczka\" target=\"_blank\" style=\"text-decoration:underline;color:#ecf0f1;\">WiÄcej informacji</a>&nbsp;]</span>";
        hc.innerHTML = "Rozumiem";
        c.style.width = "48%";
        c.style.minWidth = "380px";
        c.style.maxWidth = "90%";
        c.style.right = "20px";
        c.style.left = "auto";
        c.style.bottom = "20px";
        c.style.top = "auto";
        const sc = window.matchMedia("(max-width: 575px)");
        if (sc.matches) {
            c.style.width = "auto";
            c.style.left = "0";
            c.style.right = "0";
            c.style.bottom = "0";
            c.style.top = "auto";
            c.style.maxWidth = "100%";
        }
        hc.style.padding = "12px 30px";
        hc.style.cursor = "pointer";
        hc.style.display = "flex";
        hc.style.borderRadius = ".3rem";
        hc.style.alignItems = "center";
        hc.style.marginLeft = "15px";
        hc.addEventListener("click", hidecks, false);
        hc.addEventListener("mouseenter", hovered, false);
        hc.addEventListener("mouseleave", unhovered, false);
        c.style.position = "fixed";
        c.style.padding = "20px";
        c.style.fontSize = "17px";
        c.style.display = "flex";
        c.appendChild(hc);
    }
}
window.onresize = function(event) {
    let c = document.getElementById("cookie");
    const scr = window.matchMedia("(max-width: 575px)");
    if (scr.matches) {
        c.style.width = "auto";
        c.style.left = "0";
        c.style.right = "0";
        c.style.bottom = "0";
        c.style.top = "auto";
        c.style.maxWidth = "100%";
    } else {
        c = document.getElementById("cookie");
        c.style.width = "48%";
        c.style.minWidth = "380px";
        c.style.maxWidth = "90%";
        c.style.right = "20px";
        c.style.left = "auto";
        c.style.bottom = "20px";
        c.style.top = "auto";
    }
}
;
