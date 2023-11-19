<script>
	import Anket from '$lib/components/Sidebar/Anket.svelte';
</script>

<div class="sidebar">
	<h3 class="sidebar__title">Последние анкеты</h3>
	<a class="sidebar__link" href="/form">Отправить анкету</a>
	<div class="anket">
		<div class="anket__image-wrapper">
			<img class="anket__image" src="imgs/1lost.png" alt="">
		</div>
		<div class="anket__short-text">
			ФИО: Хаманчук Валерия Олеговна <br>
			Возраст: 35 <br>
			Рост: 172 <br>
			Город: Электросталь
		</div>
	</div>
	<div class="anket">
		<div class="anket__image-wrapper">
			<img class="anket__image" src="imgs/2lost.png" alt="">
		</div>
		<div class="anket__short-text">
			ФИО: Кузнецов Дмитрий Сергеевич <br>
			Возраст: 72 <br>
			Рост: 169 <br>
			Город: Алматы
		</div>
	</div>
	<div class="anket">
		<div class="anket__image-wrapper">
			<img class="anket__image" src="imgs/3lost.png" alt="">
		</div>
		<div class="anket__short-text">
			ФИО: Руднов Тимон Адольфович <br>
			Возраст: 23 <br>
			Рост: 195 <br>
			Город: Новый Уренгой
		</div>
	</div>
</div>

<style>
	.sidebar {
		width: 25%;
		/* border-right: 1px solid #aaa; */
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		background: rgb(226, 255, 234);
		/* background: linear-gradient(
			150deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(128, 200, 143, 1) 50%,
			rgba(15, 97, 113, 1) 100%
		); */
	}
	.sidebar__title {
		text-align: center;
		margin-block: 10px;
	}
	.sidebar__link {
		color: #000;
		text-align: center;
	}
	.anket {
        border: 2px solid #AAA;
        padding: 5px;
        border-radius: 10px;
    }
    .anket__image-wrapper {
        width: 100%;
		display: flex;
        height: auto;
    }
    .anket__image {
        margin: 0 auto 10px;
        height: 100px;
        background: #AAA;
    }
</style>
