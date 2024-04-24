# SQL
> **SQL** (англ. structured query language — «язык структурированных запросов») — декларативный язык программирования, применяемый для создания, модификации и управления данными в реляционной базе данных, управляемой соответствующей системой управления базами данных.
---
> **DML** – Data Manipulation Language – это группа операторов для манипуляции данным
---
> **Data Definition Language (DDL)** (язык описания данных) — это семейство компьютерных языков, используемых в компьютерных программах для описания структуры баз данных.
---
> **Data Control Language (DCL)** — подмножество языка управления базами данных SQL, предназначенное для осуществления административных операций, присваивающих или отменяющих право (привилегию) использовать базу данных, таблицы и другие объекты базы данных, а также выполнять те или иные операторы SQL.
---
> **TCL - Transaction Control Language.** Язык управления транзакциями:
---
## Создание таблиц
https://postgrespro.ru/docs/postgresql/15/sql-select

```sql
DROP DATABASE hexlet;
CREATE DATABASE hexlet;
```
```sql
DROP DATABASE hexlet -- удаляет базу данных с именем hexlet
CREATE DATABASE hexlet -- создает базу данных с таким же именем
```
создание
CREATE TABLE courses (
    name          varchar(255),
    slug          varchar(255),
    lessons_count integer,
    body          text
);

varchar — для строк с ограничением максимальной длины
text — для строк без ограничения. Как правило, это полноценные тексты

integer	типичный выбор для целых чисел	-2147483648 .. +2147483647
bigint	целое в большом диапазоне	-9223372036854775808 .. 9223372036854775807

timestamp	дата и время (без часового пояса)	4713 до н. э.	294276 н. э.	1 микросекунда
date	дата (без времени суток)	4713 до н. э.	5874897 н. э.	1 день
time	время суток (без даты)	00:00:00	24:00:00	1 микросекунд

boolean	true или false (истина или ложь)

TRUE 't' 'true' 'y' 'yes' 'on' '1'
FALSE 'f' 'false' 'n''no''off''0'

Помимо типов данных для реальных значений, в базе существует специальное значение NULL, чтобы обозначать пустоту.

---

## Вставка и модификация данных
https://postgrespro.ru/docs/postgresql/15/ddl-alter#id-1.5.4.8.11

INSERT — запрос на вставку данных
-- Числовое значение указывается без дополнительных символов,
-- а строковые взяты в одинарные кавычки
INSERT INTO courses (name, slug, lessons_count, body)
VALUES ('basics of programming', 'basics', 10, 'this is theory');

CREATE TABLE cars (
    user_first_name varchar(255),
    brand varchar(255),
    model varchar(255)
);

CREATE TABLE cars (
    user_first_name varchar(255),
    brand varchar(255),
    model varchar(255)
);

////
INSERT INTO cars VALUES ('arya', 'bmw', 'x5');
INSERT INTO cars VALUES ('arya', 'bmw', 'x3');
////
INSERT INTO article_categories (name) VALUES ('Интересное'), ('Популярное');

UPDATE — запрос на обновление данных
UPDATE courses SET body = 'updated!' WHERE slug = 'bash';

DELETE — запрос на удаление данных
DELETE FROM courses WHERE slug = 'bash';

TRUNCATE courses;
Он предназначен для полной очистки таблиц 
 
---

## Выборка данных

```sql
SELECT * FROM users --Этот запрос достает все содержимое таблицы users
SELECT t.id, t.name, t.description from edms_contour t; --использование псевдоминов
SELECT t.id "пример", t.name "имя", t.description "описание" from edms_contour t; --использование псевдоминов
```

```sql
SELECT
    username,
    created_at
FROM users
WHERE birthday < '2018-10-21'
ORDER BY birthday DESC -- сортировка, DESC - обратная
LIMIT 2;
```

---

## Первая нормальная форма


Первая нормальная форма сводится к трем правилам:

