app.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
})
app.controller('oneController', function($scope,$timeout,$http) {
	$scope.searchFlicker = searchFlicker;

     $scope.results = [];
 	 $scope.showIt = false;	

	function searchFlicker(){
	$scope.showIt = true;
	$scope.showText = true;
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
		$scope.results = data;
		$timeout(function(){
			$scope.showText = false;

		},1500);
	}).error(function(error){
		console.error(error);
	});

};
});