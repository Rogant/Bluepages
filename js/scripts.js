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

    /*$(".searchBtn").click(function() {
        window.localStorage.setItem("searchTerm", $('.searchInp').val());
        $.mobile.navigate( "search/basic.html" );
    });*/

    $('.searchInp').keypress(function(e) {
        if(e.which == 13) {
            alert('You pressed enter!');
            $.mobile.navigate( "search/basic.html" );
        }
    });
});