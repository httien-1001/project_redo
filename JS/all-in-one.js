var flag = true;
$('#click-menu').click(function() {
    // alert('hello');
    $('#circle-left-menu').slideToggle();
    console.log(flag);  
});
$(window).scroll(function () { 
    var h= $(window).scrollTop();
    console.log(h);
    if(h>500){
       $('.back-to-top').fadeIn(500);
       $('.back-to-top').click(function () { 
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; //For rest
           
       });
    //    $('#pro_1').fadeIn();
    } else {
        $('.back-to-top').fadeOut(500);
    };
    if(h>900){
        $('#pro_2').fadeIn();
    
    };
    if(h>1500){
        $('#pro_3').fadeIn(5000);
    
    }
});
function show() {
    $('#table-search-result').removeClass('hidden');
}
function hide() {
    
    
        $('#table-search-result').addClass('hidden');
       
   

};
$('.btn_1').click(function () { 
    alert('hello');
    $('#content_1_demo').slideToggle(500);
    // $('#content_2_demo').slideUp(500);
    // $('#content_3_demo').slideUp(500);
});
$('.btn_2').click(function (e) { 
    $('#content_1_demo').slideUp(500);
    $('#content_2_demo').slideToggle(500);
    $('#content_3_demo').slideUp(500);
    
});
$('.btn_3').click(function (e) { 
    $('#content_1_demo').slideUp(500)
    $('#content_2_demo').slideUp(500);
    $('#content_3_demo').slideToggle(500);
    
});
var app = angular.module('demoApp',[]);
		app.controller('DemoCtrl',function($scope,$http){
            $http.get('JSON/data.json').then(function(res){
                $scope.list_iphone= res.data
                
            });
            
            $http.get('JSON/data2.json').then(function(res){
                $scope.list_samsung= res.data
                
            });

            $http.get('JSON/iphone2.json').then(function(res){
                $scope.list_product= res.data
                
            });
            $http.get('JSON/iphone_8.json').then(function(res){
                $scope.iphone_8= res.data
                
            });
            $http.get('JSON/iphone_x.json').then(function(res){
                $scope.list_product_x= res.data
                
            });
            $http.get('JSON/iphone_11.json').then(function(res){
                $scope.product_11= res.data
                
            });
            
            
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:7,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:4,
                    loop:false,
                    // nav:true
                }
            }
        })
        
        $('#hochiminh').click(function () { 
    
            $('#hochiminh_container').slideToggle();
           
        });

        $('#hanoi').click(function () { 
    
            $('#hanoi_container').slideToggle(500);
           
        });
        
        