- Каждая ячейка таблицы может хранить только одно значение
- Все данные в одной колонке могут быть только одного типа
- Каждая запись в таблице должна однозначно отличаться от других записей

-- Первичный ключ только один на таблицу
CREATE TABLE products (
    id bigint PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    address varchar(255),
    item varchar(255),
    price numeric -- специальный тип данных, который подходит под работу с деньгами. Обеспечивает высокую точность при расчетах.
);

---

## Вторая нормальная форма

Вторая нормальная форма включает в себя два требования:
Таблица должна быть в первой нормальной форме
Все неключевые атрибуты таблицы должны зависеть от первичного ключа:
Каждая ячейка хранит только одно значение
Все данные в одной колонке одного типа
Каждая запись отличается от других записей

Зависимость от первичного ключа

REFERENCES <название таблицы, на которую смотрим> (<список полей в той таблице, которым соответствуем>)

-- Внешних ключей может быть любое количество: сколько ссылок — столько и ключей
CREATE TABLE orders (
    id bigint PRIMARY KEY,
    -- Тип внешнего ключа должен быть такой же,
    -- как у первичного в той таблице, куда ссылается внешний
    user_id bigint REFERENCES users (id),
    -- остальные поля
);

---

## Третья нормальная форма


CREATE TABLE orders (
    id bigint PRIMARY KEY,
    -- Тип внешнего ключа должен быть такой же,
    -- как у первичного в той таблице, куда ссылается внешний
    user_id bigint REFERENCES users (id),
    -- остальные поля
);

---

## Автоинкремент

CREATE TABLE colors (
  -- Одновременное использование и первичного ключа и автогенерации
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(255)
);

INSERT INTO colors (name) VALUES ('Red'), ('Blue');

SELECT * FROM colors;

Вот его структура из документации:
column_name type GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY[ ( sequence_option ) ]

---

## Ограничения

Not Null
CREATE TABLE products (
    id bigint PRIMARY KEY,
    name text NOT NULL,
    price numeric
);

UNIQUE
CREATE TABLE products (
    id bigint PRIMARY KEY,
    name text UNIQUE,
    price numeric
);

---

## Изменение структуры таблицы (ALTER)

Наиболее распространенные команды:

ADD — добавление ограничения: например, ключа или уникальности
SET — установка значения: например, типа данных
DROP — удаление ограничения

-- в таблице "users"
-- добавить колонку с именем "age" и типом "int"
ALTER TABLE users ADD COLUMN age int;

-- в таблице "courses"
-- изменить колонку "example1":
-- поменять имя с "example1" на "example2"
ALTER TABLE courses RENAME COLUMN example1 TO example2;

-- в таблице "courses"
-- удалить колонку с именем "example2"
ALTER TABLE courses DROP COLUMN example2;

ALTER TABLE addresses
    ADD PRIMARY KEY (id);

ALTER TABLE addresses
    ALTER COLUMN created_at SET DATA TYPE timestamp,
    ALTER COLUMN street DROP NOT NULL;

-- Добавление ограничения NOT NULL в таблицу addresses для колонки city
ALTER TABLE addresses
    ALTER COLUMN city SET NOT NULL;

-- Добавление уникального индекса в таблицу "products" для колонки "product_id"
ALTER TABLE products ADD UNIQUE (product_id);

пример из теста
ALTER TABLE users
ADD UNIQUE (email),
ADD COLUMN created_at timestamp;
ALTER TABLE users RENAME COLUMN name TO first_name;
ALTER TABLE users DROP COLUMN age;
ALTER TABLE users ALTER COLUMN first_name SET NOT NULL;

---

## Сортировка (ORDER)

SELECT * FROM users ORDER BY username;
Прямой порядок сортировки
Если ничего дополнительно не указывать, то ORDER BY сортирует в прямом порядке — от меньшего к большему.

Чтобы выполнить сортировку в обратном порядке, указывается DESC:
SELECT * FROM users ORDER BY created_at DESC;

