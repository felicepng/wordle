<script lang="ts">
	// @ts-ignore
	import CgBackspace from 'svelte-icons-pack/cg/CgBackspace';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { keyboardColors } from '../store';

	export let char: string;
	export let handleKeyPress: (key: string) => void;

	$: innerWidth = 0;
	$: color =
		char.length === 1 ? $keyboardColors[char.charCodeAt(0) - 65] : 'bg-gray-700 hover:bg-gray-800';

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
	class={`${color} text-white p-3 sm:p-4 2xl:px-5 2xl:py-5 rounded-[4px] text-lg sm:text-xl 2xl:text-2xl`}
	on:click={() => handleKeyPress(char)}
>
	{#if char !== 'DEL'}
		{char}
	{:else}
		<Icon src={CgBackspace} size={getSize(innerWidth)} />
	{/if}
</button>
