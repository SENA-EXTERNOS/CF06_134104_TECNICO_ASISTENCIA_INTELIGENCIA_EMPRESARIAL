<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transformación de datos para uso empresarial

    .row.mb-5
      .col-lg-5.mb-5.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_2/img_1.png', alt='Texto que describa la imagen')

      .col-lg-7(data-aos="fade-left")
        p Los datos puros no son de utilidad para servirse de ellos en la toma de decisiones. No obstante, pueden entrar al sistema empresarial desde fuentes externas y generarse, a su vez, como resultado del funcionamiento de los procesos del sistema. Sin embargo, si el fin es la toma de decisiones, a partir del manejo de indicadores de gestión, entonces, los datos deben ser transformados en información. Este tema está dedicado a la exposición de la transformación de datos para uso empresarial, en donde juegan un rol esencial las personas, las tecnologías, los procedimientos de gestión de los datos, y el establecimiento de la forma en la cual la empresa amerita organizar los datos para su uso. 

    p Primero, es necesario ampliar  la información sobre la gestión de los datos; por este motivo, lo invitamos a ver el siguiente video.


  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cont_top
    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Herramientas de gestión de datos

    p.mb-5 Por otra parte, las herramientas de gestión de datos son el apoyo tecnológico que utilizan las empresas para obtener, transformar y distribuir los datos para el funcionamiento de los procesos. Esto se basa en el proceso de #[i Data Management] (DM) o gerencia de datos empresariales. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .caj_1.p-4
          p.mb-0 En la actualidad, con los avances tecnológicos y la evolución empresarial, resulta prácticamente imposible realizar la gestión de los datos sin el apoyo de herramientas tecnológicas, para hacer de los datos diversos, información unificada y organizada. Para esto, se deben cubrir elementos de recursos y capacidades empresariales de alfabetización tecnológica del personal, adquisición de #[i software], o tercerización del servicio de gestión de datos. 

    p Las herramientas de gestión de datos, no solo cumplen un rol tecnológico, sino que son un activo estratégico de la analítica de datos en la empresa. Todo lo que tenga que ver con las herramientas de gestión de datos, es considerado una inversión y no un gasto, es decir, que aportan valor a los resultados empresariales. 

    p.mb-5 A continuación, conozcamos los objetivos de estas herramientas:

    img.img-a.mb-5(src='@/assets/curso/temas/tema_2/img_2.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg_2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema_2/img_3.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 La inteligencia de negocios: herramienta clave para el uso de la información y la toma de decisiones empresariales
                  p.text-small Para evidenciar cómo, en la actualidad, la gestión asertiva de los datos influye de manera positiva en la inteligencia del negocio, diríjase al artículo dispuesto en el material complementario. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/LA_INTELIGENCIA_DE_NEGOCIOS.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 Es importante tener en cuenta que las herramientas de gestión de datos son activos empresariales, sean controlados por la misma empresa o por organizaciones que prestan el servicio. Estas herramientas cuentan con unas características, las cuales se define a continuación:

    .tarjeta.bg_3.fondo-2.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Apropiación de la herramienta
            p Depende del tipo de empresa y debe ajustarse al tamaño de la empresa, al tipo de procesos, al tipo de informes a generar, y a las capacidades de alfabetización tecnológica del personal de la empresa. Pueden incluso ser exclusivas de la empresa, o ser sistemas de información comercial, obtenidos bajo licencia.
            p Debe mantenerse el lema que dice: primero es la estrategia y luego la estructura; es decir, que si se amerita de una herramienta X, la empresa debe hacer las adaptaciones necesarias a sus procesos, para poder obtener los resultados deseados con el uso de la herramienta de gestión de los datos.        
          .col-md-7
            img.img-a(src="@/assets/curso/temas/tema_2/img_4.png")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Capacidad de la herramienta 
            p Debe ajustarse a la cantidad de datos a obtener, procesar (transformar), al tipo de informes a generar y a la infraestructura tecnológica de la empresa. La cantidad de datos a gestionar, masivos o no, determina la capacidad tecnológica de la herramienta.     
          .col-md-7
            img.img-a(src="@/assets/curso/temas/tema_2/img_5.png")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Tecnificación de la herramienta
            p El creador de #[i software] incorpora, de acuerdo con la calidad y capacidad de la herramienta, la mayor cantidad y apropiación de algoritmos matemáticos para el procesamiento de datos, considerable capacidad de almacenamiento, y mayores opciones de recursos de análisis. 
            p A mayor complejidad de procesos, mayor complejidad de las herramientas de gestión de datos.    
          .col-md-7
            img.img-a(src="@/assets/curso/temas/tema_2/img_6.png")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Automatización de los procesos
            p Las herramientas de gestión de datos, buscan la automatización de los procesos de analítica de datos, siendo la mano derecha o colaboración esencial de los Administradores de Bases de Datos (ABD) en las empresas. 
            p Estas herramientas permiten pasar de procesos empíricos de gestión de datos, a procesos automatizados que elevan el valor de la toma de decisiones, disminuyendo los errores y dificultades en el manejo manual de los datos.
          .col-md-7
            img.img-a(src="@/assets/curso/temas/tema_2/img_7.png")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Posibilidad de automatización continua
            p La tecnología provee a los desarrolladores de herramientas de gestión de datos, su mejoramiento continuo, actualización, cambios, e incluso rediseño, en función de las necesidades de la empresa. Asimismo, los #[i software] comerciales pueden ser adaptados a las necesidades particulares de los procesos de las empresas. Uno de los fines de la automatización continua, es agilizar las respuestas de las herramientas, a las necesidades de obtención de reportes en la empresa.
          .col-md-7
            img.img-a(src="@/assets/curso/temas/tema_2/img_8.png")

    .row.mb-5
      .col-lg-5.mb-5.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_2/img_9.png', alt='Texto que describa la imagen')

      .col-lg-7(data-aos="fade-left")
        p.text-small Las herramientas de gestión de datos han variado, con el transcurrir del tiempo, al ritmo de la evolución tecnológica. Así, como se conoce a Excel, una herramienta básica de gestión de datos cuantitativos, la tendencia tecnológica en la administración de los datos, ha generado herramientas como la “la nube” o reservorio “no físico” (desde 1990); es decir, no se encuentra alojado en el disco duro del computador, y funciona como almacenador de datos masivos (Solved Magazine, 2020). Esta herramienta es ofrecida por la Internet, y servidores como Google, la maneja en una nube conocida como Drive, que permite a las personas el almacenamiento gratuito hasta una cierta capacidad de datos. Mundialmente, el Google Drive es reconocido como la herramienta que reemplazó a Google Docs, dadas sus mayores y mejores utilidades y capacidades de almacenamiento y transmisión y modificación de la información, en grupos de trabajo. 


    separador
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Análisis exploratorio de datos y alistamiento de los #[i sets] de datos

    .row.mb-5
      .col-lg-7.mb-5.mb-md-0(data-aos="fade-right")
        p.text-small Hablemos primero del análisis exploratorio de datos que es un método de selección de entrada de datos al sistema organizacional o al proceso de analítica de datos y que tiene por objetivo la selección de los datos únicos, oportunos y apropiados, para las necesidades de la empresa. El detalle a tener en cuenta es que, este análisis exploratorio de datos se realiza con base en las herramientas de gestión de datos, las cuales fueron creadas a partir de la matemática y la estadística y poseen la capacidad de depurar los datos con técnicas algorítmicas de las cuales derivan los datos de interés para la analítica de los datos. En consecuencia, se obtiene del análisis exploratorio de datos, un resumen o conjuntos de datos relevantes para dicha analítica. 

        a.anexo.mb-4(href="https://www.ibm.com/co-es/cloud/learn/exploratory-data-analysis" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Anexo]. Para conocer todos los elementos técnicos del análisis exploratorio de datos, desde la base de sus creadores principales en el contexto mundial, diríjase al artículo #[b Análisis exploratorio de datos], el cual se encuentra disponible en el material complementario.  
      .col-lg-5(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')

    p.mb-5 Para continuar con el alistamiento y, para su garantizar su comprensión, se dará respuesta a las siguientes preguntas:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4.fondo-2(titulo="¿Qué es el alistamiento de <em>set</em> de datos?")
        .row
          .col-md-6.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_2/img_11.png', alt='Texto que describa la imagen')        
          .col-md-6
            p.mb-0 El alistamiento es un término técnico usado en tecnología para el manejo o gestión de los datos; un <em>“set”</em> de datos es análogo a un grupo de datos. El alistamiento de set de datos corresponde a la preparación o armado de una colección de datos para su uso, a través de las herramientas tecnológicas, es decir, es el proceso de organización previo a la distribución de los datos para su uso en el sistema empresarial, sea para el inicio de los procesos, o para mostrar el desempeño final de los mismos y pasar a la retroalimentación del sistema y a la nueva toma de decisiones. 

      .py-3.py-md-4.fondo-2(titulo="¿Qué implica alistar en <em>sets</em>?")
        .row
          .col-md-6.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_2/img_12.png', alt='Texto que describa la imagen')        
          .col-md-6
            p.mb-0 “Alistar en <em>sets</em>”, implica preparar los datos en agrupamientos más complejos como variables, conjuntos o rangos de datos, los cuales, al estar renombrados y agrupados con códigos por tipos de datos, permiten un mejor registro y utilización. El alistamiento se realiza a través de las herramientas de gestión de datos por parte de los programadores, razón por la cual es totalmente necesaria la multidisciplinariedad en la administración empresarial, en el caso que se quiera hacer de los datos un activo real de la gestión empresarial. 

      .py-3.py-md-4.fondo-2(titulo="¿Qué sucede cuando se poseen los datos?")
        .row
          .col-md-6.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_2/img_13.png', alt='Texto que describa la imagen')        
          .col-md-6
            p.mb-0 Una vez se poseen los datos, sea guardados en el computador para su procesamiento con herramientas básicas como Excel o para #[i software] especializados, los mismos deben reestructurarse, agruparse, conglomerarse o mostrarse en recursos visuales o gráficos de mayor utilidad; tal es el caso de tablas, gráficos, u hojas de documentos, bajo un orden específico, que se determina a partir del tipo de dato y de la funcionalidad para el análisis. 

    p.mb-5 En Colombia, una institución que se puede tomar, como ejemplo, en cuanto a la preparación y uso de set de datos por la complejidad de los datos que maneja, es el Departamento Administrativo de la Gestión Pública, ente que ofrece, al público en general, su modelo de alistamiento y distribución de datos en el caso particular de la medición del desempeño institucional, bajo el esquema del modelo figurativo FURAG, siglas del “Formulario Único de Reportes y Avances de Gestión”, constituido como registro administrativo y creado con el propósito de recolectar datos sobre el avance en la implementación de las políticas de gestión y desempeño institucional, que hacen parte del Modelo Integrado de Planeación y Gestión (MIPG) de la gestión pública nacional.Si se revisa este modelo, se tiene un alistamiento de set de datos estratégico construido como se muestra en la Figura 2. 

    .row.mb-5
      .col-lg-1
      .col-lg-5
        .titulo-sexto.color-acento-contenido
            h5 Figura 2. 
            |  #[i Modelo de alistamiento de set de datos] 
    .row.justify-content-center.mb-5
      .col-lg-10
        img.img-a.mb-3(src='@/assets/curso/temas/tema_2/img_14.svg', alt='Texto que describa la imagen') 
        figcaption.bg_4 
          p.mb-0 Nota. Tomado y adaptado de Departamento Administrativo de la Gestión Pública (2020).

    .row.mb-5
      .col-lg-7.mb-5.mb-md-0(data-aos="fade-right")
        p En cualquier organización, se alistan los datos para su procesamiento; tal es el caso de alistamiento de datos para producción, para almacenaje, o para procesos de consultoría como, por ejemplo, el correspondiente a un proceso de Consultoría en el Plan de Ordenamiento Territorial del Departamento del Huila (Consorcio POT Huila, 2019), Colombia, el cual puede encontrar completo en el material complementario.
 
      .col-lg-5(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_2/img_15.png', alt='Texto que describa la imagen')

    p.mb-5 En la Figura 3 se muestra un ejemplo de cómo el analista, modeló su esquema de alistamiento de datos, y luego de la obtención de los datos pasó a manejarlo a través de herramientas de gestión de datos. 

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3. 
          | #[i Modelo de alistamiento de set de datos para el proceso de consultoría]
        img.img-a.mb-3(src='@/assets/curso/temas/tema_2/img_16.svg', alt='Texto que describa la imagen') 
        figcaption.bg_4 
          p.mb-0 Nota. Tomado de Consorcio POT Huila – Informe etapa de alistamiento (2019).


  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.fondo-4.cont_top
    .row.justify-content-center.mb-5.mt-3
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-4.p-sm-3.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_17.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.text-small Con estos ejemplos se quiere mostrar que el alistamiento de datos no posee un modelo estandarizado, sino que se prepara en función de las necesidades del analista de datos y de las herramientas tecnológicas disponibles para tal fin.

   







</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
