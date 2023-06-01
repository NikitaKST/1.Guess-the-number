// Создание переменных для хранения загаданного числа и ссылок на элементы интерфейса
let secretNumber;

//Создание переменных и ссылок на элементы
const guessInput = document.getElementById('guessInput'); //ввод числа
const guessButton = document.getElementById('guessButton'); //кнопка угадать
const messageDisplay = document.getElementById('messageDisplay');//отображения сообщения в игре
const restartButton = document.getElementById('restartButton'); //начать заново

//генерация случайного числа
secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);

//обработчик события нажатия кнопки "Угадать"
guessButton.addEventListener('click', function() {
  const guess = parseInt(guessInput.value);
  
  if (guess === secretNumber) {
    messageDisplay.textContent = 'Поздравляю, вы угадали число!';
  } else if (guess < secretNumber) {
    messageDisplay.textContent = 'Введите большее число.';
  } else {
    messageDisplay.textContent = 'Введите меньшее число.';
  }
  
  guessInput.value = ''; // Очистка поля ввода
});

//обработчик события нажатия на кнопку "Начать заново"
restartButton.addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 10) + 1;// генерация нового случайного числа
  
  messageDisplay.textContent = ''; // очистка вывода результатов
  
  guessInput.value = '';// очистка поля ввода
});








