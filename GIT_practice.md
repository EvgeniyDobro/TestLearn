# GIT

## настройки пользователя
git config --global user.name "Evgeniy Dobryshkin"
git config --global user.email EYurDobryshkin@sberbank.ru

git commit -m ''
git push --all --progress "MyFork_CI03189783_SYNAPSE_ES_INVENTORIES"
git push "MyFork_CI03189783_SYNAPSE_ES_INVENTORIES" kafka-ift

git push origin kafka-ift 
git commit -m 'adding DN in vars.yml'

## инициализация 
=============================
git remote add origin ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git
git clone ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git -b kafka-ift ### нужная ветка
git clone ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git ### все

### между ветками
cd myfork_ci03189783_synapse_es_inventories/ ### переходим в папку ???
git branch -a ### смотрим все ветки и где мы находимся
git checkout kafka-ift ### переключаемся на нужную

## инициализация изменений 

git remote add upstream ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git ### добавить оригинальный репозиторий в качестве удаленного.
git fetch upstream ### Потом необходимо получить все изменения с этого репозитория командой 
git rebase upstream/admin_info ### обновляем ветку с актуальной
----------------------------------------

git commit -m 'added offsets comand'

---------------------------------------
git merge upstream/master ### Если вы не по каким-то причинам не хотите переписывать историю коммитов, то вместо последней команды следует использовать 
git push -f origin admin_info ### В том случае, если был использован первый вариант, то следующий пуш следует выполнить с флагом -f git

### отмена
git stash

## Чтобы переключиться на ветку другого репозитория
git fetch my-test kafka-ift-test
git chepusckout -b my-test/kafka-ift-test
git push -f my-test kafka-ift-test

## УДАЛЯЕМ ПАПКУ
git rm -r Ansible\inventories\PSI_TEST_VAULT_OLD
 
## ЧИНИМ ОШИБКУ HEAD
git branch temp
git checkout temp
git branch -f replicator-psi-test temp
git checkout replicator-psi-test
