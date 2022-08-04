<script>
	import Nav from '../components/Nav.svelte';
	import Board from '../components/Board.svelte';
	import Keyboard from '../components/Keyboard.svelte';
	import Modal from '../components/Modal.svelte';
	import { gameState, GameState } from '../store';
</script>

<main>
	<div class="bg-black h-screen w-screen">
		<Nav />
		<Board />
		<Keyboard />
	</div>

	{#if $gameState !== GameState.RUNNING}
		<Modal />
	{/if}
</main>
