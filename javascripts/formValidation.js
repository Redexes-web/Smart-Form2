$(document).ready(function() {
    $("#login-form").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        password : {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages : {
        password: {
          required: "Veuillez entrer votre Mot de passe"
        },
        email: {
          email: "Veuillez entrer votre e-mail valide",
          required: "Veuillez entrer votre e-mail"
        }
      }
    });
    $("#register-form").validate({
        rules: {
        fname : {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        name : {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            required: true,
            email: true
        },
        password1 : {
            required: true,
            minlength: 8,
            maxlength: 55
        },
        password2 : {
            equalTo: "#password1"
        }
        },
        messages : {
        fname: {
            required: "Veuillez remplir le champs 'Prénom'",
            minlength: "Le champs 'Prénom' dois contenir au moins 3 caractères",
            maxlength: "Le champs 'Prénom' peut contenir au maximum 50 caractères"
        },
        name: {
            required: "Veuillez remplir le champs 'Nom'",
            minlength: "Le champs 'Nom' dois contenir au moins 3 caractères",
            maxlength: "Le champs 'Nom' peut contenir au maximum 50 caractères"
        },
        email: {
            email: "Veuillez entrer votre e-mail valide",
            required: "Veuillez entrer votre e-mail"
        },
        password1: {
            required: "Veuillez remplir le champs 'Mot de passe'",
            minlength: "Le Mot de passe dois contenir au moins 8 caractères",
            maxlength: "Le Mot de passe peut contenir au maximum 55 caractères"
        },
        password2:{
            equalTo: "les mots de passe ne corespondent pas"
        }
        }
    });
  });