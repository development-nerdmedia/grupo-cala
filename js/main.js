MyApp = {
  changeImgsProductoMarca: {
    init: function () {
      var part2Blocks = document.querySelectorAll("section.productos .container .productorMarcaItem .part2");

      part2Blocks.forEach(function (block) {
        var images = block.querySelectorAll("img");
        var currentIndex = 0;

        setInterval(function () {
          images[currentIndex].classList.remove("select");
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add("select");
        }, 3000);
      });
    }
  },
  marqueeTiendas: {
    init: function () {
      $('.marqueeTiendas').marquee({
        duration: 20000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
      });
    }
  },
  marqueeIzquierda: {
    init: function () {
      $('.marquee-izquierda').marquee({
        duration: 20000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
      });
    }
  },
  swiperProductoMarca: {
    init: function () {
      var swiper = new Swiper(".swiperproductorMarca", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
          nextEl: ".noticiasHome .flechas .swiper-button-next",
          prevEl: ".noticiasHome .flechas  .swiper-button-prev",
        },
        navigation: {
          nextEl: '.swiperproductorMarca .swiper-button-next',
          prevEl: '.swiperproductorMarca .swiper-button-prev',
        },
      });
    }
  },
  swiperNoticias: {
    init: function () {
      var swiper = new Swiper(".swiperNoticias", {
        spaceBetween: 30,
        slidesPerView: 2.5,
        navigation: {
          nextEl: ".noticiasHome .flechas .swiper-button-next",
          prevEl: ".noticiasHome .flechas  .swiper-button-prev",
        },
      });
    }
  },
  verMas: {
    init: function () {
      if ($(`.itemArticulo`).length >= 7) {
        $("#cargarMasModulo").attr("style", "display:flex;");
      }
      $(`.itemArticulo`).hide();
      $(`.itemArticulo`).slice(0, 6).show(0);
      $("#cargarMasModulo").click(function (e) {
        e.preventDefault();
        $(`.itemArticulo:hidden`).slice(0, 3).slideDown(0);
        if ($(`.itemArticulo:hidden`).length == 0) {
          $("#cargarMasModulo").attr("style", "display:none;");
        }
      })
    }
  },
  verMaspreguntas: {
    init: function () {
      if ($(`.contentPreguntas .item`).length >= 6) {
        $("#cargarMasModulo").attr("style", "display:flex;");
      }
      $(`.contentPreguntas .item`).hide();
      $(`.contentPreguntas .item`).slice(0, 5).show(0);
      $("#cargarMasModulo").click(function (e) {
        e.preventDefault();
        $(`.contentPreguntas .item:hidden`).slice(0, 3).slideDown(0);
        if ($(`.contentPreguntas .item:hidden`).length == 0) {
          $("#cargarMasModulo").attr("style", "display:none;");
        }
      })
    }
  },
  tabPreguntas: {
    init: function () {
      var itemPregunta = document.querySelectorAll('section.preguntas .contentPreguntas .item .cabecera');

      itemPregunta.forEach(function (element) {
        element.addEventListener('click', function () {
          this.parentElement.classList.toggle('open');
          itemPregunta.forEach(function (item) {
            if (item !== element && item.parentElement.classList.contains('open')) {
              item.parentElement.classList.remove('open');
            }
          });
        });
      });
    }
  },
  headerFixed: {
    init: function () {
      var header = document.querySelector('header');
      var headerClass = 'hLTFFw';
      var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      function handleScroll() {
        var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        var isAtTop = currentScrollPos === 0;
        var isScrollingUp = prevScrollPos > currentScrollPos;

        if (isAtTop) {
          headerClass = '';
        } else if (isScrollingUp) {
          headerClass = 'bVLcxx';
        } else {
          headerClass = 'bVLcxx';
        }

        header.className = headerClass;
        prevScrollPos = currentScrollPos;
      }

      window.addEventListener('scroll', handleScroll);
    }
  },
}

if ($('section.productos .container .productorMarcaItem').length > 0) {
  MyApp.changeImgsProductoMarca.init();
}

if ($('.marqueeTiendas').length > 0) {
  MyApp.marqueeTiendas.init();
}

if ($('.marquee-izquierda').length > 0) {
  MyApp.marqueeIzquierda.init();
}

if ($('.swiperproductorMarca').length > 0) {
  MyApp.swiperProductoMarca.init();
}

if ($('.swiperNoticias').length > 0) {
  MyApp.swiperNoticias.init();
}

if ($('.btnVerMas').length > 0) {
  MyApp.verMas.init();
}

if ($('.btnVermas1').length > 0) {
  MyApp.verMaspreguntas.init();
}

if ($('.contentPreguntas').length > 0) {
  MyApp.tabPreguntas.init();
}

if ($('header').length > 0) {
  MyApp.headerFixed.init();
}