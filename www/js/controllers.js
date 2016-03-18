angular.module('starter.controllers', [])


.controller('GameCtrl', function($scope, $state, $stateParams, $window) {
    
    $scope.dev_width = $window.innerWidth;
    $scope.dev_height = $window.innerHeight;
    var selected_colors = ["#A5822D","#32A526","#4EA587","#30A51F","#9BA526","#A56413",
        "#A54D16","#C2381E","#C23583"];
    
    // select difficulties
    var allOrientations = ['horizontal','vertical','verticalUp', 
        'diagonal'];
    
	var words, pos = parseInt($stateParams.id) - 1;

	words = ['ALEVIN', 'ANTLING', 'BOARLET', 'BROCKETT', 'BUNNY', 'CALF', 'CUB'];


    // start a word find game
    var gamePuzzle = wordfindgame.create(words, null,
            '#puzzle', '#words', 
            {   height: 8, 
                width: 8, 
                orientations: allOrientations, fillBlanks: true, 
                onComplete: null }, $scope.dev_width, selected_colors);

})
;





