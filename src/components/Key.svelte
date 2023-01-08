<script lang="ts">
	import CgBackspace from 'svelte-icons-pack/cg/CgBackspace';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { keyboardColors } from '../store';

	export let char: string;
	export let handleKeyPress: (key: string) => void;

	$: innerWidth = 0;
	$: color =
		char.length === 1
			? $keyboardColors[char.charCodeAt(0) - 65]
			: 'text-slate-900 bg-[#cbd7e6] sm:hover:bg-[#abbacd] dark:text-white dark:bg-gray-700 dark:sm:hover:bg-gray-800';

	const getSize = (width: number) => {
		if (width < 640) {
			return '20px';
		} else if (width < 1536) {
			return '24px';
		} else {
			return '28px';
		}
	};
</script>

<svelte:window bind:innerWidth />

<button
	aria-label="key"
	class={`${color} ${color.includes('bg-[#cbd7e6]') ? 'text-slate-900' : 'text-white'} ${
		char === 'ENTER' ? 'px-3 sm:px-4 2xl:px-5' : ''
	} w-full flex justify-center items-center py-3 sm:py-4 2xl:py-5 rounded-[4px] text-lg sm:text-xl 2xl:text-2xl`}
	on:click={() => handleKeyPress(char)}
>
	{#if char !== 'DEL'}
		{char}
	{:else}
		<Icon src={CgBackspace} size={getSize(innerWidth)} />
	{/if}
</button>
