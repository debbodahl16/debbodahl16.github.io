(function () {

	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage

	var todoService = new TodoService();
	// console.log(todoService);


	var todos = todoService.getTodos()

	// console.log(todos)

	$('#new-todo-form').on('submit', function (e) {
		e.preventDefault()
		var form = this;
		var input = form.newTodo.value;

		todos.push(input)
		todoService.saveTodos(todos);
		update()

	})

	function update() {

		for (i = 0; i < todos.length; i++)	{
			var listOut = todos[i];
			$('#todo').append(`
			<p>
				${listOut}
			</p>
			`)
		}
	}

	update()

} ())
