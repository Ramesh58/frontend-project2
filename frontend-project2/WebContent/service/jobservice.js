/**
 * Job service
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8686/backend-project2/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8686/backend-project2/getalljobs")
	}
	
	return jobService;
})