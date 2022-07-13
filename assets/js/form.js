$(document).ready(function(){
    $(cpf).mask("999.999.999-99");
})

$('#form-cadastro').submit(function (){
    var name = $('#name');
    var email = $('#email');
    var cpf = $('#cpf');
    var birthDate = $('#birthDate');
    var genre = $('#genre');
    var password = $('#password');
    var repeatPassword = $('#repeat-password');

    var erro = $('.alert');
    var campo = $('#campo-erro')

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid') 

    if(name.val() == ''){
        erro.removeClass('d-none');
        campo.html('nome');
        name.focus();
        name.addClass('is-invalid');

        return false;
    }

    if(email.val() == ''){
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');

        return false;
    }   
        
    if(cpf.val() == '' || cpf.val().length != 14){
        erro.removeClass('d-none');
        campo.html('cpf');
        cpf.focus();
        cpf.addClass('is-invalid');
    
            return false;
    }
        
    if(birthDate.val() == ''){
        erro.removeClass('d-none');
        campo.html('Nascimento');
        birthDate.focus();
        birthDate.addClass('is-invalid');

        return false;
    }

    if(genre.val() == ''){
        erro.removeClass('d-none');
        campo.html('gênero');
        genre.focus();
        genre.addClass('is-invalid');

        return false;
    }   

    if(password.val() == ''){
        erro.removeClass('d-none');
        campo.html('senha');
        password.focus();
        password.addClass('is-invalid');

        return false;
    }

    if(repeatPassword.val() == ''){
        erro.removeClass('d-none');
        campo.html('repetir a senha ');
        repeatPassword.focus();
        repeatPassword.addClass('is-invalid');

        return false;
    }

    if (password.val() != repeatPassword.val()){
        erro.removeClass('d-none');
        campo.html('Senha e Repetir a Senha igualmente');
        repeatPassword.focus();
        repeatPassword.addClass('is-invalid');
        
        return false
    }
    alert('Cadastro enviado com sucesso!')
    return true;

});

$('#form-cadastro').get(0).reset();