$(document).ready(function() {
    var marco = $(".ui-header").height() + $(".ui-footer").height();

     $(".uiContentMain").css("min-height", $(window).height() -  marco - 4);

    if(window.localStorage.getItem("Login") == 1){
        $('.logout').css('display', 'block');
        $('.logout .name').html(window.localStorage.getItem("nombresLogin") + ' ' + window.localStorage.getItem("apellidosLogin"));

        $(".logout .btn").click(function() {
            
            window.localStorage.setItem("Login", 0);
            window.localStorage.setItem("nombresLogin", " ");
            window.localStorage.setItem("apellidosLogin", " ");
            window.localStorage.setItem("idLogin", " ");
            window.localStorage.setItem("usernameLogin", " ");

            console.log(window.localStorage.getItem("Login"));
            $.mobile.navigate( "index.html" );
        });         
    }

    $('.searchInp').keypress(function(e) {
        if(e.which == 13) {
            window.localStorage.setItem("searchTerm", $('.searchInp').val());

            var str = $('.ui-page-active').data('url');
            var n = str.indexOf("search/");

            if(n > 0){
                $.mobile.navigate( "../search/basic.html" );
            }else{
                $.mobile.navigate( "search/basic.html" );
            }
        }
    });
});