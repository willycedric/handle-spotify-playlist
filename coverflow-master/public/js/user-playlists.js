var Playlist = (function(){

		var options = {
          url: 'https://api.spotify.com/v1/users/115598596/playlists/',
          type: 'json'
        };
        var getUserPlaylists= function(data){
	         return $.ajax({
	        	type:'GET',
	        	url:options.url,
	        	headers: { 'Authorization': 'Bearer ' + data.access_token },
	        	dataType:options.type});
       };
       return{
     	 getUserPlaylists:getUserPlaylists
     };
})();