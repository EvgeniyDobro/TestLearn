# KUBERNETES

>Kubernetes — это платформа с открытым исходным кодом для управления контейнеризированными рабочими нагрузками и сервисами. Фактически Kubernetes является оркестратором рабочей нагрузки.

>Если говорить простыми словами, Kubernetes – это двигатель автомобиля (платформы) Openshift.

## Анатомия K8s
__POD__ - минимальная единица K8S, хранит контейнеры, общие тома, общий ip
рекомендуется использовать 1 контейнер в 1 поде.

>Pod – это объект Kubernetes, который является описанием атомарной единицы рабочей нагрузки. При создании объекта типа Pod, Kubernetes запускает один или несколько контейнеров на одной из рабочих нод. При удалении - завершает работу этого контейнера, или контейнеров.

__Кластер K8S__ хранит в себя узлы (NODE) - которые уже хранят POD

Master Node vs Slave Node
![Image alt](https://github.com/EvgeniyDobro/TestLearn/raw/main/pic/k8s.jpg)

## Управление кластером
![Image alt](https://github.com/EvgeniyDobro/TestLearn/raw/main/pic/k8s-cluster-control.jpg)
