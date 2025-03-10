# PYTHON
[раздел "Операции](#Операции) | [раздел "Условия](#Условия)

[раздел "Переменные"](#Переменные)

[раздел "СТРОКИ"](#СТРОКИ)

[раздел "ТИППЫ ДАННЫХ"](#ТИППЫ-ДАННЫХ) | [раздел "Преобразование ДАННЫХ"](#Преобразование-ДАННЫХ)

[раздел "Математика"](#Математика)

[раздел "Функции"](#Функции) | [Циклы](#Циклы) | [For](#For) | [Интерактив](#Интерактив)

[раздел "Модули"](#Модули)

[раздел "Кортежи"](#Кортежи)

## Операции

```
- — вычитание
* — умножение
** — возведение в степень
/ — деление
// — целочисленное деление
% — остаток от деления
```

Список операций сравнения:

```
< — меньше
<= — меньше или равно
> — больше
>= — больше или равно
== — равно
!= — не равно
```
## Условия

```python
not
and
or +
```

Функция is_infant() — это функция-предикат или функция-вопрос. Предикат отвечает на вопрос «да» или «нет», возвращая значение типа bool. Предикаты во всех языках принято именовать особым образом для простоты анализа. В Python предикаты начинаются с префикса is или has

Функция считается предикатом, если она возвращает булевы значения True или False.

## Переменные

```python
greeting = 'Father!'
print(greeting)
```
Константа создается так же, как переменная. Разница только в том, что константы принято именовать заглавными буквами и с _ в качестве разделителя между словами. 
Константа, как и переменная, может использоваться в любом выражении.

Переменные в Python именуются в стиле snake_case: слова записываются строчными буквами и разделяются символом подчеркивания _. 

```python
# узнать тип
type()

# integer
trees = 10

# float
pi = 3.1415926535897932384626433832795

# bool
raining = True
```
## Преобразование ДАННЫХ

```python
print('int to float:', a, '->', float(a))
print('int to bool: ', a, '->', bool(a))
print()

print('float to int: ', b, '->', int(b))
print('float to bool:', b, '->', bool(b))
print()

print('bool to int:  ', c, '->', int(c))
print('bool to float:', c, '->', float(c))

аналогично со строками
years = int(input('Введите количество лет:'))
percent = float(input('ведите процентную ставку:'))
```
## СТРОКИ

**интерполяция**

```python
first_name = 'Joffrey'
greeting = 'Hello'

print(f'{greeting}, {first_name}!')
# => Hello, Joffrey!
```

**multi-line строки**
```python
text = '''Пример текста,
состоящего из
нескольких строк'''
```

Подстрока и срезы для строк

```python
value = 'Hexlet'
value[::] = 'Hexlet'  # Вся строка
value[:] = 'Hexlet'  # Вся строка
value[::2] = 'Hxe'  # Нечетные по порядку символы
value[1::2] = 'elt'  # Четные по порядку символы
value[::-1] = 'telxeH'  # Вся строка в обратном порядке
value[5:] = 't'  # Строка, начиная с шестого символа
value[:5] = 'Hexle'  # Строка до шестого символа
value[-2:1:-1] = 'elx'  # Все символы с предпоследнего до третьего в обратном порядке. Во всех случаях выборки от большего индекса к меньшему нужно указывать шаг
```

```python
len(name) # длинна строки

'Hexlet'.upper()  # 'HEXLET'

name = 'Python'
# Возвращает индекс первого вхождения буквы в строку
name.find('t')  # 2

# Переводит в нижний регистр
name.lower()  # 'python'

# Заменяет одну подстроку другой
name.replace('on', 'off')  # 'Pythoff'

strip() # вырезаем пробелы по краям


```

## ТИППЫ ДАННЫХ

Python — один из языков, который строго относится к типам данных. Поэтому на любую несовместимость типов он ответит ошибкой. Все дело в сильной типизации.

### Явное преобразование типов

```python
# str станет int
number = int('345')
print(number)  # => 345

value = str(10)
print(value)  # '10'

value2 = str(True)
print(value2)  # 'True'

value3 = float(5)
print(value3)  # 5.0

# Неявно выполняется код float(3) + 1.2
value = 3 + 1.2
print(value)  # => 4.2

type() # определение типа

# Аннотации типов 
def concat(first: str, second: str) -> str:
    return first + second

def double(n: int) -> int:
    result: int = n * 2
    return result
```

## Математика

```python
pow(x, y[, z]) ### возведение в степень
result = round(10.25, 0)  # 10.0
Функция abs() делает число неотрицательным

# Функция, которая возвращает случайное число
random()  # 0.09856613113197676

x = -5
abs(x)  # вызывает x.__abs__()
# -5 в 3 степени
pow(x, 3)  # вызывает x.__pow__(3)
```

## Функции

```python
# Второй параметр имеет значение по умолчанию два
def pow(x, base=2):
    return x ** base
```
Тело функции может быть пустым, тогда внутри него используется ключевое слово pass

### Условные окнструкции

```python
def get_type_of_sentence(sentence):
    last_char = sentence[-1]

    if last_char == '?':
        sentence_type = 'question'
    elif last_char == '!':
        sentence_type = 'exclamation'
    else:
        sentence_type = 'normal'

    return 'Sentence is ' + sentence_type

print(get_type_of_sentence('Who?'))  # => 'Sentence is question'
print(get_type_of_sentence('No'))    # => 'Sentence is normal'
print(get_type_of_sentence('No!'))   # => 'Sentence is exclamation'

### ### ### ### ###

def normalize_url(url):
    https = 'https://'
    if url[:8] == https:
        return url
    elif url[:7] == 'http://':
        return https + url[7:]
    else:
        return https + url

```

### Тернарный оператор

```python
def abs(number):
    return number if number >= 0 else -number
```

### Оператор match

```python
def match_input(input):
    match input:
        case 'start' | 'begin':
            print('Starting...')
        case 'stop' | 'end':
            print('Stopping...')
        case 'pause':
            print('Pausing...')
        case _:
            print('Invalid input')

match_input('begin')  # => Starting...
match_input('stop')  # => Stopping...
match_input('pause')  # => Pausing...
match_input('test')  # => Invalid input
```

проверка типов
```python
def get_type(val):
    match val:
        case str(val):
            print(f'It is a string: {val}')
        case int(val):
            print(f'It is an integer: {val}')
        case _:
            print("I don't know this type")

get_type('hello')  # => It is a string: hello
get_type(123)  # => It is an integer: 123
get_type(None)  # => I don't know this type

```

### Циклы

```python
def print_numbers(last_number):
    i = 1
    # Этот цикл никогда не остановится
    # и будет печатать всегда одно значение
    while i <= last_number:
        print(i)
    print('finished!')
```

```python
### проверяем есть ли символ, вне зависимости от регистра
def has_char(string, char):
    index = 0
    uppercase_char = char.upper()
    while index < len(string):
        if string[index].upper() == uppercase_char:
            return True
        index += 1
    return False
```

### For

У range() есть несколько вариантов использования:

* range(stop) создает последовательность от 0 до stop - 1
* range(start, stop) создает последовательность от start до stop - 1
* range(start, stop, step) создает последовательность из чисел от start до stop - 1, с шагом step

```python
for i in range(1, 4):
    print(i)
```
с текстом
```python
text = 'code'
for symbol in text:
    print(symbol)
```
проверяем, полидром ли слово

```python
def is_palindrome(word):
    for i in range(0, len(word)):
        if word[i] != word[len(word)-1-i]:
            return False
    return True

def is_palindrome(string):
    pointer1 = 0
    pointer2 = len(string) - 1
    while pointer2 - pointer1 > 0:
        if string[pointer1] != string[pointer2]:
            return False
        pointer1 += 1
        pointer2 -= 1
    return True


# Alternative solution
#  def is_palindrome(string):
#      return string == string[::-1]
```

## Модули

```python
# file: main.py
import greeting

# вызываем функцию модуля
greeting.say_hi()  # => Hi!

# выводим на экран отдельную переменную
print(greeting.name)  # => Bob

```

```python
# file: main.py
from greeting import say_hi, name # импортируем отдельные компоненты модуля

print(name)  # используем импортированную переменную
say_hi()     # вызываем импортированную функцию

# file: main.py
from greeting import say_hi as hello, name as first_name

print(first_name)
hello()
```
## Интерактив

```python
#запрос итнфо в переменную
name = input('Введите Ваше имя: ')
print('Добрый день, ', name)
```

## Кортежи

Кортеж (tuple) — это несколько значений, записанных через запятую. 

```python
tuple = (42,) # Ставим запятую, чтобы указать на кортеж
```

```python
# Также этот процесс может называться деструктуризацией или распаковкой.
name_and_age = ('Bob', 42)
(name, age) = name_and_age
name  # 'Bob'
age   # 42
```

```python
(a, b, c) = (1, 2, 3)
```









