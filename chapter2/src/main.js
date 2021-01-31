import Hello from './HelloApp.svelte';
import Loan from './LoanApp.svelte';
import TodoListApp from './TodoListApp.svelte';

const app = new Hello({
	target: document.getElementById("A"),
	props: {
		name: 'world'
	}
});

const app2 = new Loan({
	target: document.getElementById("B"),
	props: {
		name: 'titi'
	}
});

const app3 = new TodoListApp({
	target: document.getElementById("C"),
	props: {
		name: 'tata'
	}
});