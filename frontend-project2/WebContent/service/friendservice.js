/**
 * Friend Service
 */
app.factory('FriendService',function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.post("http://localhost:8686/backend-project2/suggesteduserslist")
	}
	friendService.sendFriendRequest=function(toUsername){
		return $http.post("http://localhost:8686/backend-project2/friendrequest/"+toUsername);
	}
	friendService.pendingRequests=function(){
		return $http.get("http://localhost:8686/backend-project2/pendingrequests");
	}
	friendService.updatePendingRequest=function(fromId,status){
		console.log(fromId+''+status);
		return $http.put("http://localhost:8686/backend-project2/updatependingrequest/"+fromId+'/'+status);
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8686/backend-project2/listoffriends");
	}


	
	
	return friendService;
})