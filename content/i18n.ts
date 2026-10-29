/**
 * Dicionário i18n (PT/EN) para o portfólio.
 *
 * Observações:
 * - Nomes de tecnologias, empresas e datas são mantidos iguais em ambos os idiomas.
 * - Para adicionar textos novos: adicione a chave em ambos os locales abaixo.
 */

const pt = {
  meta: {
    htmlLang: "pt-BR",
    locale: "pt_BR",
    title: "Guilherme Mendes · Engenheiro de Dados Sênior",
    description:
      "Portfólio de Engenharia de Dados — Python, PySpark, Databricks, AWS Glue, Lambda, S3, Athena. Pipelines ETL/ELT, processamento distribuído e plataformas de dados em nuvem.",
    role: "Engenheiro de Dados Sênior",
  },

  nav: {
    about: "Sobre",
    stack: "Stack",
    experience: "Experiência",
    projects: "Projetos",
    notebooks: "Notebooks",
    certificates: "Certificados",
    cv: "CV",
    contact: "Contato",
    fullStackCta: "Full Stack",
    openMenu: "Abrir menu",
    languageLabel: "Idioma",
  },

  hero: {
    badge: "Dados em escala · Cloud nativo",
    role: "Engenheiro de Dados Sênior",
    titleBefore: "Transformo dados em",
    titleHighlight: "plataformas confiáveis",
    titleAfter: "e decisões em escala.",
    description:
      "Engenheiro de Dados Sênior com mais de 7 anos de experiência em engenharia de software e dados. Construo pipelines ETL/ELT, workflows serverless e plataformas de dados em nuvem com Python, PySpark, Databricks e AWS.",
    ctaContact: "Entrar em contato",
    ctaDownload: "Baixar CV",
    ctaFullStack: "Ver portfólio Full Stack",
    terminalTitle: "pipeline.yaml",
    outcomesComment: "# outcomes",
    ingestComment: "# ingest.decision.events",
  },

  about: {
    eyebrow: "Sobre",
    title: "Engenharia de dados com mentalidade de software",
    description:
      "Combino mais de 7 anos de experiência entre engenharia de software, engenharia de dados e cloud. Atuo em sistemas críticos e distribuídos em larga escala, com foco em escalabilidade, qualidade de dados, observabilidade e automação.",
    impactLabel: "impacto",
    metrics: [
      {
        value: "+35%",
        label: "Eficiência de APIs",
        description:
          "Otimização de queries Mongoose e refatoração backend em aplicações críticas.",
      },
      {
        value: "-30%",
        label: "Tempo de execução ETL",
        description:
          "Pipelines em PySpark/Databricks reescritos para maior aderência a SLAs.",
      },
      {
        value: "-25%",
        label: "Incidentes operacionais",
        description:
          "Observabilidade com dashboards e alertas em plataformas de dados.",
      },
    ],
    focusLabel: "foco atual",
    focusText:
      "Plataformas de dados em nuvem para pipelines críticos em larga escala, utilizando ",
    focusHighlight1: "AWS Glue, Lambda, S3, Athena, Databricks",
    focusTextMiddle: " e ",
    focusHighlight2: "FICO DMPS",
    focusTextEnd: ".",
  },

  techStack: {
    eyebrow: "Stack técnico",
    title: "Tecnologias que uso para construir plataformas de dados",
    description:
      "Ferramentas que uso no dia a dia para ingestão, transformação, qualidade, armazenamento e observabilidade de dados.",
    itemsSuffix: "itens",
    groups: {
      dataPlatforms: {
        title: "Data Platforms",
        caption: "Processamento distribuído e orquestração",
      },
      storage: {
        title: "Storage & Analytics",
        caption: "Data lakes, warehouses e consulta analítica",
      },
      languages: {
        title: "Linguagens",
        caption: "Linguagens de processamento e scripting",
      },
      cloud: {
        title: "Cloud",
        caption: "Serviços de nuvem usados em produção",
      },
      streaming: {
        title: "Streaming & Mensageria",
        caption: "Processamento assíncrono e event-driven",
      },
      devops: {
        title: "DevOps & Observabilidade",
        caption: "CI/CD, containers e monitoramento",
      },
      ai: {
        title: "IA & Produtividade",
        caption: "Agentic coding, LLM workflows e ferramentas de IA",
      },
    },
  },

  experience: {
    eyebrow: "Experiência",
    title: "Timeline profissional",
    description:
      "Trajetória do suporte técnico à engenharia de dados sênior, passando por consultoria e desenvolvimento full stack.",
    present: "Atual",
    roles: {
      brq: {
        title: "Engenheiro de Dados Sênior",
        period: "Nov 2025 — Atual",
        location: "Remoto · Brasil",
        bullets: [
          "Desenvolvimento e otimização de plataformas de dados em nuvem para sistemas críticos de decisão no setor financeiro.",
          "Construção de pipelines e workflows serverless com AWS Glue, Lambda, S3, Athena, Databricks e Secrets Manager.",
          "Provisionamento e versionamento de infraestrutura AWS com Terraform (IaC).",
          "Atuação com FICO DMPS em fluxos de dados e processos de motores de decisão.",
          "Uso intensivo de IA generativa para acelerar desenvolvimento, documentação técnica e revisão de código.",
          "Melhoria de observabilidade (dashboards e alertas), reduzindo incidentes operacionais em ~25%.",
        ],
      },
      ms: {
        title: "Consultor de Tecnologia — Dados e Sistemas de Decisão",
        period: "Abr 2021 — Abr 2022",
        location: "Brasil",
        bullets: [
          "Parametrização e validação de políticas de motores de decisão para projetos bancários.",
          "Otimização de processos ETL, reduzindo em 30% o tempo de execução dos pipelines.",
          "Documentação técnica e treinamentos, reduzindo em 20% o tempo de onboarding.",
        ],
      },
      mobicity: {
        title: "Desenvolvedor Full Stack",
        period: "Abr 2022 — Nov 2025",
        location: "São Paulo, Brasil",
        bullets: [
          "Desenvolvimento de aplicações com Node.js, React.js e serviços AWS.",
          "Otimização de queries Mongoose e filas assíncronas, melhorando 35% a eficiência de processamento.",
          "Integração de serviços AWS para aumentar confiabilidade e reduzir indisponibilidades.",
        ],
      },
      permute: {
        title: "Estagiário de Suporte Técnico / Dev .NET",
        period: "Abr 2019 — Set 2020",
        location: "Brasil",
        bullets: [
          "Desenvolvimento e manutenção de sistemas backend em ASP.NET Core.",
          "Integração com interfaces web em HTML, jQuery e Bootstrap.",
        ],
      },
    },
  },

  projects: {
    eyebrow: "GitHub",
    title: "Projetos públicos",
    description:
      "Repositórios atualizados automaticamente do meu perfil no GitHub, com foco em projetos de dados, notebooks e ferramentas de engenharia.",
    viewAll: "Ver todos os projetos no GitHub",
    empty:
      "Não foi possível carregar os repositórios no momento (pode ser rate limit da API do GitHub). Visite diretamente o",
  },

  notebooks: {
    eyebrow: "Estudos & Databricks",
    title: "Notebooks de engenharia e análise de dados",
    description:
      "Notebooks exportados do Databricks e Jupyter com ETLs, exploração de dados e exemplos práticos. Clique para abrir em tela cheia.",
    empty:
      "Em breve: notebooks exportados do Databricks e Jupyter com ETLs, exploração de dados e tutoriais.",
    emptyHint: "Para adicionar: coloque o HTML em",
    emptyHint2: "e registre em",
    openButton: "Abrir",
    viewAll: "Ver todos os notebooks",
    back: "Voltar",
    viewOriginal: "Ver original",
    openInNewTab: "Abrir em nova aba",
    listTitle: "Todos os notebooks",
    listDescription:
      "Coleção completa de notebooks de engenharia e análise de dados.",
    listEmpty: "Nenhum notebook publicado ainda.",
    notFoundTitle: "Notebook não encontrado",
  },

  certificates: {
    eyebrow: "Certificados",
    title: "Formações e credenciais",
    description:
      "Certificados de cursos e formações em engenharia de dados, cloud e plataformas.",
    empty: "Nenhum certificado publicado ainda.",
    viewOnline: "Ver certificado",
    instructor: "Instrutor",
    credentialId: "Credencial",
  },

  cv: {
    eyebrow: "Currículo",
    title: "Baixe meu CV",
    description: "Baixe meu currículo em português ou em inglês.",
    available: "Disponível",
    comingSoon: "Em breve",
    download: "Baixar PDF",
    view: "Visualizar",
    updatedAt: "Atualizado em",
    comingSoonButton: "Em breve",
    labels: {
      pt: "CV em Português (ATS-friendly)",
      en: "CV em Inglês (ATS-friendly)",
    },
    languageNames: {
      pt: "Português",
      en: "Inglês",
    },
  },

  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar?",
    description:
      "Mande uma mensagem ou use um dos canais diretos abaixo — respondo o mais rápido possível.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@empresa.com",
      subject: "Assunto (opcional)",
      subjectPlaceholder: "Oportunidade, dúvida, parceria...",
      message: "Mensagem",
      messagePlaceholder: "Escreva sua mensagem...",
      send: "Enviar mensagem",
      sending: "Enviando...",
      successToast: "Mensagem enviada! Em breve entro em contato.",
      errorToast: "Erro ao enviar a mensagem",
      honeypotLabel: "Website",
    },
    channels: {
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    sidebar: {
      locationLabel: "Localização",
      availabilityLabel: "Disponibilidade",
      availabilityText:
        "Atuação exclusivamente remota (nacional ou internacional).",
    },
  },

  footer: {
    builtWith: "Construído com Next.js + Tailwind.",
    viewFullStack: "Ver portfólio Full Stack",
  },

  common: {
    stars: "stars",
    forks: "forks",
  },
};

