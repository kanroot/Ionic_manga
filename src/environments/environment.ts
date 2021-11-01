// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    urlCatalogo: 'http://45.76.79.176:8000/api/catalogo/',
    urlRegistro: 'http://45.76.79.176:8000/api/registro/',
    urlLogin: 'http://45.76.79.176:8000/api/login/',
    urlLogout: 'http://45.76.79.176:8000/api/logout/',
    urlLoginToken: 'http://45.76.79.176:8000/api/login-token',
    urlActualizar: 'http://45.76.79.176:8000/api/actualizar/',
    urlAleatorio: 'http://45.76.79.176:8000/api/aleatorio/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
