
jQuery(document).ready(function(e) {
    $('#btnSub').on('click', function(e){
        var file = $("#file").prop("files")[0];        
        var fileUri = $("#prevImg").attr("src");
        fileUri = fileUri.replace(/^data:image\/[a-z]+;base64,/, "");
        var fd = new FormData();
        var qquuid = '_' + Math.random().toString(36).substr(2, 9);
        fd.append('qquuid', qquuid);
        fd.append('qqtotalfilesize', file.size);
        fd.append('file', file);
        

        $.ajax({
            type: "POST",
            url: "https://file.io/",            
            contentType: false,
            dataType: 'text',
            data: fd,
            cache: false,            
            processData: false,            
            success: function(data){
                console.log(data);
            },
            error: function(xhr, status) {
                console.log(xhr.responseText);                
            }
        })
    });

    $('#file').on("change", function() {
        previewFile();
    })

    function previewFile() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
          preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }
})