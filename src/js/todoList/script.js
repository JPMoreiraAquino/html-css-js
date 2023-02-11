const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const activityList = document.querySelector('#activity-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const activity = input.value;
  
  if (activity) {
    const li = document.createElement('li');
    li.textContent = activity;
    activityList.appendChild(li);
    input.value = '';
  }
});


