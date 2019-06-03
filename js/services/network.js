var apiurl = '/bitrix/components/askara/ledger/templates/.default/post.php'; 
app.factory('ajaxing', function($http, $timeout) {
    
    
    return{
        getAbout:function($q){
            var q = $q.defer();
            $.getJSON("data/about.json", function( data ) {
                q.resolve(data);
            });
            return q.promise;
        },
        getExperience:function($q){
            var q = $q.defer();
            $.getJSON("data/experience.json", function( data ) {
                q.resolve(data);
            });
            return q.promise;
        },
        getEducation:function($q){
            var q = $q.defer();
            $.getJSON("data/education.json", function( data ) {
                q.resolve(data);
            });
            return q.promise;
        },
        getSkills:function($q){
            var q = $q.defer();
            $.getJSON("data/skills.json", function( data ) {
                q.resolve(data);
            });
            return q.promise;
        },
        getSkillsDesc:function($q){
            var q = $q.defer();
            $.getJSON("data/skills_desc.json", function( data ) {
                q.resolve(data);
            });
            return q.promise;
        },
        getProjects:function($q){
            var q = $q.defer();
            $.getJSON("data/projects.json", function( data ) {
                q.resolve(data);
            });
            return q.promise;
        },


    }
});