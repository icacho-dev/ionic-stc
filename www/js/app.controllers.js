angular.module('app.controllers', ['ionic'])
.controller('AppCtrl', function ($scope, $location, $q, Storage, LevFactory, $ionicLoading) {
    // ---------------------
    // init
    // ---------------------
    $scope.user = { clave: '10', login: false };
    $scope.list_inmueble = [];
    $scope.dataJson = {};
    $scope.select_lev = null;
    $scope.select_inmueble = null;
    // ---------------------
    // login
    // ---------------------
    $scope.loginData = {};
    $scope.doLogin = function () {
        $scope.refresh();
        //$scope.user.login = true;
    };
    // ---------------------
    // get all data
    // ---------------------
    $scope.refresh = function () {
        $scope.select_inmueble = null;
        $scope.select_lev = null;
        // ----------------------------------
        $ionicLoading.show({ template: 'Cargando Inmuebles ...' });
        Storage.all($scope.user).then(
            function (result) {
                console.info('------------------------ >> ');
                console.info(result);
                var obj = result.obj;
                $location.url('/app/dashboard');
                //------------------------------------
                $scope.list_inmueble = result.obj.list_inmuebles;
                $scope.user = result.obj.user;
                //------------------------------------
                $scope.type = result.type;
                $scope.msg = result.msg;
                $ionicLoading.hide();
            },
            function (reason) {
                $ionicLoading.hide();
                alert(reason);
            }
        );
    };
    // ---------------------
    // select item data
    // ---------------------
    $scope.selectLev = function (inm, lev) {
        //---------
        if ($scope.select_inmueble != null && $scope.select_lev != null) {
            $scope.save();
        }
        //---------
        $scope.select_inmueble = inm;
        $scope.select_lev = lev;
        $ionicLoading.show({ template: 'Loading...' });
        Storage.get($scope.levActive(), lev).then(
            function (result) {
                $scope.dataJson = result.dataJson;
                $location.url('/app/' + lev.type + '/1');
                $ionicLoading.hide();
            },
            function (reason) {
                alert(reason);
            }
        );
    };
    // ---------------------
    // save item data 
    // ---------------------
    $scope.save = function (url) {
        $ionicLoading.show({ template: 'Guardando Levantamiento...' });
        Storage.save($scope.levActive(), $scope.dataJson).then(
            function (result) {
                LevFactory.validate($scope.select_lev, $scope.dataJson, $scope.menuRight);
                // ---------------------
                if (url != '' && url !== undefined) { $location.url(url); };
                $ionicLoading.hide();
            },
            function (reason) {
                $ionicLoading.hide();
                alert(reason);
            }
        );
    }
    // ---------------------
    $scope.$on('save', function (event, url) { $scope.save(url); })
    // ---------------------
    // go Page
    // ---------------------
    $scope.goPage = function (page) {      
        var url = '/app/' + $scope.select_lev.type + '/' + page;
        $scope.save(url);
    };
    // ---------------------
    $scope.$on('goPage', function (event, page) { $scope.goPage(page); })
    // ---------------------
    // active interfase
    // ---------------------
    $scope.$on('setMenu', function (event, menuRight) {
        $scope.menuRight = menuRight;
        LevFactory.validate($scope.select_lev, $scope.dataJson, $scope.menuRight);
    });

    $scope.$on('validateLev', function (event) {
        LevFactory.validate($scope.select_lev, $scope.dataJson, $scope.menuRight);
    });

    // ---------------------
    // lev activo 
    // ---------------------
    $scope.levActive = function () {
        return {
            user: $scope.user.clave,
            inm: $scope.select_inmueble.clave,
            lev: $scope.select_lev.clave
        };
    };
    // ---------------------
})
// ------------------------------------
.controller('LevCtrl', function ($scope, $location) {
    console.info('LevCtrl');
    // ---------------------
    $scope.data = {};
    // ---------------------
    $scope.saveLev = function (url) { $scope.$emit('save', url); };
    // ---------------------

    /*
    $scope.$on('getPicture', function (event) {
        $scope.$emit('save', { data: $scope.data, url: '' });
    });*/
    // ---------------------
    
})
// ------------------------------------
.controller('ImagesCtrl', function ($scope, $location, $q) {

    $scope.data = {
        items: [
          'http://www.conexionenlinea-unioncampesina.com/noticias/images/stories/secciones/municipios/nuevo-juzgado-zacatlan.jpg',
          'http://m1.paperblog.com/i/177/1778217/entrada-imposible-al-juzgado-social-talavera-L-h79QLe.jpeg',
          'http://www.gobiernodecanarias.org/justicia/imagenes/Arona/1.png',
          'http://www.conexionenlinea-unioncampesina.com/noticias/images/stories/secciones/municipios/nuevo-juzgado-zacatlan.jpg?s'
        ]
    }
})
;