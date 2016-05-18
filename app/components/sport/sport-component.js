(function(){
    
    angular.module('teams')
        .component('sportComponent', {
            templateUrl: 'app/components/sport/sport.html',
            controller: SportController
        })
        
        function SportController($state){
            var $ctrl = this;
            $ctrl.test = 'Hello testing'
            console.log($state.params)
            
            $ctrl.sport = $state.params.sport;
            
        }
    
}())