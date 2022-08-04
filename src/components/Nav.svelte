<script>
	import { isModalVisible, gameState, GameState } from '../store';
</script>

<nav
	class="bg-black w-screen flex justify-center items-center gap-x-4 py-2.5 sm:py-3.5 border-b border-gray-700"
>
	<div class="text-white text-3xl sm:text-[40px] tracking-wide">wordle</div>
	{#if $gameState !== GameState.RUNNING}
		<button class="text-white" on:click={() => isModalVisible.set(true)}>Open Modal</button>
	{/if}
</nav>
