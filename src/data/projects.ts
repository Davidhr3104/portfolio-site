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
    demoHref: "https://portfolio-confidence-extraction.vercel.app",
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
    tags: ["n8n", "Google Gemini", "Google Sheets"],
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
    demoHref: "https://rag-knowledge-demo.vercel.app",
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
    demoHref: "https://sync-dashboard-demo.vercel.app",
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
    tags: ["Zapier", "Gmail", "Slack"],
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
    demoHref: "https://portfolio-langgraph-rag.vercel.app",
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
    demoHref: "https://portfolio-multi-agent-research.vercel.app",
  },
  {
    slug: "langgraph-rag-python",
    index: "08",
    title: {
      en: "LangGraph RAG (Python)",
      es: "LangGraph RAG (Python)",
    },
    description: {
      en: "The Python sibling of LangGraph RAG: same retrieve → generate → verify StateGraph, same fictional corpus, same LangGraph library — FastAPI instead of Next.js. With no credentials configured it falls back to hand-written demo runs instead of crashing, and always marks that fallback explicitly rather than pretending it's a live answer.",
      es: "El hermano en Python de LangGraph RAG: el mismo StateGraph de recuperar → generar → verificar, el mismo corpus ficticio, la misma librería LangGraph — FastAPI en vez de Next.js. Sin credenciales configuradas cae a corridas de demo escritas a mano en vez de fallar, y siempre marca ese modo explícitamente en vez de aparentar ser una respuesta en vivo.",
    },
    image: "langgraph-rag-python.png",
    imageAlt: {
      en: "FastAPI Swagger UI for the LangGraph RAG Python service showing the POST /query endpoint",
      es: "Interfaz Swagger de FastAPI para el servicio LangGraph RAG en Python mostrando el endpoint POST /query",
    },
    tags: ["Python", "FastAPI", "LangGraph"],
    problemTypes: ["Knowledge & Search"],
    caseStudy: {
      problem: {
        en: "Needed real, hands-on Python practice with LangGraph and FastAPI specifically — not just a mental exercise of translating the existing TypeScript app, but an independently built service that happens to solve the same problem.",
        es: "Se necesitaba práctica real y directa con LangGraph y FastAPI en Python específicamente — no solo un ejercicio mental de traducir la app existente en TypeScript, sino un servicio construido de forma independiente que resuelve el mismo problema.",
      },
      approach: {
        en: "Ported the retrieve → generate → verify graph node-for-node and the chunker line-for-line, so both apps split and embed the shared corpus identically and produce directly comparable retrieval results — while the API shape changes to fit FastAPI: one request/response endpoint with a collected execution trace, instead of a live SSE stream, so it plays well with Swagger's \"Try it out.\"",
        es: "Se portó el grafo de recuperar → generar → verificar nodo por nodo y el chunker línea por línea, de forma que ambas apps dividen e indexan el corpus compartido de forma idéntica y producen resultados de recuperación directamente comparables — mientras la forma de la API cambia para ajustarse a FastAPI: un único endpoint de solicitud/respuesta con una traza de ejecución recopilada, en vez de un stream SSE en vivo, para que funcione bien con el botón \"Try it out\" de Swagger.",
      },
      result: {
        en: "A working FastAPI service with automatic Swagger docs, a demo mode that's never silently indistinguishable from a live run, and a graph structure that mirrors the TypeScript version closely enough to compare both runtimes' behavior side by side.",
        es: "Un servicio de FastAPI funcional con documentación Swagger automática, un modo demo que nunca se confunde en silencio con una corrida en vivo, y una estructura de grafo que refleja la versión en TypeScript lo suficientemente cerca como para comparar el comportamiento de ambos runtimes en paralelo.",
      },
    },
    demoHref: "https://portfolio-langgraph-rag-python.vercel.app",
  },
  {
    slug: "hermes-mini",
    index: "09",
    title: {
      en: "Hermes Mini — Weekly Executive Report Agent",
      es: "Hermes Mini — Agente de Reporte Ejecutivo Semanal",
    },
    description: {
      en: "LLMs are unreliable at arithmetic over many rows and will happily \"compute\" a plausible but wrong total. This report generator never lets Claude touch the numbers: deterministic code computes every week-over-week metric, and Claude only narrates, prioritizes, and recommends on top of the finished figures.",
      es: "Los LLMs no son confiables haciendo aritmética sobre muchas filas y felizmente \"calculan\" un total plausible pero incorrecto. Este generador de reportes nunca deja que Claude toque los números: código determinístico calcula cada métrica semana a semana, y Claude solo narra, prioriza y recomienda sobre las cifras ya calculadas.",
    },
    image: "hermes-mini.png",
    imageAlt: {
      en: "Hermes Mini executive dashboard showing KPI tiles, a severity-coded alert, and numbered recommendations generated from pre-computed metrics",
      es: "Dashboard ejecutivo de Hermes Mini mostrando tarjetas de KPI, una alerta codificada por severidad y recomendaciones numeradas generadas a partir de métricas precalculadas",
    },
    tags: ["Claude API", "Next.js", "Zod"],
    problemTypes: ["Ops & Sync"],
    caseStudy: {
      problem: {
        en: "Asking an LLM to both compute and summarize weekly business metrics risks a fluent report built on arithmetic the model silently got wrong — with no way to tell the real numbers from the hallucinated ones.",
        es: "Pedirle a un LLM que calcule y resuma a la vez las métricas semanales del negocio arriesga un reporte fluido construido sobre aritmética que el modelo se equivocó en silencio — sin forma de distinguir los números reales de los inventados.",
      },
      approach: {
        en: "Plain TypeScript computes every metric (revenue, lead volume, conversion by channel, stale accounts) before Claude ever sees the data. Only the finished numbers are handed to the model, forced through a single tool call with a strict schema, then validated at runtime with zod before reaching the UI — Claude narrates and prioritizes, it never recomputes or invents a figure.",
        es: "TypeScript puro calcula cada métrica (ingresos, volumen de leads, conversión por canal, cuentas inactivas) antes de que Claude vea el dato. Solo las cifras terminadas se le entregan al modelo, forzadas a través de una única llamada a herramienta con un esquema estricto, y luego validadas en tiempo de ejecución con zod antes de llegar a la interfaz — Claude narra y prioriza, nunca recalcula ni inventa una cifra.",
      },
      result: {
        en: "Every KPI on the dashboard is traceable to deterministic code, not the model's word for it, while the narrative and recommendations still read as sharp, specific executive commentary grounded in the real per-channel numbers.",
        es: "Cada KPI del dashboard es rastreable a código determinístico, no a la palabra del modelo, mientras la narrativa y las recomendaciones siguen leyéndose como comentario ejecutivo agudo y específico, fundamentado en los números reales por canal.",
      },
    },
    demoHref: "https://portfolio-hermes-mini.vercel.app",
  },
  {
    slug: "mcp-demo",
    index: "10",
    title: {
      en: "MCP Demo — Claude + a Local MCP Server",
      es: "MCP Demo — Claude + un Servidor MCP Local",
    },
    description: {
      en: "Most \"AI chat\" demos hide what actually happened behind a spinner. This one shows Claude driving a real Model Context Protocol server end-to-end: every tool call — the exact name, arguments, and raw result — renders as its own bubble in the transcript, right where it happened.",
      es: "La mayoría de las demos de \"chat con IA\" esconden lo que realmente pasó detrás de un spinner. Esta muestra a Claude operando un servidor real de Model Context Protocol de punta a punta: cada llamada a herramienta — el nombre exacto, los argumentos y el resultado crudo — se renderiza como su propia burbuja en la conversación, justo donde ocurrió.",
    },
    image: "mcp-demo.png",
    imageAlt: {
      en: "MCP Demo chat interface showing a distinct tool-call bubble with the exact tool name, arguments, and raw result between two chat messages",
      es: "Interfaz de chat de MCP Demo mostrando una burbuja de llamada a herramienta con el nombre exacto, los argumentos y el resultado crudo entre dos mensajes del chat",
    },
    tags: ["Claude API", "MCP", "Next.js"],
    problemTypes: ["Knowledge & Search"],
    caseStudy: {
      problem: {
        en: "Tool-calling demos usually collapse the agentic loop into a black box: a spinner, then an answer, with no visibility into which tools ran, what arguments they got, or what they actually returned.",
        es: "Las demos de llamadas a herramientas suelen colapsar el loop agéntico en una caja negra: un spinner, y luego una respuesta, sin visibilidad sobre qué herramientas corrieron, con qué argumentos, o qué devolvieron realmente.",
      },
      approach: {
        en: "A real MCP server (stdio transport, 3 tools sandboxed to a workspace folder) is spawned as a child process and its tool list is fetched live via listTools() — never hardcoded. Every tool_use Claude requests is executed against the actual MCP client, and the exact input/output is captured and shipped to the client alongside the final reply, rendered as its own bubble in the transcript.",
        es: "Un servidor MCP real (transporte stdio, 3 herramientas confinadas a una carpeta de workspace) se lanza como proceso hijo y su lista de herramientas se obtiene en vivo vía listTools() — nunca fija en el código. Cada tool_use que Claude solicita se ejecuta contra el cliente MCP real, y la entrada/salida exacta se captura y se envía al cliente junto con la respuesta final, renderizada como su propia burbuja en la conversación.",
      },
      result: {
        en: "Every step of the agentic loop is auditable in the UI itself, and the same client code works unmodified against any other MCP server (Notion, GitHub, a database) — swapping the server's stdio command is the only change needed.",
        es: "Cada paso del loop agéntico es auditable en la propia interfaz, y el mismo código cliente funciona sin modificar contra cualquier otro servidor MCP (Notion, GitHub, una base de datos) — cambiar el comando stdio del servidor es el único cambio necesario.",
      },
    },
    demoHref: "https://portfolio-mcp-demo.vercel.app",
  },
  {
    slug: "helix-orchestrator",
    index: "11",
    title: {
      en: "Helix Orchestrator — Multi-Agent Content System",
      es: "Helix Orchestrator — Sistema de Contenido Multi-Agente",
    },
    description: {
      en: "Six agents, one orchestrator, zero black boxes: an extractor, an SEO/quality checker and a fact-verifier running in parallel, a recommender, and a reviewer that audits its peers — every decision visible in a live audit log, with a human checkpoint gating any field the pipeline isn't confident about.",
      es: "Seis agentes, un orquestador, cero cajas negras: un extractor, un verificador de SEO/calidad y uno de hechos corriendo en paralelo, un recomendador, y un revisor que audita a sus pares — cada decisión visible en un log de auditoría en vivo, con un checkpoint humano que bloquea cualquier campo del que el pipeline no esté seguro.",
    },
    image: "helix-orchestrator.png",
    imageAlt: {
      en: "Helix Orchestrator interface showing the live agent status board, a streaming audit log, and a human-in-the-loop confidence checkpoint on extracted fields",
      es: "Interfaz de Helix Orchestrator mostrando el tablero de estado de agentes en vivo, un log de auditoría en streaming, y un checkpoint humano de confianza sobre los campos extraídos",
    },
    tags: ["Claude API", "Multi-Agent", "Next.js"],
    problemTypes: ["Knowledge & Search", "Data Extraction"],
    caseStudy: {
      problem: {
        en: "A single content-analysis agent that extracts, scores SEO, checks facts, and recommends actions all at once has no internal check on its own output — and no granular way to turn off just the risky parts (like fetching an external URL) without disabling the whole pipeline.",
        es: "Un solo agente de análisis de contenido que extrae, califica SEO, verifica hechos y recomienda acciones todo a la vez no tiene ningún control interno sobre su propia salida — y no hay forma granular de apagar solo las partes riesgosas (como buscar una URL externa) sin desactivar todo el pipeline.",
      },
      approach: {
        en: "Split the job across six specialized agents (extractor, SEO, fact-checker, recommender, reviewer, orchestrator) gated by a per-agent permission matrix and enable/disable switches, reusing patterns proven in this portfolio's other pieces: confidence + evidence per field (Confidence Extraction Agent), an unverified/conflicted flag instead of invented sources (Internal Knowledge Assistant), deterministic metrics narrated by the model (Hermes Mini), and a human checkpoint before any low-confidence package ships (Sync & Drift Dashboard) — with the reviewer agent auditing its peers' output before the orchestrator consolidates a final package.",
        es: "Se dividió el trabajo entre seis agentes especializados (extractor, SEO, verificador de hechos, recomendador, revisor, orquestador) controlados por una matriz de permisos por agente e interruptores de activación/desactivación, reutilizando patrones ya probados en otras piezas de este portafolio: confianza + evidencia por campo (Agente de Extracción con Confianza), una marca de no-verificado/en-conflicto en vez de fuentes inventadas (Asistente de Conocimiento Interno), métricas determinísticas narradas por el modelo (Hermes Mini), y un checkpoint humano antes de que cualquier paquete de baja confianza se publique (Dashboard de Sincronización) — con el agente revisor auditando la salida de sus pares antes de que el orquestador consolide el paquete final.",
      },
      result: {
        en: "Turning off fact-verification or URL-fetching mid-run visibly skips or blocks exactly that agent in the live log, every field in the final package carries its own confidence and evidence, and the human checkpoint won't let a low-confidence package through until each flagged field is explicitly confirmed.",
        es: "Apagar la verificación de hechos o el fetch de URL a mitad de una corrida salta o bloquea visiblemente ese agente exacto en el log en vivo, cada campo del paquete final lleva su propia confianza y evidencia, y el checkpoint humano no deja pasar un paquete de baja confianza hasta que cada campo marcado se confirma explícitamente.",
      },
    },
    demoHref: "https://multi-agent-orchestrator-mu.vercel.app",
  },
  {
    slug: "lead-scoring-demo",
    index: "12",
    title: {
      en: "Lead Scoring — Auditable AI Triage",
      es: "Lead Scoring — Triaje de IA Auditable",
    },
    description: {
      en: "Most \"AI scores your leads\" tools produce a number nobody can later verify. This one scores every inbound lead with Claude, but each score ships with evidence checked against the lead's own words, a declared confidence level, and a human-review flag the model can never clear itself.",
      es: "La mayoría de las herramientas de \"IA que califica tus leads\" producen un número que nadie puede verificar después. Esta califica cada lead entrante con Claude, pero cada score viene con evidencia verificada contra las propias palabras del lead, un nivel de confianza declarado, y una marca de revisión humana que el modelo nunca puede levantar por sí mismo.",
    },
    image: "lead-scoring-demo.png",
    imageAlt: {
      en: "Lead Scoring dashboard showing a lead's score, cited evidence from the original message, a confidence level, and a human-review flag",
      es: "Dashboard de Lead Scoring mostrando el score de un lead, evidencia citada del mensaje original, un nivel de confianza y una marca de revisión humana",
    },
    tags: ["Claude API", "Next.js", "TypeScript"],
    problemTypes: ["Lead & Sales", "Data Extraction"],
    caseStudy: {
      problem: {
        en: "A model that outputs a lead score with no evidence trail creates a number that gets trusted by default, with no way to tell afterward whether it meant anything or how a reviewer would spot-check it.",
        es: "Un modelo que produce un score de lead sin rastro de evidencia crea un número que se confía por defecto, sin forma de saber después si significaba algo o cómo un revisor podría verificarlo puntualmente.",
      },
      approach: {
        en: "Every score Claude produces is checked against the lead's own submitted text before it's trusted: the evidence cited has to actually be present in the source, the model declares its own confidence, and any lead below a threshold gets a human-review flag that only a person — never the model — can clear.",
        es: "Cada score que produce Claude se verifica contra el texto original enviado por el lead antes de confiar en él: la evidencia citada tiene que estar realmente presente en la fuente, el modelo declara su propia confianza, y cualquier lead por debajo de un umbral recibe una marca de revisión humana que solo una persona — nunca el modelo — puede levantar.",
      },
      result: {
        en: "Sales reps can audit any score in seconds by reading the exact cited evidence next to the lead's original message, and the human-review flag means a low-confidence or unverifiable score is never quietly treated as final.",
        es: "Los representantes de ventas pueden auditar cualquier score en segundos leyendo la evidencia citada exacta junto al mensaje original del lead, y la marca de revisión humana asegura que un score de baja confianza o no verificable nunca se trate en silencio como definitivo.",
      },
    },
    demoHref: "https://lead-scoring-demo.vercel.app",
  },
];
