app.factory("shopcarServer",["baseServer",function(baseServer){
    return{
        getProducts:function(type,url){
            return baseServer.ajax(type,url);
        }
    }
}]);


