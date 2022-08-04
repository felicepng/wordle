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
	class={`${
		data.type === 'error' ? 'bg-[#ef444444] border-[#ef4444]' : 'bg-[#14b8a644] border-[#14b8a6]'
	} border text-white py-2 px-2.5 sm:px-4 rounded-md text-xs sm:text-base flex gap-x-1.5 sm:gap-x-2 items-center`}
>
	<Icon src={RiSystemErrorWarningFill} size={innerWidth < 768 ? '14px' : '18px'} color="#ef4444" />
	<div>{data.description}</div>
</div>
