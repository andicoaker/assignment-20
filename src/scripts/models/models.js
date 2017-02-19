
export const BBCRadioModel = Backbone.Model.extend({
	initialize: function(optionsObj){
		this._singleFetch = optionsObj.singleFetch
	},

	parse: function(rawJSONRes){
		if (this._singleFetch === true ){
			return rawJSONRes.playlist.introducing[0]
		} else {
			return rawJSONRes
		}
	},

	url: `/proxy?api=http://www.bbc.co.uk/radio1/playlist.json`,

	_singleFetch: false

})


export const BBCRadioCollection = Backbone.Collection.extend({
	initialize: function(radioNum){
			this.url = `/proxy?api=http://www.bbc.co.uk/radio${radioNum}/playlist.json`
	},

	parse: function(rawServerRes){
		// console.log('parsing Response!!')
		return rawServerRes.playlist.a
	},

	url: 'http://www.bbc.co.uk/?callback=?',

	model: BBCRadioModel
})
