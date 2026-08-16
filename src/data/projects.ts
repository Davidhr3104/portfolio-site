export const PROBLEM_TYPES = [
  "Data Extraction",
  "Lead & Sales",
  "Knowledge & Search",
  "Ops & Sync",
] as const;

export type ProblemType = (typeof PROBLEM_TYPES)[number];

export type LocalizedText = { en: string; es: string };

export type Project = {
  slug: string;
  index: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  tags: string[];
  problemTypes: ProblemType[];
  caseStudy: {
    problem: LocalizedText;
    approach: LocalizedText;
    result: LocalizedText;
  };
  /** Internal route to a live, interactive playground for this project, if one exists. */
  demoHref?: string;
};

export const projects: Project[] = [
  {
    slug: "confidence-extraction",
    index: "01",
    title: {
      en: "Confidence-Scored Extraction Agent",
      es: "Agente de Extracción con Nivel de Confianza",
    },
    description: {
      en: "Teams pulling data from documents by hand had no way to know what was actually safe to trust. This extracts structured fields from invoices, contracts, and resumes, scoring each value's confidence and citing the exact source it came from.",
      es: "Los equipos que extraían datos de documentos a mano no tenían forma de saber qué era realmente seguro confiar. Esto extrae campos estructurados de facturas, contratos y hojas de vida, calificando la confianza de cada valor y citando la fuente exacta de donde salió.",
    },
    image: "confidence-extraction.png",
    imageAlt: {
      en: "Confidence Extraction Demo interface showing structured invoice fields with per-field confidence scores and cited source text",
      es: "Interfaz de la demo de Confidence Extraction mostrando campos estructurados de una factura con niveles de confianza por campo y texto fuente citado",
    },
    tags: ["Claude API", "TypeScript", "Next.js"],
    problemTypes: ["Data Extraction"],
    caseStudy: {
      problem: {
        en: "Manual document review doesn't scale. Reviewers were re-checking every extracted field by hand because there was no way to tell which values were safe to trust and which needed a second look.",
        es: "La revisión manual de documentos no escala. Los revisores volvían a chequear cada campo extraído a mano porque no había forma de saber qué valores eran seguros de confiar y cuáles necesitaban una segunda mirada.",
      },
      approach: {
        en: "Built on Claude's tool-use to force structured output per field, then required each value to carry the exact source substring it was extracted from. Confidence isn't just the model's self-reported certainty: it's checked against whether the quoted evidence actually supports the value, so a fluent but wrong answer can't pass as high-confidence.",
        es: "Construido sobre el tool-use de Claude para forzar una salida estructurada por campo, exigiendo además que cada valor lleve el fragmento exacto de la fuente de donde fue extraído. La confianza no es solo la certeza autoreportada del modelo: se verifica contra si la evidencia citada realmente respalda el valor, así una respuesta fluida pero incorrecta no puede pasar como de alta confianza.",
      },
      result: {
        en: "Reviewers now only open the fields flagged below threshold, cutting manual verification down to the minority of extractions that genuinely need a human, with an audit trail showing exactly why each value was trusted.",
        es: "Los revisores ahora solo abren los campos marcados por debajo del umbral, reduciendo la verificación manual a la minoría de extracciones que genuinamente necesitan un humano, con un rastro de auditoría que muestra exactamente por qué se confió en cada valor.",
      },
    },
  },
  {
    slug: "lead-scoring",
    index: "02",
    title: {
      en: "AI Lead Scoring System: 90% Less Qualification Time",
      es: "Sistema de Lead Scoring con IA: 90% Menos Tiempo de Calificación",
    },
    description: {
      en: "A sales team was losing hours a week manually reviewing every inbound lead against criteria that lived in a spreadsheet. This scores and filters leads in real time against the firm's own rules, attaching the reasoning behind each call, cutting qualification time by 90%.",
      es: "Un equipo de ventas perdía horas a la semana revisando manualmente cada lead entrante contra criterios que vivían en una hoja de cálculo. Esto califica y filtra leads en tiempo real contra las propias reglas de la firma, adjuntando el razonamiento detrás de cada llamada, reduciendo el tiempo de calificación en un 90%.",
    },
    image: "lead-scoring.png",
    imageAlt: {
      en: "AI Lead Qualifier automation workflow showing lead scoring, a Google Sheets logging step, and a conditional branch into AI-drafted follow-up emails",
      es: "Flujo de automatización del calificador de leads con IA mostrando el scoring de leads, un paso de registro en Google Sheets y una rama condicional hacia correos de seguimiento redactados por IA",
    },
    tags: ["Claude API", "Supabase", "Next.js"],
    problemTypes: ["Lead & Sales"],
    caseStudy: {
      problem: {
        en: "Sales reps were spending hours a week manually triaging inbound leads against qualification criteria that lived in a spreadsheet, with no consistency between reps.",
        es: "Los representantes de ventas pasaban horas a la semana clasificando manualmente leads entrantes contra criterios de calificación que vivían en una hoja de cálculo, sin consistencia entre representantes.",
      },
      approach: {
        en: "Codified the firm's own qualification rules as structured criteria, then used Claude to score each lead against them in real time and generate a plain-language rationale: not just a number, but the reasoning a rep would need to trust or challenge it.",
        es: "Se codificaron las propias reglas de calificación de la firma como criterios estructurados, y luego se usó Claude para calificar cada lead contra ellos en tiempo real y generar una justificación en lenguaje claro: no solo un número, sino el razonamiento que un representante necesitaría para confiar en él o cuestionarlo.",
      },
      result: {
        en: "Qualification time dropped 90%, and because every score ships with its rationale, reps can spot-check the AI's judgment instead of taking it on faith.",
        es: "El tiempo de calificación cayó un 90%, y como cada score viene con su justificación, los representantes pueden verificar puntualmente el juicio de la IA en vez de tomarlo como un acto de fe.",
      },
    },
  },
  {
    slug: "rag-assistant",
    index: "03",
    title: {
      en: "Internal Knowledge Assistant",
      es: "Asistente de Conocimiento Interno",
    },
    description: {
      en: "Answers to internal questions lived scattered across documents nobody had time to search through. This retrieval-augmented assistant answers only from that documentation, citing the exact source and passage, and says so when nothing relevant is found.",
      es: "Las respuestas a preguntas internas vivían dispersas en documentos que nadie tenía tiempo de revisar. Este asistente con recuperación aumentada responde solo desde esa documentación, citando la fuente y el pasaje exacto, y lo dice claramente cuando no encuentra nada relevante.",
    },
    image: "rag-assistant.png",
    imageAlt: {
      en: "Internal Knowledge Assistant chat interface showing a sourced answer with cited SOP passages and retrieval-match percentages",
      es: "Interfaz de chat del Asistente de Conocimiento Interno mostrando una respuesta con fuente citada, pasajes de SOP referenciados y porcentajes de coincidencia de recuperación",
    },
    tags: ["Claude API", "Embeddings", "Supabase"],
    problemTypes: ["Knowledge & Search"],
    caseStudy: {
      problem: {
        en: "Internal documentation existed but nobody trusted it enough to rely on: search either returned nothing or too much, with no way to know if an answer was actually grounded in the source.",
        es: "La documentación interna existía, pero nadie confiaba lo suficiente en ella como para usarla: la búsqueda devolvía nada o demasiado, sin forma de saber si una respuesta realmente estaba respaldada por la fuente.",
      },
      approach: {
        en: "A RAG pipeline (Voyage embeddings, Supabase pgvector) retrieves the actual passages behind every answer, and the assistant is instructed to answer only from what it retrieved, citing the exact document and passage, refusing outright when nothing relevant comes back instead of guessing.",
        es: "Un pipeline de RAG (embeddings de Voyage, pgvector de Supabase) recupera los pasajes reales detrás de cada respuesta, y se le indica al asistente que responda solo desde lo que recuperó, citando el documento y pasaje exacto, negándose por completo cuando no vuelve nada relevante en vez de adivinar.",
      },
      result: {
        en: "Every answer is traceable to a real passage, and the refusal path (arguably the more important feature) means the assistant never quietly fills a gap with a plausible-sounding fabrication.",
        es: "Cada respuesta es rastreable a un pasaje real, y el camino de negación (posiblemente la función más importante) hace que el asistente nunca llene un vacío en silencio con una invención que suena creíble.",
      },
    },
  },
  {
    slug: "sync-dashboard",
    index: "04",
    title: {
      en: "Multi-System Sync Dashboard",
      es: "Dashboard de Sincronización Multi-Sistema",
    },
    description: {
      en: "A business running multiple systems had no way to catch when records drifted out of sync. This reconciles CRM, billing, and operations data, surfacing drift field by field and tracking what's been reviewed versus resolved.",
      es: "Un negocio que corría varios sistemas no tenía forma de detectar cuándo los registros se desincronizaban. Esto concilia datos de CRM, facturación y operaciones, mostrando el desfase campo por campo y llevando registro de qué se ha revisado versus resuelto.",
    },
    image: "sync-dashboard.png",
    imageAlt: {
      en: "Sync and Drift Dashboard showing CRM, Billing, and Ops Tracker discrepancies alongside a sync health chart over time",
      es: "Dashboard de Sincronización y Desfase mostrando discrepancias entre CRM, Facturación y el tracker de Operaciones junto a un gráfico de salud de sincronización en el tiempo",
    },
    tags: ["Next.js", "Supabase", "TypeScript"],
    problemTypes: ["Ops & Sync"],
    caseStudy: {
      problem: {
        en: "CRM, billing, and an operations spreadsheet drifted out of sync silently: nobody noticed a mismatch until it caused a real problem downstream.",
        es: "El CRM, la facturación y una hoja de cálculo de operaciones se desincronizaban en silencio: nadie notaba una discrepancia hasta que causaba un problema real más adelante.",
      },
      approach: {
        en: "Field-by-field and record-level reconciliation across all three systems, run on a schedule, with discrepancies tracked by fingerprint so a fix (or a false alarm) is resolved permanently instead of re-flagging the same drift every run.",
        es: "Conciliación campo por campo y a nivel de registro entre los tres sistemas, ejecutada en un horario fijo, con las discrepancias rastreadas por huella única para que una corrección (o una falsa alarma) quede resuelta permanentemente en vez de volver a marcarse en cada corrida.",
      },
      result: {
        en: "Drift is caught within a day instead of being discovered by accident weeks later, with a review queue that shows exactly what changed and where.",
        es: "El desfase se detecta en un día en vez de descubrirse por accidente semanas después, con una cola de revisión que muestra exactamente qué cambió y dónde.",
      },
    },
  },
  {
    slug: "ceo-inbox",
    index: "05",
    title: {
      en: "CEO Inbox Automation: $800/mo Recovered",
      es: "Automatización de Inbox para CEO: $800/mes Recuperados",
    },
    description: {
      en: "An executive was spending hours a week just sorting through email before getting to anything that mattered. This classifies and prioritizes messages automatically, drafting responses for the routine ones and surfacing the rest, recovering roughly $800/month in previously missed follow-ups.",
      es: "Un ejecutivo pasaba horas a la semana solo organizando correos antes de llegar a algo que realmente importaba. Esto clasifica y prioriza mensajes automáticamente, redactando respuestas para los casos rutinarios y mostrando el resto, recuperando cerca de $800 al mes en seguimientos que antes se perdían.",
    },
    image: "ceo-inbox.png",
    imageAlt: {
      en: "CEO inbox automation workflow showing a new email triggering AI analysis and branching into urgent, spam, client, and internal paths",
      es: "Flujo de automatización del inbox de CEO mostrando un correo nuevo activando análisis con IA y ramificándose en rutas de urgente, spam, cliente e interno",
    },
    tags: ["Claude API", "n8n", "Node.js"],
    problemTypes: ["Ops & Sync", "Lead & Sales"],
    caseStudy: {
      problem: {
        en: "A high-volume inbox meant real opportunities were getting buried under routine messages, and manually triaging every email cost more time than it saved.",
        es: "Un inbox de alto volumen significaba que oportunidades reales quedaban enterradas bajo mensajes rutinarios, y clasificar cada correo manualmente costaba más tiempo del que ahorraba.",
      },
      approach: {
        en: "An automation layer prioritizes messages by what actually needs a response and drafts replies for the routine cases, while surfacing the rest. Deterministic rules handle sorting; the model only drafts language.",
        es: "Una capa de automatización prioriza los mensajes según lo que realmente necesita respuesta y redacta réplicas para los casos rutinarios, mientras muestra el resto. Reglas determinísticas manejan la clasificación; el modelo solo redacta el lenguaje.",
      },
      result: {
        en: "Roughly $800 a month in previously missed follow-ups recovered, with response time on real opportunities cut from days to hours.",
        es: "Cerca de $800 al mes en seguimientos que antes se perdían ahora se recuperan, con el tiempo de respuesta en oportunidades reales reducido de días a horas.",
      },
    },
  },
  {
    slug: "langgraph-rag",
    index: "06",
    title: {
      en: "LangGraph RAG",
      es: "LangGraph RAG",
    },
    description: {
      en: "A knowledge assistant over a fictional microgrid company's internal documents, orchestrated as a LangGraph StateGraph: retrieve → generate → verify. The verify node independently checks the drafted answer against the retrieved sources and marks it 'not found' if it isn't grounded, rather than letting an ungrounded answer through.",
      es: "Un asistente de conocimiento sobre los documentos internos de una empresa ficticia de microrredes, orquestado como un StateGraph de LangGraph: recuperar → generar → verificar. El nodo de verificación revisa de forma independiente la respuesta redactada contra las fuentes recuperadas y la marca como 'no encontrada' si no está respaldada, en vez de dejar pasar una respuesta sin fundamento.",
    },
    image: "langgraph-rag.png",
    imageAlt: {
      en: "LangGraph RAG interface showing a three-node retrieve-generate-verify execution trace, a grounded answer with source citations, and the retrieved source chunks",
      es: "Interfaz de LangGraph RAG mostrando la traza de ejecución de tres nodos recuperar-generar-verificar, una respuesta respaldada con citas de fuente y los fragmentos de fuente recuperados",
    },
    tags: ["LangGraph", "Claude API", "Supabase"],
    problemTypes: ["Knowledge & Search"],
    caseStudy: {
      problem: {
        en: "The sibling Internal Knowledge Assistant proved a manual RAG loop could stay honest, but as a pipeline grows past a straight line (extra steps, branches, retries), hand-threading state through a chain of function calls gets brittle fast.",
        es: "El Asistente de Conocimiento Interno hermano demostró que un loop de RAG manual podía mantenerse honesto, pero conforme un pipeline crece más allá de una línea recta (pasos extra, ramas, reintentos), ir hilando el estado a mano a través de una cadena de funciones se vuelve frágil rápido.",
      },
      approach: {
        en: "Rebuilt the same retrieve → generate → verify pipeline as an explicit LangGraph StateGraph, with a second, independent Claude call in the verify node that checks the draft against the original retrieved chunks (never against the generate node's own reasoning) and can override the answer to 'not found' outright.",
        es: "Se reconstruyó el mismo pipeline recuperar → generar → verificar como un StateGraph explícito de LangGraph, con una segunda llamada independiente a Claude en el nodo de verificación que revisa el borrador contra los fragmentos originales recuperados (nunca contra el razonamiento propio del nodo de generación) y puede anular la respuesta a 'no encontrada' directamente.",
      },
      result: {
        en: "Every claim in a delivered answer is traceable to a retrieved passage, the execution trace streams live per node with no extra bookkeeping, and adding a step to the pipeline is a graph edit instead of a rewrite.",
        es: "Cada afirmación en una respuesta entregada es rastreable a un fragmento recuperado, la traza de ejecución se transmite en vivo por cada nodo sin contabilidad extra, y agregar un paso al pipeline es editar el grafo en vez de reescribir todo.",
      },
    },
    demoHref: "http://localhost:3008",
  },
  {
    slug: "multi-agent-research",
    index: "07",
    title: {
      en: "Multi-Agent Research System",
      es: "Multi-Agent Research System",
    },
    description: {
      en: "Three specialized agents (an Investigador, a Redactor, and a Revisor) coordinate sequentially over a closed corpus of fictional internal documents. The Revisor never discards a questionable claim silently: every unsupported claim it finds is flagged and shown alongside its reasoning.",
      es: "Tres agentes especializados (un Investigador, un Redactor y un Revisor) coordinan de forma secuencial sobre un corpus cerrado de documentos internos ficticios. El Revisor nunca descarta en silencio una afirmación cuestionable: cada afirmación sin respaldo que encuentra queda marcada y se muestra junto a su razonamiento.",
    },
    image: "multi-agent-research.png",
    imageAlt: {
      en: "Multi-Agent Research System interface showing the sequential Investigador, Redactor, and Revisor pipeline with a claim-by-claim supported/unsupported review",
      es: "Interfaz de Multi-Agent Research System mostrando el pipeline secuencial de Investigador, Redactor y Revisor con una revisión afirmación por afirmación de soportado o no soportado",
    },
    tags: ["Claude API", "Multi-Agent", "Next.js"],
    problemTypes: ["Knowledge & Search"],
    caseStudy: {
      problem: {
        en: "A single agent asked to research, write, and self-check its own report tends to rationalize its own claims. Self-review is a weaker guarantee than an independent pass.",
        es: "Un solo agente al que se le pide investigar, redactar y autorrevisar su propio informe tiende a racionalizar sus propias afirmaciones. La autorrevisión es una garantía más débil que una revisión independiente.",
      },
      approach: {
        en: "Split the job across three agents with no shared context: an Investigador that grounds every finding in a verbatim quote, a Redactor that writes a summary from those findings alone, and a Revisor that checks the summary claim-by-claim against the original findings (never against the Redactor's reasoning).",
        es: "Se dividió el trabajo entre tres agentes sin contexto compartido: un Investigador que respalda cada hallazgo en una cita textual, un Redactor que escribe un resumen solo a partir de esos hallazgos, y un Revisor que revisa el resumen afirmación por afirmación contra los hallazgos originales (nunca contra el razonamiento del Redactor).",
      },
      result: {
        en: "Unsupported claims are never silently dropped. The Revisor's claim-by-claim panel shows every claim it extracted, each flagged supported or unsupported with its reasoning, next to the summary that contains it.",
        es: "Las afirmaciones sin respaldo nunca se descartan en silencio. El panel de revisión afirmación por afirmación del Revisor muestra cada afirmación que extrajo, marcada como soportada o no soportada con su razonamiento, junto al resumen que la contiene.",
      },
    },
    demoHref: "http://localhost:3007",
  },
];
