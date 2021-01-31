<script >
	import Todo from './Todo.svelte';
	let lastId = 0;

	const createTodo = (text, done = false) => ({id: ++lastId, text, done }); 
	
	let todoText = '';

	let todos = [
		createTodo('Learn Svelte', true),
		createTodo('Build a Svelte App', false),
	];

	$: remaining = todos.filter(t => !t.done).length;
	$: status = `${remaining} of ${todos.length}`;

	function add() {
		todos = todos.concat(createTodo(todoText));
		todoText = '';
	}

	function toggle(todo) {
		const {id} = todo; // only here to illustrate object deconstruct i think
		todos = todos.map(t => (t.id === id ? { ...t, done: !t.done} : t));
	}

	function deleteTodo(id) {
		todos = todos.filter(t => t.id !== id);
	}

	function archiveCompleted() {
		todos = todos.filter(t => !t.done);
	}

</script>

<div>
	<h1>To Do List</h1>
	<div>{status} <button on:click={archiveCompleted}>Archive Completed</button></div>
	<form on:submit|preventDefault>
		<input 
			size="30"
			placeholder="enter new todo here"
			bind:value={todoText} />
			<button disabled={!todoText} on:click={add}>Add</button>
	</form>
	<ul>
		{#each todos as todo}
			<Todo
				{todo}
				on:delete={() => deleteTodo(todo.id)}
				on:toggleDone={() => toggle(todo)} /> 
		{/each}
	</ul>
</div>

<style lang="scss">
	button {
		margin-left: 10px;
	}
	ul {
		list-style: none;
		margin-left: 0;
		padding-left: 0;
	}
</style>
