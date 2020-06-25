var flag = true;
$('#click-menu').click(function() {
    // alert('hello');
    $('#circle-left-menu').slideToggle();
    console.log(flag);  
});
$(window).scroll(function () { 
    var h= $(window).scrollTop();
    var height=$(window).scrollTop();
    console.log(h);
    if(h>500){
       $('.back-to-top').fadeIn(500);
       $('.back-to-top').click(function () { 
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; //For rest
           
       });
    } else {
        $('.back-to-top').fadeOut(500);
    };
});
var app = angular.module('demoApp',[]);
		app.controller('DemoCtrl',function($scope,$http){
            $http.get('JSON/data.json').then(function(res){
                $scope.list_iphone= res.data
                
            });
            $http.get('JSON/data2.json').then(function(res){
                $scope.list_samsung= res.data
                
            });

            $scope.tien="hello";
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
        
        