const hello = function (data) {
    console.log(data);
}


const onUserCodeSubmit = function(data) {
	return data;
}


const joinGameLobby = function(data){
	console.log("this is inside data joinGameLobby", data);
	//console.log("this is inside joinGameLobby",io.sockets.adapter.rooms);
	//console.log("this is this", this);
	this.join(data);
}


const updatePlayerProgress = function(data){
	console.log('receiving correct response on back-end')
  	data.playerProgress[data.playerNumber - 1]++;
  	console.log(data.playerProgress);
 	this.emit('update progress', data.playerProgress); 	
}



module.exports = {hello, onUserCodeSubmit, joinMainLobby, joinGameLobby, updatePlayerProgress}
