$(document).ready(function () {

  var correctAnswer;

  function generateProblem() {
    var a = Math.floor(Math.random() * 20) + 1;
    var b = Math.floor(Math.random() * 20) + 1;
    var ops = ['+', '-', '\u00d7'];
    var op = ops[Math.floor(Math.random() * ops.length)];

    if (op === '+') correctAnswer = a + b;
    if (op === '-') correctAnswer = a - b;
    if (op === '\u00d7') correctAnswer = a * b;

    $('#math-question').text('What is ' + a + ' ' + op + ' ' + b + '?');
    $('#math-answer').val('');
    $('#math-feedback').text('').css('color', '');
  }

  generateProblem();

  $('#math-submit').on('click', function () {
    var userAnswer = parseInt($('#math-answer').val().trim(), 10);

    if (isNaN(userAnswer)) {
      $('#math-feedback').text('Please enter a number.').css('color', '#c0392b');
      return;
    }

    if (userAnswer === correctAnswer) {
      $('#math-feedback').text('Correct!').css('color', '#27ae60');
      setTimeout(function () {
        generateProblem();
        $('#math-feedback').text('');
      }, 1200);
    } else {
      $('#math-feedback').text('Not quite, try again.').css('color', '#c0392b');
    }
  });

  $('#math-answer').on('keydown', function (e) {
    if (e.key === 'Enter') {
      $('#math-submit').click();
    }
  });

});
