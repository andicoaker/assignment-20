console.log('wowow')
import $ from 'jquery';
import {BBCRadioCollection, BBCRadioModel} from './models/models.js'
import{bbcPlaylistTemplate, bbcHomeTemplate} from './templates/templates.js'

//
// $.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
// 	console.log(serverRes)
// })
//
// $.getJSON('/proxy?api=http://www.bbc.co.uk/radio2/playlist.json').then(function(serverRes){
// 	console.log(serverRes)
// })


// ************* ROUTER *************

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    console.log('app routing');
    Backbone.history.start()
  },

	routes : {
		'radio/2' : 'showRadio2',
		'radio/1' : 'showRadio1',
		'' : 'showHome'
	},

	showHome: function(){
		let bbcRadioModel = new BBCRadioModel({singleFetch: true})
		bbcRadioModel.fetch().then(function(serverRes){
			console.log(bbcRadioModel);
			let bigHTMLStr = bbcHomeTemplate(bbcRadioModel, 'root', {})
			document.querySelector('#app-container').innerHTML = bigHTMLStr
		})

	},

	showRadio1: function(radioRoute){
		let bbcRadioColl = new BBCRadioCollection(1)
		bbcRadioColl.fetch().then(function(serverRes){
			console.log(bbcRadioColl);

			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = bbcPlaylistTemplate(playlistModelsList, 'root', {})
			document.querySelector('#app-container').innerHTML = bigHTMLStr
		})

	},

	showRadio2: function(radioRoute){
		let bbcRadioColl = new BBCRadioCollection(2)
		bbcRadioColl.fetch().then(function(serverRes){

			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = bbcRadioPlaylistTemplate(playlistModelsList, 'root', {})
			document.querySelector('#app-container').innerHTML = bigHTMLStr
		})

	},

})
const myApp = new AppRouter()
