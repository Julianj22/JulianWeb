$(document).ready(function () {

  $('#contact-form input, #contact-form textarea').on('focus', function () {
    $(this).parent('.form-group').addClass('focused');
  });

  $('#contact-form input, #contact-form textarea').on('blur', function () {
    $(this).parent('.form-group').removeClass('focused');
    if ($(this).val().trim() !== '') {
      $(this).parent('.form-group').addClass('filled');
    } else {
      $(this).parent('.form-group').removeClass('filled');
    }
  });

  $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    var name = $('#input-name').val().trim();
    var email = $('#input-email').val().trim();
    var message = $('#input-message').val().trim();
    var valid = true;

    $('.form-group').removeClass('error');
    $('#form-feedback').text('').hide();

    if (!name) {
      $('#input-name').parent('.form-group').addClass('error');
      valid = false;
    }
    if (!email || !email.includes('@')) {
      $('#input-email').parent('.form-group').addClass('error');
      valid = false;
    }
    if (!message) {
      $('#input-message').parent('.form-group').addClass('error');
      valid = false;
    }

    if (!valid) {
      $('#form-feedback')
        .text('Please fill in all fields correctly.')
        .css('color', '#c0392b')
        .fadeIn();
      return;
    }

    $('#form-feedback')
      .text('Thanks for reaching out, ' + name + '! I\'ll be in touch soon.')
      .css('color', '#2c3e50')
      .fadeIn();

    $('#contact-form')[0].reset();
    $('.form-group').removeClass('filled');
  });

});
