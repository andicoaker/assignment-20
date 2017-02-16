console.log('wowow')
import $ from 'jquery';

$.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
	console.log(serverRes)
})

$.getJSON('/proxy?api=http://www.bbc.co.uk/radio2/playlist.json').then(function(serverRes){
	console.log(serverRes)
})

// ************* TEMPLATES *******************

function bbcRadioPlaylistTemplate(listOfPlaylistModels, viewType, dataObj){
	// let viewTypeTitleMap = {
	// 	root: 'All the Congress People',
// 		byState: `Showing Cuties from ${dataObj.state}`,
// 		byGenderAndParty: `Showing ${dataObj.party} Cuties that are ${dataObj.gender}`
// 	}
//
// 	let congressPeopleHtml = listOfCongressFolkModels.map( function(legislatorModel, viewType, dataObj){
// 	return `
// 		<div class="profile-card">
// 			<img src="http://flathash.com/${legislatorModel.get('bioguide_id')}">
// 			<h5>
// 				${legislatorModel.get('first_name')}</br>
// 				<small>${legislatorModel.get('state_name')}</small>
// 			</h5>
// 		</div>`
//
// }

// ************* ROUTER *************

const AppRouter = Backbone.Router.extend({
  initialize: function(){
      console.log('app routing');
      Backbone.history.start()
  }

	routes : {
		'playlist/:a' : 'showRadio2',
		'playlist/:b' : 'showRadio1',
		' " "/:introducing' : 'showHome'
	},

	showHome: function(){
		let bbcRadioCollection = new bbcRadioCollection()
		bbcRadioCollection.fetch().then(function(serverRes){

			let playlistModelsList = bbcRadioCollection.models
			let bigHTMLStr = bbcRadioHomeTemplate(playlistModelsList, 'root', {})
			document.querySelector('#app-container').innerHTML = bigHTMLStr
		})

	},

	showRadio1: function(playlist1Route){
		let bbcRadioColl = new bbcRadioCollection(`playlist=${playlist1Route}`)
		bbcRadioColl.fetch().then(function(serverRes){

			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = bbcRadioPlaylistTemplate(playlistModelsList, 'root', {})
			document.querySelector('#app-container').innerHTML = bigHTMLStr
		})

	}),

	showRadio2: function(playlist1Route){
		let bbcRadioColl = new bbcRadioCollection(`playlist=${playlist2Route}`)
		bbcRadioColl.fetch().then(function(serverRes){

			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = bbcRadioPlaylistTemplate(playlistModelsList, 'root', {})
			document.querySelector('#app-container').innerHTML = bigHTMLStr
		})

	}),

const myApp = new AppRouter()
