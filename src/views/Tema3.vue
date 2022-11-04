<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Las bases de datos 

    .row.mb-5
      .col-lg-5.mb-5.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_3/img_1.png', alt='Texto que describa la imagen')

      .col-lg-7(data-aos="fade-left")
        p Este tema se dedica a la exposición de la conceptualización, características y tipos de base de datos, como elemento del proceso de comunicación e información de los sistemas empresariales. Asimismo, encontrará al detalle, el desarrollo de los procesos ETL (Proceso de extracción, transformación y carga) en los que se sustenta la gestión de los datos, desde las bases de datos. Con estos elementos, podrá comprender la utilidad de la tenencia, actualización, mantenimiento y resguardo de las bases de datos en las empresas, las cuales son un reservorio histórico y actual de datos de personas, procesos y recursos, utilizados para poner en funcionamiento el sistema y que además muestran el desempeño paulatino del sistema empresarial.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cont_top
    separador
    #t_3_1.titulo-segundo.color-acento-contenido.mt-5
      h2 3.1 Tipos de bases de datos

    p.mb-5 Hasta este punto se ha estudiado que los datos poseen diferentes fuentes, tipos y maneras de procesarlos; además, diversos datos satisfacen distintas necesidades para los procesos empresariales. Lo importante es retomar que, en todo el contexto del sistema empresarial, se ameritan datos, como se muestra en la Figura 4.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 4. 
          | #[i Necesidades de entradas (inputs) y generación de datos sistema empresarial] 
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema_3/img_2.svg', alt='Texto que describa la imagen')
          .tarjeta.bg_5.p-3(x="23%" y="41%" numero="+")
            ul.mb-0
              li 
                span.lista-ul__vineta
                | Proveedores
              li 
                span.lista-ul__vineta
                | Demanda
              li 
                span.lista-ul__vineta.mb-0
                | Competencia
              li 
                span.lista-ul__vineta
                | Mercado
          .tarjeta.bg_5.p-3(x="53%" y="44%" numero="+")
            ul.mb-0
              li 
                span.lista-ul__vineta
                | Demanda
              li 
                span.lista-ul__vineta
                | Volúmenes de producción
              li 
                span.lista-ul__vineta
                | Materia prima e insumos
              li 
                span.lista-ul__vineta
                | Requerimientos de personal
              li 
                span.lista-ul__vineta
                | Requerimientos de maquinaria
              li 
                span.lista-ul__vineta
                | Requerimientos de almacenaje

          .tarjeta.bg_5.p-3(x="76%" y="41%" numero="+")
            ul.mb-0
              li 
                span.lista-ul__vineta
                | Cantidades producidas
              li 
                span.lista-ul__vineta
                | Desperdicios
              li 
                span.lista-ul__vineta
                | Indicadores de calidad
              li 
                span.lista-ul__vineta
                | Cumplimiento de metas de producción
              li 
                span.lista-ul__vineta
                | Fallas de procesos
          .tarjeta.bg_5.p-3(x="58%" y="96%" numero="+")
            ul.mb-0
              li 
                span.lista-ul__vineta
                | Informes de cumplimiento
              li 
                span.lista-ul__vineta
                | Necesidades de mejora
              li 
                span.lista-ul__vineta
                | Oportunidades de mejora
    
        .caj_1.p-4
          p Como se observa en la Figura 4, si la empresa no posee herramientas tecnológicas que le permitan almacenar los datos, sería muy difícil hacer análisis de datos históricos, análisis en tiempo presente y proyecciones futuras, de comportamiento del sistema. 
          p.mb-0 Es por esta razón que las bases de datos son reservorios o almacenes de datos que pueden ser compartidas en los sistemas empresariales e incluso, con sistemas de otras empresas, siempre que sean compatibles. 

    p.mb-5 Las bases de datos se pueden clasificar según su relación con el sistema organizacional; así que pueden ser:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4.fondo-2(titulo="Bases de datos externas")
        .row
          .col-md-6.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_3/img_3.png', alt='Texto que describa la imagen')        
          .col-md-6
            h4 Bases de datos externas
            p Si se nota el elemento de las entradas, datos como los de la competencia, del tamaño y ubicación del mercado, o de la red de proveedores de un sector empresarial, pueden encontrarse en bases de datos externas. No todo el tiempo se poseen datos organizados como set de datos fácilmente utilizables por la empresa, sino que se consiguen datos aislados desde diferentes fuentes que deben ser alistados como sets de datos.
 
            p.mb-0 Por el contrario, otras fuentes externas manejan bases de datos debidamente organizadas; tal es el caso de los entes gubernamentales, en los que es política de la gobernanza de datos, mantener bases de datos de uso público, como lo determinan los gobiernos en sus políticas mundiales. Por ejemplo, en Colombia, el Departamento Administrativo Nacional de Estadística (DANE), debe construir y publicar bases de datos en términos económicos, demográficos, de salud, entre otros, exigidos por normativa internacional. 


      .py-3.py-md-4.fondo-2(titulo="Bases de datos internas")
        .row
          .col-md-6.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_3/img_4.png', alt='Texto que describa la imagen')        
          .col-md-6
            h4 Bases de datos internas
            p Retomando el esquema de la figura 4, se tienen datos internos de desempeño como las cantidades producidas por tipo de producto, datos de desperdicio, satisfacción del cliente, fallas de procesos, entre otros, que son almacenados en bases de datos, particularmente en Excel (a menos que se posean #[i software] especializados), y que son utilizados para la preparación de los informes de gestión. 

            p.mb-0 Las bases de datos internas, normalmente no poseen una estructura estándar, debido a que cada proceso, dentro de la empresa, maneja sus propias variables y tipos de datos. No obstante, al momento de preparar los indicadores de desempeño globales, es importante tener coordinación en el tipo de dato que se agrupa del total de los procesos. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .caj_1.p-4
          p La importancia que recae en las bases de datos en la empresa, sean internas o externas, es la de tener los datos oportunos y veraces, en el momento y lugar que se requiere, para agilizar los procesos, incrementando la productividad empresarial.  

          p.mb-0 Ahora, desde el punto de vista del tipo de dato, específicamente de su complejidad y de la relación entre varios datos, se hace necesario tener en cuenta algunos tipos de bases de datos que se han ido generando en la medida que crecen los avances tecnológicos y la satisfacción de las necesidades de quien usa los datos. Conozcamos algunas de esas bases de datos.

    .fondo-3.p-2.mb-5
      h3.mt-3 Bases de datos jerárquicas

    p Estas bases de datos se construyen cuando se manejan datos dependientes o relacionados, es decir, datos cuyo resultado está relacionado con un dato previo, y que luego genera otro dato consecuente. Por ejemplo, los datos de los padres generan información con respecto a los hijos y de estos, hacia los hijos de los hijos (nietos); de esta manera, se puede tratar una base de datos de tipo generacional. 

    p.mb-5 Ahora, en la Figura 5 se observa un ejemplo relacionado con la empresa. 

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 5. 
      |  Tipos de organigramas

    .row.justify-content-center.mb-5
      .col-lg-10
        img.img-a(src='@/assets/curso/temas/tema_3/img_6.svg', alt='Texto que describa la imagen') 

    .row.mb-5
      .col-lg-5.mb-5.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_3/img_7.png', alt='Texto que describa la imagen')

      .col-lg-7.text-small(data-aos="fade-left")
        p La característica fundamental de este tipo de bases de datos, es que en físico se ve como un árbol con ramas y sub-ramas, en las cuales se observan las jerarquías desde lo principal a lo que, en escalada, va tomando su lugar en dichos ramales. 
        p Entonces, en estas bases de datos, se almacena la información en forma de registros con jerarquías, o el orden de aparición, o el orden de mayor a menor importancia de los datos, o el orden de aparición de los datos en el fenómeno estudiado.
        .caj_1.p-4
          p.mb-0 En este tipo de bases de datos, técnicamente, cada jerarquía se denota como “nodo”. En el árbol habrá un “nodo raíz” y, a partir de este nodo, se irán creando otros nodos, todos interrelacionados. 

    p.mb-5 En estas bases de datos, deben tenerse en cuenta ciertos aspectos como: 

    .row.mb-5
      .col-lg-9.mb-4.mb-md-0(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          diz(titulo="Datos de diversas fuentes")
            p.mb-0 #[b Para alimentar la base de datos, se ameritan los datos de diversas fuentes]. Por ejemplo, harán falta datos de fuentes externas, o datos de diferentes unidades organizativas. En este caso, cuando se poseen sistemas de información dentro de la empresa, es fundamental mantener al día, la carga de los datos.  

          diz(titulo="Datos independientes")
            p.mb-0 #[b Los datos son independientes]. Pese a que se encuentran relacionados, corresponden a distintos datos, o son datos de diversas variables; no obstante, son variables interrelacionadas. Es decir, el comportamiento de un dato no depende obligatoriamente del comportamiento del otro dato. 
          
          div(titulo="Origen del dato")
            p.mb-0 #[b Los datos poseen su propio origen]. Con esto se quiere resaltar que la naturaleza del dato no puede, ni debe modificarse.

          div(titulo="Naturaleza del dato")
            p.mb-0 #[b Se requiere conocimiento de las personas o procesos, en cuanto a la naturaleza del dato]. El dato amerita conocerse en toda su extensión; para qué sirve, con qué se relaciona, cómo se obtiene, cómo debe almacenarse, cómo ese dato aporta en la toma de decisiones de la empresa, cómo ese dato, afecta a los demás datos de la jerarquía.

          div(titulo="Relación de los nodos")
            p.mb-0 #[b La relación de los nodos debe mantenerse]. Dependiendo de la cuantía y cantidad de niveles jerárquicos, puede correrse el riesgo que, en el análisis, se vaya perdiendo el relacionamiento. Es por esto que las personas, procesos y recursos involucrados en la gestión de la jerarquía de los datos, son fundamentales. 

      .col-lg-3(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_3/img_5.png', alt='Texto que describa la imagen') 

    .fondo-3.p-2.mb-5
      h3.mt-3 Bases de datos de red

    .row.mb-5
      .col-lg-7.mb-5.mb-md-0(data-aos="fade-right")
        p En este caso, a diferencia de la jerarquía, en la cual un dato depende de solo un nivel jerárquico anterior, en las bases de datos en red, los datos pueden tener más de un relacionamiento, y no interesa la jerarquía, sino los nodos de relación. Por ejemplo, en un problema de producción, pueden estar involucrados los datos de desempeño del talento humano, o los datos de la cantidad de proveedores y tiempos de entrega, o los datos de fallas de la maquinaria. Por esto, al estar un nodo relacionado con muchos más, se hacen bases de datos más complejas. 

        p La forma de este tipo de base de datos se puede observar a continuación, con respecto a la instalación de un sistema interconectado de datos en una universidad. En la Figura 6 se observa el esquema gráfico de ubicación de interés de la red de datos, en función de la infraestructura académica y administrativa.


      .col-lg-5.text-small(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_3/img_7.png', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 6. 
      |  #[i Figura 6. Esquema gráfico de ubicación de interés de la red de datos en función de la infraestructura académica y administrativa ]

    img.img-a.mb-4(src='@/assets/curso/temas/tema_3/img_9.svg', alt='Texto que describa la imagen') 
    figcaption.bg_4.mb-5 
      p.mb-0 Nota. Tomado de Galarza (2018).

    p.mb-5 Mientras que en la siguiente Figura 7, se muestra el diseño de nodos de una base de datos de la red, con base en el origen de los datos. 

    img.img-a.mb-4(src='@/assets/curso/temas/tema_3/img_10.svg', alt='Texto que describa la imagen') 
    figcaption.bg_4.mb-5 
      p.mb-0 Nota. Tomado de Galarza (2018).

    .fondo-3.p-2.mb-5
      h3.mt-3 Bases de datos relacionales

    .row.mb-5
      .col-lg-7.mb-5.mb-md-0(data-aos="fade-right")
        p Las bases de datos relacionadas son aquellas bases de datos de diferentes fuentes, que al ser coherentes y consistentes, pueden ser fácilmente relacionadas, comparadas y contrastadas; es decir, son bases de datos independientes, pero que poseen características similares en su diseño, y se hace fácil, para el analista, utilizarlas como base de comparación, e incluso para alimentar de la mejor manera, la base de datos original. Por ejemplo, al interior de la empresa, pueden ser base de datos relacionales las de producción de la línea 1 de ensamble de un producto, con los de la línea 2; o en el caso de producción de panes, la base de datos de costos de producción (estructura de costos), de los panes del tipo 1, con los de los panes de tipo 2. En el caso que la productividad de un tipo de pan sea mejor que la del otro tipo, pueden compararse datos y detectarse variables claves que pueden aportar a la mejora.

      .col-lg-5.text-small(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_3/img_11.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-lg-4.mb-5.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_3/img_12.png', alt='Texto que describa la imagen')
      .col-lg-7.text-small(data-aos="fade-left")
        p Por otro lado, las bases de datos multidimensionales son las bases de datos más complejas por la cantidad de datos que relacionan, la cantidad de tipo de datos, los atributos de los datos, entre otros aspectos. La construcción la realizan expertos, pero una vez diseñadas en la empresa, es posible su uso para el desarrollo de los procesos. Se visualizan para los diseñadores como “cubo de datos” y, en programación informática, los datos se almacenan interconectados. 

        .tarjeta.bg_2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema_2/img_3.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Base de datos multimensionales
                  p.text-small Para ampliar la información sobre su diseño y utilidad, lo invitamos a ver el video Base de datos multimensionales, el cual se encuentra en el material complementario. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=CdbWOLcBHNQ" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 Teniendo en cuenta lo anterior, hablemos sobre la clasificación de las bases de datos según su necesidad de modificación y adaptación. Desde el punto de vista tecnológico, las bases de datos poseen tipologías particulares, las cuales tienen que ver con su flexibilidad de modificación con base en las necesidades de los datos y de los modelos de gestión de la empresa, e incluso, con base en los avances tecnológicos. Estas clasificaciones se refieren a:

    .row.justify-content-center.mb-5.align-items-stretch.d-flex.h-100
      .col-lg-5.mb-5.mb-md-0.d-flex(data-aos="fade-right")
        .tarj_1
          img(src="@/assets/curso/temas/tema_3/img_13.png")
          .p-4.text-center
            h5 Bases de datos dinámicas
            p Los datos pueden actualizarse o hasta modificarse; por ejemplo, lo que ocurre durante todo un día de producción en la empresa, en las entregas a los clientes; una de las más fáciles de entender, se refiere a las de los indicadores económicos mundiales, cuyos datos pueden cambiar en cuestión de minutos y tal es el caso del precio del dólar. 
      .col-lg-5.d-flex(data-aos="fade-left")
        .tarj_1
          img(src="@/assets/curso/temas/tema_3/img_14.png")
          .p-4.text-center
            h5 Bases de datos estáticas
            p Se trata de “bases de datos de consulta”. Los datos son originales, emitidos por fuentes externas a la empresa o al usuario. Se usa tal y como está diseñada desde su procedencia. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .caj_1.p-4
          p.mb-0 Es importante denotar que aunque, como aprendiz, no posea conocimiento técnico en el diseño de bases de datos bajo programación de sistemas, las bases de datos de sistemas de información adquiridos como #[i software], son diseñadas por los programadores (usualmente ingenieros informáticos o de sistemas), con algoritmos lógicos, recursos de buscadores, reglas informáticas, entre otros elementos. No es la intención solo aprender este oficio, sino comprender la utilidad del uso de las bases de datos en la empresa, y de la inmersión del aprendiz en la obtención, análisis y difusión de los datos a partir del uso de una base de datos.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido.mt-5
      h2 3.2 Procesos ETL para el manejo de bases de datos

    .row.mb-5
      .col-lg-7.mb-5.mb-md-0(data-aos="fade-right")
        p Los procesos ETL en sus siglas en inglés, sintetizan las actividades de extracción (E, extract), transformación (T, transform) y alistamiento, carga o almacenamiento (L, load), de los datos. Inicia en el momento en que un analista de datos o los involucrados en el proceso de analítica de datos, obtienen (extraen) los datos desde sus diversas fuentes, los agrupan y transforman en función de las necesidades de análisis, y los alistan, almacenan o disponen para su uso, por las partes interesadas.
        p La importancia de darle un nombre a estos tres procesos, es que el personal de la empresa, en los niveles estratégico, táctico y operativo, comprenda que la gestión de los datos no es aleatoria, sino que amerita procesos formales y darle a los datos, su debida importancia en el logro del desempeño de la organización.

      .col-lg-5.text-small(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_3/img_15.png', alt='Texto que describa la imagen')

    p Los tres puntos claves en los procesos ETL son:

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.fondo-4.cont_top
    .row.justify-content-center.mb-5
      .col-lg-10.bg_6.p-5
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img.img-a(src='@/assets/curso/temas/tema_3/img_16.svg', alt='Texto que describa la imagen')
          .tarjeta.col_tar.text-white.p-3(x="13%" y="75%" numero="+")
            h5 Etración
            p.mb-0 Tener claridad del tipo de dato necesario. 
            p.mb-0 Obtener datos de fuentes de datos relevantes, veraces y permanentemente disponibles.
            p.mb-0 Organizar los datos en función de las necesidades de análisis.
            p Conocer el modelo de base de datos requerida por la empresa.

          .tarjeta.col_tar.text-white.p-3(x="51%" y="13%" numero="+")
            h5 Materia prima:
            p.mb-0 Obtener datos consistentes y coherentes a partir de la depuración.
            p.mb-0 Convertir, si es necesario, datos en otras unidades de análisis, de acuerdo con las necesidades de la empresa (compatibilidad de datos).
            p.mb-0 Realizar nuevos procesos de depuración de datos irrelevantes.
            p.mb-0 Ordenar y filtrar datos. 
            p.mb-0 Muchas veces es necesaria la traducción de datos en un lenguaje comprensible al interior de la empresa.
          .tarjeta.col_tar.text-white.p-3(x="90%" y="75%" numero="+")
            h5 Carga
            p.mb-0 Definir el proceso de carga de los datos, la cual puede ser directa en función de la base de datos de origen, si es de fuentes externas o de otros procesos, o carga manual en la realidad diaria de los procesos, o carga mecánica programada con los equipos de producción.
            p Con el apoyo de expertos en informática, carga de datos complejos que requieren ser cargados bajo lenguajes de programación.

    p.mb-5 Comprender esta nomenclatura para la gestión de los datos en la analítica de datos que amerita la inteligencia empresarial, implica que cobran importancia los sistemas de información en la empresa, surgiendo la necesidad de optar por Sistemas de Gestión de Bases de Datos (SGBD), cuya mayor formalidad y tecnificación, proveerá mayor calidad a la obtención de información para la toma de decisiones. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .caj_1.p-4
          p.mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


   







</template>

<script>
export default {
  name: 'Tema3',
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
