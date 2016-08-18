tweetApp.controller('homeController',function($scope, $http,$location,$mdMedia,$mdDialog){


$scope.homePage = true;


$scope.$watch(function(){
	return $location.path();

},
	function(newPath){
		$scope.trump="";
		$scope.hillary="";
		$scope.home="";

		console.log("The path changed, its now "+newPath);
			if(newPath=="/trump"){
				$scope.trump="active";
			}else if(newPath=="/hillary"){
				$scope.hillary="active";
				}else if(newPath=="/"){
					$scope.home="active";
				}
			
			
	}

); //end of watch


	$scope.isActive = function(view){
		console.log($location.path);
		return (view === $location.path());
	}


 $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Trump or Hillary, pick your poison')
      .textContent('Follow the bourgeoisie')
      .placeholder('Enter the elites name here')
      .ariaLabel('Dog name')
     
      .targetEvent(ev)
      .ok('May the odds be ever in your favor')
      .cancel('BERNIE BERNIE');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided on ' + result + '. May the odds be ever in your favor.';
    }, function() {
      $scope.status = 'Good choice!';
    });
  };




}); //end of controller










