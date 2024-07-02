$(document).ready(function () {
  $('.form-login__button, .form-register__button').on('click', function () {
    let button = $(this);
    let action = button.data('action');
    let redirectPage = button.data('redirect');
    button.prop('disabled', true);
    if (action === 'login') {
      button.text('Iniciando sesión...');
    } else if (action === 'register') {
      button.text('Creando usuario...');
    }
    setTimeout(function () {
      window.location.href = redirectPage;
      button.prop('disabled', false);
    }, 2000);
  });
});