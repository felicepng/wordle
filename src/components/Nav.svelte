<nav
	class="bg-animate text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 via-teal-500 to-indigo-600 flex justify-center text-3xl sm:text-4xl font-semibold italic tracking-wide py-3 border-b border-gray-700"
>
	wordle!
</nav>

<style>
	.bg-animate {
		background-size: 150%;

		-webkit-animation: Animation 5s ease infinite;
		-moz-animation: Animation 5s ease infinite;
		animation: Animation 5s ease infinite;
	}

	@keyframes Animation {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
</style>
