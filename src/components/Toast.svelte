<script lang="ts">
	import RiSystemErrorWarningFill from 'svelte-icons-pack/ri/RiSystemErrorWarningFill';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import type { ToastProps } from 'svelte-toasts/types/common';

	export let data: ToastProps;
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div
	class="bg-[#ffdddde0] dark:bg-[#522020de] border-red-500 border text-slate-800 dark:text-white py-1.5 px-2.5 sm:px-4 rounded-md text-base sm:text-xl flex gap-x-1.5 sm:gap-x-2 items-center"
>
	<Icon src={RiSystemErrorWarningFill} size={innerWidth < 640 ? '14px' : '18px'} color="#ef4444" />
	<div>{data.description}</div>
</div>
