$(document).ready(function () {
    $('button').click(callback);
});

function callback() {
    var first='<p>First</p>';
    var second=$('<p></p>').text('Second');
    var third=document.createElement('p');

    third.innerHTML='Third';

    $('ul').append(first, second, third);
}