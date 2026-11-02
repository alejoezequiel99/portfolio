export const portfolioData = {
  personal: {
    name: "Alejo Ezequiel",
    lastName: "Sosa",
    fullName: "Alejo Ezequiel Sosa",
    initials: "AES",
    role: "Desarrollador Web & Especialista en Agentes IA",
    headline: "DESARROLLANDO EXPERIENCIAS WEB INTELIGENTES, ESCALABLES Y DE ALTO IMPACTO",
    tagline: "Especializado en JavaScript, Java, React, NodeJS e integración práctica de Agentes de Inteligencia Artificial.",
    location: "Berisso, Buenos Aires, Argentina",
    email: "alejoezequiel9999@gmail.com",
    github: "https://github.com/alejoezequiel99",
    linkedin: "https://www.linkedin.com/in/alejo-sosa",
    educationPrimary: "Programador Web con Agentes IA - CFL 404 Berisso",
    bio: "Soy desarrollador web apasionado por crear interfaces modernas, sistemas ágiles y soluciones de alto rendimiento con sede en Berisso, Buenos Aires. Combino el poder de tecnologías consolidadas (JavaScript, Java, React, NodeJS, Tailwind, Docker, Git) con el potencial de la Inteligencia Artificial y agentes autónomos para resolver problemas reales con excelencia visual y arquitectura limpia.",
    stats: [
      { label: "Ubicación", value: "Berisso, Bs. As., Argentina" },
      { label: "Enfoque Core", value: "Web & Agentes IA" },
      { label: "Estilo Visual", value: "Neumorphism Violet" },
      { label: "Disponibilidad", value: "Proyectos & Colaboración" }
    ]
  },

  navigationSections: [
    { id: "datos-personales", label: "Información", number: "00", icon: "User", desc: "Perfil, ubicación y contacto" },
    { id: "skills", label: "01 Skills", number: "01", icon: "Cpu", desc: "Lenguajes, Tech, IA y Soft Skills" },
    { id: "experiencia", label: "02 Experiencia", number: "02", icon: "Briefcase", desc: "Trabajos hechos y en proceso" },
    { id: "proyectos", label: "Proyectos", number: "03", icon: "Layers", desc: "Portfolio & FDD Stock" },
    { id: "certificaciones", label: "03 Certificaciones", number: "04", icon: "Award", desc: "CFL 404, FCC, Mercado Pago" },
    { id: "contacto", label: "Contacto & CV", number: "05", icon: "Mail", desc: "Formulario, descarga PDF y redes" },
  ],

  // Elementos interactivos del blueprint (correspondientes a los cuadros de la imagen)
  blueprintElements: [
    {
      id: "pencil-box",
      targetId: "datos-personales",
      title: "Información Personal",
      tool: "Lápiz [Edición]",
      icon: "Edit3",
      desc: "Alejo Ezequiel Sosa • Berisso, Bs. As., Argentina • Perfil profesional",
      badge: "00 // SOBRE MÍ"
    },
    {
      id: "lamp-box",
      targetId: "skills",
      title: "01 Skills & Tecnologías",
      tool: "Lámpara [Ideas]",
      icon: "Sparkles",
      desc: "JavaScript, Java, React, NodeJS, Docker, Git, CSS y Agentes IA",
      badge: "01 // SKILLS"
    },
    {
      id: "mountain-box",
      targetId: "experiencia",
      title: "02 Experiencia",
      tool: "Galería [Montaña]",
      icon: "Briefcase",
      desc: "Trabajos hechos y proyectos en proceso de desarrollo activo",
      badge: "02 // EXPERIENCIA"
    },
    {
      id: "portfolio-box",
      targetId: "proyectos",
      title: "Trabajos & Proyectos",
      tool: "</> Portfolio [Código]",
      icon: "Layers",
      desc: "Portfolio Interactivo y FDD: Forward Design Developer",
      badge: "03 // PROYECTOS"
    },
    {
      id: "type-box",
      targetId: "certificaciones",
      title: "03 Certificaciones",
      tool: "Tipografía [T]",
      icon: "Award",
      desc: "CFL 404 Berisso, FreeCodeCamp y Mercado Pago Developers",
      badge: "04 // CERTIFICACIONES"
    },
    {
      id: "wireframes-box",
      targetId: "contacto",
      title: "Contacto & Descarga CV",
      tool: "Wireframes Base",
      icon: "Mail",
      desc: "Formulario interactivo, CV PDF y enlaces a redes oficiales",
      badge: "05 // CONTACTO"
    }
  ],

  // 01 SKILLS
  skills: {
    programmingLanguages: [
      { name: "JavaScript", level: "Avanzado", tag: "ES6+ / Async / DOM / APIs / Clean Code", icon: "Code" },
      { name: "Java", level: "Intermedio / Sólido", tag: "POO / Backend / Algoritmos / Arquitectura", icon: "Terminal" },
    ],
    technologies: [
      { name: "React", level: "Avanzado", tag: "Hooks / SPA / Componentes / State", icon: "Atom" },
      { name: "NodeJS", level: "Intermedio / Avanzado", tag: "Express / APIs REST / Backend", icon: "Server" },
      { name: "Tailwind CSS", level: "Avanzado", tag: "Neumorphism / Responsive UI / Modern CSS", icon: "Palette" },
      { name: "Docker", level: "Intermedio", tag: "Contenedores / Ambientes / Deploy", icon: "Box" },
      { name: "Git & GitHub", level: "Avanzado", tag: "Control de versiones / CI-CD / Colaboración", icon: "GitBranch" },
      { name: "CSS / Modern CSS", level: "Avanzado", tag: "Flexbox / Grid / Animaciones / Neumorphism", icon: "Layout" },
    ],
    aiAndAgenticTools: [
      { name: "Agentes IA Autónomos", desc: "Orquestación de agentes inteligentes para resolución de tareas y generación asistida de software.", icon: "Bot" },
      { name: "Prompt Engineering", desc: "Diseño y optimización de prompts técnicos de alta precisión para modelos de lenguaje.", icon: "Sparkles" },
      { name: "Agentic Workflows", desc: "Automatización de flujos de código, testing inteligente y optimización de productividad.", icon: "Workflow" },
      { name: "Integración de LLMs", desc: "Conexión de modelos de lenguaje en plataformas y aplicaciones web interactivas.", icon: "Cpu" }
    ],
    languages: [
      { name: "Español", level: "Nativo", desc: "Comunicación fluida y profesional nativa", icon: "Globe" },
      { name: "Inglés", level: "Técnico", desc: "Lectura fluida de documentación, especificaciones técnicas y APIs", icon: "Languages" }
    ],
    personalQualities: [
      { title: "Resolutivo", desc: "Capacidad analítica para desglosar problemas complejos y materializar soluciones eficientes.", icon: "CheckCircle2" },
      { title: "Proactivo", desc: "Iniciativa constante para proponer mejoras técnicas, optimizaciones y anticipar necesidades.", icon: "Flame" },
      { title: "Autodidacta", desc: "Hábito constante de estudio e incorporación veloz de nuevas herramientas y estándares.", icon: "Compass" },
      { title: "Detallista", desc: "Obsesión por la estética limpia, la fidelidad de diseño neumórfico y el código prolijo.", icon: "Sparkle" },
      { title: "Colaborativo", desc: "Facilidad de integración en equipos de desarrollo, comunicación asertiva y recepción de feedback.", icon: "Users" },
      { title: "Innovador", desc: "Aprovechamiento de la vanguardia de la IA y agentes para construir productos diferenciales.", icon: "Brain" }
    ]
  },

  // 02 EXPERIENCIA
  experience: {
    completedWork: [
      {
        title: "Portfolio Web Neumórfico Interactivo",
        role: "Desarrollador Web & UI Designer",
        period: "2026",
        desc: "Diseño y desarrollo integral de portafolio web personal con hub de navegación central en laptop, mapas de interacción blueprint y estética neumórfica en gama violeta de alta fidelidad.",
        tags: ["React", "Tailwind CSS", "Neumorphism", "Framer Motion", "Vite"]
      },
      {
        title: "Desarrollo de Módulos Web & Agentes IA",
        role: "Programador Web - CFL 404 Berisso",
        period: "2025 - 2026",
        desc: "Desarrollo de módulos funcionales para la web integrando APIs y agentes de inteligencia artificial para agilizar consultas, estructurar bases de datos y resolver requerimientos prácticos.",
        tags: ["JavaScript", "Java", "Agentes IA", "NodeJS", "APIs REST"]
      },
      {
        title: "Interfaces Reactivas & Prototipos UI Neumórficos",
        role: "Desarrollo Independiente",
        period: "2024 - 2025",
        desc: "Construcción de interfaces dinámicas en React con sistemas táctiles de relieve y sombras suaves neumórficas, formularios interactivos y navegación fluida.",
        tags: ["React", "Tailwind", "CSS Moderno", "Git"]
      }
    ],
    inProgressWork: [
      {
        title: "FDD: Forward Design Developer",
        role: "Creador & Desarrollador Principal",
        period: "En Desarrollo Activo",
        desc: "Sistema interactivo para respuesta inmediata de stock e inventario: '¿Qué cantidad vende? ¿Qué números tiene en stock?'. Con panel de consulta ágil y métricas en tiempo real.",
        status: "En desarrollo activo",
        tags: ["React", "NodeJS", "Stock Logic", "Neumorphism", "AI Search"]
      },
      {
        title: "Integración de Pasarelas Mercado Pago Developers",
        role: "Desarrollador Integrador",
        period: "En Proceso",
        desc: "Implementación y testeo de flujos de pago con Checkout Pro, Checkout API y Webhooks oficiales de Mercado Pago para plataformas de venta digital.",
        status: "En curso",
        tags: ["Mercado Pago SDK", "NodeJS", "JavaScript", "Webhooks"]
      },
      {
        title: "Especialización Avanzada FreeCodeCamp",
        role: "Estudiante & Developer",
        period: "En Curso",
        desc: "Perfeccionamiento continuo en estructuras de datos avanzadas, algoritmos en JavaScript y aplicaciones full stack según el currículum de freecodecamp.org.",
        status: "En curso",
        tags: ["FreeCodeCamp", "JavaScript", "Algoritmos", "Certificación"]
      }
    ]
  },

  // PROYECTOS (Portfolio y FDD)
  projects: [
    {
      id: "fdd-project",
      title: "FDD: Forward Design Developer",
      subtitle: "Sistema Inteligente de Consulta de Stock & Cantidad Vendida",
      badge: "PROYECTO DESTACADO",
      description: "Plataforma diseñada para responder al instante: ¿Qué cantidad vende? ¿Qué números tiene en stock? Organiza y visibiliza métricas de productos con claridad total.",
      methodology: {
        what: "Muestra la cantidad vendida por producto y período, unidades exactas en stock, alertas de inventario crítico y consulta rápida mediante lenguaje natural asistido por IA.",
        where: "Orden de la data optimizado: Métricas clave (KPIs) en la parte superior, buscador dinámico en el centro, y tabla desglosada con gráficos de rotación a la vista.",
        how: "Implementado con estética Neumorphism violeta táctil. Stack: React, NodeJS, Tailwind CSS, sombras suaves y acentos vibrantes.",
        when: "Evolución por fases: Fase 1 (Prototipo y UI completa) ✓ | Fase 2 (Lógica de stock y analíticas en tiempo real) [En curso] | Fase 3 (Pasarela de pagos y sincronización)"
      },
      tags: ["React", "NodeJS", "Stock & Ventas", "Neumorphism", "Agentes IA"],
      liveStockDemo: [
        { product: "Zapatillas Urbanas Neo V1", stock: 42, sold: 128, status: "Alto Stock" },
        { product: "Remera Oversize Cotton Tech", stock: 8, sold: 215, status: "Stock Crítico" },
        { product: "Buzo Hoodie Minimal Violet", stock: 24, sold: 95, status: "Stock Normal" },
        { product: "Pantalón Cargo Tactical", stock: 15, sold: 74, status: "Stock Normal" },
      ]
    },
    {
      id: "portfolio-alejo",
      title: "Portfolio Interactivo Alejo Ezequiel Sosa",
      subtitle: "Centro de Navegación con Laptop Central & Blueprint Neumórfico",
      badge: "PORTFOLIO PERSONAL",
      description: "Portfolio web construido desde cero con arquitectura modular, diseño inspirado en el blueprint de desarrollo interactivo donde la computadora en el centro conecta cada cuadro a su sector.",
      methodology: {
        what: "Presentación integral de datos personales, experiencia, proyectos, habilidades técnicas con agentes IA y certificaciones oficiales.",
        where: "Hero interactivo con laptop central conectada a cada sección mediante botones que se iluminan al pasar el cursor y hacen scroll automático, seguido de secciones modulares.",
        how: "Gama de colores fiel al blueprint violeta original (#4F20D2, #7C4DFF, #A78BFA). Estilo Neumorphism con iconos normalizados al mismo tamaño.",
        when: "Lanzamiento oficial 2026."
      },
      tags: ["React", "Tailwind CSS", "Neumorphism", "Framer Motion", "Vite"]
    }
  ],

  // 03 CERTIFICACIONES
  certifications: [
    {
      id: "cfl-404",
      title: "Programador Web con Agentes IA",
      institution: "Centro de Formación Laboral (CFL) 404 Berisso",
      location: "Berisso, Buenos Aires, Argentina",
      status: "Certificación Oficial Obtenida",
      isCompleted: true,
      desc: "Formación especializada en programación web full stack, lógica de algoritmos, JavaScript moderno, backend y la integración práctica de agentes de Inteligencia Artificial para potenciar el desarrollo de software.",
      badgeColor: "#7C4DFF"
    },
    {
      id: "freecodecamp",
      title: "Full Stack & Algoritmos JavaScript",
      institution: "FreeCodeCamp",
      website: "freecodecamp.org",
      status: "Curso para Realizar",
      isCompleted: false,
      desc: "Especialización en desarrollo web responsive, algoritmos avanzados, manipulación de estructuras de datos y resolución de desafíos lógicos en JavaScript según el currículum oficial de freecodecamp.org.",
      badgeColor: "#A78BFA"
    },
    {
      id: "mercadopago",
      title: "Mercado Pago Developers",
      institution: "Mercado Pago",
      website: "mercadopago.com.ar/developers",
      status: "Curso para Realizar",
      isCompleted: false,
      desc: "Capacitación oficial en integración de soluciones de cobro digital: Checkout Pro, Checkout API, gestión de transacciones seguras y configuración de webhooks en entornos web.",
      badgeColor: "#7C4DFF"
    }
  ],

  // Contacto y Redes
  contact: {
    name: "Alejo Ezequiel Sosa",
    location: "Berisso, Buenos Aires, Argentina",
    email: "alejoezequiel9999@gmail.com",
    githubUrl: "https://github.com/alejoezequiel99",
    linkedinUrl: "https://www.linkedin.com/in/alejo-sosa",
    phone: "+54 9 221 (Disponible por consulta)",
    ctaCV: "Descargar CV (PDF)"
  }
};
