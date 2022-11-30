import { pool } from "./index.js"

export async function createObjectTableFR() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS frenchDefinitions (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, englishtitle TEXT, title TEXT, definition TEXT, example TEXT, links TEXT, week INT);"
  );
}

export async function dropObjectTableFR() {
  return await pool.query("DROP TABLE IF EXISTS frenchDefinitions;");
}

export async function populateObjectTableFR() {
  const objects =  [
    {
        "englishtitle": "API",
        "title": "API",
        "definition": "Une interface de programmation d'application est un moyen par lequel deux ou plusieurs programmes informatiques communiquent entre eux. C'est un type d'interface logicielle qui offre un service à d'autres logiciels. Un document ou une norme qui décrit comment créer ou utiliser une telle connexion ou interface est appelé une spécification d'API.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2lGIkpT4QVUSA9ilkZuYVVi_5FcVHX6vWA&usqp=CAU",
        "links": "https://www.mulesoft.com/resources/api/what-is-an-api",
        "week": 4
    },
    {
        "englishtitle": "Database",
        "title": "Base de données",
        "definition": "En informática, una base de datos es una colección organizada de datos almacenados y a los que se accede electrónicamente. Las bases de datos pequeñas se pueden almacenar en un sistema de archivos, mientras que las bases de datos grandes se alojan en clústeres de computadoras o almacenamiento en la nube.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hH9pzWkAcEuhtzgBUBkURpCPiioiqAl0jw&usqp=CAU",
        "links": "https://www.techtarget.com/searchdatamanagement/definition/database",
        "week": 5
    },
    {
        "englishtitle": "Array",
        "title": "Déployer",
        "definition": "Un tableau peut contenir plusieurs valeurs sous un seul nom, et vous pouvez accéder aux valeurs en vous référant à un numéro d´index.",
        "example": "https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-Tutorial-With-Example-Arrays-in-Javascript.png",
        "links": "https://www.w3schools.com/js/js_arrays.asp",
        "week": 1
    },
    {
        "englishtitle": "Event Listener",
        "title": "Écouteur d'événement",
        "definition": "Un écouteur d'événement est une procédure JavaScript qui attend qu'un événement se produise. L'exemple simple d'un événement est un utilisateur cliquant avec la souris ou appuyant sur une touche du clavier.",
        "example": "https://bootcamp.burlingtoncodeacademy.com/images/event-listener.png",
        "links": "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
        "week": 2
    },
    {
        "englishtitle": "Unit testing",
        "title": "Examen unitaire",
        "definition": "En programmation informatique, les tests unitaires sont une méthode de test de logiciel par laquelle des unités individuelles de code source (ensembles d'un ou plusieurs modules de programme informatique ainsi que des données de contrôle associées, des procédures d'utilisation et des procédures d'exploitation) sont testées. ) pour déterminer si elles sont adaptées pour utilisation.",
        "example": "https://miro.medium.com/max/1138/1*ohoa7R6eyI-r9HKSeLmb7w.png",
        "links": "https://en.wikipedia.org/wiki/Unit_testing",
        "week": 6
    },
    {
        "englishtitle": "User Experience",
        "title": "Expérience utilisateur",
        "definition": "L'expérience utilisateur fait référence à la sensation ressentie par les utilisateurs lors de l'utilisation d'un produit, d'une application, d'un système ou d'un service. Il s'agit d'un terme large qui peut couvrir n'importe quoi, de la facilité avec laquelle l'utilisateur peut naviguer dans le produit, de sa facilité d'utilisation, de la pertinence du contenu affiché, etc.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESTBO3fUDgA38gO51TX4Gdj4cNNdrXHgiDA&usqp=CAU",
        "links": "https://www.interaction-design.org/literature/topics/ux-design",
        "week": 3
    },
    {
        "englishtitle": "Function",
        "title": "Fonction",
        "definition": "Une fonction en JavaScript est similaire à une procédure - un ensemble d´instructions qui exécute une tâche ou calcule une valeur, mais pour qu´une procédure soit qualifiée de fonction, elle doit prendre une entrée et renvoyer une sortie où il existe une relation évidente entre l´entrée et la sortie. Une fonction JavaScript est exécutée lorsque \"quelque chose\" l´invoque (l`appelle)",
        "example": "https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png",
        "links": "https://www.w3schools.com/js/js_functions.asp",
        "week": 1
    },
    {
        "englishtitle": "Async function",
        "title": "Fonction asynchrone",
        "definition": "La déclaration de fonction asynchrone déclare une fonction asynchrone dans laquelle le mot clé await est autorisé dans le corps de la fonction. Les mots clés async et await permettent d'écrire un comportement asynchrone basé sur les promesses dans un style plus clair, évitant ainsi d'avoir à configurer explicitement les chaînes de promesses.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/async-await-function.png ",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        "week": 2
    },
    {
        "englishtitle": "Arrow function",
        "title": "Fonction flèche",
        "definition": "Les fonctions fléchées ont été introduites dans ES6. Les fonctions fléchées nous permettent d´écrire une syntaxe de fonction plus courte",
        "example": "https://miro.medium.com/max/1400/1*_IejCVtnJg24RDNQC9xftg.png",
        "links": "https://www.w3schools.com/js/js_arrow_function.asp",
        "week": 1
    },
    {
        "englishtitle": "For loops",
        "title": "For boucles",
        "definition": "Les boucles peuvent exécuter un bloc de code plusieurs fois.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
        "week": 1
    },
    {
        "englishtitle": "If statements",
        "title": "If déclarations",
        "definition": "Utilisez if pour spécifier un bloc de code à exécuter, si une condition spécifiée est vraie. Utilisez else pour spécifier un bloc de code à exécuter, si la même condition est fausse",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png",
        "links": "https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else",
        "week": 1
    },
    {
        "englishtitle": "User Interface",
        "title": "Interface utilisateur",
        "definition": "L'interface utilisateur (UI) est le point d'interaction et de communication homme-ordinateur sur un appareil. Cela peut inclure des écrans d'affichage, des claviers, une souris et l'apparence d'un bureau. C'est aussi le moyen par lequel un utilisateur interagit avec une application ou un site Web.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgo9YuXuJtZPi1SCj53XN0BDlDNEqwf-vow&usqp=CAU",
        "links": "https://www.techtarget.com/searchapparchitecture/definition/user-interface-UI",
        "week": 3
    },
    {
        "englishtitle": "Document Object Model (DOM)",
        "title": "Modèle d'objet de document (DOM)",
        "definition": "Le modèle d'objet de document est une interface multiplateforme indépendante du langage qui traite un document XML ou HTML comme une structure arborescente dans laquelle chaque nœud est un objet qui représente une partie du document. Le DOM représente un document avec une arborescence logique.",
        "example": "https://www.w3schools.com/js/pic_htmltree.gif",
        "links": "https://www.w3schools.com/js/js_htmldom.asp",
        "week": 2
    },
    {
        "englishtitle": "Object",
        "title": "Objet",
        "definition": "Un objet JavaScript est une collection de valeurs nommées. Il est courant de déclarer des objets avec le mot-clé const",
        "example": "https://www.tutorialstonight.com/assets/js/javascript-object.webp",
        "links": "https://www.w3schools.com/js/js_object_definition.asp",
        "week": 1
    },
    {
        "englishtitle": "React props",
        "title": "React props",
        "definition": "Les accessoires sont des arguments passés aux composants React. Les accessoires sont transmis aux composants via des attributs HTML. props signifie propriétés",
        "example": "https://dmitripavlutin.com/react-props/cover.png",
        "links": "https://reactjs.org/docs/components-and-props.html",
        "week": 7
    },
    {
        "englishtitle": "React useEffect",
        "title": "React useEffect",
        "definition": "UseEffect Hook vous permet d'effectuer des effets secondaires sur vos composants. Voici quelques exemples d'effets secondaires : récupération de données, mise à jour directe du DOM et minuteries. useEffect accepte deux arguments. Le deuxième argument est facultatif.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv-xlfL62Kg-ChVPiJbd2KMPB235gF40DEg&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-effect.html",
        "week": 8
    },
    {
        "englishtitle": "React useReducer",
        "title": "React useReducer",
        "definition": "useReducer renvoie un tableau contenant la valeur d'état actuelle et une fonction de répartition à laquelle vous pouvez transmettre une action, puis appeler. Bien que cela soit similaire au modèle utilisé par Redux, il existe quelques différences. Par exemple, la fonction useReducer est étroitement liée à un réducteur spécifique.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmANtyYZd1vAjtq-xz0EMV1SncmBUe3nTag&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-reference.html",
        "week": 8
    },
    {
        "englishtitle": "React useState",
        "title": "React useState",
        "definition": "Le React useState Hook nous permet de suivre l'état d'un composant de fonction. L'état fait généralement référence aux données ou aux propriétés qui doivent être suivies dans une application.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRRzwC_9_5jM3vJ43LZC6w_-_KkGckPSC_Q&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-state.html",
        "week": 7
    },
    {
        "englishtitle": "End to end testing",
        "title": "Test de bout en bout",
        "definition": "Le test de bout en bout (test E2E) est une méthode de test logiciel qui consiste à tester le flux de travail d'une application du début à la fin. Cette méthode est destinée à répliquer des scénarios d'utilisateurs réels pour valider le système pour l'intégration et l'intégrité des données.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhjXHhNUo_8tbD3tafLxTe2Gxln5xS-Y8vA&usqp=CAU",
        "links": "https://circleci.com/blog/what-is-end-to-end-testing/",
        "week": 6
    },
    {
        "englishtitle": "While loops",
        "title": "While boucles",
        "definition": "La boucle while parcourt un bloc de code tant qu´une condition spécifiée est vraie.",
        "example": "https://www.tutorialspoint.com/javascript/images/while_loop.jpg",
        "links": "https://www.w3schools.com/js/js_loop_while.asp",
        "week": 1
    }
];


  return await pool.query(
    "INSERT INTO frenchDefinitions (englishtitle, title, definition, example, links, week) (SELECT englishtitle, title, definition, example, links, week FROM json_populate_recordset(NULL::frenchDefinitions, $1::JSON));",
    [JSON.stringify(objects)]
  );
}

export async function resetObjectTableFR() {
  return [
    await dropObjectTableFR(),
    await createObjectTableFR(),
    await populateObjectTableFR(),
  ];
}