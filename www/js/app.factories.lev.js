angular.module('app.factories.lev', [])
// -----------------------------------
.factory('LevFactory', function () { // carga valores por default de la vista 

    var defaultValuesLev = function (lev) {
        console.info('defaultValuesLev');
        var dataJson = {};
        switch (lev.type) {
            case 'infra_simple':
                dataJson.FK_IdFuenteInformacionTerrenoSelect = [
                    {key:1 , value:'Levantamiento'} ,
                    {key:2 , value:'Escritura'} ,
                    {key:3 , value:'Otro'}
                ],
                dataJson.FK_IdCaracteristicasTerrenoSelect = [
                    {key:1 , value:'Plano'} ,
                    {key:2 , value:'Semiplano'} ,
                    {key:3 , value:'Topografo con fuerte pendiente'}
                ],
                dataJson.FK_IdSituacionInmuebleSelect = [
                    {key:1 , value:'Propio'} ,
                    {key:2 , value:'Rentado'} ,
                    {key:3 , value:'Comodato'} ,
                    {key:4 , value:'Otro'}
                ],
                dataJson.FK_IdTipoPropiedadEstacionamientoSelect = [
                    {key:1 , value:'Propio'} ,
                    {key:2 , value:'Concecionado'} ,
                    {key:3 , value:'Rentado'} ,
                    {key:4 , value:'Otro'}
                ],
                dataJson.FK_IdTipoEstacionamientoSelect = [
                    {key:1 , value:'Sotano'} ,
                    {key:2 , value:'Abierto'} ,
                    {key:3 , value:'Cubierto'} ,
                    {key:4 , value:'Otro predio'}
                ],
                dataJson.FK_IdInmuebleInstitucionSelect = [
                    {key:1 , value:'inst1'} ,
                    {key:2 , value:'inst2'} ,
                    {key:3 , value:'inst3'} ,
                    {key:4 , value:'inst4'}
                ],
                dataJson.FK_IdTipoPlanoSelect = [
                    {key:1 , value:'Arquitectonicos'} ,
                    {key:2 , value:'Ins. Eletromecanicas'} ,
                    {key:3 , value:'Planos Parciales'}
                ],
                dataJson.FK_IdTipoBardaSelect = [
                    {key:1 , value:'Muro cerrado'} ,
                    {key:2 , value:'Rejacero'} ,
                    {key:3 , value:'Reja tubular'},
                    {key:4 , value:'Otro'}
                ],
                dataJson.FK_IdTipoLocalComercialSelect = [
                    {key:1 , value:'tipo 1'} ,
                    {key:2 , value:'tipo 2'} ,
                    {key:3 , value:'tipo 3'} ,
                    {key:4 , value:'tipo 4'}
                ],
                dataJson.FK_IdTipoServicioComedorSelect = [
                    {key:1 , value:'Propio'} ,
                    {key:2 , value:'Concecionado'} ,
                    {key:3 , value:'Otro'}
                ]
                ;

                break;
            case 'infra_imueble': break;
            case 'infra_full': break;
            case 'tic_simple': break;
            case 'tic_admin': break;
            case 'sp': break;
        }

        return dataJson;
    };

    var validateValuesLev = function (lev, dataJson, menuRight) {

        switch (lev.type) {
            case 'infra_simple':
                var val_page_1 = (
                     dataJson.lastName != ''
                     && dataJson.firtsName != ''
                     );
                validateMenuRight(menuRight, '1', val_page_1, ! val_page_1 ? 'Revise Sección ( Campos Obligatorios )' : '');


            case 'infra_imueble': break;
            case 'infra_full': break;
            case 'tic_simple': break;
            case 'tic_admin': break;
            case 'sp': break;
        }
        
    };


    var validateMenuRight = function (menuRight , page , ready , msg) {
        for (var i = 0; i < menuRight.length; i++) {
            if (menuRight[i].page == page) {
                menuRight[i].ready = ready;
                menuRight[i].msg = msg;
            }
        }
    };

    return {
        default: function (lev) { return defaultValuesLev(lev) },
        validate: function (lev, dataJson, menuRight) { validateValuesLev(lev, dataJson, menuRight) },
    }
})
;