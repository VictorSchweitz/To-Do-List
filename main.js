const successToast = document.getElementById('success-toast')
const addTodoButton = document.getElementById('add-todo-btn')
const errorToast = document.getElementById('error-toast')
const todoList = document.getElementById('todo-list')
const todoInput = document.getElementById('todo-input')

addTodoButton.addEventListener('click', () =>
{
   showToast()
   addTodo()
})

function showToast()
{
   if (todoInput.value !== '' && todoInput.value !== ' ')
   {
      successToast.classList.add('active')
      todoInput.value = ''

      setTimeout(() =>
      {
         successToast.classList.remove('active')
      }, 1500)
   }
   else
   {
      errorToast.classList.add('active')
      addTodoButton.disabled = true

      setTimeout(() =>
      {
         errorToast.classList.remove('active')
         addTodoButton.disabled = false
      }, 1500)
   }
}

function addTodo()
{

   // Create new <li></li> element
   let newTodoEl = document.createElement('li')


   // Create wrapper for the text content. Handy for styling
   let newTextWrapper = document.createElement('span')

   // Fetch the value from the input field. Needed to get the updated value
   let todoInput = document.getElementById('todo-input')

   // Set the text to be equal to the value of the input field and the append that as a child
   let text = document.createTextNode(todoInput.value)

   // Outputting the value as a <span></span> element inside the <li></li> element
   newTextWrapper.appendChild(text)
}