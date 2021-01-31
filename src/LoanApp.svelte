<script >
	let interestRate = 3;
	let loanAmount = 200_000;
	let years = 25;
	const MONTHS_PER_YEAR = 12;

	$: months = years * MONTHS_PER_YEAR;
	$: monthlyInterestRate = interestRate / 100 / MONTHS_PER_YEAR;
	$: numerator = loanAmount * monthlyInterestRate;
	$: denominator  = 1 - (1 + monthlyInterestRate) ** -months;
	$: payment =
		!loanAmount || !years ? 0 :
		interestRate ? numerator / denominator :
		loanAmout / months
</script>

<main>
	<label for="loan">Loan Amount<input id="loan" type="number" bind:value={loanAmount} /></label>
	<label for="interest">Interest Rate<input id="interest" type="number" bind:value={interestRate} /></label>
	<label for="years">Years<input id="years" type="number" bind:value={years} /></label>

	<div>
		Monthly Payments : {payment.toFixed(2)}$
	</div>
</main>

<style type="text/scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		#params{
			margin: auto 40%;
			display:contents;
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