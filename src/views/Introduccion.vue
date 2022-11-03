<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-5.mb-5.mb-md-0(data-aos="fade-up-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_1.png', alt='Texto que describa la imagen')

      .col-lg-7(data-aos="fade-up-left")
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se muestra la secuencia desde el momento en que se requiere un dato en la empresa, hasta la etapa de difusión y uso de los datos en los procesos, cumpliendo con su almacenamiento para tratamientos futuros.

        p Se realizará la descripción de las bases de datos, desde sus distintos orígenes y clasificaciones, además de su apropiación, dependiendo de las necesidades de la empresa y haciendo énfasis en los procesos estandarizados de extracción, transformación, preparación y distribución de datos.  

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
