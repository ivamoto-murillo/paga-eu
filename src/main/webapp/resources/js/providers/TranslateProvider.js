app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.preferredLanguage('pt');
    
    $translateProvider.translations('pt', {
        TITLE: '<b>Paga</b> EU!',
        START_LOGIN: 'Efetue login para iniciar sua sessão',
        EMAIL: 'E-mail',
        PASSWORD: 'Senha',
        REMEMBER_ME: 'Continuar conectado',
        SIGN_IN: 'Entrar',
        FORGOT_PASSWORD: 'Esqueci minha senha',
        REGISTER_NEW_MEMBER: 'Criar novo usuário'
    });
    
    $translateProvider.translations('en', {
        TITLE: '<b>Pay</b> ME!',
        START_LOGIN: 'Sign in to start your session',
        EMAIL: 'E-mail',
        PASSWORD: 'Password',
        REMEMBER_ME: 'Remember me',
        SIGN_IN: 'Sign in',
        FORGOT_PASSWORD: 'I forgot my password',
        REGISTER_NEW_MEMBER: 'Register a new membership'
    });
}]);