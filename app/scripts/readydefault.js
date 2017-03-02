$(document).ready(function () {
  document.body.addEventListener('touchstart', function () { /*...空函数即可*/});

  insertMainnav();
  insertCarousel();

  //barcode();

  //if ($(".u-carousel.picture.wap").length > 0 ){
  //  $(".u-carousel.picture").mobileSlider({during:6000,width:$(window).width(),height:$(window).width()/3*2});
  //}
  //if ($(".u-carousel.adv.wap").length > 0 ){
  //  $(".u-carousel.adv").mobileSlider({during:6000,width:($(window).width() - 20),height:($(window).width()/3*1 - 20)});
  //}
  //if ($(".u-carousel.web").length > 0 ){
  //  $(".u-carousel.picture").mobileSlider({during:6000,width:1920,height:1920/3});
  //}
});


function barcode() {
  var $barcodeList = $("[data-toggle=barcode]");
  $barcodeList.html("");
  if ($barcodeList.length > 0) {
    for (var i = 0; i < $barcodeList.length; i++) {
      var $barcode = $barcodeList[i];
      var value = $($barcode).attr("data-barcode");
      var btype = "code128";
      var renderer = "css";
      var settings = {
        output: renderer,
        bgColor: "#FFFFFF",
        color: "#000000",
        barWidth: "1",
        barHeight: "15"
      };
      $($barcode).barcode(value, btype, settings);
    }
  }
}

function insertMainnav() {
  //app 主导航
  var platClass=null;

  if ($(".f-main > .u-nav.wap").length > 0) {
    platClass='.wap';
  }
  if ($(".f-main > .u-nav.web").length > 0) {
    platClass='.web';
  }
  if (platClass){
    var $mainNav = $(".f-main > .u-nav"+platClass)[0];
    var menuList = [];
    if (platClass == '.wap'){
      menuList = [
        {
          url:"'home"+ platClass +".html'",
          title:"首页",
          icon:"",
          subtitle:""
        },
        {
          url:"'hq-home"+ platClass +".html'",
          title:"婚庆",
          icon:"",
          subtitle:"",
        },
        {
          url:"'hy-home"+ platClass +".html'",
          title:"婚宴",
          icon:"",
          subtitle:""
        },
        {
          url:"'lf-home"+ platClass +".html'",
          title:"礼服",
          icon:"",
          subtitle:""
        },
      ];
    }else {
      menuList = [
        {
          url:"'home"+ platClass +".html'",
          title:"首页",
          icon:"",
          subtitle:"home"
        },
        {
          url:"'hy-home"+ platClass +".html'",
          title:"婚宴",
          icon:"",
          subtitle:"wedding banquet",
          submenu:[
            {
              url:"'hy-store-list"+ platClass +".html'",
              title:"婚宴酒店",
            },
            {
              url:"'hy-hall-list"+ platClass +".html'",
              title:"宴会厅",
            },
            {
              url:"'hy-menu-list"+ platClass +".html'",
              title:"菜品套系",
            },
          ]
        },
        {
          url:"'hq-home"+ platClass +".html'",
          title:"婚庆",
          icon:"",
          subtitle:"wedding",
          submenu:[
            {
              url:"'hy-store-list"+ platClass +".html'",
              title:"婚宴酒店",
            },
          ]
        },
        {
          url:"'lf-home"+ platClass +".html'",
          title:"婚纱礼服",
          icon:"",
          subtitle:"Wedding dress",
          submenu:[
            {
              url:"'hy-store-list"+ platClass +".html'",
              title:"婚宴酒店",
            },
          ]
        },
        {
          url:"#",
          title:"一站式服务",
          icon:"",
          subtitle:"One stop service"
        },
      ];
    }

    var liArray="";
    for (var i in menuList){
      var submenuHtml='';
      var submenuList=menuList[i].submenu;
      if (submenuList){
        var subLi="";
        for (var index in submenuList){
          subLi +=
          " <li>  "+
          "   <a href= "+ submenuList[index].url +"> "+
          "     <span class='title'>"+ submenuList[index].title +"</span> "+
          "   </a>  "+
          " </li> ";
        }
        if (subLi.length>0){
          submenuHtml = " <ul class='submenu' > " + subLi + " </ul> ";
        }
      }
      liArray+=
        " <li>  "+
        "   <a href= "+ menuList[i].url +"> "+
        "     <i class='icon'>"+ menuList[i].icon +"</i>  "+
        "     <span class='title'>"+ menuList[i].title +"</span> "+
        "     <span class='sub-title'>"+ menuList[i].subtitle +"</span> "+
        "   </a>  "+submenuHtml+
        " </li> ";
    }
    var insertMainNav =
      "<div class='nav-box'>" +
      " <div class='logo-box'><div class='logo-icon'></div></div>"+
      " <div class='tel-box'>" +
      "   <div class='tel-info'>"+
      "    <label>官方热线电话</label>"+
      "    <span>400-015-9999</span>"+
      "   </div>"+
      " </div>" +
      " <ul > " + liArray + " </ul> "+
      "</div> ";

    $(insertMainNav).prependTo($mainNav);
    var pathNmae = window.location.pathname;
    var fileName = pathNmae.substring(pathNmae.lastIndexOf('/') + 1, pathNmae.length);
    var modelName= fileName.substring(0,fileName.indexOf('-'));
    console.log("["+modelName+"]","["+fileName+"]","["+pathNmae+"]");

    $($mainNav).find("li>a[href^='" + fileName + "']").parent().addClass("active");
    $($mainNav).find(".nav-box>ul>li>a[href^='" + modelName + "']").parent().addClass("active");

  }

}

