# Фикс спец. курсов для [расписания](https://table.nsu.ru/faculty/fit) 3 курса

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

## Инструкция
* Добавьте [этот](fit_schedule.js) скрипт себе и измените в строке 
```javascript
//@include https://table.nsu.ru/group/16205
```
   номер группы на свой

* В конец скрипта раскомментируйте вызовы функций `removeLessonEntries` и `addLessonEntries` и передайте им необходимые предметы через запятую   

## Пример установки с помощью [Greasemonkey](https://www.greasespot.net/) (Firefox)  
Некоторые другие дополнения можно посмотреть [здесь](http://userscripts.ru).  
* Выберете пункт меню "New user script..."  
* Выберете созданный скрипт и нажмите на "Edit"  
* Замените содержимое страницы на код [скрипта](fit_schedule.js) и следуйте по инструкции выше  
* Сохраните скрипт  
* Радуйтесь жизни  

## Пример установки с помощью [Tampermonkey](https://tampermonkey.net/) (Chrome, Microsoft Edge, Safari, Opera Next, Firefox)  
* Выберите пункт меню "Создать новый скрипт..."  
* Замените содержимое страницы на код [скрипта](fit_schedule.js) и следуйте по инструкции выше  
* Сохраните скрипт  
* PROFIT  