
function bbcPlaylistTemplate(playlistThumbnails){

	let playlistHtml = BBCRadioModel.map( function(playlistObj){
	return `
		<div class="panel panel-default">
      <div class="panel-body">
        BBC RADIO PLAYLIST
      </div>
       <div class="row">
				<div class="col-sm-3 col-md-4 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="${playlistObj.image}">
            <div class="caption">
              <h4><strong>${playlistObj.artist}</strong></h4>
              <p>${playlistObj.title}</p>
            </div>
          </div>
        </div>
			</div>
		</div>`
	}).join('')
	return playlistHtml
}


function bbcHomeTemplate(featuredArtistThumbnail){

	let homeHtml = BBCRadioModel.map( function(featuredArtistObj){
	return `
		<div class="panel panel-default">
      <div class="panel-body">
        BBC RADIO - FEATURED ARTIST
      </div>
      <div class="row">
  			<div class="col-sm-12 col-md-12 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="${featuredArtistObj.image}">
            <div class="caption">
              <h4><strong>${featuredArtistObj.artist}</strong></h4>
              <p>${featuredArtistObj.title}</p>
            </div>
          </div>
        </div>
			</div>
		</div>`
	}).join('')
	return homeHtml
}
