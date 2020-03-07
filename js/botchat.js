$(document).ready(function(){
    $('#beginchat').click(function(){
        $('#mainFrame').removeClass('frame-hide');
    });
    $('#closechat').click(function(){
        $('#mainFrame').addClass('frame-hide');
    });

    var frameHead =  '<link rel="stylesheet" href="css/custom.css" type="text/css" />';
    var bootstrapcss = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">';
    $('#mainFrame').contents().find('head').append(frameHead, bootstrapcss);

    var usrinput =  '<div id= "textBox" class="input-group mb-3"> <input type="text" id="submit-box " class="form-control" placeholder="Type your message..." aria-label="Recipient username" aria-describedby="basic-addon2"><button id="submit-button" class="btn btn btn-primary" type="button">Send</button></div>';
    
    $('#mainFrame').contents().find('body').append(usrinput);


});
