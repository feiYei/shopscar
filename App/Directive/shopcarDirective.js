app.directive('shopcarItem', function () {
   return {
        restrict:'EA',
        scope:{
            item:'=item',
            index:'@index'
        },
       templateUrl:'App/Views/temp/_shopcar.html',
       controller:'shopcarItemController'
   }
});







