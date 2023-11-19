<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	import { bdAnkets } from '../../store/store';
	import { onDestroy } from 'svelte';

	let n = [];
	let ankets = [];
	const unsubscribe = bdAnkets.subscribe((value) => (ankets = value));
	let inpname = '';
	let inpage = '';
	let inpheight = '';
	let inpcity = '';
	let inpfeat = '';
	let inpImage = '';

	function onClick() {
		
		if (
			inpname.length &&
			inpage.length &&
			inpheight.length &&
			inpcity.length &&
			inpfeat &&
			inpImage
		) {
			inpImage = inpImage.replace(/.*[\/\\]/, '')
			console.log(inpImage);
			
			$bdAnkets.unshift({
				fio: inpname,
				age: inpage,
				height: inpheight,
				city: inpcity,
				description: inpfeat,
				image: inpImage
			});
			bdAnkets.update((n) => $bdAnkets);
			console.log($bdAnkets);
			inpname = '';
			inpage = '';
			inpheight = '';
			inpcity = '';
			inpfeat = '';
			inpImage = '';
		}
	}
	onMount(() => {
		if (localStorage.key('test')) {
			console.log(1233444);
		}
	});
    console.log($bdAnkets);
</script>

<div class="immg">
	<div class="als">
		<h2 class="title">Форма анкеты</h2>
		<div class="forCenter">
			<div>
				<input class="photo" type="file" bind:value={inpImage} />
			</div>
			<div class="FVR">
				<div>
					<input bind:value={inpname} type="text" placeholder="ФИО" style="width: 100%;" />
				</div>
				<div>
					<input bind:value={inpage} type="text" placeholder="Возраст" style="width: 100%;" />
				</div>
				<div>
					<input bind:value={inpheight} type="text" placeholder="Рост" style="width: 100%;" />
				</div>
				<div>
					<input bind:value={inpcity} type="text" placeholder="Город" style="width: 100%;" />
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="features">
				<textarea
					class="features__textarea"
					bind:value={inpfeat}
					placeholder="Общие черты"
					rows="5"
					id="TITLE"
				/>
			</div>

			<button class="f" on:click={onClick}>Отправить</button>
		</div>
	</div>
</div>

<style>
	.immg {
		/* background: url('/img/bcgrnd.png'); */
		background-repeat: no-repeat;
		background-size: cover;
		margin: none;
		padding: 15px;
		font-size: 16px;
        background: rgb(223, 223, 223);
	}
	.f {
		outline: none;
		border-radius: 10px;
		margin: 10px;
		width: 200px;
		margin-bottom: 40px;
		background: rgb(223, 223, 223);
		border: rgb(223, 223, 223) 2px solid;
		height: 40px;
		transition: all 0.3s;
	}
	.f:hover {
		background: rgb(226, 255, 234);
		cursor: pointer;
	}
	.title {
		text-align: center;
		padding: 40px 0;
		/* background: url('/img/todoimg.png'); */
		border-bottom: 2px solid black;
		margin-block: 0;
	}
	.FVR {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 60%;
	}
	.photo {
		height: 100%;
		background: #fff;
		color: #FFF;
	}
	.features {
		display: flex;
		margin-top: 20px;
		justify-content: center;
		width: 100%;
		margin: 10px;
	}
	.bottom {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}
	.als {
		max-width: 600px;
		margin: 0px auto;
		border: 2px solid black;
		border-radius: 20px;
		overflow: hidden;
		/* background: url('/img/todoimg.png'); */
		background: rgb(226, 255, 234);
	}
	.forCenter {
		padding-top: 25px;
		display: flex;
		justify-content: space-between;
		margin: 10px auto;
		max-width: 800px;
		width: 90%;
		gap: 10px;
		
	}
	input,
	textarea {
		border-radius: 5px;
		border: 2px solid rgb(179, 204, 186);;
		height: 30px;
	}
	input:focus-visible,
	textarea:focus-visible {
		outline: none;
	}
	.features__textarea {
		max-width: 800px;
		width: 90%;
		height: 100px;
	}
</style>
