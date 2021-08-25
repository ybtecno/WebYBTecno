jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    $('#header').addClass('header-fixed');
  }

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // custom code

});

(function() {
  "use strict";

  var regalo = document.getElementById("regalo");

  document.addEventListener("DOMContentLoaded", function(){

      //Mapa
      var map = L.map('mapa').setView([-26.812351, -65.300074], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-26.812351, -65.300074]).addTo(map)
          .bindPopup('<b>YBTecno</b>.<br> Un lugar toda la tecnología.')
          .openPopup();
  
  }); //DOM CONTENT LOADED
})();

//Service Worker

if('serviceWorker' in navigator){
  console.log('Puedes usar los serviceWorker en tu navegador');

  navigator.serviceWorker.register('./sw.js')
                        .then(res => console.log('serviceWorker cargado correctamente', res))
                        .catch(err => console.log('serviceWorker no se ha podido registrar', err));
                        

}else{
  console.log('NO PUEDES usar los serviceWorker en tu navegador');
}

jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    $('#header').addClass('header-fixed');
  }

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // custom code

});

(function() {
  "use strict";

  var regalo = document.getElementById("regalo");

  document.addEventListener("DOMContentLoaded", function(){

      //Mapa
      var map = L.map('mapa').setView([-26.812351, -65.300074], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-26.812351, -65.300074]).addTo(map)
          .bindPopup('<b>YBTecno</b>.<br> Un lugar toda la tecnología.')
          .openPopup();
  
  }); //DOM CONTENT LOADED
})();

//Service Worker

if('serviceWorker' in navigator){
  console.log('Puedes usar los serviceWorker en tu navegador');

  navigator.serviceWorker.register('../sw.js')
                        .then(res => console.log('serviceWorker cargado correctamente', res))
                        .catch(err => console.log('serviceWorker no se ha podido registrar', err));
                        

}else{
  console.log('NO PUEDES usar los serviceWorker en tu navegador');
}
// Porfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});

$('#portfolio-flters li').on( 'click', function() {
  $("#portfolio-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');

  portfolioIsotope.isotope({ filter: $(this).data('filter') });
});

/****  ****/
var api="AIzaSyCeSzprwFmUOSsAIf36sT9hONLvf3ReD_4";function initMap(){var n={lat:20.6772885,lng:-103.3856328},a=new google.maps.Map(document.getElementById("mapa"),{center:n,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP}),e=new google.maps.InfoWindow({content:"<h2>GDLWEBCAMP</h2><p>Del 10 al 12 de Diciembre</p><p>Visitanos!</p>"}),i=new google.maps.Marker({position:n,map:a,title:"GDLWEBCAMP"});i.addListener("click",function(){e.open(a,i)})}$(function(){$("#filtros a").on("click",function(){return $("#filtros a").removeClass("activo"),$(this).addClass("activo"),$(".registrados tbody tr").hide(),"pagados"==$(this).attr("id")?$(".registrados tbody tr.pagado").show():$(".registrados tbody tr.no_pagado").show(),!1}),$(".nombre-sitio").lettering(),$('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass("activo"),$('body.calendario .navegacion-principal a:contains("Calendario")').addClass("activo"),$('body.invitados .navegacion-principal a:contains("Invitados")').addClass("activo");var n=$(window).height(),a=$(".barra").innerHeight();$(window).scroll(function(){$(window).scrollTop()>n?($(".barra").addClass("fixed"),$("body").css({"margin-top":a+"px"})):($(".barra").removeClass("fixed"),$("body").css({"margin-top":"0px"}))}),$(".menu-movil").on("click",function(){$(".navegacion-principal").slideToggle()});$(window).resize(function(){$(document).width()>=768?$(".navegacion-principal").show():$(".navegacion-principal").hide()}),$(".programa-evento .info-curso:first").show(),$(".menu-programa a:first").addClass("activo"),$(".menu-programa a").on("click",function(){$(".menu-programa a").removeClass("activo"),$(this).addClass("activo"),$(".ocultar").hide();var n=$(this).attr("href");return $(n).fadeIn(1e3),!1}),jQuery(".resumen-evento").length>0&&$(".resumen-evento").waypoint(function(){$(".resumen-evento li:nth-child(1) p").animateNumber({number:6},1200),$(".resumen-evento li:nth-child(2) p").animateNumber({number:15},1200),$(".resumen-evento li:nth-child(3) p").animateNumber({number:3},1500),$(".resumen-evento li:nth-child(4) p").animateNumber({number:9},1500)},{offset:"60%"}),$(".cuenta-regresiva").countdown("2017/12/10 09:00:00",function(n){$("#dias").html(n.strftime("%D")),$("#horas").html(n.strftime("%H")),$("#minutos").html(n.strftime("%M")),$("#segundos").html(n.strftime("%S"))}),$(".invitado-info").colorbox({inline:!0,width:"50%"}),$(".boton_newsletter").colorbox({inline:!0,width:"50%"})}); 