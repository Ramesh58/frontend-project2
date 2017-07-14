app.factory('UserService',function($http)
{
    var userService={}

    userService.registerUser=function(user)
    {
    	console.log("registration start")
        return $http.post("http://localhost:8686/backend-project2/register",user)
        console.log("Registration done")
    }
    
    userService.login=function(user)
    {
        return $http.post("http://localhost:8686/backend-project2/login",user)
    }
    
    userService.logout=function(user)
    {
        return $http.get("http://localhost:8686/backend-project2/logout")
    }
    
return userService;
})