//1. 서버 모듈 가져오기
var http = require("http");
var url = require("url");
var qs = require("querystring");

//2. 서버 생성하기.
var server = http.createServer(function(request, response){
	console.log(request);

	var parsedUrl = url.parse(request.url);
	console.log(parsedUrl);

	var parsedQuery = qs.parse(parsedUrl.query);
	console.log(parsedQuery);

	response.end("aaa's value is  "+ parsedQuery.aaa);
});

// 3. 서버 실행하기 -> port : 8090

server.listen(8089, function(){
	console.log("server is running....")
});

// var fibonacci = {
// 	count : 100, 
// 	run : function(){
// 		result = "";
// 		prev =0;
// 		result += prev + ",";
// 		next =1;
// 		result += next + ",";
		
// 		for(i =0; i<this.count; i++){
// 			sum = prev+next;
// 			result += sum+",";
// 			prev = next;
// 			next = sum;
// 		}
// 		return result;
// 	}
// };