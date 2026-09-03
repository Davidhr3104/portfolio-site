export type Locale = "en" | "es";

export type Dictionary = {
  nav: {
    links: { about: string; projects: string; impact: string; contact: string };
    schedule: string;
    menu: string;
    close: string;
    toLightMode: string;
    toDarkMode: string;
  };
  hero: {
    role: string;
    pitch: string;
    audience: string;
    pillHiring: string;
    pillPartnership: string;
    subtextHiring: string;
    subtextPartnership: string;
    availability: string;
    ctaWork: string;
    ctaProcess: string;
  };
  about: {
    label: string;
    whatIDo: string;
    focus: { title: string; text: string }[];
    howIGotHere: string;
    stages: { title: string; text: string }[];
    whyItMatters: string;
    quote: string;
    principles: string;
    pillars: { title: string; text: string }[];
  };
  howIWork: {
    label: string;
    heading: string;
    subtext: string;
    cta: string;
    steps: { title: string; description: string }[];
  };
  projects: {
    label: string;
    filterAll: string;
    problemTypeLabels: Record<string, string>;
    prevAria: string;
    nextAria: string;
    screenshotPlaceholder: string;
    viewFullCase: string;
    openCaseAria: (title: string) => string;
    viewAria: (title: string) => string;
    tryLiveDemo: string;
    closeAria: string;
    zoomAria: (alt: string) => string;
    closeZoomAria: string;
    prevMediaAria: string;
    nextMediaAria: string;
    goToMediaAria: (position: number) => string;
    sections: { problem: string; approach: string; result: string };
    carouselAria: string;
    positionAnnouncement: (title: string, index: number, total: number) => string;
  };
  impact: {
    label: string;
    metrics: { label: string }[];
    subtext: string;
    estimator: {
      sliderLabelPrefix: string;
      sentencePrefix: string;
      hoursWeek: string;
      back: string;
      hoursMonth: string;
      footnote: string;
    };
  };
  tools: {
    label: string;
    description: string;
  };
  reviews: {
    label: string;
    pauseAria: string;
    playAria: string;
    items: { quote: string; role: string }[];
  };
  faq: {
    label: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    label: string;
    heading: string;
    responds: string;
    location: string;
    notRightFit: string;
    linkedinAria: string;
    githubAria: string;
    upworkAria: string;
    scheduleAria: string;
    scheduleLabel: string;
    emailLabel: string;
    emailAria: string;
  };
  contactForm: {
    fullName: string;
    namePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    privacyNote: string;
    successTitle: string;
    successBody: string;
    genericError: string;
  };
  footer: {
    role: string;
    backToTop: string;
    backToTopAria: string;
  };
};

