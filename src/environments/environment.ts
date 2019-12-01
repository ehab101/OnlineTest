// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

/*
 * Adding sdk to from the firbase console --Ehab Feroze - 1601796*/

  firebase: {
    apiKey: 'AIzaSyCbmGxYjui3sKD3nhE1nkcNIX36NPr6LnE',
    authDomain: 'menutabs-2f0c0.firebaseapp.com',
    databaseURL: 'https://menutabs-2f0c0.firebaseio.com',
    projectId: 'menutabs-2f0c0',
    storageBucket: 'menutabs-2f0c0.appspot.com',
    messagingSenderId: '7482179538',
    appId: '1:7482179538:web:fde6a33450069abec0520b',
    measurementId: 'G-WKRJD62F6W'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
