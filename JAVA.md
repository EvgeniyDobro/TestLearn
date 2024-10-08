# Java
[раздел "Переменные и константы"](#Переменные-и-константы)

[раздел "Типы данных"](#Типы-данных)

[раздел "Арифметические операции"](#Арифметические-операции)

[раздел "Логические операции"](#Логические-операции)

[раздел "Условные конструкции"](#Условные-конструкции)

[раздел "Методы"](#Методы)   |  [раздел "Методы с текстом"](#Методы-с-текстом)

[раздел "Определение методов"](#Определение-методов) 

[раздел "Циклы"](#Циклы)

[раздел "Цикл for"](#Цикл-for) | [раздел "Инкремент и декремент"](#Инкремент-и-декремент)

[раздел "Пакеты"](#Пакеты)

Java является объектно-ориентированным языком. Он поддерживает полиморфизм, наследование, статическую типизацию. Объектно-ориентированный подход позволяет решить задачи по построению крупных, но в тоже время гибких, масштабируемых и расширяемых приложений.
Для разработки на языке программирования Java нам потребуется специальный комплект инструментов, который называется JDK или Java Development Kit. Однако стоит отметить, что существуют разные реализации JDK, хотя все они используют один и тот же язык - Java. Две наиболее популярных реализации - Oracle JDK и OpenJDK.

```java
/*
    многострочный комментарий
    Объявление нового класса,
    который содержит код программы
*/
public class Program{   // начало объявления класса Program
      
    // определение метода main
    public static void main (String args[]){    // объявление нового метода
          
         System.out.println("Hello Java!");     // вывод строки на консоль
    }   // конец объявления нового метода
} // конец объявления класса Program
```
## Переменные и константы

```java
int x = 8, y = 15; // инициализация
var z = 10; // альтернативный вариант переменной
final int LIMIT = 5; // константа
System.out.println(x);  // 8
System.out.println(y);  // 15
```

## Типы данных

| Тип     | Описание                                                                                  |
|---------|-------------------------------------------------------------------------------------------|
| boolean | хранит значение true или false                                                            |
| byte    | хранит целое число от -128 до 127 и занимает 1 байт                                       |
| short   | хранит целое число от -32768 до 32767 и занимает 2 байта                                  |
| int     | хранит целое число от -2147483648 до 2147483647 и занимает 4 байта                        |
| long    | хранит целое число от –9 223 372 036 854 775 808 до 9 223 372 036 854 775 807 и занимает 8 байт     |
| double  | хранит число с плавающей точкой от ±4.9*10-324 до ±1.7976931348623157*10308 и занимает 8 байт |
| float   | хранит целое число от -2147483648 до 2147483647 и занимает 4 байта                        |
| long    | хранит число с плавающей точкой от -3.4*1038 до 3.4*1038 и занимает 4 байта               |
| char    | хранит одиночный символ в кодировке UTF-16 и занимает 2 байта, поэтому диапазон хранимых значений от 0 до 65535 |

В качестве разделителя целой и дробной части в дробных литералах используется точка.

> Текстовые блоки, которые появились в JDK15, позволяют упростить написание многострочного текста:
```java
String text = """
                Вот мысль, которой весь я предан,
                Итог всего, что ум скопил.
                Лишь тот, кем бой за жизнь изведан,
                Жизнь и свободу заслужил.
                """;
System.out.println(text);
```
#### Преобразование типов
```java
var number = Integer.parseInt("345"); // текст в чилсо
var result = (int) 5.1;               //  когда надо перевести из примитивного в примитивный тип данных
```

## Арифметические операции
```java
System.out.println(8 / 2); // => 4
System.out.println(3 * 3 * 3); // => 27
System.out.println(7 % 2); // => 1
```

## Логические операции

|    | Описание  |
|----|-----------|
| <  | меньше |
| <= | меньше или равно |
| >  | больше |
| >= | больше или равно |
| == | равно |
| != | не равно |

Сравнения

```java

var name1 = "java".toUpperCase(); // "JAVA"
var name2 = "java".toUpperCase(); // "JAVA"
name1.equals(name2); // true

Помимо equals(), в строки встроен метод equalsIgnoreCase(), который выполняет проверку по значению без учета регистра:

var name1 = "java".toUpperCase(); // "JAVA"
var name2 = "java".toLowerCase(); // "java"
name1.equalsIgnoreCase(name2); // true

```

## Условные конструкции

```java
App.getTypeOfSentence("Who?"); // "Sentence is question"
App.getTypeOfSentence("No");   // "Sentence is general"
App.getTypeOfSentence("No!");  // "Sentence is exclamation"

public static String getTypeOfSentence(String sentence)
{
    var sentenceType = "";

    if (sentence.endsWith("?")) {
        sentenceType = "question";
    } else if (sentence.endsWith("!")) {
        sentenceType = "exclamation";
    } else {
        sentenceType = "general";
    }

    return "Sentence is " + sentenceType;
}

```

Тернарный оператор
```java
// Если больше нуля, то выдаем само число. Если меньше, то убираем знак
public static int abs(int number) {
    return number >= 0 ? number : -number;
}
```


## Методы

## Методы с текстом

```java
.length()                // длинна переданной строки

var company = "Hexlet";  // получение символа из строки
company.charAt(0)        // 'H'

var name = "fish \n";   // удаляем проблема по краям и переносы
name = name.trim();     // "fish"

.replace(" ", "-")            // заменяем дефисы вместо пробелов
.toLowerCase().toUpperCase() // в нижний регистр и верхний регистр

.substring(1)              // подстрока, все кроме первого символа
.substring(0,3)              // подстрока c первого по четвертый символ

 
```

## Определение методов

```java
import java.time.LocalDate;

// Определение метода
// Определение не вызывает и не выполняет метод
// Мы лишь говорим, что теперь такой метод существует
public class App {
    public static void showCurrentDate() {
        // Встроенный метод в Java для получения текущего времени и даты
        var currentDate = LocalDate.now();
        var text = "Today is: " + currentDate;
        System.out.println(text);
    }
}

// Вызов метода
// Обязательно указывать имя класса
App.showCurrentDate(); // => Today is: 2021-10-25
```

```java
class App {
    public static String greeting() {  // указываем тип возвращаемого значения 
        return "Winter is coming!";    // возвращаем значение
    }
}
```
задаем параметр у метода
```java
class App {
    // Метод по нахождению среднего числа
    // Возвращаемый тип — double, потому что
    // при делении может получиться дробное число
    public static double average(int x, int y) {
        return (x + y) / 2.0;
    }
}

App.average(1, 5); // 3.0
App.average(1, 2); // 1.5
```
ПЕРЕГРУЗКА МЕТОДОВ
```java
class App {
    public static int sum(int x, int y) {
        return x + y;
    }

    public static int sum(int x) {
        // Вызываем уже готовый метод суммирования
        return sum(x, 10);
    }
}
```

# Циклы

```java
public static void printNumbers(int lastNumber) {
    // i — это сокращение от index (порядковый номер)
    // Используется по общему соглашению во множестве языков как счетчик цикла
    var i = 1;

    while (i <= lastNumber) {
        System.out.println(i);
        i = i + 1;
    }
    System.out.println("finished!");
}
App.printNumbers(3);
```

Синтаксический сахар

```java
a = a + 1 → a += 1
a = a - 1 → a -= 1
a = a * 2 → a *= 2
a = a / 1 → a /= 1
a = a + "foo" → a += "foo"
```

## Цикл for

```java
public static String reverseString(String str) {
    var result = "";
    // Счетчик увеличивается с помощью инкремента.
    // Об этой операции мы поговорим ниже.
    for (var i = 0; i < str.length(); i++) {
        result = str.charAt(i) + result;
    }

    return result;
}
```

### Инкремент и декремент

```java
var x = 5;
//
System.out.println(++x); // => 6
System.out.println(x);   // => 6
//
System.out.println(x++); // => 6
System.out.println(x);   // => 7
```


## Пакеты

```java

// Файл io/hexlet/model/User.java
package io.hexlet.model;

public class User {
    public static String getGreeting(String userName) {
        return "Hello, " + userName + "!";
    }
}

//////////////////////
import io.hexlet.model.User;

```















