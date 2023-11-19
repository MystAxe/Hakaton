<script>
    export let inpname;
    export let inpage
    export let inpheight
    export let inpcity
    export let inpfeat
    export let inpImage
</script>
<div class="anket">
    <div class="anket__info">
        <div class="anket__img"><img src="imgs/{inpImage}" alt=""></div>
        <div class="anket__short">
            <div class="anket__name">ФИО: {inpname}</div>
            <div class="anket__age">Возраст: {inpage}</div>
            <div class="anket__height">Рост: {inpheight}</div>
            <div class="anket__city">Город: {inpcity}</div>
        </div>
    </div>
    <div class="anket__descr">{inpfeat}</div>
</div>

<style>
    .anket {
        border-radius: 10px;
        border: 1px solid #aaa;
        padding: 10px;
    }

    .anket__info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .anket__img {
        width: 45%;
        display: flex;
    }

    .anket__img img {
        height: 100px;
        width: auto;
        margin: 0 auto;
    }

    .anket__short {
        width: 45%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>