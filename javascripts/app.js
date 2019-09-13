(function() {
  pixelcarve.app = (function() {
    function app() {}

    app.prototype.initialize = function() {};

    app.prototype.start = function() {
      // return alert("start here!");
    };

    $(window).scroll(() => {
      if ($(document).width() > 768) {
        if ($(document).scrollTop() > 500) {
          $(".content-bottom").css({
            position: "static",
            margin: "0 auto"
          });
        } else {
          $(".content-bottom").css({
            position: "fixed"
          });
        }
      }
    });

    $(".arrow").click(() => {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".gallery-container").offset().top + 100
        },
        100
      );
    });

    return app;
  })();
}.call(this));
