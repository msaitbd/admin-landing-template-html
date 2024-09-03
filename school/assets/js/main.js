// window.addEventListener('scroll', function () {
//   const header = document.getElementById('mainHeader');
//   if (window.scrollY > 50) {
//     header.style.backgroundColor = '#092F78';
//   } else {
//     header.style.backgroundColor = 'transparent';
//   }
// });

// counter
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// our academics

$("#most-viewd-items").owlCarousel({
  loop: true,
  autoplay: true,
  nav: true,
  dots: false, // Default to false
  navText: [
    '<span class="iconify" data-icon="bi:arrow-left-short" data-width="24" data-height="24"></span>',
    '<span class="iconify" data-icon="bi:arrow-right-short" data-width="24" data-height="24"></span>',
  ],
  responsive: {
    0: {
      items: 1,
      margin: 10,
      nav: false, // Hide nav on mobile
      dots: true, // Show dots on mobile
    },
    600: {
      items: 2,
      margin: 15,
      nav: false, // Hide nav on small screens
      dots: true, // Show dots on small screens
    },
    1000: {
      items: 3,
      margin: 20,
      nav: true, // Show nav on larger screens
      dots: false, // Hide dots on larger screens
    },
  },
});

$("#home-testimonial").owlCarousel({
  loop: true,
  autoplay: true,
  nav: true,
  dots: false, // Default to false
  navText: [
    '<span class="iconify" data-icon="bi:arrow-left-short" data-width="24" data-height="24"></span>',
    '<span class="iconify" data-icon="bi:arrow-right-short" data-width="24" data-height="24"></span>',
  ],
  responsive: {
    0: {
      items: 1,
      margin: 10,
      nav: false, // Hide nav on mobile
      dots: true, // Show dots on mobile
    },
    600: {
      items: 2,
      margin: 15,
      nav: false, // Hide nav on small screens
      dots: true, // Show dots on small screens
    },
    1000: {
      items: 4,
      margin: 20,
      nav: true, // Show nav on larger screens
      dots: false, // Hide dots on larger screens
    },
  },
});
