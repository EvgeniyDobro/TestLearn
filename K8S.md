# KUBERNETES

>Kubernetes — это платформа с открытым исходным кодом для управления контейнеризированными рабочими нагрузками и сервисами. Фактически Kubernetes является оркестратором рабочей нагрузки.

## Анатомия K8s
__POD__ - минимальная единица K8S, хранит контейнеры, общие тома, общий ip
рекомендуется использовать 1 контейнер в 1 поде.

__Кластер K8S__ хранит в себя узлы (NODE) - которые уже хранят POD

Master Node vs Slave Node
![Image alt](https://github.com/EvgeniyDobro/TestLearn/raw/main/pic/k8s.jpg)

## Управление кластером
![Image alt](https://github.com/EvgeniyDobro/TestLearn/raw/main/pic/k8s-cluster-control.jpg)
