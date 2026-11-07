export const portfolioData = {
  personal: {
    name: "Alejo Ezequiel",
    lastName: "Sosa",
    fullName: "Alejo Ezequiel Sosa",
    initials: "AES",
    role: "Desarrollador Web Jr. | Estudiante UNLP | IA & Bases de Datos",
    headline: "DESARROLLANDO EXPERIENCIAS WEB INTELIGENTES, ESCALABLES Y CON RIGOR ANALÍTICO",
    tagline: "Estudiante de Analista Programador Universitario (UNLP) especializado en Desarrollo Web, SQL y aceleración con Agentes de IA.",
    location: "Berisso, Buenos Aires, Argentina",
    email: "alejoezequiel9999@gmail.com",
    emailAlt: "alejoezequiel9999@gmail.com",
    github: "https://github.com/alejoezequiel99",
    linkedin: "https://www.linkedin.com/in/alejo-ezequiel-sosa-55b68242a/",
    phone: "+54 221 428 5618",
    whatsapp: "https://wa.me/542214285618",
    educationPrimary: "Estudiante Analista Programador Universitario (UNLP - 1° año) & CFL 404",
    bio: "Soy desarrollador web y estudiante de Analista Programador Universitario en la Universidad Nacional de La Plata (UNLP). Combino una sólida base en ciencias de la computación (algoritmos, lógica formal y estructuras de datos) con el desarrollo web moderno (JavaScript, React, Astro, Tailwind, NodeJS) y la aceleración mediante Agentes de Inteligencia Artificial (Cursor, Claude, OpenAI APIs). Cuento además con experiencia en el Ministerio de Seguridad de la PBA gestionando información sensible bajo rigurosos estándares de confidencialidad, integridad de datos y responsabilidad institucional.",
    stats: [
      { label: "Universidad", value: "UNLP (1° año en curso)" },
      { label: "Ubicación", value: "Berisso / La Plata, Arg." },
      { label: "Enfoque Core", value: "Web Dev, SQL & Agentes IA" },
      { label: "Disponibilidad", value: "Trainee / Jr. (Remoto / Híbrido)" }
    ]
  },

  navigationSections: [
    { id: "datos-personales", label: "Información", number: "00", icon: "User", desc: "Perfil, ubicación y contacto" },
    { id: "skills", label: "01 Skills", number: "01", icon: "Cpu", desc: "Lenguajes, Tech, IA y Soft Skills" },
    { id: "experiencia", label: "02 Experiencia", number: "02", icon: "Briefcase", desc: "Trayectoria laboral y proyectos" },
    { id: "proyectos", label: "Proyectos", number: "03", icon: "Layers", desc: "Fútbol en vivo, FDD, Redes e IA" },
    { id: "certificaciones", label: "03 Formación", number: "04", icon: "Award", desc: "UNLP, CFL 404, FCC, Mercado Pago" },
    { id: "contacto", label: "Contacto & CV", number: "05", icon: "Mail", desc: "Formulario, descarga PDF y redes" },
  ],

  blueprintElements: [
    {
      id: "pencil-box",
      targetId: "datos-personales",
      title: "Información Personal",
      tool: "Lápiz [Edición]",
      icon: "Edit3",
      desc: "Alejo Ezequiel Sosa • Berisso, Bs. As. • Perfil y datos",
      badge: "00 // SOBRE MÍ"
    },
    {
      id: "lamp-box",
      targetId: "skills",
      title: "01 Skills & Tecnologías",
      tool: "Lámpara [Ideas]",
      icon: "Sparkles",
      desc: "JavaScript, React, SQL, Astro, Tailwind, Agentes IA",
      badge: "01 // SKILLS"
    },
    {
      id: "mountain-box",
      targetId: "experiencia",
      title: "02 Experiencia",
      tool: "Galería [Montaña]",
      icon: "Briefcase",
      desc: "Min. de Seguridad PBA, Matéu Sports y desarrollo de software",
      badge: "02 // EXPERIENCIA"
    },
    {
      id: "portfolio-box",
      targetId: "proyectos",
      title: "Trabajos & Proyectos",
      tool: "</> Portfolio [Código]",
      icon: "Layers",
      desc: "Fútbol en Vivo, FDD Stock, Red Institucional y Portfolio",
      badge: "03 // PROYECTOS"
    },
    {
      id: "type-box",
      targetId: "certificaciones",
      title: "03 Formación & Títulos",
      tool: "Tipografía [T]",
      icon: "Award",
      desc: "UNLP, CFL 404 Berisso, FreeCodeCamp y Mercado Pago",
      badge: "04 // FORMACIÓN"
    },
    {
      id: "wireframes-box",
      targetId: "contacto",
      title: "Contacto & Descarga CV",
      tool: "Wireframes Base",
      icon: "Mail",
      desc: "Descarga PDF oficial, WhatsApp, LinkedIn y email",
      badge: "05 // CONTACTO"
    }
  ],

  // 01 SKILLS
  skills: {
    programmingLanguages: [
      { name: "JavaScript", level: "Avanzado", tag: "ES6+ / Async / DOM / APIs / Clean Code", icon: "Code" },
      { name: "SQL", level: "Intermedio / Sólido", tag: "Consultas / Modelado Relacional / Integridad", icon: "Database" },
      { name: "Java", level: "Fundamentos UNLP", tag: "POO / Algoritmos / Lógica de Programación", icon: "Terminal" },
    ],
    technologies: [
      { name: "React", level: "Avanzado", tag: "Hooks / SPA / Componentes / State", icon: "Atom" },
      { name: "Tailwind CSS", level: "Avanzado", tag: "Neumorphism / Responsive UI / Modern CSS", icon: "Palette" },
      { name: "Astro", level: "Intermedio", tag: "Arquitectura por componentes / Alto Rendimiento", icon: "Sparkles" },
      { name: "NodeJS", level: "Intermedio", tag: "Express / APIs REST / Backend", icon: "Server" },
      { name: "PostgreSQL & SQLite", level: "Intermedio", tag: "Persistencia de datos / Esquemas relacionales", icon: "Database" },
      { name: "Git & GitHub", level: "Avanzado", tag: "Control de versiones / CI-CD / Colaboración", icon: "GitBranch" },
      { name: "MS Access & Excel", level: "Avanzado", tag: "Gestión de datos institucionales / Auditoría", icon: "Table" },
    ],
    aiAndAgenticTools: [
      { name: "Agentes IA Autónomos & Asistidos", desc: "Uso de Cursor, Claude y OpenAI para desarrollo acelerado y refactorización.", icon: "Bot" },
      { name: "Prompt Engineering Técnico", desc: "Diseño y estructuración de instrucciones de alta fidelidad para modelos de lenguaje.", icon: "Sparkles" },
      { name: "Optimización de Consultas SQL con IA", desc: "Generación y depuración asistida de esquemas y queries de alto rendimiento.", icon: "Database" },
      { name: "Agentic Workflows", desc: "Automatización de flujos de desarrollo, validación y prototipado ágil.", icon: "Workflow" }
    ],
    languages: [
      { name: "Español", level: "Nativo", desc: "Comunicación fluida y profesional nativa", icon: "Globe" },
      { name: "Inglés", level: "Técnico / Básico", desc: "Lectura de documentación, especificaciones técnicas y APIs", icon: "Languages" }
    ],
    personalQualities: [
      { title: "Responsabilidad Institucional", desc: "Experiencia en manejo confidencial de información sensible y cumplimiento estricto de normas.", icon: "Shield" },
      { title: "Rigor Analítico", desc: "Formación universitaria en UNLP enfocada en algoritmos, lógica y resolución metódica.", icon: "CheckCircle2" },
      { title: "Proactivo & Resolutivo", desc: "Iniciativa constante para proponer mejoras técnicas y optimizar procesos de trabajo.", icon: "Flame" },
      { title: "Aprendizaje Continuo", desc: "Rápida adaptación e incorporación de nuevas tecnologías, frameworks y herramientas de IA.", icon: "Compass" },
      { title: "Colaborativo", desc: "Excelente comunicación, trabajo en equipo y recepción constructiva de feedback.", icon: "Users" },
      { title: "Orientado al Detalle", desc: "Compromiso con el código limpio, interfaces prolijas y arquitecturas escalables.", icon: "Brain" }
    ]
  },

  // 02 EXPERIENCIA
  experience: {
    completedWork: [
      {
        title: "Gestión de Datos & Tratamiento Documental Institucional",
        role: "Oficial de Policía Administrativo - Min. de Seguridad PBA",
        period: "2022 – Actualidad",
        desc: "Gestión administrativa y tratamiento riguroso de documentación institucional bajo estrictas normas de confidencialidad. Operación continua de bases de datos internas, Access y Excel avanzado para carga, control y auditoría de expedientes. Resolución metódica de procedimientos bajo alta exigencia institucional.",
        tags: ["Seguridad de la Información", "MS Access", "Excel Avanzado", "Bases de Datos", "Confidencialidad"]
      },
      {
        title: "Operaciones de Stock, Facturación y Sistemas Comerciales",
        role: "Vendedor / Cajero / Control de Stock - Matéu Sports S.A.",
        period: "2019 – 2022",
        desc: "Operación de software comercial interno para gestión de inventario, registro de productos vendidos, arqueo de caja y facturación. Manejo de tareas simultáneas en entorno comercial dinámico de alto volumen y orientación al usuario.",
        tags: ["Sistemas POS/ERP", "Control de Stock", "Facturación", "Atención al Usuario", "Trabajo en Equipo"]
      },
      {
        title: "Desarrollo de Módulos Web & Agentes de IA",
        role: "Programador Web - CFL 404 Berisso",
        period: "2025 – 2026",
        desc: "Construcción de módulos funcionales para la web integrando bases de datos relacionales (SQLite / SQL) y herramientas de desarrollo asistido con modelos LLM para optimizar consultas y flujos de software.",
        tags: ["HTML5", "CSS3", "JavaScript", "SQL", "SQLite", "Agentes IA"]
      }
    ],
    inProgressWork: [
      {
        title: "Plataforma Web de Estadísticas y Fútbol en Vivo",
        role: "Desarrollador Web",
        period: "En Desarrollo Activo",
        desc: "Plataforma dinámica dedicada al fútbol mundial inspirada en plataformas como Flashscore/Sofascore. Consulta en vivo de partidos, marcadores en tiempo real, tablas de posiciones y estadísticas por liga, construida con Astro, Tailwind CSS y PostgreSQL.",
        status: "En desarrollo activo",
        tags: ["Astro", "Tailwind CSS", "PostgreSQL", "TypeScript", "Lucide Icons"]
      },
      {
        title: "FDD: Forward Design Developer & Stock",
        role: "Creador & Desarrollador Principal",
        period: "En Desarrollo Activo",
        desc: "Sistema interactivo para respuesta inmediata de stock e inventario: '¿Qué cantidad vende? ¿Qué números tiene en stock?'. Panel de consulta ágil y métricas en tiempo real con estética neumórfica.",
        status: "En desarrollo activo",
        tags: ["React", "NodeJS", "Stock Logic", "Neumorphism", "AI Search"]
      },
      {
        title: "Red Interna Institucional & Acceso IP Privado",
        role: "Proyecto de Infraestructura & Seguridad",
        period: "Completado / Documentado",
        desc: "Diseño e implementación de arquitectura de red interna con direccionamiento IPv4 privado segmentado para dependencias institucionales, garantizando aislamiento de tráfico y control de accesos perimetrales.",
        status: "Implementado",
        tags: ["Redes LAN", "IPv4 Privado", "Seguridad Perimetral", "Segmentación"]
      }
    ]
  },

  // 03 PROYECTOS DESTACADOS
  projects: [
    {
      id: "football-project",
      title: "Plataforma Web de Fútbol en Vivo & Estadísticas",
      subtitle: "Resultados en Tiempo Real, Clasificaciones y Persistencia Relacional",
      badge: "PROYECTO WEB & DATOS",
      description: "Plataforma web dinámica orientada a la consulta en tiempo real de resultados de fútbol mundial, tablas de posiciones y estadísticas por torneo. Diseñada con arquitectura desacoplada en Astro, estilado con Tailwind CSS y persistencia en PostgreSQL.",
      methodology: {
        what: "Visualización de marcadores en directo, agenda de partidos, clasificaciones por país y liga, con actualización ágil y bajo consumo de recursos.",
        where: "Desarrollado con arquitectura moderna de componentes, routing optimizado y preparado para consumo de APIs deportivas en vivo.",
        how: "Stack: Astro 5, Tailwind CSS, PostgreSQL, TypeScript y Lucide Icons.",
        when: "En desarrollo y evolución continua 2026."
      },
      tags: ["Astro", "Tailwind CSS", "PostgreSQL", "TypeScript", "APIs REST"],
      githubUrl: "https://github.com/alejoezequiel99"
    },
    {
      id: "fdd-project",
      title: "FDD: Forward Design Developer",
      subtitle: "Sistema Inteligente de Consulta de Stock & Cantidad Vendida",
      badge: "SISTEMA DE GESTIÓN",
      description: "Plataforma interactiva diseñada para responder al instante: ¿Qué cantidad vende? ¿Qué números tiene en stock? Organiza y visibiliza métricas de productos con claridad total e interfaz táctil neumórfica.",
      methodology: {
        what: "Muestra la cantidad vendida por producto y período, unidades exactas en stock, alertas de inventario crítico y consulta ágil.",
        where: "KPIs en la parte superior, buscador dinámico en el centro y tabla desglosada con gráficos de rotación a la vista.",
        how: "Implementado con estética Neumorphism violeta táctil. Stack: React, NodeJS, Tailwind CSS.",
        when: "Fase 1 completada, integrando analíticas en tiempo real."
      },
      tags: ["React", "NodeJS", "Stock & Ventas", "Neumorphism", "Agentes IA"],
      githubUrl: "https://github.com/alejoezequiel99"
    },
    {
      id: "network-project",
      title: "Red Interna Institucional & IPs Privadas",
      subtitle: "Infraestructura de Red, Segmentación y Seguridad Perimetral",
      badge: "INFRAESTRUCTURA & SEGURIDAD",
      description: "Diseño e implementación de arquitectura de red interna para un ámbito institucional, utilizando direccionamiento IP privado segmentado, control de accesos y aislamiento perimetral para dependencias administrativas.",
      methodology: {
        what: "Esquema de subredes privadas para garantizar integridad y confidencialidad de la información entre diferentes áreas operativas.",
        where: "Entorno institucional con requerimientos de alta disponibilidad y tolerancia a fallas.",
        how: "Topología LAN, direccionamiento IPv4 clase privada, políticas de seguridad perimetral.",
        when: "Desarrollo técnico institucional documentado."
      },
      tags: ["Redes LAN", "IPv4 Privado", "Seguridad Perimetral", "Auditoría"],
      githubUrl: "https://github.com/alejoezequiel99"
    },
    {
      id: "portfolio-alejo",
      title: "Portfolio Interactivo Neumórfico",
      subtitle: "Centro de Navegación con Laptop Central & Blueprint Neumórfico",
      badge: "PORTFOLIO PERSONAL",
      description: "Portfolio web construido desde cero con arquitectura modular, diseño inspirado en el blueprint de desarrollo interactivo donde la computadora en el centro conecta cada cuadro a su sector, con CV descargable en PDF y modo táctil.",
      methodology: {
        what: "Presentación integral de perfil profesional, experiencia institucional, formación universitaria en la UNLP y proyectos.",
        where: "Hero interactivo con laptop central conectada a cada sección mediante navegación fluida.",
        how: "Gama violeta neumórfica (#4F20D2, #7C4DFF, #A78BFA) desarrollada en React, Tailwind CSS y Vite.",
        when: "Desplegado en GitHub Pages 2026."
      },
      tags: ["React", "Tailwind CSS", "Neumorphism", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/alejoezequiel99/portfolio"
    }
  ],

  // 04 FORMACIÓN & CERTIFICACIONES
  certifications: [
    {
      id: "unlp-cs",
      title: "Analista Programador Universitario",
      institution: "Universidad Nacional de La Plata (UNLP)",
      location: "La Plata, Buenos Aires, Argentina",
      status: "1° Año en Curso",
      isCompleted: true,
      desc: "Formación universitaria de grado en ciencias de la computación: fundamentos de programación estructurada y orientada a objetos, diseño y análisis de algoritmos, lógica computacional, estructuras de datos y metodologías de desarrollo.",
      badgeColor: "#7C4DFF"
    },
    {
      id: "cfl-404",
      title: "Programador Web con Agentes IA y Base de Datos",
      institution: "Centro de Formación Laboral (CFL) 404 Berisso",
      location: "Berisso, Buenos Aires, Argentina",
      status: "Certificación Oficial Obtenida",
      isCompleted: true,
      desc: "Formación especializada en desarrollo web (HTML5, CSS3, JavaScript), bases de datos relacionales (SQL, SQLite) y la aplicación práctica de agentes de Inteligencia Artificial para aceleración y validación de software.",
      badgeColor: "#7C4DFF"
    },
    {
      id: "freecodecamp",
      title: "Full Stack & Algoritmos JavaScript",
      institution: "FreeCodeCamp",
      website: "freecodecamp.org",
      status: "Especialización Continua",
      isCompleted: false,
      desc: "Perfeccionamiento en desarrollo web responsive, algoritmos avanzados, manipulación de estructuras de datos complejas y proyectos frontend/full stack.",
      badgeColor: "#A78BFA"
    },
    {
      id: "mercadopago",
      title: "Mercado Pago Developers",
      institution: "Mercado Pago",
      website: "mercadopago.com.ar/developers",
      status: "Especialización en Pasarelas de Pago",
      isCompleted: false,
      desc: "Capacitación en integración de Checkout Pro, Checkout API, gestión de cobros digitales, transacciones seguras y configuración de webhooks.",
      badgeColor: "#7C4DFF"
    }
  ],

  // Contacto y Redes
  contact: {
    name: "Alejo Ezequiel Sosa",
    location: "Berisso / La Plata, Buenos Aires, Argentina",
    email: "alejoezequiel9999@gmail.com",
    emailAlt: "alejoezequiel9999@gmail.com",
    githubUrl: "https://github.com/alejoezequiel99",
    linkedinUrl: "https://www.linkedin.com/in/alejo-ezequiel-sosa-55b68242a/",
    whatsappUrl: "https://wa.me/542214285618",
    phone: "+54 221 428 5618",
    ctaCV: "Descargar CV Oficial (PDF)",
    cvPdfPath: "cv/CV_Alejo_Ezequiel_Sosa.pdf"
  }
};
