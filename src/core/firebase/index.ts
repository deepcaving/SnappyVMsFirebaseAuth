import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyA-a-CRC_HN8RpVlfiMaMbZk3gIjSC92XQ",
    authDomain: "snappyvms.firebaseapp.com",
    databaseURL: "https://snappyvms.firebaseio.com",
    storageBucket: "snappyvms.appspot.com"
    /*apiKey: 'AIzaSyDaEW83qAOozjJbbJP1YYbEHxxfFksdSHQ',
    authDomain: 'ng2-todo-app.firebaseapp.com',
    databaseURL: 'https://ng2-todo-app.firebaseio.com',
    storageBucket: 'ng2-todo-app.appspot.com'*/
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];