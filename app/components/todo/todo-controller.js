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
        if (todos == undefined) {
            return "No Todo\'s"
        }
        var template = `<p>${todos.length} to do\'s</p>`

        todos.forEach(todo => {
            template += `
			<p>${todos.length} to do\'s</p>
			<div class="form-check todoLook">
				<div class="form-group hidden">
					<label for="id">id:</label>
					<input type="text" name="id" class="form-control" required value="${todo.id}" readonly>
				</div>
                <input class="form-check-input" name="chkBox" type="checkbox" value="${todo.chkbox}" id="chkBox">
                <input class="form-control" type="text" name="item" value="${todo.item}" placeholder="Enter todo" id="item">
                <input class="form-control hidden" name="completed" type="text" value="${todo.completed}" id="completed">
                <i onclick="app.controllers.todoController.removeTodo('${todo.id}')" class="removeToDo fa fa-fw fa-lg fa-trash text-red"></i>
            </div>
            <div>
            	<button type="submit" class="btn btn-success">Submit</button>
            	<button type="reset" class="btn btn-danger">Clear Form</button>
        	</div>

			`
        })
        template += `
		<div id="addToDo>
				<i onclick="app.controllers.todoController.addToDoFromForm(event)" class="fas fa-plus-circle text-blue"></i>
			</div>
		`
        todosElem.innerHTML = template
    }
    //WHAT IS MY PURPOSE?
    //BUILD YOUR TODO TEMPLATE HERE

    //DONT FORGET TO LOOP


    this.addTodoFromForm = function(event) {
        event.preventDefault() // <-- hey this time its a freebie don't forget this
            // TAKE THE INFORMATION FORM THE FORM
        var form = event.target
        console.log(form)

        todoService.addTodoFromForm(form, draw)
            //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
        form.reset()
    }

    this.toggleTodoStatus = function(todoId) {
        // asks the service to edit the todo status
        todoService.toggleTodoStatus(todoId, getTodos)
            // YEP THATS IT FOR ME
    }

    this.removeTodo = function(todoId) {
        todoService.removeTodo(todoId, draw)
            // ask the service to run the remove todo with this id

        // ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
    }

    // IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
    getTodos()
    draw()
}