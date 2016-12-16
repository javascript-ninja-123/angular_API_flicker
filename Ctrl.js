app.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
})
app.controller('oneController', function($scope,$timeout,$http) {
	$scope.searchFlicker = searchFlicker;

     $scope.results = [];
 	 $scope.showIt = false;	
 	 $scope.saying = "We found result for ";
 	 $scope.ActiveAnimation = false;

	function searchFlicker(){
	
	$http({
	method:"GET",
	url:"https://api.flickr.com/services/rest",
	params : {
		    method: 'flickr.photos.search',
		    api_key: "9633a5c48e046413dce71b7289a95f58",
		    text:$scope.keyword,
		    format: 'json',
		    nojsoncallback: 1
		}
	}).success(function(data){
		$scope.showIt = true;
		$scope.showText = true;
		$scope.results = data;
		$timeout(function(){
			$scope.showText = false;

		},1500);
	}).error(function(error){
		$scope.saying = "Our server crashed";
		console.error(error);
	});

};
///////////
// vm = this;
// vm.getAllTasks = function(){
// 	var defer = $q.defer();
// 	$http.get()
// 	.success(function(res){
// 		defer.resolve(res);
// 	})
// 	.error(function(err, status){
// 		defer.reject(err);
// 	})
// return defer.promise;
// }

// vm.createTask = function(task){
// 	var defer = $q.defer();
// 	$http.post()

// 	return defer.promise;
// }



/////////
});