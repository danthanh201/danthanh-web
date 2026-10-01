// Scroll-reveal for landing pages
(function(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal,.stagger').forEach(function(el){io.observe(el);});
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