function insertCarousel() {
  //app 主导航
  var platClass=null;
  var insertCarousel =null;
  if ($(".u-carousel.wap").length > 0) {
    platClass='.wap';
  }
  if ($(".u-carousel.web").length > 0) {
    platClass='.web';
  }

  if (platClass && $(".u-carousel .picture-list").length == 0){
    var $carouselAdv = $(".u-carousel.adv"+platClass)[0];
    var $carouselPicture = $(".u-carousel.picture"+platClass)[0];
    var imageArray=[];

    var active = "";
    if ($carouselPicture){
      imageArray=[];
      if ($($carouselPicture).hasClass('web')){
        imageArray=[
          "http://img2.jsbn.com/venus/vda/20170209/14866093553445685_1920x680.jpg",
          "http://img2.jsbn.com/venus/vda/20161014/14764385303891824_1920x680.jpg",
          "http://img2.jsbn.com/venus/vda/20161014/14764383886687387_1920x680.jpg",
          "http://img2.jsbn.com/venus/vda/20170207/14864371388686494_1920x680.jpg",
        ];
      }else {
        imageArray=[
          "http://img2.jsbn.com/venus/cases/20161213/14816099507894479_2454x1636.jpg@640w_95q",
          "http://img2.jsbn.com/venus/cases/20161213/14816099496355145_2016x1344.jpg@640w_95q",
          "http://img2.jsbn.com/venus/cases/20170216/14872294064786569_2476x1651.jpg@640w_95q",
          "http://img2.jsbn.com/venus/cases/20161213/14816091978737484_900x600.jpg@640w_95q",
        ];
      }

      insertCarousel=getCarouselHtml(imageArray);
      if (insertCarousel){
        $(insertCarousel).prependTo($carouselPicture);
      }
    }
    if ($carouselAdv){
      if ($($carouselAdv).hasClass('web')){
        imageArray=[
          "http://img2.jsbn.com/venus/vda/20170209/14866093553445685_1920x680.jpg",
          "http://img2.jsbn.com/venus/vda/20161014/14764385303891824_1920x680.jpg",
          "http://img2.jsbn.com/venus/vda/20161014/14764383886687387_1920x680.jpg",
          "http://img2.jsbn.com/venus/vda/20170207/14864371388686494_1920x680.jpg",
        ];
      }else {
        imageArray=[
          "http://img2.jsbn.com/venus/vda/20170209/14866093553445685_1920x680.jpg@640w_95q",
          "http://img2.jsbn.com/venus/vda/20161014/14764385303891824_1920x680.jpg@640w_95q",
          "http://img2.jsbn.com/venus/vda/20161014/14764383886687387_1920x680.jpg@640w_95q",
          "http://img2.jsbn.com/venus/vda/20170207/14864371388686494_1920x680.jpg@640w_95q",
        ];
      }
      insertCarousel=getCarouselHtml(imageArray);
      if (insertCarousel){
        $(insertCarousel).prependTo($carouselAdv);
      }
    }

    var autoActiveFun=function( findClassPath){
      if($(findClassPath).length>0){
        var pictureActive=$(findClassPath)[0];
        if ($(pictureActive).next().length>0){
          $(pictureActive).removeClass('active').next().addClass('active');
        }else{
          $(pictureActive).removeClass('active').prevAll().last().addClass('active');
        }
      }
    }
    var time = window.setInterval(function(){
      var carouselList=$('.u-carousel');
      if (carouselList&&carouselList.length>0){
        for (var i in carouselList){
          if (carouselList[i].className&&carouselList[i].className.length>0){
            var carouselClass="";
            var classList=carouselList[i].className.split(" ");
            for (var index in classList){
              if (classList[index].length > 0){
                carouselClass += '.'+classList[index];
              }
            }
            if (carouselClass.length > 0){
              autoActiveFun(carouselClass+' .picture-list li.active');
              autoActiveFun(carouselClass+' .point-box li.active');
            }
          }
        }
      }
    },3000);

    ////去掉定时器的方法
    //window.clearInterval(time);
  }
}

function getCarouselHtml(imageArray){
  var liList="";
  var pointList="";
  for(var i in imageArray){
    active=i==0?' active':'';
    liList +=
      " <li class='picture-item "+active+"'>  "+
      "   <div class='img-box'>" +
      "     <div class='u-load'><div class='load-box'><div class='load-img'><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>" +
      "     <a href= '#'> "+
      "      <img src='" + imageArray[i] + "'>"+
      "     </a>  "+
      "   </div>"+
      " </li> ";
    pointList += "<li class='point "+active+"'></li>";
  }
  insertCarousel =
    "<div class='carousel-picture'>" +
    " <ul class='picture-list'> "+liList+"</ul>" +
    " <ul class='point-box'> "+pointList+"</ul>" +
    "</div>";
  return insertCarousel;
}

