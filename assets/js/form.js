$('#form-cadastro').submit(function (){
    var nome = $('#nome');
    var email = $('#email');
    var cpf = $('#cpf');
    var birth = $('#birth');
    var genre = $('#genre');
    var password = $('#password');
    var repeatPassword = $('#repeat-password');

    var erro = $('.alert');
    var campo = $('#campo-erro')

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid')

    if(nome.val() == ''){
        erro.removeClass('d-none');
        campo.html('nome');
        nome.focus();
        nome.addClass('is-invalid');

        return false;
    }

    if(email.val() == ''){
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');

        return false;
    }

    //Procurar como validar CPF
    if(cpf.val() == ''){
        erro.removeClass('d-none');
        campo.html('cpf');
        cpf.focus();
        cpf.addClass('is-invalid');

        return false;
    }

    if(birth.val() == ''){
        erro.removeClass('d-none');
        campo.html('birth');
        birth.focus();
        birth.addClass('is-invalid');

        return false;
    }

    //Procurar como validar gênero
    if(genre.val() == ''){
        erro.removeClass('d-none');
        campo.html('genre');
        genre.focus();
        genre.addClass('is-invalid');

        return false;
    }   

    //Procurar como validar senha e se ambas são iguais
    if(password .val() == ''){
        erro.removeClass('d-none');
        campo.html('password ');
        password.focus();
        password.addClass('is-invalid');

        return false;
    }

    if(repeatPassword .val() == ''){
        erro.removeClass('d-none');
        campo.html('repeatPassword ');
        repeatPassword .focus();
        repeatPassword .addClass('is-invalid');

        return false;
    }

    return true;
});