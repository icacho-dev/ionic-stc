angular.module('app.factories', ['app.factories.lev'])
.factory('Camera', function ($q, $ionicPlatform) {
    return {
        getPicture: function () {
            var q = $q.defer();
            var options = {
                quality: 50,
                targetWidth: 1000,
                targetHeight: 1000,
                destinationType: Camera.DestinationType.FILE_URI,
                encodingType: Camera.EncodingType.JPEG,
                sourceType: Camera.PictureSourceType.CAMERA
            };

            try {
                $ionicPlatform.ready(function () {
                    if (!navigator.camera) {
                        q.resolve(null);
                        return q.promise;
                    }
                    navigator.camera.getPicture(function (result) {
                        q.resolve(result);
                    }, function (err) {
                        q.reject(err);
                    }, options);
                });
            } catch (err) { q.reject('TRY loadFromStorage: ' + err.message) }
            return q.promise;
        }
    }
})
// -----------------------------------
.factory('Storage', function ($q, $window, $ionicPlatform, LevFactory) {
    //var fileNameOff = 'list-off.txt';
    var fileNameOn = 'list-on.txt';
    var assetURL = "http://setec.pcagerenciamiento.com/Levantamiento/";
    var key = 'clave';
    var dirUserEntry = null;
    // ------------------------------


    // ------------------------------
    var loadFromStorage = function (user) { // -- ok -- crea dir de user -- descarga list_inmuebles
        var q = $q.defer();
        try {
            $ionicPlatform.ready(function () {

                var data = {"list_inmuebles":[{"nombre":"POLICIA ESTATAL","tipo_inmueble":"OFICINAS CENTRALES","clave":15333,"ubicacion":{"Domicilio":"AV. AGUASCALIENTES OTE S/N EX EJIDO OJOCALIENTE","Municipio":"AGUASCALIENTES","Estado":"AGUASCALIENTES","ClaveMunicipio":"001","ClaveEstado":"01"},"list_levantamiento_inm":[{"title":"Arquitectónico","clave":1,"type":"infra_simple","list_comentarios":[{"Fecha":"12/7/2014","Comentario":"Comentario Levantamiento"}]},{"title":"Arquitectónico II","clave":4,"type":"infra_imueble","list_comentarios":[{"Fecha":"12/7/2014","Comentario":"Comentario Levantamiento"}]},{"title":"INMUEBLE - ETAPA 3","clave":5,"type":"infra_full","list_comentarios":[{"Fecha":"12/7/2014","Comentario":"Comentario Levantamiento"}]}],"list_levantamiento_tics":[],"list_levantamiento_sp":[]},{"nombre":"EDIFICIO SEDE","tipo_inmueble":"CENTRAL","clave":15334,"ubicacion":{"Domicilio":"AV. HEROE DE NACOZARI S/N ESQ. J. REFUGIO ALVAREZ COL. SAN LUIS","Municipio":"AGUASCALIENTES","Estado":"AGUASCALIENTES","ClaveMunicipio":"001","ClaveEstado":"01"},"list_levantamiento_inm":[{"title":"Arquitectónico","clave":2,"type":"infra_simple","list_comentarios":[{"Fecha":"12/7/2014","Comentario":"Comentario Levantamiento"}]},{"title":"Arquitectónico II","clave":6,"type":"infra_imueble","list_comentarios":[{"Fecha":"12/7/2014","Comentario":"Comentario Levantamiento"}]}],"list_levantamiento_tics":[],"list_levantamiento_sp":[]},{"nombre":"EDIFICIO DE LA PENSION DE VEHICULOS RECUPERADOS","tipo_inmueble":"PENSION DE VEHICULOS RECUPERADOS","clave":15340,"ubicacion":{"Domicilio":"BOULEVARD JUAN PABLO II 1409 EX HACIENDA LA CANTERA","Municipio":"AGUASCALIENTES","Estado":"AGUASCALIENTES","ClaveMunicipio":"001","ClaveEstado":"01"},"list_levantamiento_inm":[{"title":"Arquitectónico","clave":3,"type":"infra_simple","list_comentarios":[{"Fecha":"12/7/2014","Comentario":"Comentario Levantamiento"}]}],"list_levantamiento_tics":[],"list_levantamiento_sp":[]}],"user":{"clave":"10","Nombre":"Ivan Ramos","Email":"zowarin@gmail.com","login":true,"FechaActualizacion":"12/10/2014"},"list_catalogo":[]};

                q.resolve({ obj: data, type: 'on-line', msg: '' });

            });
        } catch (err) { q.reject('TRY loadFromStorage: ' + err.message) }

        return q.promise;
    };
    // ------------------------------
    var getFromStorage = function (levActive, objLev) { // ok -- crea directorio inmueble -- crea file lev
        var user = levActive.user, inm = levActive.inm, lev = levActive.lev;
        var q = $q.defer();
        try {
            $ionicPlatform.ready(function () {

                dataJson = LevFactory.default(objLev);
                q.resolve({ dataJson: dataJson, type: 'off-line', msg: '' });
                
            });
        } catch (err) { q.reject('TRY getFromStorage: ' + err.message) }

        return q.promise;

    };
    // ------------------------------
    var saveInStorage = function (levActive, data) { // ok !!!-- guarda lev 
        var user = levActive.user, inm = levActive.inm, lev = levActive.lev;
        var q = $q.defer();
        try {
            console.info("call saveInStorage");
            $ionicPlatform.ready(function () {
                
                q.resolve({ dataJson: data, type: 'off-line', msg: '' });
                
            });
        } catch (err) { q.reject('TRY saveInStorage: ' + err.message) }

        return q.promise;

    };
    // ------------------------------
    var moveToStorage = function (levActive, urlFile) {
        var user = levActive.user, inm = levActive.inm, lev = levActive.lev;
        var q = $q.defer();
        try {
            $ionicPlatform.ready(function () {
                var dataDirPath = cordova.file.externalDataDirectory;
                $window.resolveLocalFileSystemURL(urlFile, function (fileEntry) {
                    var pathDirInm = dataDirPath + '/' + user + '/' + inm;
                    $window.resolveLocalFileSystemURL(pathDirInm, function (dirInmEntry) {
                        var fileName = user + '_' + inm + '_' + lev + '_' + fileEntry.name;
                        fileEntry.moveTo(dirInmEntry, fileName, function (entry) {
                            q.resolve(entry.toURL());
                        }, function () { q.reject('FILE_COPY_ERROR : ' + fileEntry.toURL()) });
                    }, function () { q.reject('DIR_READ_ERROR : ' + pathDirInm) });
                }, function () { q.reject('FILE_NOT_FOUND : ' + urlFile) });
            });
        } catch (err) { q.reject('TRY copyToStorage: ' + err.message) }

        return q.promise;
    }
    // ------------------------------
    var deleteToStorage = function (urlFile) {
        var q = $q.defer();
        try {
            $ionicPlatform.ready(function () {
                $window.resolveLocalFileSystemURL(urlFile, function (fileEntry) {
                    fileEntry.remove(function () {
                        q.resolve();
                    }, function () { q.reject('FILE_REMOVE_ERROR : ' + urlFile) });;
                }, function () { q.reject('FILE_NOT_FOUND : ' + urlFile) });
            });
        } catch (err) { q.reject('TRY deleteToStorage: ' + err.message) }

        return q.promise;
    }
    // ------------------------------
    var uploadStorage = function () {
        var q = $q.defer();

        return q.promise;
    }
    // ------------------------------
    return {
        all: function (user) {
            return loadFromStorage(user);
        },
        get: function (levActive, objLev) {
            return getFromStorage(levActive, objLev);
        },
        save: function (levActive, data) {
            return saveInStorage(levActive, data);
        },
        move: function (levActive, urlFile) {
            return moveToStorage(levActive, urlFile);
        },
        delete: function (urlFile) {
            return deleteToStorage(urlFile);
        },
        upload: function () {
            return uploadStorage();
        }
    }
})
;