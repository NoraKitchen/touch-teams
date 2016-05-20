(function () {

    angular.module('teams')
        .component('playerComponent', {
            templateUrl: 'app/components/player/player.html',
            controller: playerController
        })

    function playerController($state, Models) {
        var $ctrl = this;

        $ctrl.sport = $state.params.sport;
        $ctrl.league = $state.params.league;
        $ctrl.team = $state.params.team;
        $ctrl.player = $state.params.player;

        Models.Player.findAll({ where: { name: $state.params.player } }).then(function (player) {
            $ctrl.player = player[0];
        })
    }
    
} ())