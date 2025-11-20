$(document).ready(function () {
  // Dark mode toggle
  $('#toggleTheme').click(function () {
    $('body').toggleClass('dark-mode');
    const isDark = $('body').hasClass('dark-mode');
    $('#toggleTheme').text(isDark ? ' Toggle Light Mode' : ' Toggle Dark Mode');
  });

  // Skill filter toggle
  $('#filterSkills').click(function () {
    const personalSkills = $('section:contains("Personal Skills")');
    personalSkills.toggle();
    const isVisible = personalSkills.is(':visible');
    $('#filterSkills').text(isVisible ? ' Show Technical Skills' : ' Show All Skills');
  });

  // Scroll reveal animation
  function revealOnScroll() {
    $('.fade-in').each(function () {
      const top = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const height = $(window).height();
      if (top < scroll + height - 50) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
});
