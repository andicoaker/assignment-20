
export function bbcPlaylistTemplate(playlistThumbnails){

	let playlistHtml = playlistThumbnails.map( function(playlistObj){
	return `
		<div class="panel panel-default">

       <div class="row">
				<div class="col-sm-3 col-md-4 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="${playlistObj.get('image')}">
            <div class="caption">
              <h4><strong>${playlistObj.attribute.artist}</strong></h4>
              <p>${playlistObj.attributes.title}</p>
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

export function bbcHomeTemplate(featuredArtistModel){
  console.log(featuredArtistModel);
	return `
		<div class="panel panel-default">

      <div class="row">
  			<div class="col-sm-12 col-md-12 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="${featuredArtistModel.attributes.image}">
            <div class="caption">
              <h4><strong>${featuredArtistModel.attributes.artist}</strong></h4>
              <p>${featuredArtistModel.attributes.title}</p>
            </div>
          </div>
        </div>
			</div>
		</div>`

}
// <div class="panel-body">
//   BBC RADIO - FEATURED ARTIST
// </div>


navTemplate(currentRoute){

}
