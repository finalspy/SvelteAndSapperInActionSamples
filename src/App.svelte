<script >
	import Clock from './Clock.svelte';
	let name='world';
	let color='blue';
	let upper=false; 
	$: greeting = `Hello ${name} !`;
	$: caseGreeting = upper ? greeting.toUpperCase() : greeting;
</script>

<main>
	<div id="params">
		<label for="name">Name <input id="name" bind:value={name} /></label>
		<label for="color">Color <input id="color" bind:value={color}/>
			<div style="background-color: {color}" class="swatch" />
		</label>
		<label><input type="checkbox" bind:checked={upper} /> Uppercase</label>
	</div>
	<h1 style="color: {color}">{caseGreeting}</h1>
	<Clock {color} />
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style type="text/scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		#params{
			margin: auto 40%;
			label {
				text-align: left;
			}
		}
		h1 {
			color: #00ff95;
			font-size: 4em;
			font-weight: 100;
		}
		.swatch {
			display: inline-block;
			height:36px;
			width: 36px;
			vertical-align: middle;
		}
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>