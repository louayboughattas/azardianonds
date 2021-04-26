

/*----Full Page Slider---------------*/
 
 $(document).ready(function() {
 $('#adaptive').lightSlider({
     adaptiveHeight:true,
     auto:true,
     item:1,
     slideMargin:0,
     loop:true
 });
});
 /*--For-make-Menu-responsive------------*/
 $(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});