app.controller('experienceCtrl', function($scope, $state, ajaxing, $q) {
    
    
    $scope.a = []; 
    ajaxing.getExperience($q).then(function(data){
        console.log(data);
        $scope.a = data;
    })
    
});