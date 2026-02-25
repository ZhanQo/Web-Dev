const form = document.getElementById('toform');
const input = document.getElementById('toinput');
const todoList = document.getElementById('tolist');
const deleteSelectedBtn = document.getElementById('delete-selected');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim().replace(/\s+/g, ' ');
    if (taskText === '') return;

    addTodoItem(taskText);
    input.value = '';
});

function addTodoItem(text) {
    const listItem = document.createElement('li');
    listItem.className = 'toitem';

    const leftSection = document.createElement('div');
    leftSection.className = 'toleft';

    // Чекбокс для выбора элемента (для массового удаления)
    const selectCheckbox = document.createElement('input');
    selectCheckbox.type = 'checkbox';
    selectCheckbox.className = 'select-checkbox';

    // Чекбокс для отметки выполнения задачи
    const doneCheckbox = document.createElement('input');
    doneCheckbox.type = 'checkbox';
    doneCheckbox.className = 'done-checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'totext';

    // Обработчик для отметки выполнения
    doneCheckbox.addEventListener('change', function () {
        span.classList.toggle('done');
    });

    // Кнопка индивидуального удаления (опционально)
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    // Собираем левую секцию
    leftSection.appendChild(selectCheckbox);
    leftSection.appendChild(doneCheckbox);
    leftSection.appendChild(span);

    // Собираем весь элемент
    listItem.appendChild(leftSection);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}

// Функция для удаления выбранных элементов
function deleteSelectedItems() {
    const selectedCheckboxes = document.querySelectorAll('.select-checkbox:checked');
    
    if (selectedCheckboxes.length === 0) {
        alert('Please select items to delete');
        return;
    }

    selectedCheckboxes.forEach(checkbox => {
        const listItem = checkbox.closest('.toitem');
        if (listItem) {
            todoList.removeChild(listItem);
        }
    });
}

// Обработчик для кнопки массового удаления
deleteSelectedBtn.addEventListener('click', deleteSelectedItems);