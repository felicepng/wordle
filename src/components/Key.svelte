<script lang="ts">
	// @ts-ignore
	import CgBackspace from 'svelte-icons-pack/cg/CgBackspace';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';

	export let char: string;
	export let keyPress: (key: string) => void;
</script>

<button
	class="text-white py-4 px-3.5 bg-gray-700 hover:bg-gray-800 rounded-[4px]"
	on:click={() => keyPress(char)}
>
	{#if char !== 'DEL'}
		{char}
	{:else}
		<Icon src={CgBackspace} size="24px" />
	{/if}
</button>
