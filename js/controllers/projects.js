app.controller('projectsCtrl', function($scope, $state, ajaxing, $q) {
    
    $scope.types = [];
    $scope.a = [];
    $scope.b = [];


    ajaxing.getProjects($q).then(function(data){
        console.log(data);
        $scope.a = data.projects;
        $scope.b = data.types;


        // angular.forEach(data.types, function(value, key){
        //     $scope.types.push(value["name"])
        // });
        // console.log($scope.types);
        
    });

    $scope.filterSelection = function(c) {
        
        console.log(c);
        if(!c.checked){

            var index = $scope.types.indexOf(c.name);
            if (index !== -1) {
                $scope.types.splice(index, 1);
            }

        }else{

            $scope.types.push(c.name);

        }


    }
    //$scope.filterSelection("all") // Execute the function and show all columns

    
});