const projects = [  //On cree une variable projects  ou on va y crée un tableau 
  {
    id: 1,                                                                //Ici on crée un objet (groupe d'information)
     "title": "Pac-man",
    "description": "maze game Realiser à Aix-en-Provence En BUT informatique", 
    "Year":"2024-2025",
    "tech": ["C++"],
    image: "/projects/pacman.png"
  },

  {
    id: 2,
     "title": "Bomber-man",
    "description": "maze game Realiser à Aix-en-Provence En BUT informatique je me suis occuper de la partie mapping ", 
    "Year":"2024-2025",
    "tech": ["Java"],
    image: "/projects/bomberman.png",
    github: "https://github.com/ImedBouacheria/BomberManSae2.01/tree/mapping/src/main/java/com/example/bombermansae201"
  },

  {
    id: 3,
    title: "App Android ",
    description: "Application qui permet de connaitre les details de chaque films",
    tech: ["kotlin", "Jetpack Compose"],
    image: "/projects/MovieApp.png",
    github: "https://github.com/aib-13/MoviesApp"
  },
  {
    id : 4,
    title: "Base aéroport",
    description: "Projet SQL Realiser à Aix-en-Provence En BUT informatique ",
    Year:"2024-2025",
    tech: ["SQL" , "MySQL" ],
    image: "/projects/mysql.png"
  },
    {
    id : 5,
    title: "Base Hopital",
    description: "Projet SQL Realiser à Marseille En BTS SIO ",
    Year:"2025-2026",
    tech: ["SQL" , "SQL Server Management Studio" ],
    image: "/projects/sqlmanagement.png"
  },
  {
    id : 6,
    title: "Portfolio xp",
    description: "Projet Realiser à Marseille en entreprise 'DEV ID' " ,
    Year:"2026-2027",
    tech: ["React" , "javascript" , "tailwindcss" ],
    image: "/projects/portfolio_img.png",
    github: "https://github.com/aib-13/Portfolio"
  }
]

 export default projects   // Ça permet d’utiliser cette liste ailleurs