<script>
    import {createEventDispatcher} from 'svelte';
    import {fade} from 'svelte/transition';
    const dispatch = createEventDispatcher();

    export let todo;
</script>

<li transition:fade>
    <input type="checkbox"
        checked={todo.done}
        on:change={() => dispatch('toggleDone')} />
        <span class={'done-' + todo.done}>{todo.text}</span>
        <button on:click={() => dispatch('delete')}>Delete</button>
</li>

<style>
    .done-false{
        background-color: lightcoral;
    }
    .done-true{
        color:gray;
        background-color: lightgreen;
        text-decoration: line-through;
    }
</style>