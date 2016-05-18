(function(){
    
    angular.module('teams')
        .component('sportsComponent', {
            templateUrl: 'app/components/sports/sports.html',
            controller: SportsController
        })
        
        function SportsController(){
            var $ctrl = this;
            $ctrl.test = 'Hello testing'
        }
    
}())