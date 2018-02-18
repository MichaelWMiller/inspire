function TodoController() {

    var todoService = new TodoService()

    var todosElem = document.getElementById('todos-here')
        // new up the TodoService that has already been configured for your use
        // You will need four methods
        // getTodos should request your api/todos and give an array of todos to your callback fn
        // addTodo takes in a todo and posts it to the server
        // toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
        // removeTodo takes in a todoId and sends a delete request to the server
        // **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


    // Use this getTodos function as your callback for all other edits


    function getTodos() {
        //FYI DONT EDIT ME :)
        todoService.getTodos(draw)
    }

    function draw(todos) {
        //WHAT IS MY PURPOSE?
        //BUILD YOUR TODO TEMPLATE HERE

        var template = ``
        if (todos == undefined) {
            todosElem.innerHTML - '<h4> Sorry, no Todo\'s!</h4>'
            return
        }
        todos.forEach(todo => {
            template += `
		<form onsubmit="submit">
			<div class="form-group">
				<input type="text" name="id" class="form-control" required value="${todo.id}" readonly hidden>
				<input type="checkbox" name="todo-checkbox" id="todo-checkbox" value="${todo.checked}">
				<input type="text" name="Item" value="${todo.item}">
				<input type="boolean" name="completed" hidden value = "${todo.completed}">
				<i onclick="app.controllers.todoControl.toggleToDoStatus('${todo.id}')" class="action fa fa-fw fa-lg far fa-list-alt text-blue">Edit</i>
                <i onclick="app.controllers.todoControl.removeTodo('${todo.id}')" class="action fa fa-fw fa-lg fa-trash text-red">Remove</i>
			</div>
		</form>
		`
        })
        todosElem.innerHTML = template
    }
    //DONT FORGET TO LOOP


    this.addTodoFromForm = function(event) {
        e.preventDefault() // <-- hey this time its a freebie don't forget this
            // TAKE THE INFORMATION FORM THE FORM
        var form = event.target
        var todo = {
            item: form.item.value,
            item: form.checked.value,
            item: form.completed.value
                // DONT FORGET TO BUILD YOUR TODO OBJECT
        }

        //PASSES THE NEW TODO TO YOUR SERVICE
        //DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
        //YOU SHOULDN'T NEED TO CHANGE THIS
        todoService.addTodo(todo, getTodos)
            //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
    }

    this.toggleTodoStatus = function(todoId) {
        // asks the service to edit the todo status
        todoService.toggleTodoStatus(todoId, getTodos)
            // YEP THATS IT FOR ME
    }

    this.removeTodo = function(todoId) {
        // ask the service to run the remove todo with this id

        // ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
    }

    // IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
    getTodos()
        //draw()
}