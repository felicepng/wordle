<script lang="ts">
	// @ts-ignore
	import CgBackspace from 'svelte-icons-pack/cg/CgBackspace';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { keyboardColors } from '../store';

	export let char: string;
	export let handleKeyPress: (key: string) => void;

	$: color =
		char.length === 1 ? $keyboardColors[char.charCodeAt(0) - 65] : 'bg-gray-700 hover:bg-gray-800';
</script>

<button
	class={`${color} text-white py-4 px-2.5 md:px-3.5 rounded-[4px] text-sm md:text-md`}
	on:click={() => handleKeyPress(char)}
>
	{#if char !== 'DEL'}
		{char}
	{:else}
		<Icon src={CgBackspace} size="24px" />
	{/if}
</button>