Сортировка по нескольким полям
SELECT * FROM users ORDER BY first_name, created_at;

SELECT * FROM users ORDER BY first_name DESC, created_at DESC;
SELECT first_name, created_at FROM users ORDER BY first_name ASC, created_at DESC;

-- сортируем по возрастанию даты (поле "created_at")
-- поведение по умолчанию:
-- поля, которые содержат NULL, идут последними
SELECT * FROM users ORDER BY created_at ASC;
-- сортируем по возрастанию даты (поле "created_at")
-- поля, которые содержат NULL, идут первыми
SELECT * FROM users ORDER BY created_at ASC NULLS FIRST;

Сортировка NULL-значений
-- сортируем по убыванию даты (поле "created_at")
-- поведение по умолчанию:
-- поля, которые содержат NULL, идут первыми
SELECT * FROM users ORDER BY created_at DESC;
-- сортируем по убыванию даты (поле "created_at")
-- поля, которые содержат NULL, идут последними
SELECT * FROM users ORDER BY created_at DESC NULLS LAST;

---

### Условия (WHERE)

-- выбрать всех пользователей с идентификатором, НЕ равным трем
SELECT * FROM users WHERE id != 3;

-- Проверка на равенство с NULL
SELECT * FROM users WHERE first_name IS NULL;
SELECT * FROM users WHERE created_at IS NOT NULL;

-- Равенство строк
SELECT * FROM users WHERE first_name = 'sunny';
SELECT * FROM users WHERE first_name = 'Sunny';

> — больше
< — меньше
!= — не равно
>= — больше либо равно, не меньше
<= — меньше либо равно, не больше

SELECT *
  FROM users
  WHERE first_name = 'Sunny' OR (created_at > '2018-01-01' AND created_at < '2018-10-05');
  
-- BETWEEN
SELECT *
  FROM users
  WHERE created_at BETWEEN '2018-01-01' AND '2018-10-05';
  -- WHERE created_at >= '2018-01-01' AND created_at <= '2018-10-05';

IN
SELECT * FROM users WHERE id = 1 OR id = 2 OR id = 5;
SELECT * FROM users WHERE id IN (1, 2, 5);
SELECT * FROM users WHERE id NOT IN (1, 2, 5);

LIKE
SELECT * FROM users WHERE first_name LIKE 'A%';
SELECT * FROM users WHERE email LIKE '%hotmail.com';

Обратите внимание на то, что этот поиск регистрозависимый. Если вы хотите искать без учета регистра, то используйте ILIKE.

---

##  Лимит (LIMIT)

SELECT * FROM users ORDER BY id LIMIT 10;
через пагинацию
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 10;

---

## DISTINCT

Чтобы имена из примера выше не дублировались, сделаем такой запрос:
SELECT DISTINCT first_name FROM users;

SELECT COUNT(DISTINCT first_name) FROM users;
Такой запрос покажет количество уникальных имен.

---

## ФУНКЦИИ

SELECT COUNT(*) FROM users WHERE birthday < '2018-10-21';

 count
-------
    91
(1 row)

SELECT MAX(birthday) FROM users WHERE gender = 'male';

    max
------------
 2018-12-06
 (1 row)

SELECT MIN(birthday) FROM users WHERE gender = 'female';

    min
------------
 2017-12-08
 (1 row)

-- Получить сумму всех заказов из таблицы orders,
-- которые были совершены в 2016 году
SELECT SUM(amount) FROM orders
  WHERE created_at BETWEEN '2016-01-01' AND '2016-12-31';

-- Получить среднюю стоимость всех заказов из таблицы orders,
-- которые были совершены в 2016 году.
SELECT AVG(amount) FROM orders
  WHERE created_at BETWEEN '2016-01-01' AND '2016-12-31';

---

## Группировка (GROUP)

SELECT user_id, COUNT(*) FROM topics GROUP BY user_id;

