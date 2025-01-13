# Créer un projet React (premiers pas)
## Installations

Dans un premier temps,il faut installer [Node.js](https://nodejs.org/fr/download/package-manager) et [Intelijcommunity](https://www.jetbrains.com/products/compare/?product=idea&product=idea-ce).
Pour vérifier la bonne installation de Node.js vous pouvez ouvrir un invite de commande et taper ```nvm-v``` et ```npm-v```. Si une version s'affiche cela signifie que l'installation a été réussie.

## Créer un projet React sous Intelij

Dans un cmd à l'endroit où vous voulez mettre votre projet, faire les commandes suivantes :
-```npm set strict-ssl false```
-```npm install-g create-react-app```
-```npx create-react-app nom-du-projet```
-```npm set strict-ssl true```

Cela va créer toutes les dépendances nécessaires.

## Créer les pages .js pour chaque pages de mon site web

Pour créer une arborescence claire et qui correspond à votre projet vous pouvez faire cela:
-```Clic droit sur src > New > File > NomDuFichier```. Le nom du fichier peut s'écrire : Pages/Home pour ainsi ranger toutes vos pages dans un dossier.
De mon côté,j'ai créé 4 fichiers js dans le dossier pages correspondant à mes 4 pages de mon site web.

Dans chaque fichier .js, il faut bien penser à importer le module React à l'aide d'une constante dont on aura pour mettre en place le routage par la suite.
Voici un exemple :
```
import React from 'react';

const Home=()=>{
    return(
    <div>
        <h1>Accueil</h1>
        <p>Bienvenuesurlapaged'accueildemonsite.</p>
    </div>
    );
};

export default Home;
```

Une fois que tout est en place. On va mettre en place le routage.

## Routage

La mise en place du routage s'effectue dans le fichier ```app.js```. En effet, il y a un module à intégrer. Pour qu'il s'installe du premier coup il faut respecter la démarche suivante (dans mon cas il y a eu un blocage sans cette manip).

-```npm set strict-ssl false```
-```npm install react-router-dom```
-```npm set strict-ssl true```

Dans le fichier ```app.js```, il faut expliquer la façon dont on veut router les pages entre elles pour que ça fonctionne correctement :


**_~~Blabla~~_**

## Lancerleprojet

Pourlancerleprojetenlocaletvoirlesmodificationsaufuretàmesure,ilfautsuffitd'écrirelacommande:
```npm start```,dansunterminal.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

