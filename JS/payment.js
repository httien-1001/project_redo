$('#btn-pay').click(function () { 
   
    var get_phone=document.getElementById('phone');
  
    var check_phone=/^[0][9|3|8][0-9]{8}$/;
    regex_phone=check_phone.test(get_phone.value);
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
        return true;
    };
});