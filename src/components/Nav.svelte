<script>
	import { isModalVisible, gameState, GameState } from '../store';
</script>

<nav
	class="bg-gradient-to-r from-yellow-500 via-teal-500 to-indigo-600 flex justify-center items-center pb-[0.5px]"
>
	<div class="bg-black w-screen flex justify-center items-center gap-x-4">
		<div>
			<div
				class="bg-animate text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 via-teal-500 to-indigo-600 flex justify-center text-3xl sm:text-4xl font-semibold italic tracking-wide py-3.5 border-b border-gray-700"
			>
				wordle!
			</div>
		</div>
		{#if $gameState !== GameState.RUNNING}
			<button class="text-white" on:click={() => isModalVisible.set(true)}>Open Modal</button>
		{/if}
	</div>
</nav>

<style>
	.bg-animate {
		background-size: 150%;

		-webkit-animation: Animation 5s ease infinite;
		-moz-animation: Animation 5s ease infinite;
		animation: Animation 5s ease infinite;
	}

	@keyframes Animation {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
</style>
