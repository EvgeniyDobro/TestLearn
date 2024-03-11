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

git remote add origin ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git
нужная ветка
git clone ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git -b kafka-ift
все
git clone ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git  

### между ветками
переходим в папку ???
cd myfork_ci03189783_synapse_es_inventories/ 
смотрим все ветки и где мы находимся
git branch -a 
переключаемся на нужную
git checkout kafka-ift

## инициализация изменений 
 добавить оригинальный репозиторий в качестве удаленного.
git remote add upstream ssh://git@sbrf-bitbucket.sigma.sbrf.ru:7999/~19373179/myfork_ci03189783_synapse_es_inventories.git
потом необходимо получить все изменения с этого репозитория командой 
git fetch upstream 
обновляем ветку с актуальной
git rebase upstream/admin_info 


git commit -m 'added offsets comand'

Если вы не по каким-то причинам не хотите переписывать историю коммитов, то вместо последней команды следует использовать 
git merge upstream/master 
В том случае, если был использован первый вариант, то следующий пуш следует выполнить с флагом -f git
git push -f origin admin_info 

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