SELECT user_id, COUNT(*) FROM topics GROUP BY user_id ORDER BY count DESC LIMIT 3;

SELECT user_id, COUNT(*) AS topics_count
  FROM topics
  GROUP BY user_id
  ORDER BY topics_count DESC
  LIMIT 3;

SELECT user_id, COUNT(*) FROM topics
  GROUP BY user_id
  HAVING COUNT(*) > 1;

/// test

SELECT
    EXTRACT(year FROM birthday) AS year_of_birthday,
    COUNT(*) AS count
FROM users
WHERE birthday IS NOT NULL
GROUP BY year_of_birthday
ORDER BY year_of_birthday;
-- END

---

## Соединения (JOINS)
https://postgrespro.ru/docs/postgresql/15/tutorial-join

-- В выборке участвуют не все поля только для того, чтобы уместить
-- ее на экран, а вообще здесь можно использовать `*`
SELECT first_name, title
  FROM users JOIN topics ON users.id = topics.user_id LIMIT 5;

 first_name |            title
------------+------------------------------
 Sean       | beatae voluptatem commodi
 Wyatt      | tempora accusamus nostrum
 Oleta      | eaque fugiat consequatur
 Brandon    | aut exercitationem expedita
 Domenica   | voluptatem soluta similique

Общий синтаксис выглядит так:
SELECT * FROM table1 JOIN table2 ON table1.id_field_name = table2.id_field_name

JOIN — это сокращенная версия соединения INNER JOIN, то есть внутреннего соединения.

SELECT first_name, title FROM users
  LEFT JOIN topics ON users.id = topics.user_id LIMIT 5;

first_name |            title
------------+------------------------------
 Sean       | beatae voluptatem commodi
 Wyatt      | tempora accusamus nostrum
 Mia        |
 Royal      |
 Enos       | et eos dicta

SELECT COUNT(*)
  FROM users
  LEFT JOIN topics ON users.id = topics.user_id
  WHERE title IS NULL;


///test///

SELECT
    topics.id,
    users.first_name
FROM topics
INNER JOIN users ON topics.user_id = users.id
WHERE users.email LIKE '%@lannister.com'
ORDER BY topics.created_at;


---

## Транзакционность ==0_0_*_*_*_0_0==

BEGIN;
SELECT amount FROM accounts WHERE user_id = 10;
UPDATE accounts SET amount = amount - 50 WHERE user_id = 10;
UPDATE accounts SET amount = amount + 50 WHERE user_id = 30;
COMMIT;

ACID: атомарность, согласованность, изолированность и устойчивость. 

//test//
BEGIN;
INSERT INTO friendship (user1_id, user2_id) VALUES (7, 2), (2, 7);
COMMIT;

---

## Производительность ==0_0_*_*_*_0_0==

https://postgrespro.ru/docs/postgresql/15/indexes-types

EXPLAIN SELECT * FROM users
  JOIN topics ON users.id = topics.user_id
  WHERE users.created_at > '10.10.2018';
  
-- Пример создания индекса по полю birthday таблицы users
CREATE INDEX ON users(birthday);

EXPLAIN
Денормализация
Индексы
 
////// TEST /////

CREATE TABLE users (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username varchar(255) NOT NULL UNIQUE,
    email varchar(255) NOT NULL,
    created_at timestamp NOT NULL
);

CREATE TABLE topics (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id bigint REFERENCES users (id),
    body text NOT NULL,
    created_at timestamp NOT NULL
);

////////

SELECT * FROM users WHERE created_at >= '2018-11-23' AND created_at <= '2018-12-12' OR house = 'stark' ORDER BY created_at DESC;
--
SELECT * FROM users
WHERE birthday < '2002-10-03' ORDER BY first_name LIMIT 3 OFFSET 2;
--
SELECT DISTINCT house FROM users ORDER BY house;
--
SELECT COUNT(*) FROM users WHERE house = 'stark';
























