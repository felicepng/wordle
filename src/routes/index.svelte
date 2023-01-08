<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Board from '../components/Board.svelte';
	import Keyboard from '../components/Keyboard.svelte';
	import Modal from '../components/Modal.svelte';
	import { isModalVisible, isDarkMode } from '../store';
</script>

<main id="app" class={`${$isDarkMode ? 'dark' : ''} w-screen flex flex-col`}>
	<Nav />
	<Board />
	<Keyboard />
	{#if $isModalVisible}
		<Modal />
	{/if}
</main>
