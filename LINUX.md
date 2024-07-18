<https://man7.org/linux/man-pages/man1/ssh.1.html>

# LINUX
[раздел "процессы"](#процессы)
[раздел "железо"](#железо)
[раздел "работа с файлами"](#работа-с-файлами)

### процессы
```bash
ps -eF
ps -efL ### с потоками
```
ps -aux

```bash
ctrl + z ... bg #### перевести в фон & узнать запущенные jobs
```

### Железо
```bash
df -h ### свободное место
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































