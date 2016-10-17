function keySender(){
    return function(scope, element, attrs){
        element.bind('keydown keypress', function(event){
            if(event.which === 13){
                scope.$apply(function(){
                    scope.$eval(attrs.keySender)
                })
                event.preventDefault();
            }
        })
    };
};

angular.module('angularFirebase')
    .directive('keySender', [keySender])