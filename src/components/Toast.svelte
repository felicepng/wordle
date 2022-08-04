<script lang="ts">
	// @ts-ignore
	import RiSystemErrorWarningFill from 'svelte-icons-pack/ri/RiSystemErrorWarningFill';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';

	export let data: any;
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div
	class="bg-[#ffb3b3d2] dark:bg-[#522020de] border-red-500 border text-slate-800 dark:text-white py-1.5 px-2.5 sm:px-4 rounded-md text-base sm:text-xl flex gap-x-1.5 sm:gap-x-2 items-center"
>
	<Icon src={RiSystemErrorWarningFill} size={innerWidth < 640 ? '14px' : '18px'} color="#ef4444" />
	<div>{data.description}</div>
</div>
