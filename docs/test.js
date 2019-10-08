<script type="text/javascript">
  // Menu toggle-button
    $(document).ready(function(){
        $(".menu-icon").on("click", function(){
            $("nav ul").toggleClass("showing");
        })
    });


  //scroling effect

  $(window).on("scroll", function(){

    if($(window).scrollTop()) {
      $('nav').addClass('black')

    }
    else {
        $('nav').removeClass('black')
    }
  });
</script>
