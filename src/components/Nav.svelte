<script>
	// @ts-ignore
	import AiOutlineSmile from 'svelte-icons-pack/ai/AiOutlineSmile';
	// @ts-ignore
	import AiOutlineFrown from 'svelte-icons-pack/ai/AiOutlineFrown';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { isModalVisible, gameState, GameState, isDarkMode } from '../store';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<nav
	class="top-0 sticky bg-slate-200 dark:bg-black w-screen flex justify-center items-center gap-x-2 sm:gap-x-2.5 py-2.5 sm:py-3.5 border-b border-slate-400 dark:border-gray-700"
>
	<div class="text-slate-900 dark:text-white text-3xl sm:text-[40px] tracking-wide">wordle</div>
	{#if $gameState === GameState.WIN}
		<button on:click={() => isModalVisible.set(true)} class="pt-0.5 sm:pt-1">
			<Icon
				src={AiOutlineSmile}
				size={innerWidth < 640 ? '20px' : '23px'}
				color={$isDarkMode ? '#ffffff' : '#1e293b'}
			/>
		</button>
	{:else if $gameState === GameState.LOSE}
		<button on:click={() => isModalVisible.set(true)} class="pt-0.5 sm:pt-1">
			<Icon
				src={AiOutlineFrown}
				size={innerWidth < 640 ? '20px' : '23px'}
				color={$isDarkMode ? '#ffffff' : '#1e293b'}
			/>
		</button>
	{/if}
	<button class="dark:text-white" on:click={() => isDarkMode.update((prev) => !prev)}>
		{$isDarkMode ? 'Dark' : 'Light'}
	</button>
	<a target="_blank" href="https://felicepng.com" class="absolute right-5 sm:right-6">
		<img src="/portfolio.png" alt="My Portfolio" class="h-[26px] sm:h-8 w-[26px] sm:w-8" />
	</a>
</nav>
