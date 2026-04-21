// Ждем полной загрузки DOM, чтобы избежать ошибок с null
document.addEventListener('DOMContentLoaded', () => {
  
  // --- ЗАДАНИЕ 1: Галерея ---
  const gallery = document.querySelector('.gallery');

  if (gallery) {
    window.addEventListener('keydown', (event) => {
      const step = 320; // ширина картинки + margin
      
      if (event.key === 'ArrowRight') {
        gallery.scrollBy({ left: step, behavior: 'smooth' });
      } else if (event.key === 'ArrowLeft') {
        gallery.scrollBy({ left: -step, behavior: 'smooth' });
      }
    });
  }

  // --- ЗАДАНИЕ 2: Создание боксов ---
  const input = document.querySelector('#controls input');
  const renderBtn = document.querySelector('[data-action="render"]');
  const destroyBtn = document.querySelector('[data-action="destroy"]');
  const boxesContainer = document.querySelector('#boxes');

  // Функция для генерации случайного цвета
  function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Создание элементов
  function createBoxes(amount) {
    // Очищаем старое перед созданием нового (если нужно по логике)
    boxesContainer.innerHTML = ''; 
    
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomRgb();
      div.style.marginTop = '10px';
      
      elements.push(div);
      size += 10;
    }

    boxesContainer.append(...elements);
  }

  // Очистка
  function destroyBoxes() {
    if (boxesContainer) {
      boxesContainer.innerHTML = '';
    }
    if (input) {
      input.value = '';
    }
  }

  // Навешиваем обработчики событий с проверкой на null
  if (renderBtn && input) {
    renderBtn.addEventListener('click', () => {
      const amount = Number(input.value);
      if (amount > 0 && amount <= 100) {
        createBoxes(amount);
      } else {
        alert("Пожалуйста, введите число от 1 до 100");
      }
    });
  }

  if (destroyBtn) {
    destroyBtn.addEventListener('click', destroyBoxes);
  }

});