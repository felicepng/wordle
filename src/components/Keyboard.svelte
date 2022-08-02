<script>
	import Key from './Key.svelte';

	const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const row3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'];
</script>

<div class="flex flex-col fixed bottom-0 gap-y-2 items-center w-screen pb-6">
	<div class="flex gap-x-2">
		{#each row1 as char}
			<Key {char} />
		{/each}
	</div>
	<div class="flex gap-x-2">
		{#each row2 as char}
			<Key {char} />
		{/each}
	</div>
	<div class="flex gap-x-2">
		{#each row3 as char}
			<Key {char} />
		{/each}
	</div>
</div>