const en: typeof pt = {
  meta: {
    htmlLang: "en",
    locale: "en_US",
    title: "Guilherme Mendes · Senior Data Engineer",
    description:
      "Data Engineering portfolio — Python, PySpark, Databricks, AWS Glue, Lambda, S3, Athena. ETL/ELT pipelines, distributed processing and cloud data platforms.",
    role: "Senior Data Engineer",
  },

  nav: {
    about: "About",
    stack: "Stack",
    experience: "Experience",
    projects: "Projects",
    notebooks: "Notebooks",
    certificates: "Certificates",
    cv: "Resume",
    contact: "Contact",
    fullStackCta: "Full Stack",
    openMenu: "Open menu",
    languageLabel: "Language",
  },

  hero: {
    badge: "Data at scale · Cloud native",
    role: "Senior Data Engineer",
    titleBefore: "I turn data into",
    titleHighlight: "reliable platforms",
    titleAfter: "and decisions at scale.",
    description:
      "Senior Data Engineer with more than 7 years of experience across software and data engineering. I build ETL/ELT pipelines, serverless workflows and cloud data platforms using Python, PySpark, Databricks and AWS.",
    ctaContact: "Get in touch",
    ctaDownload: "Download resume",
    ctaFullStack: "View Full Stack portfolio",
    terminalTitle: "pipeline.yaml",
    outcomesComment: "# outcomes",
    ingestComment: "# ingest.decision.events",
  },

  about: {
    eyebrow: "About",
    title: "Data engineering with a software mindset",
    description:
      "More than 7 years of experience combining software engineering, data engineering and cloud. I work on mission-critical, distributed systems at scale, focused on scalability, data quality, observability and automation.",
    impactLabel: "impact",
    metrics: [
      {
        value: "+35%",
        label: "API efficiency",
        description:
          "Mongoose query optimization and backend refactor across critical apps.",
      },
      {
        value: "-30%",
        label: "ETL execution time",
        description:
          "PySpark/Databricks pipelines rewritten for stronger SLA compliance.",
      },
      {
        value: "-25%",
        label: "Operational incidents",
        description:
          "Observability with dashboards and alerts across data platforms.",
      },
    ],
    focusLabel: "current focus",
    focusText:
      "Cloud data platforms for mission-critical pipelines at scale, using ",
    focusHighlight1: "AWS Glue, Lambda, S3, Athena, Databricks",
    focusTextMiddle: " and ",
    focusHighlight2: "FICO DMPS",
    focusTextEnd: ".",
  },

  techStack: {
    eyebrow: "Tech stack",
    title: "The tools I use to build data platforms",
    description:
      "What I use day-to-day for data ingestion, transformation, quality, storage and observability.",
    itemsSuffix: "items",
    groups: {
      dataPlatforms: {
        title: "Data Platforms",
        caption: "Distributed processing and orchestration",
      },
      storage: {
        title: "Storage & Analytics",
        caption: "Data lakes, warehouses and analytical queries",
      },
      languages: {
        title: "Languages",
        caption: "Processing and scripting languages",
      },
      cloud: {
        title: "Cloud",
        caption: "Cloud services used in production",
      },
      streaming: {
        title: "Streaming & Messaging",
        caption: "Async processing and event-driven architectures",
      },
      devops: {
        title: "DevOps & Observability",
        caption: "CI/CD, containers and monitoring",
      },
      ai: {
        title: "AI & Productivity",
        caption: "Agentic coding, LLM workflows and AI tooling",
      },
    },
  },

  experience: {
    eyebrow: "Experience",
    title: "Professional timeline",
    description:
      "From technical support to senior data engineering, through consulting and full stack development.",
    present: "Present",
    roles: {
      brq: {
        title: "Senior Data Engineer",
        period: "Nov 2025 — Present",
        location: "Remote · Brazil",
        bullets: [
          "Build and optimize cloud data platforms for mission-critical decisioning systems in the financial sector.",
          "Design serverless pipelines and workflows with AWS Glue, Lambda, S3, Athena, Databricks and Secrets Manager.",
          "Provision and version AWS infrastructure with Terraform (IaC).",
          "Work with FICO DMPS on data flows and decision engine processes.",
          "Heavy use of generative AI to accelerate development, technical documentation and code review.",
          "Improved observability (dashboards and alerts), reducing operational incidents by ~25%.",
        ],
      },
      ms: {
        title: "Technology Consultant — Data & Decisioning Systems",
        period: "Apr 2021 — Apr 2022",
        location: "Brazil",
        bullets: [
          "Parameterized and validated decision engine policies for banking projects.",
          "Optimized ETL processes, cutting pipeline execution time by 30%.",
          "Technical documentation and training, reducing onboarding time by 20%.",
        ],
      },
      mobicity: {
        title: "Full Stack Developer",
        period: "Apr 2022 — Nov 2025",
        location: "São Paulo, Brazil",
        bullets: [
          "Built applications with Node.js, React.js and AWS services.",
          "Optimized Mongoose queries and async queues, improving processing efficiency by 35%.",
          "Integrated AWS services to improve reliability and reduce downtime.",
        ],
      },
      permute: {
        title: "Technical Support Intern / .NET Developer",
        period: "Apr 2019 — Sep 2020",
        location: "Brazil",
        bullets: [
          "Developed and maintained backend systems in ASP.NET Core.",
          "Integrated with web interfaces using HTML, jQuery and Bootstrap.",
        ],
      },
    },
  },

  projects: {
    eyebrow: "GitHub",
    title: "Public projects",
    description:
      "Repositories pulled automatically from my GitHub profile, with a focus on data projects, notebooks and engineering tooling.",
    viewAll: "View all projects on GitHub",
    empty:
      "Couldn't load repositories right now (possibly a GitHub API rate limit). Visit directly at",
  },

  notebooks: {
    eyebrow: "Studies & Databricks",
    title: "Data engineering and analysis notebooks",
    description:
      "Notebooks exported from Databricks and Jupyter with ETLs, data exploration and practical examples. Click to open full view.",
    empty:
      "Coming soon: notebooks exported from Databricks and Jupyter with ETLs, data exploration and tutorials.",
    emptyHint: "To add one: place the HTML in",
    emptyHint2: "and register it in",
    openButton: "Open",
    viewAll: "View all notebooks",
    back: "Back",
    viewOriginal: "View original",
    openInNewTab: "Open in new tab",
    listTitle: "All notebooks",
    listDescription:
      "Complete collection of data engineering and analysis notebooks.",
    listEmpty: "No notebooks published yet.",
    notFoundTitle: "Notebook not found",
  },

  certificates: {
    eyebrow: "Certificates",
    title: "Training and credentials",
    description:
      "Course certificates and training credentials in data engineering, cloud and platforms.",
    empty: "No certificates published yet.",
    viewOnline: "View certificate",
    instructor: "Instructor",
    credentialId: "Credential",
  },

  cv: {
    eyebrow: "Resume",
    title: "Download my resume",
    description: "Download my resume in Portuguese or English.",
    available: "Available",
    comingSoon: "Coming soon",
    download: "Download PDF",
    view: "View",
    updatedAt: "Updated on",
    comingSoonButton: "Coming soon",
    labels: {
      pt: "Portuguese resume (ATS-friendly)",
      en: "English resume (ATS-friendly)",
    },
    languageNames: {
      pt: "Portuguese",
      en: "English",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk?",
    description:
      "Send a message or use one of the direct channels below — I reply as soon as possible.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      subject: "Subject (optional)",
      subjectPlaceholder: "Opportunity, question, partnership...",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send message",
      sending: "Sending...",
      successToast: "Message sent! I'll get back to you soon.",
      errorToast: "Failed to send message",
      honeypotLabel: "Website",
    },
    channels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    sidebar: {
      locationLabel: "Location",
      availabilityLabel: "Availability",
      availabilityText: "Remote-only (within Brazil or internationally).",
    },
  },

  footer: {
    builtWith: "Built with Next.js + Tailwind.",
    viewFullStack: "View Full Stack portfolio",
  },

  common: {
    stars: "stars",
    forks: "forks",
  },
};

export const dictionaries = { pt, en };
