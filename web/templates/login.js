function getData(){
        $('#action').html('<img src="/static/images/cargar.gif"/>');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
               // $('#action').html(value = '<img= "response[/static/images/check1.png"/>');
            },
            error: function(response){
                //alert(JSON.stringify(response));
                if(response['status']==401){
                    $('#action').html('<img src ="/static/images/uncheck.png">');

                }
                else
                {
                    username = response['ResponseText'];
                    //var url = "http://":
                    //$('#action').attr('href' = url);
                    window.location="session.html";
                }

            }
        });
    }