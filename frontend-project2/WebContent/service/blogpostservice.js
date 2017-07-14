/*
 * blog post service
 */

app.factory('BlogPostService',function($http){
var blogPostService={}

blogPostService.saveBlog=function(blogPost){
return $http.post("http://localhost:8686/backend-project2/saveblogpost", blogPost)
}

blogPostService.blogsApproved=function(){
	return $http.get("http://localhost:8686/backend-project2/listofblogs/"+1)
	}

blogPostService.blogsWaitingForApproval=function(){
	return $http.get("http://localhost:8686/backend-project2/listofblogs/"+0)
	}

blogPostService.getBlogPost=function(id){
	return $http.get("http://localhost:8686/backend-project2/getblogpost/"+id)
	}

blogPostService.updateBlogPost=function(blogpost){
	return $http.put("http://localhost:8686/backend-project2/updateblogpost",blogpost)
	}

blogPostService.addComment=function(blogComment){
	return $http.post("http://localhost:8686/backend-project2/addblogcomment",blogComment)
	}

blogPostService.getBlogComments=function(blogId){
	return $http.get("http://localhost:8686/backend-project2/getblogcomments/"+blogId)
	}

return blogPostService;
})