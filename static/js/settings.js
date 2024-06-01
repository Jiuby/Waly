(function($) {
  'use strict';

  function saveColorPreference(sidebarColor, navbarColor) {
    const colorPreference = {
      sidebarColor: sidebarColor,
      navbarColor: navbarColor
    };
    localStorage.setItem('colorPreference', JSON.stringify(colorPreference));
  }

  $(function() {
    const colorPreferenceString = localStorage.getItem('colorPreference');
    const colorPreference = colorPreferenceString ? JSON.parse(colorPreferenceString) : {};

    // Aplicar las preferencias si existen
    if (colorPreference.sidebarColor) {
      $("body").addClass(colorPreference.sidebarColor);
    }

    if (colorPreference.navbarColor) {
      $(".navbar").addClass(colorPreference.navbarColor);
    }


    //background constants
    var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
    var sidebar_classes = "sidebar-light sidebar-dark";
    var $body = $("body");

    //sidebar backgrounds
    $("#sidebar-light-theme").on("click", function() {
    $body.removeClass(sidebar_classes);
    $body.addClass("sidebar-light");
    $(".sidebar-bg-options").removeClass("selected");
    $(this).addClass("selected");
    saveColorPreference('sidebar-light', localStorage.getItem('navbarColorPreference') || '');
  });

    $("#sidebar-dark-theme").on("click", function() {
    $body.removeClass(sidebar_classes);
    $body.addClass("sidebar-dark");
    $(".sidebar-bg-options").removeClass("selected");
    $(this).addClass("selected");
    saveColorPreference('sidebar-dark', localStorage.getItem('navbarColorPreference') || '');
  });

$(".tiles.primary").on("click", function() {
  $(".navbar").addClass("navbar-primary"); // Agregar la nueva clase primero
  $(".navbar").removeClass(navbar_classes); // Luego eliminar las demás clases
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-primary');
});

$(".tiles.success").on("click", function() {
  $(".navbar").addClass("navbar-success");
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-success');
});

$(".tiles.warning").on("click", function() {
  $(".navbar").addClass("navbar-warning");
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-warning');
});

$(".tiles.danger").on("click", function() {
  $(".navbar").addClass("navbar-danger");
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-danger');
});

$(".tiles.light").on("click", function() {
  $(".navbar").addClass("navbar-light");
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-light');
});

$(".tiles.info").on("click", function() {
  $(".navbar").addClass("navbar-info");
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-info');
});

$(".tiles.dark").on("click", function() {
  $(".navbar").addClass("navbar-dark");
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference(localStorage.getItem('sidebarColorPreference') || '', 'navbar-dark');
});

$(".tiles.default").on("click", function() {
  $(".navbar").removeClass(navbar_classes);
  $(".tiles").removeClass("selected");
  $(this).addClass("selected");
  saveColorPreference('', '');
});
  });
})(jQuery);