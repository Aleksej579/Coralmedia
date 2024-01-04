;(function() {


    //callback
    $('#btn_msg_callback').on('click', function(){
        $('#tlgm, #fb, #wa, #sk, #vib').toggle('slow');
        $('.overlayer').toggle();
        $('#btn_msg_callback').toggleClass('cross_icon');
        $('.pulse_1, .pulse_2').toggleClass('cross_icon_pulse');

        
    })


})();





