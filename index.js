var keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    
    
var currentKeyIndex;


function updateCurrentKey() {
  document.getElementById('key').textContent = keys[currentKeyIndex];
}


function handleKeyDown(event) {
 
  var keyPressed = event.key.toUpperCase();
  

  if (keyPressed === keys[currentKeyIndex]) {

    currentKeyIndex++;
    

    if (currentKeyIndex >= keys.length) {

      alert('Ви перемогли!');
    } else {

      updateCurrentKey();
    }
  } else {

    new PNotify({
      title: 'Помилка!',
      text: 'Натиснута неправильна клавіша.',
      type: 'error',
      delay: 2000
    });
  }
}

function handleKeyPress(event) {
  event.preventDefault();  
}


function startNewGame() {

  currentKeyIndex = 0;

  updateCurrentKey();
  

  new PNotify({
    title: 'Нова гра',
    text: 'Починаємо нову гру!',
    type: 'info',
    delay: 2000
  });
}


window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keypress', handleKeyPress);