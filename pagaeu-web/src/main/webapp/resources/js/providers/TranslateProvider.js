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
        REGISTER_NEW_MEMBER: 'Criar novo usuário',
        FULL_NAME: 'Nome completo',
        RETYPE_PASSWORD: 'Confirme sua senha',
        AGREE_TERMS: 'Eu aceitos os <a href="#">termos</a>',
        REGISTER: 'Registrar',
        HAVE_MEMBERSHIP: 'Eu já tenho um usuário'
    });
    
    $translateProvider.translations('en', {
        TITLE: '<b>Pay</b> ME!',
        START_LOGIN: 'Sign in to start your session',
        EMAIL: 'E-mail',
        PASSWORD: 'Password',
        REMEMBER_ME: 'Remember me',
        SIGN_IN: 'Sign in',
        FORGOT_PASSWORD: 'I forgot my password',
        REGISTER_NEW_MEMBER: 'Register a new membership',
        FULL_NAME: 'Full name',
        RETYPE_PASSWORD: 'Retype password',
        AGREE_TERMS: 'I agree to the <a href="#">terms</a>',
        REGISTER: 'Register',
        HAVE_MEMBERSHIP: 'I already have a membership'
    });
}]);