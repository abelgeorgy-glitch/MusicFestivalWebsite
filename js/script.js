$(document).ready(function () {
  const artistData = {
    artist1: {
      name: "Electric Pulse",
      bio: "🎸 Electric Pulse is a legendary rock band that has been electrifying audiences for over two decades. Known for their high-energy performances and anthemic songs, they've sold over 10 million albums worldwide. Their latest album 'Voltage' topped the rock charts for 8 consecutive weeks. Get ready for an explosive performance that will leave you breathless!",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    },
    artist2: {
      name: "Neon Dreams",
      bio: "💫 Neon Dreams brings the future of electronic music to life with their innovative synthwave sound. This duo has revolutionized the electronic scene with their cosmic beats and ethereal melodies. Their hit single 'Digital Paradise' has over 50 million streams. Expect a visual spectacle with cutting-edge light shows and immersive soundscapes.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    },
    artist3: {
      name: "Cosmic Vibes",
      bio: "🌙 Cosmic Vibes is an indie psychedelic band that takes listeners on a transcendent journey through space and time. Their dreamy melodies and thought-provoking lyrics have earned them a devoted following. Their album 'Stellar Journey' was nominated for Best Alternative Album. Prepare for a mind-bending musical experience under the stars.",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop&crop=center",
    },
    artist4: {
      name: "Sunset Serenade",
      bio: "🌅 Sunset Serenade specializes in heartfelt acoustic folk music that speaks to the soul. With just a guitar and powerful vocals, they create intimate moments that connect with audiences on a deep level. Their storytelling ability and emotional depth have made them festival favorites. Experience the magic of acoustic music in its purest form.",
      image:
        "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=300&fit=crop&crop=center",
    },
    artist5: {
      name: "Bass Kingdom",
      bio: "👑 Bass Kingdom rules the electronic dance music scene with earth-shaking dubstep and EDM tracks. Their high-energy sets are legendary for getting crowds moving and creating unforgettable moments. With multiple festival headlining slots and millions of followers, they're the undisputed kings of bass. Get ready to feel the ground shake beneath your feet!",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop&crop=center",
    },
    artist6: {
      name: "Midnight Jazz",
      bio: "🎷 Midnight Jazz brings sophisticated jazz and blues to the festival scene. Their smooth melodies and improvisational skills create a perfect late-night atmosphere. Led by a Grammy-nominated saxophonist, this ensemble has performed at prestigious venues worldwide. End your festival experience with class and elegance in our intimate jazz lounge.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    },
  };

  // Artist card click handler
  $(".artist-card").on("click", function () {
    const artist = $(this).data("artist");
    const data = artistData[artist];

    if (data) {
      $(".modal-title").html(`🎤 ${data.name}`);
      $("#artistBio").html(data.bio);
      $("#artistModalImage").attr("src", data.image).attr("alt", data.name);
      $("#artistModal").modal("show");
    }
  });

  // Smooth scrolling for navigation links
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000
        );
    }
  });

  // Navbar background on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Add entrance animations
  $(window).scroll(function () {
    $(".artist-card").each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("animate__animated animate__fadeInUp");
      }
    });
  });
});
