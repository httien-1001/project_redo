var flag = true;
$('#click-menu').click(function() {
    // alert('hello');
    $('#circle-left-menu').slideToggle();
    console.log(flag);  
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
        
        