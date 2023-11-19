<div class="header container">
	<div class="header__logo">ПОРТАЛ ПОИСКА ПРОПАВШИХ ЛЮДЕЙ</div>
	<div class="header__list">
		<a class="header__item" href="/">Главная</a>
		<a class="header__item" href="/form">Отправить анкету</a>
		<a class="header__item" href="/anketsPage">Управление поиском</a>
		<a class="header__item" href="/news">Новости</a>
	</div>
</div>

<style>
	.header {
		width: 100%;
		/* background-color: #44b09e;
        background-image: linear-gradient(#44b09e 0%, #FFF 100%); */
	}

	.header__logo {
		color: #ccc;
		font-size: 30px;
		font-style: bold;
		text-align: center;
		padding: 50px;
		background: url('/imgs/form-bg.jpg') bottom;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.header__list {
		display: flex;
		justify-content: center;
		border-top: 1px solid #000;
		/* border-bottom: 1px solid #aaa; */
		background: rgb(226, 255, 234);
		/* background: linear-gradient(
			170deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(128, 200, 143, 1) 50%,
			rgba(15, 97, 113, 1) 100%
		); */
	}

	.header__item {
		font-size: 20px;
		padding: 10px;
		transition: 0.3s all;
		color: #000;
		text-decoration: none;
		text-align: center;
	}

	.header__item:hover {
		background: rgb(179, 204, 186);
		cursor: pointer;
	}
</style>
