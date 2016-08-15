
//Initialize app
var tweetApp=angular.module('tweetApp',['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return {
		// return two properties
		restrict: 'E', //E= Element, A=attribute, C=Class,M=comment
		template: "Hello, Summer you're so cool"
	}

}); //end of directive
tweetApp.directive('helloAttrib', function(){
	return {
		// return two properties
		restrict:'A',
		template:"<li>oH hai summer</li><li>{{test}}</li>"
	}

}); //end of directive helloAttrib

tweetApp.directive('helloClass', function(){
	return {
		// return two properties
		restrict:'C',
		template:"Hello summer in CLASS"
	}

}); //end of directive helloClass

tweetApp.directive('turnMeBlue', function(){
	return {
		// return two properties
	link:function($scope,element,attrib){
		element.bind('mouseenter',function(){
			//change color based on the input. 
		element.css('color',$scope.myColor);
		console.log(element);

	})
		element.bind('mouseleave',function(){
		element.css('color','black');
		});
	}
}
}); //end of directive helloClass


