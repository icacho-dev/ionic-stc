angular.module('app.directives', [])

.directive('cameraItem', function ($compile, Camera, Storage) { // borrar anterio cuando es una sola imagen !!! 
	return {
		restrict: 'AE',
		scope: {
			ngBind: '=ngModel',
			levActive: '=',
		},
		replace: true,
		require: 'ngModel',
		controller: function ($scope) {

			$scope.items = [];
			if (Array.isArray($scope.ngBind)) {
				$scope.items = $scope.ngBind;
			} else if (typeof ($scope.ngBind) === 'object') {
				$scope.items = [$scope.ngBind];
			}

			$scope.getPicture = function () {
				Camera.getPicture().then(function (url) {
					Storage.move($scope.levActive , url).then(function (url) {
						if (Array.isArray($scope.ngBind)) {							
							$scope.items.push({ src: url, desc: '' });
							$scope.ngBind = $scope.items;
							$scope.$emit('getPicture');
						} else if (typeof ($scope.ngBind) === 'object') {
							if ($scope.ngBind.src != undefined) {
								Storage.delete($scope.ngBind.src).then(function () {}, function (reason) { alert(reason); });
							}
							$scope.ngBind = { src: url, desc: '' };
							$scope.items = [$scope.ngBind];
							$scope.$emit('getPicture');
						}
					}, function (reason) { alert(reason); });
				}, function (err) { alert(err); });
			};

			$scope.delete = function (item) {
				if (Array.isArray($scope.ngBind)) {
					for (var i = 0, len = $scope.items.length; i < len; i++) {
						if (item == $scope.items[i]) {
							Storage.delete(item.src).then(function () {
								$scope.items.splice(i, 1);
								$scope.ngBind = $scope.items;
								$scope.$emit('getPicture');
							}, function (reason) { alert(reason);});
							break;
						}
					}
				} else if (typeof ($scope.ngBind) === 'object') {
					Storage.delete(item.src).then(function () {
						$scope.items = [];
						$scope.ngBind = {};
						$scope.$emit('getPicture');
					}, function (reason) { alert(reason); });
				}
			};
		},
		templateUrl: 'templates/app/cameraItem.html',
	};
})

;