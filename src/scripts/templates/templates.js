
export function bbcPlaylistTemplate(playlistThumbnails){

	let playlistHtml = playlistThumbnails.map( function(playlistObj){
	return `

				<div class="col-sm-3 col-md-4 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="${playlistObj.get('image')}">
            <div class="caption">
              <h4><strong>${playlistObj.get('artist')}</strong></h4>
              <p>${playlistObj.get('title')}</p>
            </div>
          </div>
        </div>`

	}).join('')
	return playlistHtml
}
// <div class="panel-body">
//   BBC RADIO PLAYLIST
// </div>

export function bbcHomeTemplate(featuredArtistModel){
  // console.log(featuredArtistModel);
	return `
        <div class="panel-body">
          <h3>FEATURED ARTIST</h3>
        </div>
  			<div class="col-md-6 col-md-offset-3 thumbnail-container">
          <div class="thumbnail">
            <img src="${featuredArtistModel.get('image')}">
            <div class="caption">
              <h4><strong>${featuredArtistModel.get('artist')}</strong></h4>
              <p>${featuredArtistModel.get('title')}</p>
            </div>
          </div>
        </div>`

}
