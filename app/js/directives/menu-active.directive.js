function menuActive($location){
    return {
        link: function (scope, element, attrs){
                    scope.isActive = function (viewLocation) {
                    var active = (viewLocation === $location.path());
                    return active;
                    };
                }
            }
};

angular.module('angularFirebase')
    .directive('menuActive', ['$location', menuActive])