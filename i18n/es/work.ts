import type { WorkCopy } from "@/types/dictionary"

export const work: WorkCopy = {
  eyebrow: "Proyectos",
  title: "Sistemas que construí y que hoy usan empresas reales.",
  intro:
    "Cada proyecto tiene dos lecturas: primero, para qué sirve, en palabras sencillas; después, cómo está construido, para quien quiera el detalle técnico.",
  privacy: "Los nombres de los clientes se omiten por confidencialidad. El código pertenece a cada empresa.",
  labels: {
    plain: "En palabras simples",
    details: "Ver detalle técnico",
    built: "Qué construí",
    architecture: "Cómo está construido",
    layers: "Capas en las que trabajé",
    diagram: "Mapa del sistema",
  },
  layerLegend: { ui: "interfaz", api: "lógica", data: "datos", infra: "despliegue" },
  nodeLegend: {
    client: "Pantallas",
    service: "Servicios",
    data: "Datos",
    external: "Sistemas externos",
    queue: "Procesos automáticos",
  },
  status: { live: "En producción", done: "Terminado", building: "En construcción" },
  cases: {
    micupoya: {
      title: "Mi Cupo Ya",
      kicker: "Venta a crédito · WhatsApp y web",
      plain:
        "Una tienda vende celulares a crédito por WhatsApp y por su página web. El cliente elige el equipo, el sistema consulta su información con CONSULTAR, calcula cuánto le puede prestar y le arma el plan de cuotas. Cuando paga la inicial y completa su registro, el crédito se aprueba solo, sin revisión manual.",
      built: [
        "8 servicios: núcleo de reglas y dinero, pagos, enlace con sistemas externos, tareas automáticas, panel, portal del cliente y sitio web",
        "Cupo por una política configurable, plan de pagos con amortización francesa, mora y pagos aplicados en cascada con su recibo",
        "Conexión con el bot de WhatsApp, la pasarela de pagos y la plataforma que bloquea los equipos en mora",
      ],
      architecture:
        "Servicios NestJS independientes sobre una sola base MySQL, arquitectura hexagonal, avisos por webhook firmados con HMAC y con reintentos, auditoría por triggers, JWT RS256 y paneles Next.js con shadcn/ui. Todo corre en Docker.",
    },
    lending: {
      title: "Plataforma de créditos",
      kicker: "Sector financiero · créditos con aliados comerciales",
      plain:
        "Es el sistema con el que una empresa presta dinero a través de aliados comerciales. El aliado registra al cliente, el sistema lo perfila con CONSULTAR, revisa su historial en DataCrédito y decide si aprueba el crédito; después calcula las cuotas, recibe los pagos y cada mes reporta la cartera a la central de riesgo.",
      built: [
        "13 servicios por área: créditos, pagos, motor de decisión, aliados, usuarios, métricas, mensajes (SMS y correo), enlace con otros sistemas y tareas automáticas",
        "Conexión con DataCrédito (Experian HDC+) para el historial de crédito y armado del reporte mensual de cartera que se le entrega a la central",
        "Perfilamiento previo con CONSULTAR en una cola de trabajos, y un servidor MCP para que otros sistemas consulten como herramientas",
      ],
      architecture:
        "Repositorio orquestador con submódulos git, un esquema Prisma compartido, arquitectura hexagonal en cada API, colas BullMQ sobre Redis para el trabajo pesado, el proveedor de DataCrédito detrás de un puerto (real o simulado) y un script de despliegue que verifica todo antes de tocar producción.",
    },
    insyte: {
      title: "INSYTE",
      kicker: "Servicio para empresas · búsqueda y localización de personas",
      plain:
        "Con los datos básicos de una persona, INSYTE la busca en todas las entidades públicas que se pueden consultar —salud, pensión, riesgos laborales, Registraduría, RUNT, Policía, Procuraduría, Rama Judicial y más— para ayudar a localizarla, y entrega todo lo encontrado en una sola ficha.",
      built: [
        "39 fuentes públicas conectadas, consultadas en paralelo por un proceso en segundo plano que reintenta cuando una fuente falla",
        "Ficha consolidada que indica de qué entidad salió cada dato",
        "Acceso desde un panel web o por API, con cobro mensual según el uso",
      ],
      architecture:
        "API NestJS dueña del esquema de datos y un worker aislado que solo se comunica con ella por Redis y BullMQ, con un adaptador por fuente. Autenticación JWT RS256 y panel en Next.js.",
    },
    hr: {
      title: "Gestión Social",
      kicker: "Recursos humanos · varias empresas en una plataforma",
      plain:
        "Un programa de recursos humanos que usan varias empresas al mismo tiempo, cada una viendo solo su información: empleados, nómina, vacaciones y permisos.",
      built: [
        "Cálculo automático de primas, cesantías y prestaciones de ley",
        "Roles y permisos por empresa, vacaciones, suspensiones y llamados de atención",
        "Reporte de novedades con un código QR, sin necesidad de iniciar sesión",
      ],
      architecture:
        "Multi-tenant: cada empresa queda aislada en la capa de datos. API NestJS, frontend Next.js y Prisma sobre MySQL.",
    },
    legal: {
      title: "Procesos judiciales",
      kicker: "Sector público · automatización",
      plain:
        "Los abogados de una entidad revisaban a diario, uno por uno, sus procesos en la página de la Rama Judicial. Ahora el sistema hace esa revisión solo y deja cada expediente al día, con sus documentos descargados.",
      built: [
        "Sincronización automática de las actuaciones desde la Rama Judicial",
        "Descarga automática de documentos desde SAMAI",
        "Implementado en una entidad del gobierno y adaptado para una empresa de servicios públicos",
      ],
      architecture: "API Express con scrapers programados, Prisma sobre MySQL y frontend Next.js.",
    },
  },
  moreTitle: "Otros proyectos",
  more: {
    boletazo: {
      title: "Boletazo",
      plain: "Producto SaaS para que cualquier organizador maneje todo su proceso de venta de boletas en un solo lugar: venta en línea y en físico, abonos, vendedores, premios, sorteo con la lotería oficial y contabilidad.",
    },
    documents: {
      title: "Sistema de documentos",
      plain: "Servicio central donde varias aplicaciones guardan archivos, imágenes y videos; los optimiza solo para que carguen rápido.",
    },
    budget: {
      title: "Gestión presupuestal educativa",
      plain: "Control del presupuesto de una institución educativa: compras, aprobaciones, inventario y caja menor, con ingreso usando la cuenta de Microsoft 365.",
    },
    medical: {
      title: "Citas y emergencias médicas",
      plain: "Un call center coordinaba citas y emergencias por WhatsApp y se perdía información. Ahora cada caso queda registrado y con seguimiento.",
    },
  },
}
