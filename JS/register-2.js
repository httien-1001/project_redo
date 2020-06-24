$('#btn-register').click(function () { 
    // alert('hello')
    var get_name=document.getElementById('name');
    var get_phone=document.getElementById('phone');
    var get_mail=document.getElementById('mail');
    var get_pass=document.getElementById('pass');
    var get_pass2=document.getElementById('pass_2');
    var check_phone=/^[0][9|3|8][0-9]{8}$/;
    var check_pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    regex_phone=check_phone.test(get_phone.value);
    regex_pass=check_pass.test(get_pass.value);
    //name
    if (get_name.value==''){
        $('#name').addClass('red-border');
        $('#name_error').removeClass('hidden');
        return false;
    }
    else{
        $('#name').removeClass('red-border');
        $('#name_error').addClass('hidden');
    };
    //phone
    if (get_phone.value==''){
        $('#phone').addClass('red-border');
        $('#phone_error').removeClass('hidden');
        // alert('nhập sđt');
        return false;
    } else if (!regex_phone){
        // alert('nhập phone đúng định dạng')
        $('#phone').addClass('red-border');
        $('#phone_error_2').removeClass('hidden');
        $('#phone_error').addClass('hidden');

        return false;
    } else{
        $('#phone').removeClass('red-border');
        $('#phone_error').addClass('hidden');
    };
    //mail
    if (get_mail.value==''){
        $('#mail').addClass('red-border');
        $('#mail_error').removeClass('hidden');
        return false;
    }
    else{
        $('#mail').removeClass('red-border');
        $('#mail_error').addClass('hidden');
    };
    //password
    if (get_pass.value==''){
        $('#pass').addClass('red-border');
        $('#pass_error').removeClass('hidden');
        // alert('nhập pass');
        return false;
    } else if (!regex_pass){
        // alert('nhập passcó ít nhất 8 kí tự');
        $('#pass').addClass('red-border');
        $('#pass_error_2').removeClass('hidden');
        $('#pass_error').addClass('hidden');

        return false;
    } else{
        $('#phone').removeClass('red-border');
        $('#phone_error').addClass('hidden');
    };
    //pass_2
    if (get_pass2.value != get_pass.value){
        $('#pass_2').addClass('red-border');
        $('#pass2_error').removeClass('hidden');
    } else {
        $('#pass_2').removeClass('red-border');
        $('#pass2_error').addClass('hidden');
        return true;
    }
});