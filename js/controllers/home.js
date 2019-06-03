app.controller('homeCtrl', function($scope, $state, ajaxing, $q) {
    
    $scope.a = []; 
    ajaxing.getAbout($q).then(function(data){
        console.log(data);
        $scope.a = data;
    })

    $scope.b = [];
    ajaxing.getSkillsDesc($q).then(function(data){
        console.log(data);
        $scope.b = data;
    })
    
});