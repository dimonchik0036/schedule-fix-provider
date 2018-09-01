# Фикс спец. курсов для [расписания](https://table.nsu.ru/faculty/fit) 3 курса

## Инструкция
* Добавьте [этот](fit_schedule.js) скрипт на страницу расписания своей группы  
* В конец скрипта раскомментируйте вызовы функций `removeLessonEntries` и `addLessonEntries` и передайте им необходимые предметы через запятую   

## Пример
Рассмотрим обычное расписание:  
![До](https://user-images.githubusercontent.com/22503910/44948100-2d8ba080-ae42-11e8-91bd-add8998a2fdd.png)  
Теперь добавим в конец скрипта:  
```javascript
removeLessonEntries("ТООИ", "УМП");
addLessonEntries("АСМиМ", "ЭПСМиМ");
```  
В результате получилось следующее расписание:  
![После](https://user-images.githubusercontent.com/22503910/44948101-2e243700-ae42-11e8-993e-ce135681aaed.png)  

Таким нехитрым методом можно добавлять и удалять любые предметы.

## Пример установки с помощью [Greasemonkey](https://www.greasespot.net/)
Некоторые другие дополнения можно посмотреть [здесь](http://userscripts.ru).  
* Выбираем пункт меню "New user script..."  
* Выбираем созданный скрипт и жмём "Edit"
* Содержимое страницы заменяем на
```javascript
// ==UserScript==
// @name     My schedule
// @version  1
// @include  https://table.nsu.ru/group/16205
// ==/UserScript==
```
попутно изменяя номер группы на свой  
* Вставляем код [скрипта](fit_schedule.js) после служебной информации
* Радуемся жизни  

Альтернативный вариант: [Tampermonkey](https://tampermonkey.net/)