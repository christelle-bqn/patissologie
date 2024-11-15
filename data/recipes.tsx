interface Equipment {
  name: string;
}

interface Ingredient {
  category: string;
  items: string[];
}

interface Step {
  title: string;
  instructions: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  time: {
    total: string;
    preparation: string;
    cooking: string;
    rest?: string;
  };
  difficulty: "facile" | "moyen" | "difficile";
  yield: {
    amount: number;
    unit: string;
  };
  ingredients: Ingredient[];
  equipment: Equipment[];
  steps: Step[];
  tips: undefined | string[];
  storage: undefined | string[];
  image: string;
  bookmarked: boolean;
}

export const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Madeleines",
    description:
      "Une recette idéale pour le goûter : les madeleines ! Découvre une recette facile et rapide pour obtenir des madeleines moelleuses et gourmandes ! Vous pouvez aussi rendre les madeleines encore plus gourmandes en ajoutant un coeur confiture ou chocolat !",
    time: {
      total: "18 min",
      preparation: "10 min",
      cooking: "8 min",
      rest: "2h",
    },
    difficulty: "facile",
    yield: {
      amount: 30,
      unit: "madeleines",
    },
    ingredients: [
      {
        category: "Pâte à madeleines",
        items: [
          "200 g de farine",
          "11 g de levure chimique",
          "3 œufs",
          "100 g de sucre",
          "50 g de lait entier",
          "150 g de beurre",
          "1 citron bio (zestes) - optionnel",
          "1 pincée de sel fin",
        ],
      },
      {
        category: "Pour les moules",
        items: [
          "20 g de beurre mou pour le beurrage",
          "15 g de farine pour le farinage",
        ],
      },
    ],
    equipment: [
      { name: "2 moules à madeleines de 12 empreintes" },
      { name: "1 tamis" },
      { name: "1 spatule en bois" },
      { name: "1 râpe fine pour les zestes" },
      { name: "1 pinceau à pâtisserie" },
      { name: "1 corne ou maryse" },
    ],
    steps: [
      {
        title: "1. Préparation des ingrédients",
        instructions: [
          "Faites fondre le beurre au micro-ondes à puissance moyenne et laissez-le tiédir",
          "Sortez les œufs 30 minutes avant pour qu'ils soient à température ambiante",
          "Faites tiédir légèrement le lait",
          "Tamisez la farine avec la levure chimique",
        ],
      },
      {
        title: "2. Préparation de la pâte",
        instructions: [
          "Dans un grand bol, versez la farine et la levure tamisées",
          "Ajoutez une pincée de sel et creusez un puits au centre",
          "Cassez les œufs dans le puits",
          "Mélangez doucement en partant du centre avec une spatule en bois, en gardant la farine sur les bords",
          "Incorporez progressivement le sucre tout en continuant de mélanger au centre",
          "Versez le lait tiède petit à petit en mélangeant toujours au centre",
          "Râpez finement les zestes de citron (si utilisés) et ajoutez-les",
          "Incorporez enfin le beurre fondu tiède en filet tout en mélangeant énergiquement",
          "Mélangez jusqu'à obtention d'une pâte bien lisse, brillante et homogène",
        ],
      },
      {
        title: "3. Repos de la pâte",
        instructions: [
          "Couvrez le bol de film alimentaire au contact",
          "Laissez reposer la pâte 2h minimum au réfrigérateur (idéalement une nuit)",
          "Ce repos est crucial pour obtenir la bosse caractéristique des madeleines",
        ],
      },
      {
        title: "4. Cuisson",
        instructions: [
          "Préchauffez le four à 200°C (chaleur tournante)",
          "Beurrez et farinez soigneusement les moules à madeleines, même s'ils sont anti-adhésifs",
          "Retirez l'excès de farine en tapotant les moules",
          "Sortez la pâte du réfrigérateur 10 minutes avant utilisation",
          "Remplissez les empreintes aux 3/4 (environ 1 cuillère à soupe de pâte)",
          "Enfournez pour 8-10 minutes en surveillant la coloration",
          "Les madeleines doivent être légèrement dorées sur les bosses et blondes dessous",
        ],
      },
      {
        title: "5. Finition",
        instructions: [
          "Démoulez les madeleines dès la sortie du four",
          "Laissez-les refroidir sur une grille",
          "Vous pouvez les saupoudrer légèrement de sucre glace avant dégustation",
        ],
      },
    ],
    image: require("../assets/images/madeleines.jpg"),
    tips: [
      "Pour des madeleines encore plus parfumées, ajoutez une cuillère à café d'extrait de vanille",
      "Les ingrédients à température ambiante sont essentiels pour une belle texture",
      "Le temps de repos au frais est crucial pour obtenir la bosse caractéristique",
      "Pour un cœur gourmand, remplissez les moules à moitié, ajoutez une petite cuillère de pâte à tartiner ou confiture, puis recouvrez de pâte",
    ],
    storage: [
      "Les madeleines se conservent 3-4 jours dans une boîte hermétique",
      "Elles peuvent être congelées jusqu'à 3 mois",
    ],
    bookmarked: false,
  },
  {
    id: "2",
    title: "Tarte au citron meringuée",
    description:
      "Un grand classique de la pâtisserie française : la tarte citron meringuée ! Une pâte sucrée croustillante, une crème citron parfaitement équilibrée entre acidité et douceur, surmontée d'une meringue italienne légère et aérienne. Un dessert incontournable qui impressionnera vos convives !",
    time: {
      total: "5h30",
      preparation: "1h30",
      cooking: "1h",
      rest: "3h",
    },
    difficulty: "moyen",
    yield: {
      amount: 6,
      unit: "personnes",
    },
    ingredients: [
      {
        category: "La pâte sucrée",
        items: [
          "250 g de farine",
          "70 g de sucre",
          "30 g de poudre d'amandes",
          "1 œuf",
          "145 g de beurre",
          "1 pincée de sel",
          "1 jaune d'œuf pour la dorure (optionnel)",
        ],
      },
      {
        category: "La crème citron",
        items: [
          "3 œufs entiers",
          "195 g de beurre",
          "100 ml de jus de citron frais (environ 4 citrons jaunes)",
          "Les zestes d'1 citron",
          "160 g de sucre",
          "1 pincée de sel",
        ],
      },
      {
        category: "La meringue italienne",
        items: [
          "100 g de blancs d'œufs (environ 3 blancs) à température ambiante",
          "250 g de sucre en poudre",
          "60 g d'eau",
          "1 pincée de sel",
        ],
      },
    ],
    equipment: [
      { name: "1 cercle à tarte de 20 cm de diamètre" },
      { name: "1 thermomètre de cuisson" },
      { name: "1 robot pâtissier ou batteur électrique" },
      { name: "1 mixeur plongeant" },
      { name: "1 chalumeau de cuisine" },
      { name: "1 poche à douille avec douille saint honoré" },
      { name: "1 rouleau à pâtisserie" },
      { name: "Film alimentaire" },
      { name: "Papier cuisson" },
      { name: "Billes de cuisson" },
    ],
    steps: [
      {
        title: "1. Préparation préalable",
        instructions: [
          "Sortez tous les ingrédients froids 1h avant de commencer",
          "Coupez le beurre en petits dés",
          "Tamisez la farine",
          "Prélevez les zestes de citron et pressez les citrons",
        ],
      },
      {
        title: "2. Préparation de la pâte",
        instructions: [
          "Dans un grand bol, sablez du bout des doigts le beurre mou avec le sucre et la poudre d'amandes",
          "Ajoutez l'œuf légèrement battu et mélangez jusqu'à absorption",
          "Incorporez la farine tamisée et le sel, pétrissez rapidement jusqu'à obtention d'une pâte homogène",
          "Attention à ne pas trop travailler la pâte pour éviter qu'elle ne devienne élastique",
          "Formez un disque, filmez au contact et réservez 1h au réfrigérateur",
          "Étalez la pâte sur 3mm d'épaisseur entre deux feuilles de papier cuisson",
          "Foncez votre cercle beurré, coupez l'excédent",
          "Piquez le fond à la fourchette",
          "Congelez 15 minutes",
          "Préchauffez le four à 180°C chaleur tournante",
          "Garnissez de papier cuisson et de billes de cuisson",
          "Faites cuire à blanc 15 minutes",
          "Retirez les billes, badigeonnez de jaune d'œuf (optionnel)",
          "Poursuivez la cuisson 10-15 minutes jusqu'à coloration dorée",
          "Laissez refroidir sur une grille",
        ],
      },

      {
        title: "3. Préparation de la crème citron",
        instructions: [
          "Dans une casserole, mélangez les œufs, le sucre et le sel",
          "Ajoutez le jus de citron et les zestes",
          "Chauffez à feu doux en remuant constamment avec une spatule",
          "Surveillez la température : la crème doit atteindre 82-84°C précisément",
          "La crème est prête quand elle nappe la spatule et que vous pouvez tracer une ligne avec votre doigt",
          "Retirez du feu, laissez tiédir 5 minutes à 60°C",
          "Ajoutez le beurre en dés progressivement en mixant",
          "Mixez 5 minutes pour obtenir une crème lisse et brillante",
          "Versez immédiatement dans le fond de tarte",
          "Lissez la surface et filmez au contact",
          "Réfrigérez minimum 2h",
        ],
      },
      {
        title: "4. Préparation de la meringue italienne",
        instructions: [
          "Dans une casserole, portez l'eau et le sucre à ébullition",
          "Pendant ce temps, commencez à monter les blancs avec le sel à vitesse moyenne",
          "Quand le sirop atteint 110°C, augmentez la vitesse des blancs",
          "A 121°C précis, versez le sirop en filet sur les blancs montés",
          "Continuez de fouetter 8-10 minutes à grande vitesse",
          "La meringue doit être brillante, lisse et former un bec d'oiseau",
          "Elle doit être tiède avant utilisation",
        ],
      },
      {
        title: "5. Assemblage",
        instructions: [
          "Sortez la tarte du réfrigérateur",
          "Remplissez une poche munie d'une douille saint honoré de meringue",
          "Pochez des rosaces ou motifs réguliers sur toute la surface",
          "Caramélisez délicatement à l'aide du chalumeau",
          "Ou passez quelques secondes sous le grill du four (surveillance constante)",
          "Servez dans l'heure qui suit ou réservez au frais maximum 4h",
        ],
      },
    ],
    tips: [
      "Tous les ingrédients doivent être à température ambiante pour une meilleure incorporation",
      "Le thermomètre est indispensable pour la précision des cuissons",
      "La crème citron peut être préparée la veille",
      "La meringue doit être réalisée au dernier moment",
      "Pour un résultat optimal, utilisez des citrons non traités",
    ],
    storage: ["La tarte se conserve 24h au réfrigérateur maximum"],
    image: require("../assets/images/tarte-citron.jpg"),
    bookmarked: false,
  },
  {
    id: "3",
    title: "Cannelés bordelais",
    description:
      "Si je vous dis petits gâteaux originaire de Bordeaux, croustillants et caramélisés à l'extérieur, moelleux et fondants à l'intérieur, parfumés à la vanille et souvent au Rhum, vous pensez à quoi ? Les cannelés bien sûr ! Une recette facile ainsi que des astuces pour réussir de délicieux cannelés maison !",
    time: {
      total: "1h15 (+ repos)",
      preparation: "20 min",
      cooking: "55 min",
      rest: "24h",
    },
    difficulty: "facile",
    yield: {
      amount: 12,
      unit: "cannelés",
    },
    ingredients: [
      {
        category: "Pour l'appareil",
        items: [
          "1 œuf",
          "3 jaunes d'œufs",
          "130 g de farine",
          "500 ml de lait",
          "1 gousse de vanille",
          "250 g de sucre",
          "60 ml de rhum",
        ],
      },
    ],
    equipment: [
      { name: "Moules à cannelés en cuivre ou silicone" },
      { name: "1 casserole" },
      { name: "1 fouet" },
      { name: "1 maryse" },
      { name: "Film alimentaire" },
      { name: "1 grille de refroidissement" },
    ],
    steps: [
      {
        title: "1. La veille",
        instructions: [
          "Commencez par fendre votre gousse de vanille en deux pour récupérer les graines.",
          "Dans une casserole, versez le lait, les graines, la gousse de vanille et portez le tout à ébullition sur feu moyen.",
          "Pendant ce temps, dans un bol, versez les jaunes d'œufs, le sucre et fouettez le tout énergiquement.",
          "Ajoutez l'œuf entier et fouettez à nouveau.",
          "Versez la farine et fouettez jusqu'à l'obtention d'un mélange homogène.",
          "Ajoutez le lait vanillé porté à ébullition, et mélangez le tout : prenez soin de laisser la gousse de vanille !",
          "Terminez en incorporant le rhum (optionnel).",
          "Couvrez votre appareil à cannelés de film alimentaire et réservez toute la nuit au réfrigérateur.",
        ],
      },
      {
        title: "2. Le lendemain",
        instructions: [
          "Récupérez votre appareil à cannelés qui était au frais.",
          "Mélangez le tout à l'aide d'une maryse et laissez-le revenir à température ambiante pendant 30 minutes.",
          "Préchauffez le four à 250°.",
          "Retirez la gousse de vanille de votre préparation et remplissez les cavités de votre moule à cannelés, préalablement beurrés, au 2/3.",
          "Enfournez 5 minutes à 250° puis 50 minutes à 200°, sans jamais ouvrir le four !",
          "Démoulez vos cannelés encore chauds pour éviter la surcuisson, attention à ne pas vous brûler !",
          "Laissez-les refroidir sur une grille avant de les déguster !",
        ],
      },
    ],
    tips: [
      "Le repos de 24-48h est indispensable pour le développement des arômes",
      "La préparation du moule en cuivre est cruciale pour obtenir la croûte caramélisée",
      "N'ouvrez jamais le four pendant la cuisson",
      "La couleur finale doit être brun foncé, presque noir sur les bords",
      "Les cannelés se dégustent le jour même, idéalement dans les 4-6h après la cuisson",
      "Ils peuvent être réchauffés quelques minutes au four pour retrouver leur croustillant",
      "Pour une version sans alcool, remplacez le rhum par de l'extrait de vanille",
      "Les moules en silicone donneront des résultats moins caramélisés qu'un moule en cuivre",
    ],
    storage: [
      "24h dans une boîte hermétique",
      "Peuvent être congelés jusqu'à 1 mois",
      "À réchauffer 5 min au four à 180°C après décongélation",
    ],
    image: require("../assets/images/canneles.jpg"),
    bookmarked: false,
  },
  {
    id: "4",
    title: "Crème brûlée à la vanille",
    description:
      "Un grand classique : la crème brûlée à la vanille ! Un dessert inratable avec son bon goût vanillé, sa texture onctueuse et un dessus craquant. La recette parfaite si vous cherchez un dessert simple et rapide à réaliser.",
    time: {
      total: "1h20",
      preparation: "20 min",
      cooking: "1h",
      rest: "2h",
    },
    difficulty: "facile",
    yield: {
      amount: 3,
      unit: "ramequins",
    },
    ingredients: [
      {
        category: "Crème brûlée",
        items: [
          "250 g de crème liquide entière",
          "1 gousse de vanille",
          "6 jaunes d'œufs",
          "80 g de sucre",
          "Sucre roux pour la caramélisation",
        ],
      },
    ],
    equipment: [
      { name: "3 ramequins" },
      { name: "1 casserole" },
      { name: "1 fouet" },
      { name: "1 chinois" },
      { name: "1 chalumeau de cuisine" },
      { name: "1 plat pour bain-marie (optionnel)" },
    ],
    steps: [
      {
        title: "Préparation",
        instructions: [
          "Préchauffez le four à 100°.",
          "Commencez par couper la gousse de vanille en deux et récupérez les graines.",
          "Dans une casserole, versez la crème liquide entière, les graines et la gousse de vanille.",
          "Laissez infuser le tout sur feu doux, pendant 8 minutes.",
          "Retirez la crème du feu et versez-la dans un bol pour la laisser redescendre en température pendant 20 minutes.",
          "Dans un bol, versez les jaunes d'œufs, le sucre et fouettez le tout.",
          "À l'aide d'un chinois, versez la crème liquide tiédie sur le mélange précédent et fouettez le tout.",
          "Versez la préparation dans 3 ramequins.",
          "Enfournez pendant 1 heure.",
          "Vous pouvez également opter pour une cuisson plus rapide : 30 minutes à 160° en plaçant vos ramequins sur un plat contenant un fond d'eau.",
          "À la sortie du four, laissez les crèmes refroidir.",
          "Avant de les déguster, saupoudrez chaque ramequin d'une cuillère à soupe de sucre roux.",
          "Faites caraméliser le sucre à l'aide d'un chalumeau.",
          "Régalez-vous !",
        ],
      },
    ],
    tips: [
      "La cuisson est parfaite quand la crème est fixe sur les bords mais tremble légèrement au milieu",
      "Sans chalumeau, vous pouvez passer les crèmes quelques secondes sous le grill du four",
      "Ne pas caraméliser avant de stocker",
      "Caraméliser juste avant de servir pour un dessus croustillant",
    ],
    storage: ["Se conservent jusqu'à 48 heures au réfrigérateur"],
    image: require("../assets/images/creme-brulee.jpg"),
    bookmarked: false,
  },
];
