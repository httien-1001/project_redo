$('#btn-login').click(function (e) { 
    alert('xin chào');
    var get_phone=document.getElementById('phone');

    var get_pass=document.getElementById('pass');

    var check_phone=/^[0][9|3|8][0-9]{8}$/;
    var check_pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    regex_phone=check_phone.test(get_phone.value);
    regex_pass=check_pass.test(get_pass.value);
    
    //phone
    if (get_phone.value=='' && !regex_phone){
        $('#phone').addClass('red-border');
        $('#phone_error').removeClass('hidden');
     } else{
        $('#phone').removeClass('red-border');
        $('#phone_error').addClass('hidden');
    };
    //password
    if (get_pass.value=='' && !regex_pass){
        $('#pass').addClass('red-border');
        $('#pass_error').removeClass('hidden');
        // alert('nhập pass');
        return false;
    }else{
        $('#phone').removeClass('red-border');
        $('#phone_error').addClass('hidden');
        return true;
    };
});