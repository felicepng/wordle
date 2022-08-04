<script>
	import Nav from '../components/Nav.svelte';
	import Board from '../components/Board.svelte';
	import Keyboard from '../components/Keyboard.svelte';
	import Modal from '../components/Modal.svelte';
	import { isModalVisible, isDarkMode } from '../store';
</script>

<main class={`${$isDarkMode && 'dark'}`}>
	<div class="h-screen w-screen flex flex-col justify-between">
		<Nav />
		<Board />
		<Keyboard />
	</div>

	{#if $isModalVisible}
		<Modal />
	{/if}
</main>

<style>
	@font-face {
		font-family: 'VT323';
		src: url('/fonts/vt323.woff2') format('woff2'), url('/fonts/vt323.woff') format('woff'),
			url('/fonts/vt323.ttf') format('truetype'),
			url('/fonts/vt323.eot') format('embedded-opentype');
	}

	main {
		font-family: 'VT323';
	}
</style>
