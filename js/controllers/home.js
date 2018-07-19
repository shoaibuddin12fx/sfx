app.controller('homeCtrl', function($scope, $state, ajaxing, $q) {
    
    $scope.a = []; 
    ajaxing.getAbout($q).then(function(data){
        console.log(data);
        $scope.a = data;
    })
    
});