'use strict';

var app = angular.module('rainApp', []);
app.controller('rainController', ['$scope', function ($scope) {
// number of drops created.
$scope.nbDrop = 858;

// function to generate a random number range.
$scope.randRange = function( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
$scope.createRain = function() {
	for(var i=1;i<$scope.nbDrop;i++) {
	var dropLeft = $scope.randRange(0,1600);
	var dropTop = $scope.randRange(-1000,1400);
  var el = document.createElement('div');
  el.className = "drop";
  el.id = "drop" + i;
	document.getElementsByClassName('rain')[0].appendChild(el);
	document.getElementById('drop'+i).style.left =  dropLeft + "px";
	document.getElementById('drop'+i).style.top = dropTop + "px";
	 }
  }

$scope.stopRain = function() {
 var el = document.getElementsByClassName('drop');
 if (el.length) {
   for(var i =0; i<$scope.nbDrop-1; i++) {
    el[0].parentNode.removeChild(el[0]);
   }
 }
}
 }
]);
