/* Category Slider Section Start */
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        767:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

/* Our Feature */
$('.owl-carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        767:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

//Latest Section
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



/* Our Feature */
$('.owl-carousel4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        800:{
            items:2
        },
        1000:{
            items: 3
        },
        1100:{
            items:4
        }
    }
});


// AOS Animation
AOS.init();


// // Only Search
// $(document).ready(function() {
//     $("#searchInput").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $("#menuItems .col").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });


// Search And Filter
$(document).ready(function() {
    function filterItems() {
      var searchValue = $('#searchInput').val().toLowerCase();
      var categoryValue = $('#categorySelect').val();
      
      $('.menu-item').filter(function() {
        var text = $(this).text().toLowerCase();
        var category = $(this).data('category');
        
        var searchMatch = text.indexOf(searchValue) > -1;
        var categoryMatch = categoryValue === "" || category === categoryValue;
        
        $(this).toggle(searchMatch && categoryMatch);
      });
    }
    
    $('#searchInput').on('keyup', filterItems);
    $('#categorySelect').on('change', filterItems);
  });