<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import CgBackspace from 'svelte-icons-pack/cg/CgBackspace';

	export let char: string;
</script>

<button class="text-white py-4 px-3.5 bg-gray-700 rounded-[4px]">
	{#if char !== 'DEL'}
		{char}
	{:else}
		<Icon src={CgBackspace} size="1.5rem" />
	{/if}
</button>
