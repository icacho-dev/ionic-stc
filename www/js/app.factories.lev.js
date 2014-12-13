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
            case 'infra_full': 
                dataJson.FK_IdEstadoFisicoSelect = [
                    {key:1 , value:'Adecuado'} ,
                    {key:2 , value:'Regular'} ,
                    {key:3 , value:'Deficiente'} ,
                    {key:4 , value:'Malo'}
                ],
                dataJson.FK_IdTipoImplementacionSelect = [
                    {key:1 , value:'Ampliación'} ,
                    {key:2 , value:'Superficie'} ,
                    {key:3 , value:'Remodelación'} ,
                    {key:4 , value:'Malo'}
                ],
                dataJson.FK_IdTipoJuicioOralPenalSelect = [
                    {key:1 , value:'Adolescente'} ,
                    {key:2 , value:'Mujeres'} ,
                    {key:3 , value:'Otros'} 
                ],
                dataJson.FK_IdTipoInstalacionSelect = [
                    {key:1 , value:'Cableado'} ,
                    {key:2 , value:'Ducteria'} ,
                    {key:3 , value:'Soportería'} 
                ],
                dataJson.FK_IdTipoEquipoRespaldoSelect = [
                    {key:1 , value:'tipo1'} ,
                    {key:2 , value:'tipo2'} ,
                    {key:3 , value:'tipo3'} 
                ],
                dataJson.FK_IdMarcaSelect = [
                    {key:1 , value:'marca 1'} ,
                    {key:2 , value:'marca 2'} ,
                    {key:3 , value:'marca 3'} 
                ],
                dataJson.FK_IdTipoCCTVSelect = [
                    {key:1 , value:'TipoCCTV 1'} ,
                    {key:2 , value:'TipoCCTV 2'} ,
                    {key:3 , value:'TipoCCTV 3'} 
                ],
                dataJson.FK_IdTipoAireSelect = [
                    {key:1 , value:'TipoAire 1'} ,
                    {key:2 , value:'TipoAire 2'} ,
                    {key:3 , value:'TipoAire 3'} 
                ],
                dataJson.FK_IdTipoControlAccesoSelect = [
                    {key:1 , value:'TipoControlAcceso 1'} ,
                    {key:2 , value:'TipoControlAcceso 2'} ,
                    {key:3 , value:'TipoControlAcceso 3'} 
                ],
                dataJson.FK_IdTipoAlarmaDeteccionHumoSelect = [
                    {key:1 , value:'Tipo AlarmaDeteccionHumo 1'} ,
                    {key:2 , value:'Tipo AlarmaDeteccionHumo 2'} ,
                    {key:3 , value:'Tipo AlarmaDeteccionHumo 3'} 
                ],
                dataJson.FK_IdTipoProteccionContraIncendioSelect = [
                    {key:1 , value:'Tipo ProteccionContraIncendio 1'} ,
                    {key:2 , value:'Tipo ProteccionContraIncendio 2'} ,
                    {key:3 , value:'Tipo ProteccionContraIncendio 3'} 
                ],
                dataJson.FK_IdUnidadMedidaSelect = [
                    {key:1 , value:'UnidadMedida 1'} ,
                    {key:2 , value:'UnidadMedida 2'} ,
                    {key:3 , value:'UnidadMedida 3'} 
                ],
                dataJson.FK_IdTipoInstalacionGasSelect = [
                    {key:1 , value:'TipoInstalacionGas 1'} ,
                    {key:2 , value:'TipoInstalacionGas 2'} ,
                    {key:3 , value:'TipoInstalacionGas 3'} 
                ],
                dataJson.FK_IdTipoAcabadoSelect = [
                    {key:1 , value:'TipoAcabado 1'} ,
                    {key:2 , value:'TipoAcabado 2'} ,
                    {key:3 , value:'TipoAcabado 3'} 
                ]                  
                ;

                break;
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


            case 'infra_imueble': 
                dataJson.FK_IdTipoMobiliarioSelect = [
                    {key:1 , value:'Comprado'} ,
                    {key:2 , value:'Arrendado'} ,
                    {key:3 , value:'Serv. Admin'} ,
                    {key:4 , value:'Otro'}
                ],
                dataJson.FK_IdPeriodoSustitucionSelect = [
                    {key:1 , value:'Entre 3 y 5 años'} ,
                    {key:2 , value:'Entre 5 y 7 años'} ,
                    {key:3 , value:'Más de 7 años'} 
                ],
                dataJson.FK_IdEstadoFisicoMobiliarioSelect = [
                    {key:1 , value:'Adecuado'} ,
                    {key:2 , value:'Regular'} ,
                    {key:3 , value:'Deficiente'} ,
                    {key:4 , value:'Malo'}
                ],
                dataJson.FK_IdFuncionalidadMobiliarioSelect = [
                    {key:1 , value:'Adecuado'} ,
                    {key:2 , value:'Regular'} ,
                    {key:3 , value:'Deficiente'} ,
                    {key:4 , value:'Malo'}
                ]
                ;

                break;
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