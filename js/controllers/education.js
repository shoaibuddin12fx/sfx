app.controller('educationCtrl', function($scope, $state, ajaxing, $q) {
    
    
    $scope.a = []; 
    ajaxing.getEducation($q).then(function(data){
        console.log(data);
        $scope.a = data;
    })
    
});