export const en: Dictionary = {
  nav: {
    links: { about: "About", projects: "Projects", impact: "Impact", contact: "Contact" },
    schedule: "Schedule",
    menu: "Menu",
    close: "Close",
    toLightMode: "Switch to light mode",
    toDarkMode: "Switch to dark mode",
  },
  hero: {
    role: "AI Systems Architect",
    pitch:
      "I build AI agents you can actually audit: evidence-backed extraction, automated systems, and full-stack products engineered for trust, not demos.",
    audience:
      "For founders and teams who need AI they can actually rely on, not just impress with.",
    pillHiring: "I'm hiring for a project",
    pillPartnership: "I'm exploring a partnership",
    subtextHiring: "Good place to start: here's what I've shipped.",
    subtextPartnership: "Good place to start: here's how I approach the work.",
    availability: "Currently available, limited capacity",
    ctaWork: "See the work",
    ctaProcess: "See how I work",
  },
  about: {
    label: "About",
    whatIDo: "What I Do",
    focus: [
      {
        title: "What I Build",
        text: "AI agents that do real work inside a business: pulling structured data from documents, qualifying leads, answering questions from internal knowledge, keeping systems in sync.",
      },
      {
        title: "My Approach",
        text: "Audit the process before automating it. Deterministic logic wherever correctness matters, with the model reserved for the parts that genuinely require judgment.",
      },
    ],
    howIGotHere: "How I Got Here",
    stages: [
      {
        title: "Customer Support & Operations",
        text: "Started in BPO and call center work, the early stretch of my career, well before tech.",
      },
      {
        title: "Executive & Virtual Assistant",
        text: "Moved into freelance work, then started building AI and automation projects on the side.",
      },
      {
        title: "AI Systems & Automation",
        text: "A little over two years in, but moved fast: from self-initiated automations in n8n, Make, and Zapier to architecting production AI agents businesses depend on daily.",
      },
    ],
    whyItMatters: "Why It Matters",
    quote:
      "I care about building AI you can audit not because of one dramatic failure I witnessed, but because it's the engineering standard I hold myself to: if a system can't show its work, I don't trust it enough to ship it, and neither should you.",
    principles: "Principles",
    pillars: [
      {
        title: "Confidence-scored AI",
        text: "If the model isn't sure, you'll know before it matters.",
      },
      {
        title: "Human-in-the-loop by design",
        text: "The decisions that can hurt you always get a second pair of eyes.",
      },
      {
        title: "Full-stack delivery",
        text: "One person, start to finish, no handoffs where things get lost.",
      },
    ],
  },
  howIWork: {
    label: "How I Work",
    heading: "A process built around visibility, not guesswork.",
    subtext:
      "No black boxes, no surprise handoffs: a clear path from the first audit to a system you can actually trust.",
    cta: "Let's build something",
    steps: [
      { title: "Audit", description: "Map what's actually happening before proposing anything." },
      { title: "Architect", description: "Decide what's deterministic and what needs a model." },
      { title: "Build", description: "Ship working systems, not prototypes." },
      { title: "Validate", description: "Test against real edge cases, not just the happy path." },
      { title: "Document & Handoff", description: "Leave something the team can run without me." },
    ],
  },
  projects: {
    label: "Selected Work",
    filterAll: "All",
    problemTypeLabels: {
      "Data Extraction": "Data Extraction",
      "Lead & Sales": "Lead & Sales",
      "Knowledge & Search": "Knowledge & Search",
      "Ops & Sync": "Ops & Sync",
    },
    prevAria: "Previous project",
    nextAria: "Next project",
    screenshotPlaceholder: "Screenshot",
    viewFullCase: "View full case",
    openCaseAria: (title) => `Open case study for ${title}`,
    viewAria: (title) => `View ${title}`,
    tryLiveDemo: "Try the live demo",
    closeAria: "Close",
    zoomAria: (alt) => `Zoom in on ${alt}`,
    closeZoomAria: "Close zoomed image",
    prevMediaAria: "Previous media",
    nextMediaAria: "Next media",
    goToMediaAria: (position) => `Go to media ${position}`,
    sections: { problem: "Problem", approach: "Approach", result: "Result" },
    carouselAria: "Selected work carousel",
    positionAnnouncement: (title, index, total) => `${title}, project ${index} of ${total}`,
  },
  impact: {
    label: "Impact",
    metrics: [
      { label: "Production AI systems built and shipped" },
      { label: "Avg. reduction in manual review time" },
      { label: "High-stakes decisions kept human-reviewed by design" },
    ],
    subtext: "Real numbers from delivered systems, not projected outcomes.",
    estimator: {
      sliderLabelPrefix: "Hours per week your team spends on manual review or data entry:",
      sentencePrefix: "At a 90% average reduction, that's roughly",
      hoursWeek: "hours/week",
      back: "back, about",
      hoursMonth: "hours/month",
      footnote: "Illustrative estimate based on average results across past projects.",
    },
  },
  tools: {
    label: "Tools I Use",
    description:
      "A working set, not a badge wall: AI, automation, and full-stack tools I reach for daily to actually ship what's on this page.",
  },
  reviews: {
    label: "Reviews",
    pauseAria: "Pause reviews",
    playAria: "Play reviews",
    items: [
      {
        quote:
          "He explains exactly why the model flagged something, not just that it did, and that's what let us actually trust the output.",
        role: "Founder, B2B SaaS",
      },
      {
        quote:
          "We stopped losing hours to manual review within the first two weeks. The reasoning attached to each score made it easy to spot-check instead of redoing the work.",
        role: "Head of Operations, Logistics",
      },
      {
        quote:
          "Direct communication the whole way, no account manager in between. He was in the database schema and the UI in the same week.",
        role: "CTO, Early-Stage Startup",
      },
      {
        quote:
          "The kind of system you can hand to a non-technical team and they'll actually trust the numbers on screen.",
        role: "COO, Professional Services",
      },
      {
        quote:
          "Faster turnaround than the agencies we'd used before, and clean enough documentation that our own team could maintain it after handoff.",
        role: "Founder, Marketing Agency",
      },
    ],
  },
  faq: {
    label: "FAQ",
    items: [
      {
        question: "Do you work solo or with a team?",
        answer:
          "I work as an individual: direct communication, no hand-off loss, though it means being realistic about pacing on larger projects.",
      },
      {
        question:
          "You've been doing this a little over two years. Why should I trust you with something this important?",
        answer:
          "Fair question. My depth is in how deliberately I approach reliability, not years on a calendar. Every system I build separates what needs to be exactly right (deterministic logic) from what genuinely needs a model's judgment, with confidence scoring and human review on anything high-stakes. Happy to walk through the architecture of any project so you can judge the thinking directly, not just the résumé.",
      },
      {
        question: "Can you work across time zones? How available are you really?",
        answer:
          "Based in Bogotá (UTC-5), with strong natural overlap with US Eastern and Central time zones. I keep communication async-friendly: written updates, clear documentation, so timezone gaps don't become a bottleneck.",
      },
      {
        question: "What's your typical engagement length?",
        answer:
          "Ranges from focused 1-2 week builds to ongoing monthly work, depending on scope. I usually start with a smaller trial or discovery phase before a longer commitment.",
      },
      {
        question:
          "What if the project doesn't work out, or requirements change halfway through?",
        answer:
          "I build in phases and validate early: a discovery phase or small trial before a larger commitment whenever possible, so we catch misalignment before a lot of time is sunk. If requirements shift, I'd rather re-scope openly than quietly ship something I know doesn't fit anymore.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes. Client work stays confidential, and I don't publish client or project names publicly, which is why my portfolio describes systems generically.",
      },
      {
        question: "What's your tech stack preference?",
        answer:
          "Whatever gets a reliable system shipped fastest: usually Claude, Next.js, and Supabase, but I don't force a stack where it doesn't fit the problem.",
      },
    ],
  },
  contact: {
    label: "Contact",
    heading: "Currently available for select freelance and contract engagements.",
    responds: "Usually responds within 24 hours.",
    location: "Based in Bogotá, Colombia, with strong overlap with US business hours.",
    notRightFit:
      "Not the right fit if you're looking for a chatbot demo by Friday. I build systems meant to run in production, not prototypes.",
    linkedinAria: "LinkedIn profile",
    githubAria: "GitHub profile",
    upworkAria: "Upwork profile",
    scheduleAria: "Schedule a call via Zoom",
    scheduleLabel: "Schedule",
    emailLabel: "Email",
    emailAria: "Email David",
  },
  contactForm: {
    fullName: "Full name",
    namePlaceholder: "Your name",
    emailAddress: "Email address",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project.",
    sending: "Sending…",
    send: "Send message",
    privacyNote: "Your info stays between us: no lists, no spam.",
    successTitle: "Message sent.",
    successBody: "I'll get back to you within 24 hours.",
    genericError: "Something went wrong.",
  },
  footer: {
    role: "AI Systems Architect",
    backToTop: "Back to top",
    backToTopAria: "Back to top",
  },
};

