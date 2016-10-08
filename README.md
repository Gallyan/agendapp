# Agend'App
---------
Outil de gestion d'évènement pour la canne de combat (ou autre chose)

## Pré-requis

* Git : https://git-scm.com/
* Météor : https://www.meteor.com/install

## Installation

1. Si Météor n'est pas déjà installé sur votre machine : `curl https://install.meteor.com/ | sh`
2. Télécharger le source d'agendapp depuis git : `git clone https://github.com/cnccb/agendapp.git`
3. Se placer dans le répertoire packages d'agendapp : `cd agendapp/packages`
4. Télécharger les sous-modules : `git clone --recursive https://github.com/tmeasday/meteor-page-js.git`
5. Se placer dans le répertoire de config : `cd ../server/config`
6. Créer le fichier de config : `cp config.js.dist config.js` et adapter à votre environnement si nécessaire
7. Se placer à la racine d'agendapp : `cd ../..`
8. Lancer Météor : `meteor`
9. Accéder à l'application dans votre navigateur à la page : `http://localhost:3000`
10. Pour arrêter l'application, utiliser Ctrl+C
