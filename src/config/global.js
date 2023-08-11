export default {
  global: {
    componenteFormativo: 'Procedimiento de analítica de datos',
    descripcionCurso:
      'El fundamento clave del componente es la gestión de datos empresariales. El proceso analítico de los datos es el elemento de entrada: tener clara la procedencia, control y protección. Se enfatiza en el alistamiento de los datos, conociendo la conformación de las bases de datos, así como también los procesos de extracción, transformación y preparación óptima para el análisis empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La analítica y resguardo de los datos en la empresa',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Transformación de datos para uso empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas de gestión de datos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Análisis exploratorio de datos y alistamiento de los <em>sets</em> de datos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Las bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Procesos ETL para el manejo de bases de datos',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La analítica y resguardo de los datos en la empresa',
      referencia:
        'Portilla, J. (2017). Gobierno de datos, un potenciador de los sistemas de gestión de calidad. Ministerio de Hacienda y Crédito Público, Colombia. <em>Revista Signos</em>, 9(2). p.159-172. ',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/journal/5604/560459719010/html/',
    },
    {
      tema: 'La analítica y resguardo de los datos en la empresa',
      referencia:
        'Guío, A. (2021). <em>Modelo de gobernanza de la infraestructura de datos para el desarrollo de tecnologías emergentes</em>.',
      tipo: 'PDF',
      descarga:
        '/downloads/Modelo-Gobernanza-Infraestructura-Datos-desarrollo-tecnologias-emergentes.pdf',
    },
    {
      tema: 'Herramientas de gestión de datos',
      referencia:
        'García-Jiménez, A.,  Aguilar-Morales,  N., Hernández-Triano,  L. /  Lancaster-Díaz, E. (2021). La inteligencia de negocios: herramienta clave para el uso de la información y la toma de decisiones empresariales. <em>Revista de Investigaciones Universidad del Quindío</em>, 33(1). p.132-139.',
      tipo: 'Artículo',
      link: 'https://ojs.uniquindio.edu.co/ojs/index.php/riuq/article/view/514',
    },
    {
      tema:
        'Análisis exploratorio de datos y alistamiento de los <i>sets</i> de datos',
      referencia:
        'IBM Cloud Education. (2020). <em>Análisis exploratorio de datos</em>. IBM Cloud Education. ',
      tipo: 'Página web',
      link: 'https://www.ibm.com/co-es/cloud/learn/exploratory-data-analysis',
    },
    {
      tema:
        'Análisis exploratorio de datos y alistamiento de los <i>sets</i> de datos',
      referencia:
        'Consorcio POT Huila. (2019). <em>Informe etapa de Alistamiento. Contrato de consultoría no. 1029 de 2019. “Elaborar el plan de ordenamiento territorial del Departamento del Huila”</em>. ',
      tipo: 'PDF',
      descarga: '/downloads/Informe-Etapa-Alistamiento.pdf',
    },
    {
      tema: 'Tipos de bases de datos',
      referencia:
        'Departamento de Computación, UNAN-Managua. (2014). <em>Bases de datos multidimensionales. UNAN-Managua: Departamento de Computación</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CdbWOLcBHNQ',
    },
  ],
  glosario: [
    {
      termino: 'Alistamiento de datos',
      significado:
        'etapa de la gestión de datos, en la cual se organizan y preparan los datos en la forma y necesidades de la analítica de los datos, por parte de quien amerita los datos para su uso en los procesos empresariales. Es un proceso fundamentado en las herramientas básicas o especializadas de gestión de datos.',
    },
    {
      termino: 'Análisis exploratorio',
      significado:
        'es el proceso que emprende el analista de datos para la obtención de la mayor cantidad y calidad de datos a ser utilizados desde diferentes fuentes, en el proceso de analítica de datos.',
    },
    {
      termino: 'Analítica de datos',
      significado:
        'proceso de deconstrucción, reconstrucción, análisis, síntesis y transformación de datos, en información necesaria para los procesos de la empresa.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'reservorios de datos estandarizados o dinámicos, de fuentes externas o internas a la empresa y que son manejadas, en su mayoría, por herramientas de gestión de datos, es decir, <em>softwares</em> especializados.',
    },
    {
      termino: 'Calidad de la información',
      significado:
        'es el elemento fundamental en el proceso exploratorio de los datos, la cual se decide en función de la necesidad de datos de la empresa para la toma de decisiones o inicio de los procesos de trabajo. Datos de calidad, obtenidos de fuentes de calidad, y procesados con herramientas de calidad, garantizan un proceso de eficaz de analítica de datos.',
    },
    {
      termino: 'Datos',
      significado:
        'es el elemento sometido al proceso de analítica para la obtención de la información que dinamiza los procesos y en el que se fundamenta la toma de decisiones. Pueden provenir de fuentes externas o internas al sistema organizacional.',
    },
    {
      termino: 'Extracción de datos',
      significado:
        'es el proceso de seleccionar, obtener y organizar los datos de las bases de datos disponibles o de los procesos de trabajo para la construcción de bases de datos.',
    },
    {
      termino: 'Gestión de datos',
      significado:
        'es el proceso de manejo de los datos dentro de la empresa, en el cual se encuentran involucradas las personas, los procesos y las tecnologías.',
    },
    {
      termino: 'Gobernanza de datos',
      significado:
        'elemento estratégico de la analítica y gestión de datos de la empresa, que tiene como fin definir las políticas de gestión de datos, y que posee como fin la protección de los datos.',
    },
    {
      termino: 'Información',
      significado:
        'resultado del procesamiento organizado y sistematizado de los datos.',
    },
    {
      termino: 'Procesamiento de datos',
      significado:
        'denominado analítica de datos, y conformado por los sub-procesos de extracción, transformación, carga y distribución de los datos en la empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consorcio POT Huila. (2019). <em>Informe etapa de Alistamiento. Contrato de consultoría no. 1029 de 2019 “Elaborar el plan de ordenamiento territorial del Departamento del Huila</em>”.',
      link:
        'https://r.search.yahoo.com/_ylt=AwrFNvcSRNVkasAAp_Srcgx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1691726994/RO=10/RU=https%3a%2f%2fwww.sirhuila.gov.co%2fwp-content%2fuploads%2f2022-ACTUALIZACIONES%2fPOD%2fAlistamiento%2fInforme-Etapa-Alistamiento.pdf/RK=2/RS=8x9JmI3dAJp67T1YN2dZPI2qx0M-',
    },

    {
      referencia:
        'Departamento Administrativo de la Gestión Pública. (2020). <em>Documento técnico de captura y procesamiento de datos de la Medición del Desempeño Institucional Proceso de Generación de Productos y Servicios para la Gestión Pública</em>.',
      link:
        'https://www.funcionpublica.gov.co/documents/34645357/34703525/Documento_tecnico_captura_procesamiento_datos_mdi.pdf/44b2ea88-5af6-4eb4-56fd-59cd12633e47?t=1594265201214',
    },

    {
      referencia:
        'Galarza, C. (2018). Diseño e implementación de una red de datos segura para la Pontificia Universidad Católica del Ecuador, Santo Domingo. <em>Revista Científica Dominio de las Ciencias</em>, 4(2). p.123-137.',
      link:
        'https://www.dominiodelasciencias.com/ojs/index.php/es/article/view/781/901',
    },

    {
      referencia:
        'Kingatúa, A. (2020). <em>Las 10 mejores herramientas de gestión de datos para empresas medianas y grandes. Geekaflare</em>.',
      link: 'https://geekflare.com/es/data-management-software/',
    },

    {
      referencia:
        'Rodríguez J. (2017). <em>Los principales softwares de investigación cuantitativa</em>. Fundación para la Investigación Social Avanzada.',
      link:
        'https://isdfundacion.org/2017/10/10/software-de-investigacion-social-y-de-mercados-investigacion-cuantitativa/',
    },

    {
      referencia:
        'Solved Magazine. (2020). <em>The history of cloud computing</em>.',
      link:
        'https://solved.scality.com/solved/the-history-of-cloud-computing/#:~:text=The%20term%20%E2%80%9Ccloud%20computing%E2%80%9D%20itself,in%20academic%20work%20before%20that',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
