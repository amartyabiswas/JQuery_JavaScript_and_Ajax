$(document).ready(function(){

   /*
   $(document).ready(function(){

        Ensures that jQuery runs after the document has finished loading...

    });
    */

    $("p").click(function(){
        $(this).hide();
    });

    //hide() function is used to hide the content...
    
    $('h1').on('click', function () {
        $(this).hide();
    });

    $("p:first").hover(function(){
        $(this).css('color','blue');
    });

    //on is similar to onClickEvenetListener

    $('#btn').click(function () {
        $('#faded').fadeToggle(1000);
    });

    //We can have a speed and callback attribute

    $("#btn1").click(function(){
        var div = $("#anime");
        div.animate({height: '300px'}, "slow");
        div.animate({width: '300px'}, "slow");
        div.animate({height: '100px'}, "slow");
        div.animate({width: '100px'}, "slow");
    });

});

