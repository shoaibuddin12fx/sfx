app.controller('skillsCtrl', function($scope, $state, ajaxing, $q) {
    
    
    $scope.a = []; 
    ajaxing.getSkills($q).then(function(data){
        console.log(data);
        $scope.a = data;
        setTimeout(barChart(), 2000);
        
    });

    function barChart(){
        $('.bar-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            itemProgress.css('width', itemProgressWidth);
        });
    };
    
});