export const es: Dictionary = {
  nav: {
    links: { about: "Sobre mí", projects: "Proyectos", impact: "Impacto", contact: "Contacto" },
    schedule: "Agendar",
    menu: "Menú",
    close: "Cerrar",
    toLightMode: "Cambiar a modo claro",
    toDarkMode: "Cambiar a modo oscuro",
  },
  hero: {
    role: "Arquitecto de Sistemas de IA",
    pitch:
      "Construyo agentes de IA que realmente puedes auditar: extracción respaldada por evidencia, sistemas automatizados y productos full-stack diseñados para generar confianza, no solo demos.",
    audience:
      "Para founders y equipos que necesitan IA en la que puedan confiar de verdad, no solo que los impresione.",
    pillHiring: "Estoy contratando para un proyecto",
    pillPartnership: "Estoy explorando una colaboración",
    subtextHiring: "Buen punto de partida: esto es lo que he construido.",
    subtextPartnership: "Buen punto de partida: así es como abordo el trabajo.",
    availability: "Disponible actualmente, capacidad limitada",
    ctaWork: "Ver el trabajo",
    ctaProcess: "Ver cómo trabajo",
  },
  about: {
    label: "Sobre mí",
    whatIDo: "Qué Hago",
    focus: [
      {
        title: "Qué Construyo",
        text: "Agentes de IA que hacen trabajo real dentro de un negocio: extraer datos estructurados de documentos, calificar leads, responder preguntas desde el conocimiento interno, mantener sistemas sincronizados.",
      },
      {
        title: "Mi Enfoque",
        text: "Auditar el proceso antes de automatizarlo. Lógica determinística donde la exactitud importa, con el modelo reservado para las partes que genuinamente requieren juicio.",
      },
    ],
    howIGotHere: "Cómo Llegué Aquí",
    stages: [
      {
        title: "Atención al Cliente y Operaciones",
        text: "Empecé en BPO y call centers, el primer tramo de mi carrera, mucho antes de tech.",
      },
      {
        title: "Asistente Ejecutivo y Virtual",
        text: "Pasé a trabajo freelance, y ahí empecé a construir proyectos de IA y automatización por mi cuenta.",
      },
      {
        title: "Sistemas de IA y Automatización",
        text: "Poco más de dos años en esto, pero avanzando rápido: de automatizaciones autoiniciadas en n8n, Make y Zapier a diseñar agentes de IA en producción de los que dependen negocios todos los días.",
      },
    ],
    whyItMatters: "Por Qué Importa",
    quote:
      "Me importa construir IA que se pueda auditar no por un fallo dramático que haya presenciado, sino porque es el estándar de ingeniería que me exijo: si un sistema no puede mostrar su trabajo, no confío lo suficiente en él como para lanzarlo, y tú tampoco deberías.",
    principles: "Principios",
    pillars: [
      {
        title: "IA con nivel de confianza",
        text: "Si el modelo no está seguro, lo sabrás antes de que importe.",
      },
      {
        title: "Humano en el loop, por diseño",
        text: "Las decisiones que te pueden salir caras siempre pasan por un segundo par de ojos.",
      },
      {
        title: "Entrega full-stack",
        text: "Una sola persona, de principio a fin, sin handoffs donde las cosas se pierden.",
      },
    ],
  },
  howIWork: {
    label: "Cómo Trabajo",
    heading: "Un proceso construido sobre visibilidad, no adivinanza.",
    subtext:
      "Sin cajas negras, sin handoffs sorpresa: un camino claro desde la primera auditoría hasta un sistema en el que realmente puedas confiar.",
    cta: "Construyamos algo",
    steps: [
      { title: "Auditoría", description: "Mapear lo que realmente está pasando antes de proponer nada." },
      { title: "Arquitectura", description: "Decidir qué es determinístico y qué necesita un modelo." },
      { title: "Construcción", description: "Lanzar sistemas que funcionan, no prototipos." },
      { title: "Validación", description: "Probar contra casos límite reales, no solo el camino feliz." },
      { title: "Documentación y Entrega", description: "Dejar algo que el equipo pueda operar sin mí." },
    ],
  },
  projects: {
    label: "Trabajo Seleccionado",
    filterAll: "Todos",
    problemTypeLabels: {
      "Data Extraction": "Extracción de Datos",
      "Lead & Sales": "Leads y Ventas",
      "Knowledge & Search": "Conocimiento y Búsqueda",
      "Ops & Sync": "Operaciones y Sync",
    },
    prevAria: "Proyecto anterior",
    nextAria: "Siguiente proyecto",
    screenshotPlaceholder: "Captura",
    viewFullCase: "Ver caso completo",
    openCaseAria: (title) => `Abrir caso de estudio de ${title}`,
    viewAria: (title) => `Ver ${title}`,
    tryLiveDemo: "Probar la demo en vivo",
    closeAria: "Cerrar",
    zoomAria: (alt) => `Ampliar ${alt}`,
    closeZoomAria: "Cerrar imagen ampliada",
    prevMediaAria: "Contenido anterior",
    nextMediaAria: "Contenido siguiente",
    goToMediaAria: (position) => `Ir al contenido ${position}`,
    sections: { problem: "Problema", approach: "Enfoque", result: "Resultado" },
    carouselAria: "Carrusel de trabajo seleccionado",
    positionAnnouncement: (title, index, total) => `${title}, proyecto ${index} de ${total}`,
  },
  impact: {
    label: "Impacto",
    metrics: [
      { label: "Sistemas de IA en producción construidos y lanzados" },
      { label: "Reducción promedio en tiempo de revisión manual" },
      { label: "Decisiones de alto riesgo con revisión humana por diseño" },
    ],
    subtext: "Números reales de sistemas entregados, no proyecciones.",
    estimator: {
      sliderLabelPrefix: "Horas por semana que tu equipo dedica a revisión manual o entrada de datos:",
      sentencePrefix: "Con una reducción promedio del 90%, eso es aproximadamente",
      hoursWeek: "horas/semana",
      back: "de vuelta, cerca de",
      hoursMonth: "horas/mes",
      footnote: "Estimación ilustrativa basada en resultados promedio de proyectos anteriores.",
    },
  },
  tools: {
    label: "Herramientas Que Uso",
    description:
      "Un set de trabajo, no una pared de insignias: herramientas de IA, automatización y full-stack que uso a diario para realmente lanzar lo que ves en esta página.",
  },
  reviews: {
    label: "Reseñas",
    pauseAria: "Pausar reseñas",
    playAria: "Reproducir reseñas",
    items: [
      {
        quote:
          "Explica exactamente por qué el modelo marcó algo, no solo que lo hizo, y eso fue lo que nos permitió confiar de verdad en el resultado.",
        role: "Founder, SaaS B2B",
      },
      {
        quote:
          "Dejamos de perder horas en revisión manual en las primeras dos semanas. El razonamiento adjunto a cada score hizo fácil verificar puntualmente en vez de rehacer el trabajo.",
        role: "Head of Operations, Logística",
      },
      {
        quote:
          "Comunicación directa todo el tiempo, sin account manager de por medio. Estuvo en el esquema de la base de datos y en el UI la misma semana.",
        role: "CTO, Startup en etapa temprana",
      },
      {
        quote:
          "El tipo de sistema que le puedes entregar a un equipo no técnico y va a confiar de verdad en los números en pantalla.",
        role: "COO, Servicios Profesionales",
      },
      {
        quote:
          "Entrega más rápida que las agencias que habíamos usado antes, y documentación lo suficientemente clara para que nuestro propio equipo la mantuviera después del handoff.",
        role: "Founder, Agencia de Marketing",
      },
    ],
  },
  faq: {
    label: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Trabajas solo o con un equipo?",
        answer:
          "Trabajo de forma individual: comunicación directa, sin pérdida por handoffs, aunque eso significa ser realista con el ritmo en proyectos más grandes.",
      },
      {
        question:
          "Llevas poco más de dos años haciendo esto. ¿Por qué debería confiarte algo tan importante?",
        answer:
          "Pregunta justa. Mi fortaleza está en qué tan deliberado soy con la confiabilidad, no en los años en un calendario. Cada sistema que construyo separa lo que necesita ser exactamente correcto (lógica determinística) de lo que genuinamente necesita el juicio de un modelo, con scoring de confianza y revisión humana en todo lo de alto riesgo. Con gusto reviso la arquitectura de cualquier proyecto para que juzgues el pensamiento directamente, no solo el currículum.",
      },
      {
        question: "¿Puedes trabajar en distintas zonas horarias? ¿Qué tan disponible estás realmente?",
        answer:
          "Con base en Bogotá (UTC-5), con buen solapamiento natural con las zonas horarias Este y Central de EE. UU. Mantengo la comunicación async-friendly: actualizaciones escritas, documentación clara, para que las diferencias de horario no se conviertan en un cuello de botella.",
      },
      {
        question: "¿Cuál es tu duración típica de proyecto?",
        answer:
          "Va desde builds enfocados de 1 a 2 semanas hasta trabajo mensual continuo, dependiendo del alcance. Normalmente empiezo con una prueba más pequeña o una fase de discovery antes de un compromiso más largo.",
      },
      {
        question:
          "¿Qué pasa si el proyecto no funciona, o los requisitos cambian a mitad de camino?",
        answer:
          "Construyo por fases y valido temprano: una fase de discovery o una prueba pequeña antes de un compromiso mayor siempre que sea posible, para detectar desalineaciones antes de invertir mucho tiempo. Si los requisitos cambian, prefiero replantear el alcance abiertamente en vez de entregar en silencio algo que sé que ya no encaja.",
      },
      {
        question: "¿Firmas NDAs?",
        answer:
          "Sí. El trabajo con clientes se mantiene confidencial, y no publico nombres de clientes ni de proyectos públicamente, por eso mi portafolio describe los sistemas de forma genérica.",
      },
      {
        question: "¿Cuál es tu preferencia de stack tecnológico?",
        answer:
          "El que permita lanzar un sistema confiable más rápido: normalmente Claude, Next.js y Supabase, pero no fuerzo un stack donde no encaja con el problema.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    heading: "Disponible actualmente para proyectos freelance y de contrato selectos.",
    responds: "Normalmente respondo en menos de 24 horas.",
    location: "Con base en Bogotá, Colombia, con buen solapamiento con el horario laboral de EE. UU.",
    notRightFit:
      "No soy la opción correcta si buscas una demo de chatbot para el viernes. Construyo sistemas hechos para correr en producción, no prototipos.",
    linkedinAria: "Perfil de LinkedIn",
    githubAria: "Perfil de GitHub",
    upworkAria: "Perfil de Upwork",
    scheduleAria: "Agendar una llamada por Zoom",
    scheduleLabel: "Agendar",
    emailLabel: "Correo",
    emailAria: "Enviar correo a David",
  },
  contactForm: {
    fullName: "Nombre completo",
    namePlaceholder: "Tu nombre",
    emailAddress: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    message: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto.",
    sending: "Enviando…",
    send: "Enviar mensaje",
    privacyNote: "Tu información queda entre nosotros: sin listas, sin spam.",
    successTitle: "Mensaje enviado.",
    successBody: "Te responderé dentro de 24 horas.",
    genericError: "Algo salió mal.",
  },
  footer: {
    role: "Arquitecto de Sistemas de IA",
    backToTop: "Volver arriba",
    backToTopAria: "Volver arriba",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
