
$('#btn').click(function () {
    $('#paragraph').hide(callback);
});

function callback() {
    window.alert('Mission Completed')
}

$('#btn1').click(function () {

    var text=$('#para').text();
    $('#para').html(text + ' Add some Gesture...');
    
    // text(), html(), and val():- returns or Sets the value of the Html element...
});


//Callback is simply a function that is initialised when the current task is completed, it's used to remove the abmiguity of the async functions.