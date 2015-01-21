angular.module('starter.services', [])

.factory('Languages', function() {
  // Might use a resource here that returns a JSON array

  var langs = [
    { id: 0, name: 'English' },
    { id: 1, name: 'French' },
    { id: 2, name: 'Bulgarian' },
    { id: 3, name: 'Russian' }
  ];

  return {
    all: function() {
      return langs;
    },
    get: function(langId) {
      // Simple index lookup
    	var oldLangId = window.localStorage['lang'];
    	if(typeof(oldLangId) !== 'undefined' && oldLangId > -1){
    		langs[oldLangId].selClass = '';
    	}
    	window.localStorage['lang'] = langId;
    	langs[langId].selClass = 'select-royal';
    	return langs[langId];
    },
    selected: function(){
    	return window.localStorage['lang']
    } 
  }
})

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  var categories = [
    { id: 0, name: 'Holiday' },
    { id: 1, name: 'Numbers' },
    { id: 2, name: 'Movies' },
    { id: 3, name: 'Music' }
  ];

  return {
    all: function() {
      return categories;
    },
    get: function(categoryId) {
      // Simple index lookup
    	window.localStorage['category'] = categoryId;
    	return categories[categoryId];
    },
    selected: function(){
    	return window.localStorage['category']
    } 
  }
})

.factory('Phrases', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var phrases = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return phrases;
    },
    get: function(phraseId) {
      // Simple index lookup
    	var oldId = window.localStorage['phrase'];
    	if(typeof(oldId) !== 'undefined' && oldId > -1){
    		phrases[oldId].selClass = '';
    	}
    	window.localStorage['phrase'] = phraseId;
    	phrases[phraseId].selClass = 'select-royal';
    	return phrases[phraseId];
    },
    selected: function(){
    	return window.localStorage['phrase']
    }
  }
});

