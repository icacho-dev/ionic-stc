angular.module('app.controllers.lev', ['ionic'])
//-------------------------------------
.controller('LevInfraSimpleCtrl', function ($scope, $location) {
	console.info('LevInfraSimpleCtrl');
	// ------------------
	// --- inicializa el menu !! 
	// ------------------
	$scope.menuRight = [
      {
      	page: '1',
      	title: '1 Datos Generales',
      	ready: false,
      	msg: 'Pendiente',
      },
    {
      page: '2_1',
      title: '2 Datos del Inmueble',
      ready: false,
      msg: 'Pendiente',
      divider: true
    },
	  {
	  	page: '2_1',
	  	title: '2.1 Ubicacion',
	  	ready: true,
	  	msg: 'Pendiente'
	  },
    {
      page: '2_2',
      title: '2.2 Servicios Públicos',
      ready: false,
      msg: 'Pendiente'
    },
    {
      page: '3_1',
      title: '3 Características del Inmueble',
      ready: false,
      msg: 'Pendiente',
      divider: true
    },
    {
      page: '3_1',
      title: '3.1 Físicas',
      ready: false,
      msg: 'Pendiente'
    },
    {
      page: '3_2',
      title: '3.2 Acreditación de la propiedad',
      ready: false,
      msg: 'Pendiente'
    },
    {
      page: '3_3',
      title: '3.3 Planos del Inmueble',
      ready: false,
      msg: 'Pendiente'
    },
    {
      page: '3_4',
      title: '3.4 Obra exterior',
      ready: false,
      msg: 'Pendiente'
    },
    {
      page: '3_5',
      title: '3.5 Conjunto',
      ready: false,
      msg: 'Pendiente'
    },
    {
      page: '4_1',
      title: '4 Equipo',
      ready: false,
      msg: 'Pendiente',
      divider: true
    },
    {
      page: '4_1',
      title: '4.1 Equipo propio del inmueble',
      ready: false,
      msg: 'Pendiente'
    }
	];
	
	$scope.$emit('setMenu', $scope.menuRight);
})
//-------------------------------------
.controller('LevInfraInmueble', function ($scope, $location) {
    console.info('LevInfraInmueble');
    // ------------------
    // --- inicializa el menu !! 
    // ------------------
    $scope.menuRight = [
      {
          page: '1',
          title: '5 Mobiliario',
          ready: false,
          msg: 'Pendiente',
          divider: true
      },
      {
        page: '1',
        title: '5.1 Datos del Mobiliario',
        ready: false,
        msg: 'Pendiente'
      }
    ];

    $scope.$emit('setMenu', $scope.menuRight);
})
//-------------------------------------
.controller('LevInfraFull', function ($scope, $location) {
    console.info('LevInfraFull');
    // ------------------
    // --- inicializa el menu !! 
    // ------------------
    $scope.menuRight = [
      {
          page: '1',
          title: '1 Descripción del Inmueble',
          ready: false,
          msg: 'Pendiente',
          divider: true
      },
      {
          page: '1',
          title: '1.1 Descripción general del Inmueble',
          ready: false,
          msg: 'Pendiente'
      },
      {
          page: '1_2',
          title: '1.2 Distribución arquitectónica, por cuerpos y niveles',
          ready: false,
          msg: 'Pendiente'
      },
      {
          page: '2_1',
          title: '2 Descripción de los elementos de construcción',
          ready: false,
          msg: 'Pendiente',
          divider: true
      },
      {
          page: '2_1',
          title: '2.1 Estructura',
          ready: false,
          msg: 'Pendiente'
      },
      {
          page: '3_1',
          title: '3 Referente a la implementación del NSJP',
          ready: false,
          msg: 'Pendiente',
          divider: true
      },
      {
          page: '3_1',
          title: '3.1 Referente a la implementación del NSJP',
          ready: false,
          msg: 'Pendiente'
      }
    ];

    $scope.$emit('setMenu', $scope.menuRight);
})
//-------------------------------------
.controller('LevTicSimple', function ($scope, InmuebleFactory) {
    console.info('LevTicSimple');
    // ------------------
    // --- inicializa el menu !! 
    // ------------------
    $scope.menuRight = [
      {
          page: '1',
          title: "1 TIC's",
          ready: false,
          msg: 'Pendiente',
      },

    ];

    $scope.$emit('setMenu', $scope.menuRight);
})
//-------------------------------------
.controller('LevTicAdmin', function ($scope, InmuebleFactory) {
    console.info('LevTicAdmin');
    // ------------------
    // --- inicializa el menu !! 
    // ------------------
    $scope.menuRight = [
      {
          page: '1',
          title: "1 Admin. TIC's",
          ready: false,
          msg: 'Pendiente',
      },
    ];

    $scope.$emit('setMenu', $scope.menuRight);
})
//-------------------------------------
.controller('LevSP', function ($scope, InmuebleFactory) {
    console.info('LevSP');
    // ------------------
    // --- inicializa el menu !! 
    // ------------------
    $scope.menuRight = [
      {
          page: '1',
          title: '1 Servicio Peiciales',
          ready: false,
          msg: 'Pendiente',
      },
    ];

    $scope.$emit('setMenu', $scope.menuRight);
})
//-------------------------------------

;