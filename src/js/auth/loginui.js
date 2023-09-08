import auth from 'firebase/auth';
import firebaseui from 'firebaseui';

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.setConfig({
  signInOptions: [
    { 
      provider: auth.EmailAuthProvider.PROVIDER_ID 
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/user.gender.read',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    },
  ],
  // Terms of service url.
  tosUrl: '/ayuda/terminos',
  // Privacy policy url.
  privacyPolicyUrl: '/ayuda/privacidad'
});

function iniciarLogin(elemento){
  ui.start(elemento);
}

module.exports = {
  iniciarLogin
}
