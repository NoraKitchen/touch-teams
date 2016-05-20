(function () {

    angular.module('teams')
        .component('teamComponent', {
            templateUrl: 'app/components/team/team.html',
            controller: TeamController
        })

    function TeamController($state, Models) {
        var $ctrl = this;

        $ctrl.sport = $state.params.sport;
        $ctrl.league = $state.params.league;
        $ctrl.team = $state.params.team;

        Models.Team.findAll({ where: { name: $state.params.team } }).then(function (team) {
            $ctrl.team = team[0];
            Models.Player.findAll({ where: { team: $ctrl.team.id } }).then(function (players) {
                $ctrl.players = players;
            })
        })

        $ctrl.addPlayer = function (player) {
            player.team = $ctrl.team.id;
            Models.Player.create(player);
            $ctrl.newPlayer = {}
        }



    }


} ())