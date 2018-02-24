
    function ajaxRequest() {
        $.ajax({url: '/student',success: function (data) {
            $('h1').html(data);
        }})
    }

