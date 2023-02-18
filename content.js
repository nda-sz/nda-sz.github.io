function setContent (topic, text, img) {
    var element = document.getElementById("contents");
    if (element) {
        imgHtml = img ? "<img src=\"(img)\" class=\"pic\"><div class=\"tinypic\"\
            style=\"background:url((img)) no-repeat; background-size:contain;\"></div>" .replace("(img)", img)
                                                                                        .replace("(img)", img) : "";

        element.innerHTML += "\
        <div class=\"content\">\
            (imgHtml)\
            <p class=\"font-title\" style=\"text-align:center;\"><b><i>(topic)</i></b></p>\
            <div style=\"margin:100px;\" class=\"font-text\">\
                <p>(text)</p>\
            </div>\
        </div>" .replace("(imgHtml)", imgHtml)
                .replace("(topic)", topic)
                .replace("(text)", text);
    }
}

function setAd (topic, text, toBtn) {
    var element = document.getElementById("ads");
    if (element) {

        btnHtml = toBtn ? "\
            <a href=\"(toBtn)\">\
                <button type=\"button\" class=\"learn\">了解更多</button>\
            </a>"   .replace("(toBtn)", toBtn) : "";
        element.innerHTML += "\
        <div class=\"ad\">\
            <p class=\"font-title\" style=\"text-align:center;\"><b><i>(topic)</i></b></p>\
            <div style=\"margin:50px; text-align:center;\" class=\"font-text\">\
                <p>(text)</p>(btnHtml)\
            </div>\
        </div>" .replace("(topic)", topic)
                .replace("(text)", text)
                .replace("(btnHtml)", btnHtml);
    }
}

$(function(){
    $("#menu").append("\
        <li class=\"li-menu\"><a class=\"a-menu\" href=\"index.html\"><img class=\"nda\" src=\"NDA_white.svg\"></a></li>\
        <li class=\"li-menu\"><a class=\"a-menu\" href=\"notice.html\">公告</a></li>\
        <li class=\"li-menu\"><a class=\"a-menu\" href=\"picshow.html\">图片展</a></li>\
        <li class=\"li-right\"><a class=\"a-menu\" href=\"about.html\">关于我们</a></li>");
    mainx = $("#main");
    mainx.css("height", window.innerWidth * 0.42875 + "px");
    mainx.append("\
                <p class=\"font-mainTitle\">(first)</p>\
                <p class=\"font-mainSub\">Nanda Village</p>".replace("(first)", first));
    $(".font-mainTitle").css("padding-top", window.innerWidth * 0.12 + "px");
    $(".font-mainTitle").css("color", "white");                 
})