angular.module('starter.controllers', [])

.controller('LangCtrl', function($scope, $stateParams, Languages) {
	$scope.langs = Languages.all();
})

.controller('CategoriesCtrl', function($scope, $stateParams, Categories) {
	$scope.cats = Categories.all();
})

.controller('PhrasesCtrl', function($scope, $stateParams, Phrases) {
	  $scope.phrases = Phrases.all();
})

.controller('SearchCtrl', function($scope, $stateParams, Phrases) {
	  $scope.phrases = Phrases.all();
})

.controller('PhraseDetailCtrl', function($scope, $stateParams, Phrases) {
	  $scope.phrase = Phrases.get($stateParams.phraseId);
});
