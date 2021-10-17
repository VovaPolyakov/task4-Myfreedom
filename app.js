//Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)


// console.log(`С помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);


//Задание 2
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).


// for (let li of document.querySelectorAll('#list li ')) {
//     console.log(li.innerText);
// };

//Задание 3 
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)


// let listElements = document.querySelectorAll('li')

// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].innerText = i;
// };


//Задание 4
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, 
// содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. 
// Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
// function createElement(tag, color, text) {

//     let elem = document.createElement(tag);

//     elem.style.color = color;

//     elem.innerText = text;

//     document.body.appendChild(elem);

// }

// createElement('div', 'red', '123')



// Задание 5

// Создать с помощью js абзац (тег p). Добавить в него контент. 
// Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.




// function createElement() {
//     let elem = document.createElement('p');
//     elem.innerText = '123';
//     elem.style.fontSize = '36';
//     elem.style.fontWeight = 'bold';
//     document.body.appendChild(elem);

// };

// createElement();

// Задание 6

// Вставить в страницу (в html документ) тег <select>.
// С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.


// let elem = document.createElement('select');
// document.body.appendChild(elem);
// for (let i = 1960; i <= 2020; i++) {
//     let option = document.createElement('option');
//     option.innerText = i;
//     elem.appendChild(option)
// }




// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];
// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта 
// (а объект здесь - это текущая ячейка массива), 
// статус зависит от от свойства order: если true – то оплатил, если false – то отменил.


// let mas = [{
//     name: "Женя", order: true
// },
// {
//     name: "Кристина", order: true
// },
// {
//     name: "Павел", order: false
// },
// {
//     name: "Виолетта", order: false
// },
// {
//     name: "Костя", order: true
// }];

// function getInfo() {
//     let listElements = document.querySelectorAll('li')
//     for (let i = 0; i < mas.length; i++) {
//         if (mas[i].order) {
//             listElements[i].innerText = `Клиент ${mas[i].name} оплатил заказ`;
//         } else {
//             listElements[i].innerText = `Клиент ${mas[i].name} отменил заказ`;
//         }
//     }
// }

// getInfo();

// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 
// 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY


// let linksArr =
//     ['https://www.onliner.by/', 'https://www.youtube.com/',
//         'https://vk.com/', 'https://www.google.com/',
//         'https://yandex.ru/'
//     ];

// function getInfo() {
//     let elem = document.createElement('div');
//     elem.style.background = 'red';
//     elem.style.padding = '10px';
//     document.body.appendChild(elem);

//     for (let i = 0; i < linksArr.length; i++) {
//         let tag = document.createElement('a');
//         tag.innerText = linksArr[i];
//         tag.style.display = 'block';
//         tag.setAttribute('href', linksArr[i]);
//         tag.setAttribute('target', "_blank");
//         elem.appendChild(tag);
//     }
// }

// getInfo();


// Задание 9

// Добавить к нескольким тегам на странице класс "forRemove". 
// Далее написать JS код, который найдет в 
// HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

// function Remove() {
//     let elem = document.getElementsByClassName('forRemove');
//     console.log(elem)
//     for (item of elem) {
//         item.remove();
//     }
// }
// Remove();

// Задание 10*

// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
// заполненную этими объектами. Name должно быть красного цвета, age - зеленого.



// let mas = [
//     { name: 'Vova', age: 20 },
//     { name: 'Andew', age: 24 },
//     { name: 'Vlad', age: 26 },
//     { name: 'Olga', age: 30 }
// ];

// function createTable() {
//     let table = document.createElement('table');
//     table.setAttribute('border', '1px')
//     for (let i = 0; i < mas.length; i++) {
//         let tr = document.createElement('tr');
//         let td = document.createElement('td');
//         let tdTwo = document.createElement('td');
//         td.innerText = mas[i].name;
//         tdTwo.innerText = mas[i].age;
//         td.style.color = 'red';
//         tdTwo.style.color = 'green';
//         tr.appendChild(td);
//         tr.appendChild(tdTwo);
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// };

createTable();
