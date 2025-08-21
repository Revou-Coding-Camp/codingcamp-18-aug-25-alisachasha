document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const todoInput = document.getElementById('todoInput').value;
    const dueDateInput = document.getElementById('dueDateInput').value;
    if (todoInput === '' || dueDateInput === '') {
        alert('Please fill in both fields.');
        return;
    }

    const todoList = document.getElementById('todoList');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${todoInput}</td>
        <td>${dueDateInput}</td>
        <td>Pending</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;
    todoList.appendChild(newRow);

    document.getElementById('todoInput').value = '';
    document.getElementById('dueDateInput').value = '';
});

document.getElementById('todoList').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        event.target.closest('tr').remove();
    }
});

document.getElementById('deleteAllBtn').addEventListener('click', function() {
    document.getElementById('todoList').innerHTML = '';
});

document.getElementById('filterInput').addEventListener('input', function(event) {
    const filterValue = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#todoList tr');

    rows.forEach(row => {
        const task = row.cells[0].textContent.toLowerCase();
        row.style.display = task.includes(filterValue) ? '' : 'none';
    });
});
