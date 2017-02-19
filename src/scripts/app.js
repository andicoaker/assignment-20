// console.log('wowow')
import $ from 'jquery';
import {BBCRadioCollection, BBCRadioModel} from './models/models.js'
import{bbcPlaylistTemplate, bbcHomeTemplate} from './templates/templates.js'

function forEach(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }

}

// ************* ROUTER *************

const AppRouter = Backbone.Router.extend({
  initialize: function(){
		// // QUERY SELECT nav buttons AND ADD EVENT-LISTENER
		let btnEls = document.querySelectorAll('nav button');
		console.log(btnEls);
	  let btnElsArray = [btnEls];
		console.log(btnElsArray);

		forEach(btnElsArray, function (domEl, index){
			domEl.addEventListener('click', function(evt) {
				console.log('event heard');
			  // var clickedBttnEl = evt.target;
				// var route = clickedBttnEl.dataset.route;
				// window.location.hash = route
			})

		})

    Backbone.history.start()
  },

	routes : {
		'radio/2' : 'showRadio2',
		'radio/1' : 'showRadio1',
		'' : 'showHome'
	},

	showHome: function(homeRoute){
		let bbcRadioModel = new BBCRadioModel({singleFetch: true})
		bbcRadioModel.fetch().then(function(serverRes){
			// console.log(bbcRadioModel);
			let bigHTMLStr = bbcHomeTemplate(bbcRadioModel, 'root', {})
			document.querySelector('.row').innerHTML = bigHTMLStr
		})

	},

	showRadio1: function(radioRoute){
		let bbcRadioColl = new BBCRadioCollection(1)
		bbcRadioColl.fetch().then(function(serverRes){
			// console.log(bbcRadioColl);

			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = bbcPlaylistTemplate(playlistModelsList, 'root', {})
			document.querySelector('.row').innerHTML = bigHTMLStr
		})

	},

	showRadio2: function(radioRoute){
		let bbcRadioColl = new BBCRadioCollection(2)
		bbcRadioColl.fetch().then(function(serverRes){

			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = bbcPlaylistTemplate(playlistModelsList, 'root', {})
			document.querySelector('.row').innerHTML = bigHTMLStr
		})

	},

})
const myApp = new AppRouter()
