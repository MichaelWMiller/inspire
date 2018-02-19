function TodoService() {
    // A local copy of your todos
    var localTodos = []
    var baseUrl = 'https://inspire-server.herokuapp.com/api/miller'



    function ToDo(formData) {
        debugger
        this.item = formData.chkBox.value
        this.checked = formData.item.value
        this.completed = formData.completed.value
    }

    function logError(err) {
        console.error('UMM SOMETHING BROKE: ', err)
            //CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
            //do this without breaking the controller/service responsibilities
    }

    this.getTodos = function getTodos(cb) {
        $.get(baseUrl)
            .then(function(res) { // <-- WHY IS THIS IMPORTANT????
                localTodos = res
                console.log(res)
                cb(localTodos)
            })
            .fail(logError)
    }

    this.addTodoFromForm = function(formData, cb) {
        // WHAT IS THIS FOR???

        var todo = new ToDo(formData)
        $.post(baseUrl, todo)
            .then(function(res) {
                localTodos.unshift(res.data)
                cb(localTodos)
                    // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
                this.getTodos(cb)
            })
            .fail(logError)
    }

    this.toggleTodoStatus = function(todoId, id) {
        // MAKE SURE WE THINK THIS ONE THROUGH
        //STEP 1: Find the todo by its index **HINT** todoList

        //STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

        //STEP 3: Here is that weird Ajax request because $.put doesn't exist
        $.ajax({
                method: 'PUT',
                contentType: 'application/json',
                url: baseUrl + '/' + todoId,
                data: JSON.stringify(localToDos)
            })
            .then(function(res) {
                for (var i = 0; i < localTodos.length; i++) {
                    var todo = localToDos[i]
                    if (todo.indexOf('id') == id) {
                        to.completed = !todo.completed;
                    }
                }
                this.getToDos(cb)
            })
            .fail(logError)
    }

    this.removeTodo = function(id, cb) {
        // Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
        $.ajax({
                url: baseUrl + '/' + id,
                method: 'DELETE'
            })
            .then(res => {
                this.getTodos(cb)
            })
    }

}