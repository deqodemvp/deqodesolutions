
jQuery(document).ready(function() {

//scrollup-btn

  jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 0) {
            jQuery('.scrollup').fadeIn();
        } else {
           jQuery('.scrollup').fadeOut();
        }
    });

    jQuery('.scrollup').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });




 //nav-tabs hover
jQuery('.nav-tabs > li > a').hover(function() {
  jQuery('.nav-tabs > li > a').removeClass('show');
  jQuery(this).addClass('show');
  jQuery(this).addClass('active');
  var hash = jQuery(this).attr('href');
  var prefix = "tab_";
  if (hash) {
    jQuery('.tab-content div').removeClass('active');
    jQuery('.tab-content div').removeClass('show');
    jQuery(hash.replace(prefix,"")).addClass('active');
    jQuery(hash.replace(prefix,"")).addClass('show');
  } else {
     jQuery('.tab-content div:first-child').addClass('tab-pane active show');
  }
})


//carousel
jQuery(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    jQuery(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            jQuery(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            jQuery(this).carousel('prev');
        }
    });
    jQuery(".carousel").on("touchend", function(){
            jQuery(this).off("touchmove");
    });
});


  jQuery('#nav-icon3').click(function(){
    jQuery(this).toggleClass('open');
  });


/******tabs-acc*******/

// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    jQuery(".tab_content").hide();
    jQuery(".tab_content:first").show();

  /* if in tab mode */
    jQuery("ul.tabs li").click(function() {

      jQuery(".tab_content").hide();
      var activeTab = jQuery(this).attr("rel");
      jQuery("#"+activeTab).fadeIn();
      jQuery("ul.tabs li").removeClass("active");
      jQuery(this).addClass("active");

    jQuery(".tab_drawer_heading").removeClass("d_active");
    jQuery(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

    });
  /* if in drawer mode */
  jQuery(".tab_drawer_heading").click(function() {

      jQuery(".tab_content").hide();
      var d_activeTab = jQuery(this).attr("rel");
      jQuery("#"+d_activeTab).fadeIn();

    jQuery(".tab_drawer_heading").removeClass("d_active");
      jQuery(this).addClass("d_active");

    jQuery("ul.tabs li").removeClass("active");
    jQuery("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });


  /* Extra class "tab_last"
     to add border to right side
     of last tab */
  jQuery('ul.tabs li').last().addClass("tab_last");

});


//Cookie JS
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

jQuery(document).ready(function(){


  var source=getParameterByName('utm_source');
  if(jQuery.cookie('utm_source')==null||jQuery.cookie('utm_source')==""){
    if(source!='')
    {
      jQuery.cookie('utm_source', source);
    }
  }

});

function getParameterByName(name){
  name=name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex=new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results=regex.exec(location.search);
  return results===null ? "":decodeURIComponent(results[1].replace(/\+/g, " "));
}


function setCookieTR()
{
  jQuery.cookie("tr_user", 1,{ path: '/' });
  jQuery('.cookie-bar').remove();
}

jQuery(document).ready(function(){
  if(jQuery.cookie("tr_user")=='1')
  {
    jQuery('.cookie-bar').remove();
  }

  if(jQuery('input[name="utm-source"]').length>0 && jQuery.cookie("utm_source"))
  {
    jQuery('input[name="utm-source"]').val(jQuery.cookie("utm_source"));
  }
});




//scroll

jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 10) {
        jQuery(".custom-navbar").addClass("navbar-scroll");
        jQuery(".cookie-bar").show();
        // jQuery(".navbar-brand").addClass("dq-ani");
    } else {
        jQuery(".custom-navbar").removeClass("navbar-scroll");
        jQuery(".cookie-bar").show();
        // jQuery(".navbar-brand").removeClass("dq-ani");
    }
});


// dq-logo

    var prevScroll = 0;
    jQuery(document).scroll(function() {
     var currentPos = jQuery(this).scrollTop();
     if (currentPos > prevScroll) {
      jQuery('.navbar-brand').addClass('dq-ani');
     } else {
      jQuery('.navbar-brand').removeClass('dq-ani');
     }

     prevScroll = currentPos;

    })