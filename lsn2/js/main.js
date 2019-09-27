
jQuery(document).ready(function(e) {
    $('#btnSub').on('click', function(e){
        var file = $("#file").prop("files")[0];        
        // var fileUri = $("#prevImg").attr("src");
        // fileUri = fileUri.replace(/^data:image\/[a-z]+;base64,/, "");
        var fd = new FormData();
        var qquuid = '_' + Math.random().toString(36).substr(2, 9);
        fd.append('qquuid', qquuid);
        fd.append('qqtotalfilesize', file.size);
        fd.append('file', file);
        

        $.ajax({
            type: "POST",
            url: "https://file.io/?expires=1d",            
            contentType: false,
            dataType: 'text',
            data: fd,
            cache: false,            
            processData: false,            
            success: function(data){
                var djson = JSON.parse(data);
                // save the current datetime
                checkTime();
                
                // https://www.smtpjs.com/
                // https://elasticemail.com/account#/settings/smtp
                // send email
                Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "ns@esokia-webagency.com",
                    Password : "55b4dda0-b4fb-444a-a22f-a8301a20fd72",
                    To : 'ns@esokia-webagency.com',
                    From : "ns@esokia-webagency.com",
                    Subject : "PirateCom",
                    Body : "This link is available only for 10 minutes: " + "http://kraken.local/lsn2/checkTime.html?key=" + djson.key
                }).then(
                  message => alert(message)
                );
            },
            error: function(xhr, status) {
                console.log(xhr.responseText);                
            }
        })
    });

    function checkTime() {
        var date = new Date();
        // set local datetime to localStorage
        window.localStorage.setItem("currentDate", date);        
    }
})