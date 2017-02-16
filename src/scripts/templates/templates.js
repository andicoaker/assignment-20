
export function bbcPlaylistTemplate(playlistThumbnails){

	let playlistHtml = playlistThumbnails.map( function(playlistObj){
	return `
		<div class="panel panel-default">

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
// <div class="panel-body">
//   BBC RADIO PLAYLIST
// </div>

export function bbcHomeTemplate(featuredArtistThumbnail){

	let homeHtml = featuredArtistThumbnail.map( function(featuredArtistObj){
	return `
		<div class="panel panel-default">

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
// <div class="panel-body">
//   BBC RADIO - FEATURED ARTIST
// </div>
