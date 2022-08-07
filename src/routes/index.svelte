<script>
	import Nav from '../components/Nav.svelte';
	import Board from '../components/Board.svelte';
	import Keyboard from '../components/Keyboard.svelte';
	import Modal from '../components/Modal.svelte';
	import { isModalVisible, isDarkMode } from '../store';
</script>

<main class={`${$isDarkMode && 'dark'} h-screen w-screen flex flex-col justify-between`}>
	<Nav />
	<Board />
	<Keyboard />
	{#if $isModalVisible}
		<Modal />
	{/if}
</main>
