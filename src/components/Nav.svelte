<script lang="ts">
	import AiOutlineSmile from 'svelte-icons-pack/ai/AiOutlineSmile';
	import AiOutlineFrown from 'svelte-icons-pack/ai/AiOutlineFrown';
	import IoSunny from 'svelte-icons-pack/io/IoSunny';
	import IoMoon from 'svelte-icons-pack/io/IoMoon';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { isModalVisible, gameState, GameState, isDarkMode } from '../store';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<nav
	class="bg-slate-50 dark:bg-black w-full flex justify-center items-center gap-x-2 sm:gap-x-2.5 py-2.5 border-b border-slate-400 dark:border-gray-700"
>
	<div class="text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-wide">wordle</div>
	{#if $gameState === GameState.WIN}
		<button aria-label="game-won" on:click={() => isModalVisible.set(true)} class="pt-0.5 sm:pt-1">
			<Icon
				src={AiOutlineSmile}
				size={innerWidth < 640 ? '20px' : '23px'}
				color={$isDarkMode ? '#ffffff' : '#1e293b'}
			/>
		</button>
	{:else if $gameState === GameState.LOSE}
		<button aria-label="game-lost" on:click={() => isModalVisible.set(true)} class="pt-0.5 sm:pt-1">
			<Icon
				src={AiOutlineFrown}
				size={innerWidth < 640 ? '20px' : '23px'}
				color={$isDarkMode ? '#ffffff' : '#1e293b'}
			/>
		</button>
	{/if}
	<div class="absolute right-5 sm:right-8 flex items-center gap-x-3.5 sm:gap-x-6">
		<button
			aria-label="toggle-dark-mode"
			on:click={() => {
				isDarkMode.update((prev) => !prev);
			}}
		>
			{#if $isDarkMode}
				<Icon
					src={IoSunny}
					size={innerWidth < 640 ? '21px' : '25px'}
					color={$isDarkMode ? '#ffffff' : '#1e293b'}
				/>
			{:else}
				<Icon
					src={IoMoon}
					size={innerWidth < 640 ? '20px' : '23px'}
					color={$isDarkMode ? '#ffffff' : '#1e293b'}
				/>
			{/if}
		</button>
		<a target="_blank" href="https://felicepng.com">
			<img
				src="/portfolio.png"
				alt="My Portfolio"
				class="-mt-0.5 h-[26px] sm:h-8 w-[26px] sm:w-8"
			/>
		</a>
	</div>
</nav>
