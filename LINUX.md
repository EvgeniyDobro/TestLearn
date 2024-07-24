<https://man7.org/linux/man-pages/man1/ssh.1.html>

# LINUX
[раздел "Процессы"](#процессы)
[раздел "Железо"](#железо)
[раздел "Работа с файлами"](#работа-с-файлами)

### процессы

```bash
ps -aux ### основная
ps -efL ### с потоками
```
```bash
top ### утилита
pstree ###  для поиска демонов
```
```bash
ctrl + z ... bg #### перевести в фон & узнать запущенные jobs
```

### Железо

```bash
df -h ### свободное место
du -h ### занимаемое место, по каталогам
```

### работа с файлами

```bash
mv ### переместить, переименовать 
ls ### просмотр файлов https://losst.pro/komanda-ls-linux
find /KAFKADATA/ -iname "REPL.EKSPZRCLMEVENT.V1-2" #### поиск файла, папки - 
find / -name "log4j*.properties" 2>/dev/null
( альтернатива locate )
sed - https://losst.pro/komanda-sed-linux 
sed -i 's/\r//' _имяфайла_ ### правим каретку, например, если закинул текстовый файл с windows
$sed 's/unix/linux/' geekfile.txt ### Следующая команда заменит в целевом файле вхождения слова unix на linux:
ls /usr/bin | sort -f | less ### удобный просмотр вывода
ls | wc -w ### счетчик строк
```































