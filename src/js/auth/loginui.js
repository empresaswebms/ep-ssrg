const firebase = require('firebase/auth');
const firebaseui = require('firebaseui');

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.setConfig({
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/user.gender.read',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
      customParameters: {
        prompt: 'select_account',
      },
    },
  ],
  tosUrl: '/ayuda/terminos',
  privacyPolicyUrl: '/ayuda/privacidad',
});

function iniciarLogin(elemento) {
  ui.start(elemento);
}

module.exports = {
  iniciarLogin,
};
