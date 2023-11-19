import { writable } from "svelte/store";

export const bdAnkets = writable([
    {
        fio: "Хаманчук Валерия Олеговна",
        age: 35,
        height: 172,
        city: "Электросталь",
        description: "10.09 ушла из дома в детскую поликлинику и не вернулась. приметы: Глаза серые, телосложение обычное, немного склонное к полноте, волосы каштанового цвета. Была одета: в черные лосины, белые кеды, куртку белую в серо-черную клетку с капюшоном",
        image: "1lost.png",
    },
    {
        fio: "Кузнецов Дмитрий Сергеевич",
        age: 72,
        height: 169,
        city: "Алматы",
        description: "16.09.2023 года ушел из дома на рыбалку и не вернулся. Приметы: Глаза голубые, телосложение худощаевое, волосы седые, имеется лысина. Был одет: черная вязанная шапка, белый свитер, джинсы, черные ботинки",
        image: "2lost.png",
    },
    {
        fio: "Руднов Тимон Адольфович",
        age: 23,
        height: 195,
        city: "Новый ",
        description: "02.09.2023 года ушел из дома на вечеринку и не вернулся. Приметы: Глаза карие, телосложение худощаевое, волосы темные, на лице щетина. Был одет:  в черный жилет, джинсы, красные кроссовки",
        image: "3lost.png",
    }
])