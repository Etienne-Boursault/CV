const tooltips = {
    java: {
        en: "Java is a popular programming language used for developing a wide range of applications and software",
        fr: "Java est un langage de programmation populaire utilis\u00E9 pour d\u00E9velopper une large gamme d'applications et de logiciels",
    },
    spring: {
        en: "Spring is a popular framework for building Java-based enterprise applications",
        fr: "Spring est un framework populaire pour la construction d'applications d'entreprise bas\u00E9es sur Java",
    },
    springBoot: {
        en: "Spring Boot is a popular framework for building standalone, production-grade Spring-based applications",
        fr: "Spring Boot est un framework populaire pour la construction d'applications autonomes et robustes bas\u00E9es sur Spring",
    },
    Hibernate: {
        en: "Hibernate is an Object-Relational Mapping (ORM) framework that provides a mapping between an object-oriented domain model and a relational database",
        fr: "Hibernate est un framework de mappage objet-relationnel (ORM) qui fournit une correspondance entre un mod\u00E8le de domaine orient\u00E9 objet et une base de donn\u00E9es relationnelle",
    },
    JPA: {
        en: "Java Persistence API (JPA) is a specification that provides a high-level API for managing relational data in Java applications",
        fr: "Java Persistence API (JPA) est une sp\u00E9cification qui fournit une API de haut niveau pour g\u00E9rer les donn\u00E9es relationnelles dans les applications Java",
    },
    MicroServices: {
        en: "Microservices architecture is an approach to building applications as a collection of small, independent services that communicate with each other through APIs",
        fr: "L'architecture de microservices est une approche de construction d'applications sous forme de petites applications ind\u00E9pendantes qui communiquent entre elles via des API",
    },
    RestAPI: {
        en: "REST (Representational State Transfer) is a popular architectural style for building web services",
        fr: "REST (Representational State Transfer) est un style d'architecture populaire pour la construction de services web",
    },
    Maven: {
        en: "Maven is a build automation tool used primarily for Java projects",
        fr: "Maven est un outil d'automatisation de construction utilis\u00E9 principalement pour les projets Java",
    },
    HTML: {
        en: "Hypertext Markup Language (HTML) is a standard markup language used to create web pages",
        fr: "Le langage de balisage hypertexte (HTML) est un langage de balisage standard utilis\u00E9 pour cr\u00E9er des pages Web",
    },
    CSS: {
        en: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML",
        fr: "Les feuilles de style en cascade (CSS) est un langage de feuille de style utilis\u00E9 pour d\u00E9crire la pr\u00E9sentation d'un document \u00E9crit en HTML",
    },
    JavaScript: {
        en: "JavaScript is a programming language used for creating interactive websites and web applications",
        fr: "JavaScript est un langage de programmation utilis\u00E9 pour cr\u00E9er des sites web et des applications web interactives",
    },
    TypeScript: {
        en: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
        fr: "TypeScript est un sur-ensemble typ\u00E9 de JavaScript qui se compile en JavaScript pur",
    },
    Angular: {
        en: "Angular is a TypeScript-based open-source web application framework used to build dynamic, single-page applications",
        fr: "Angular est un framework d'application web open-source bas\u00E9 sur TypeScript utilis\u00E9 pour construire des applications \u00E0 page unique dynamiques",
    },
    AJAX: {
        en: "AJAX stands for Asynchronous JavaScript and XML, a technique used to create fast and dynamic web pages",
        fr: "AJAX signifie Asynchronous JavaScript and XML, une technique utilis\u00E9e pour cr\u00E9er des pages web rapides et dynamiques",
    },
    Jquery: {
        en: "jQuery is a fast, small, and feature-rich JavaScript library designed to simplify HTML document traversing, event handling, and Ajax interactions",
        fr: "jQuery est une biblioth\u00E8que JavaScript rapide, petite et riche en fonctionnalit\u00E9s con\u00E7ue pour simplifier le parcours des documents HTML, la gestion des \u00E9v\u00E9nements et les interactions Ajax",
    },
    D3js: {
        en: "D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers",
        fr: "D3.js est une biblioth\u00E8que JavaScript permettant de produire des visualisations de donn\u00E9es dynamiques et interactivesdans les navigateurs Web",
    },
    RxJs: {
        en: "RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code",
        fr: "RxJS est une biblioth\u00E8que pour la programmation r\u00E9active utilisant des observables, pour faciliter la composition de code asynchrone ou bas\u00E9 sur des rappels",
    },
    Python: {
        en: "Python is a popular programming language used for a wide range of applications including web development, scientific computing, and data analysis",
        fr: "Python est un langage de programmation populaire utilis\u00E9 pour une large gamme d'applications, y compris le d\u00E9veloppement web, le calcul scientifique et l'analyse de donn\u00E9es",
    },
    PHP: {
        en: "PHP is a popular server-side scripting language used for web development",
        fr: "PHP est un langage de script c\u00F4t\u00E9 serveur populaire utilis\u00E9 pour le d\u00E9veloppement web",
    },
    SOAPUI: {
        en: "SOAPUI is an open-source web service testing application for service-oriented architectures (SOA) and representational state transfers (REST)",
        fr: "SOAPUI est une application de test de services web open source pour les architectures orient\u00E9es services (SOA) et les transferts d'\u00E9tat repr\u00E9sentatifs (REST)",
    },
    Kotlin: {
        en: "Kotlin is a statically typed programming language that targets the JVM, Android, JavaScript, and native",
        fr: "Kotlin est un langage de programmation \u00E0 typage statique qui cible la JVM, Android, JavaScript et natif",
    },
    "UI/UX Design": {
        en: "UI/UX design is the process of designing user interfaces (UI) and user experiences (UX) for digital products such as websites, mobile apps, and software applications",
        fr: "La conception UI/UX est le processus de conception d'interfaces utilisateur (UI) et d'exp\u00E9riences utilisateur (UX) pour des produits num\u00E9riques tels que des sites Web, des applications mobiles et des applications logicielles",
    },
    Docker: {
        en: "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers",
        fr: "Docker est un ensemble de produits de plateforme en tant que service (PaaS) qui utilise une virtualisation de niveau OS pour fournir des logiciels dans des packages appel\u00E9s conteneurs",
    },
    API: {
        en: "API stands for application programming interface, which is a set of protocols, routines, and tools for building software and applications",
        fr: "API signifie interface de programmation d'application, qui est un ensemble de protocoles, de routines et d'outils pour la construction de logiciels et d'applications",
    },
    Linux: {
        en: "Linux-Unix is an open-source operating system that is commonly used in web development environments.",
        fr: "Linux-Unix est un syst\u00E8me d'exploitation open source couramment utilis\u00E9 dans les environnements de d\u00E9veloppement web.",
    },
    Bash: {
        en: "Bash is a command language and shell used in Unix-based operating systems.",
        fr: "Bash est un langage de commande et une interface shell utilis\u00E9e dans les syst\u00E8mes d'exploitation bas\u00E9s sur Unix.",
    },
    Shell: {
        en: "Shell is a program that interprets commands and scripts to run other programs on a computer.",
        fr: "Shell est un programme qui interpr\u00E8te les commandes et les scripts pour ex\u00E9cuter d'autres programmes sur un ordinateur.",
    },
    MarkDown: {
        en: "MarkDown is a lightweight markup language that is commonly used to create documentation and web pages.",
        fr: "MarkDown est un langage de balisage l\u00E9ger couramment utilis\u00E9 pour cr\u00E9er de la documentation et des pages web.",
    },
    Talend: {
        en: "Talend is an ETL tool for data integration and data management",
        fr: "Talend est un outil ETL pour l'int\u00E9gration et la gestion des donn\u00E9es",
    },
    ETL: {
        en: "ETL stands for Extract, Transform, Load and refers to the process of extracting data from different sources, transforming it, and loading it into a target system",
        fr: "ETL signifie Extract, Transform, Load et fait r\u00E9f\u00E9rence au processus d'extraction de donn\u00E9es de diff\u00E9rentes sources, de transformation et de chargement dans un syst\u00E8me cible",
    },
    Drupal: {
        en: "Drupal is an open-source content management system (CMS) used for building websites and applications",
        fr: "Drupal est un syst\u00E8me de gestion de contenu (CMS) open source utilis\u00E9 pour cr\u00E9er des sites Web et des applications",
    },
    CICD: {
        en: "CI/CD stands for Continuous Integration and Continuous Deployment, which are practices for automatically building, testing, and deploying software changes to production",
        fr: "CI/CD signifie Int\u00E9gration Continue et D\u00E9ploiement Continu, qui sont des pratiques pour construire, tester et d\u00E9ployer automatiquement les modifications de logiciels en production",
    },
    Git: {
        en: "Git is a distributed version control system for tracking changes in source code during software development.",
        fr: "Git est un syst\u00E8me de contr\u00F4le de version distribu\u00E9 pour suivre les modifications du code source pendant le d\u00E9veloppement de logiciels.",
    },
    GitHub: {
        en: "GitHub is a web-based hosting service for version control of code using Git.",
        fr: "GitHub est un service d'h\u00E9bergement Web pour le contr\u00F4le de version du code \u00E0 l'aide de Git.",
    },
    GitLab: {
        en: "GitLab is a web-based Git repository manager that provides source code management, continuous integration, and continuous deployment.",
        fr: "GitLab est un gestionnaire de r\u00E9f\u00E9rentiel Git bas\u00E9 sur le Web qui offre une gestion de code source, une int\u00E9gration continue et un d\u00E9ploiement continu.",
    },
    Sonar: {
        en: "Sonar is a tool for continuous code quality inspection that provides instant feedback on code changes.",
        fr: "Sonar est un outil d'inspection continue de la qualit\u00E9 du code qui fournit une r\u00E9troaction instantan\u00E9e sur les modifications de code.",
    },
    SonarQube: {
        en: "SonarQube is an open-source platform for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities.",
        fr: "SonarQube est une plateforme open-source d'inspection continue de la qualit\u00E9 du code pour effectuer des examens automatiques avec une analyse statique du code afin de d\u00E9tecter les bogues, les odeurs de code et les vuln\u00E9rabilit\u00E9s de s\u00E9curit\u00E9.",
    },
    Cucumber: {
        en: "Cucumber is a software tool used for behavior-driven development (BDD), allowing developers to write tests in a natural language that is easily understood by non-technical stakeholders",
        fr: "Cucumber est un outil logiciel utilis\u00E9 pour le d\u00E9veloppement pilot\u00E9 par le comportement (BDD), permettant aux d\u00E9veloppeurs de r\u00E9diger des tests dans un langage naturel facilement compris par les parties prenantes non techniques",
    },
    Jenkins: {
        en: "Jenkins is an open-source automation server that helps automate building, testing, and deploying applications",
        fr: "Jenkins est un serveur d'automatisation open source qui aide \u00E0 automatiser la construction, les tests et le d\u00E9ploiement d'applications",
    },
    IntelliJ: {
        en: "IntelliJ is an integrated development environment (IDE) used in computer programming, and it is specifically designed for the Java language. It is developed by JetBrains.",
        fr: "IntelliJ est un environnement de d\u00E9veloppement int\u00E9gr\u00E9 (IDE) utilis\u00E9 en programmation informatique et il est sp\u00E9cifiquement con\u00E7u pour le langage Java. Il est d\u00E9velopp\u00E9 par JetBrains.",
    },
    Eclipse: {
        en: "Eclipse is an integrated development environment (IDE) used in computer programming, and it is widely used for developing Java applications. It is developed by the Eclipse Foundation.",
        fr: "Eclipse est un environnement de d\u00E9veloppement int\u00E9gr\u00E9 (IDE) utilis\u00E9 en programmation informatique, et il est largement utilis\u00E9 pour d\u00E9velopper des applications Java. Il est d\u00E9velopp\u00E9 par la Fondation Eclipse.",
    },
    AWS: {
        en: "Amazon Web Services (AWS) is a collection of remote computing services, also known as cloud computing, provided by Amazon.com.",
        fr: "Amazon Web Services (AWS) est une collection de services informatiques \u00E0 distance, \u00E9galement appel\u00E9 cloud computing, fournis par Amazon.com.",
    },
    Serverless: {
        en: "Serverless computing is a method of providing backend services on an as-used basis. A serverless provider allows users to write and deploy code without the hassle of worrying about the underlying infrastructure.",
        fr: "Le calcul sans serveur est une m\u00E9thode de fourniture de services back-end selon les besoins. Un fournisseur sans serveur permet aux utilisateurs d'\u00E9crire et de d\u00E9ployer du code sans se soucier de l'infrastructure sous-jacente.",
    },
    Kubernetes: {
        en: "Kubernetes is an open-source container-orchestration system for automating deployment, scaling, and management of containerized applications",
        fr: "Kubernetes est un syst\u00E8me open source d'orchestration de conteneurs pour automatiser le d\u00E9ploiement, la mise \u00E0 l'\u00E9chelle et la gestion des applications conteneuris\u00E9es",
    },
    Postman: {
        en: "Postman is a collaboration platform for API development, used for designing, testing, and debugging APIs",
        fr: "Postman est une plateforme de collaboration pour le d\u00E9veloppement d'API, utilis\u00E9e pour concevoir, tester et d\u00E9boguer des API",
    },
    Apache: {
        en: "Apache is a popular open-source web server software used to serve web pages",
        fr: "Apache est un logiciel de serveur Web open source populaire utilis\u00E9 pour servir des pages Web",
    },
    VMWare: {
        en: "VMWare is a company that provides virtualization and cloud computing software and services",
        fr: "VMWare est une entreprise qui fournit des logiciels et des services de virtualisation et de cloud computing",
    },
    TDD: {
        en: "TDD stands for Test-Driven Development, a software development process that emphasizes writing tests before writing the actual code",
        fr: "TDD signifie D\u00E9veloppement Dirig\u00E9 par les Tests, un processus de d\u00E9veloppement logiciel qui met l'accent sur l'\u00E9criture de tests avant l'\u00E9criture du code r\u00E9el",
    },
    BDD: {
        en: "BDD stands for Behavior-Driven Development, a software development methodology that emphasizes collaboration between developers, QA, and non-technical stakeholders in the software development process",
        fr: "BDD signifie D\u00E9veloppement Pilot\u00E9 par le Comportement, une m\u00E9thodologie de d\u00E9veloppement logiciel qui met l'accent sur la collaboration entre les d\u00E9veloppeurs, l'assurance qualit\u00E9 et les parties prenantes non techniques dans le processus de d\u00E9veloppement logiciel",
    },
    SOLID: {
        en: "SOLID is a set of software design principles that promote maintainable and scalable software development",
        fr: "SOLID est un ensemble de principes de conception logicielle qui favorisent un d\u00E9veloppement logiciel maintenable et \u00E9volutif",
    },
};
