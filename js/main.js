//TweenMax.set("#element_1", {left: 50});
//TweenMax.to("#element_1", 1, {backgroundColor:"#ff1764", left:"50%", ease:Power3.easeOut});
/*setTimeout(function() {
  TweenMax.to("#turbwave", 2, {
    attr:{"baseFrequency":0},
    repeat:0,
    yoyo:true
  });
}, 10);*/

poplavok = 1;
TweenMax.set("#pop3", {left:"0px",top:"0px",opacity:0});
TweenMax.set("#pop4", {left:"0px",top:"0px",opacity:0});
TweenMax.set("#pop5", {left:"0px",top:"0px",opacity:0});
$('#order').on('click', function() {
  if (poplavok == 1) {
    poplavok = 0;
    TweenMax.to("#pop2", 0.2, {top:"4px", ease:Power3.easeIn, delay:0});
    TweenMax.to("#pop2", 1.4, {top:"0px", ease:Elastic.easeOut, delay:0.2});
  //
    TweenMax.set("#pop3", {left:"0px",top:"0px",opacity:0});
    TweenMax.to("#pop3", 0.3, {opacity:0.5, ease:Power3.easeIn, delay:0.2});
    TweenMax.to("#pop3", 3, {top:"5px", left:"-20px", ease:Power3.easeOut, delay:0.2});
    TweenMax.to("#pop3", 0.8, {opacity:0, ease:Power3.easeOut, delay:1});
  //
    TweenMax.set("#pop4", {left:"0px",top:"0px",opacity:0});
    TweenMax.to("#pop4", 0.3, {opacity:0.5, ease:Power3.easeIn, delay:0.2});
    TweenMax.to("#pop4", 3, {top:"8px", left:"8px", ease:Power3.easeOut, delay:0.2});
    TweenMax.to("#pop4", 0.8, {opacity:0, ease:Power3.easeOut, delay:1});
  //
    TweenMax.set("#pop5", {left:"0px",top:"0px",opacity:0});
    TweenMax.to("#pop5", 0.3, {opacity:0.5, ease:Power3.easeIn, delay:0.2});
    TweenMax.to("#pop5", 3, {top:"5px", left:"20px", ease:Power3.easeOut, delay:0.2});
    TweenMax.to("#pop5", 0.8, {opacity:0, ease:Power3.easeOut, delay:1});
    setTimeout(function() {
      poplavok = 1;
    },500);
  }
});

  TweenMax.to("#a1", 0.5, {backgroundPosition: "5px 0px",ease: Linear.easeNone,repeat:-1});
  TweenMax.to("#a2", 0.5, {backgroundPosition: "5px 0px",ease: Linear.easeNone,repeat:-1});
  TweenMax.to("#a3", 0.5, {backgroundPosition: "5px 0px",ease: Linear.easeNone,repeat:-1});
  TweenMax.to("#a4", 0.5, {backgroundPosition: "5px 0px",ease: Linear.easeNone,repeat:-1});
  TweenMax.to("#a5", 0.5, {backgroundPosition: "5px 0px",ease: Linear.easeNone,repeat:-1});

  TweenMax.to("#arrow_img", 0.5, {top:"10px", ease:Power3.easeInOut, delay:0});
  TweenMax.to("#arrow_img", 0.5, {top:"0px", ease:Power3.easeInOut, delay:0.5});
setInterval(function() {
  TweenMax.to("#arrow_img", 0.5, {top:"10px", ease:Power3.easeInOut, delay:0});
  TweenMax.to("#arrow_img", 0.5, {top:"0px", ease:Power3.easeInOut, delay:0.5});
}, 1000);
