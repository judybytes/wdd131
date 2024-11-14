// Select input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Add event listener for the "Add Chapter" button
button.addEventListener('click', function() {
  
  // Trim the input value to check for non-empty input
  if (input.value.trim() !== '') {
    
    // Create a new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // Set the list item's text content to the input value
    li.textContent = input.value;
    
    // Set the delete button's text content and aria-label for accessibility
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
    
    // Append the delete button to the list item
    li.append(deleteButton);
    
    // Append the list item to the unordered list
    list.append(li);
    
    // Add event listener to delete button to remove the list item
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus();
    });
    
    // Clear the input field for the next entry and return focus to it
    input.value = '';
    input.focus();
  } else {
    // If input is empty, focus back to the input field
    input.focus();
  }
});

