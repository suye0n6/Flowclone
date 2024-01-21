$(function(){

    gsap.registerPlugin(ScrollTrigger);
  
  
    /**
     * @헤더
     */
  
   $(window).scroll(function(){
    curr = $(this).scrollTop();
  
    if(curr > 0){
      $('.header').addClass('on')
    } else{
      $('.header').removeClass('on');
    }
   })
  
  
   /**
    * @사이드메뉴
    */
  
  
   $('.header .mb-nav-wrap').click(function(){
  
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $('.header .side-nav').show()
      $('#btn-top').css('display', 'none')
      $("body").addClass('notScroll');
    } else {
      $('.header .side-nav').hide()
      $('#btn-top').css('display', 'flex')
      $("body").removeClass('notScroll');
    }
   })
      
   $('.header .side-nav .side-item .btn-arrow').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on')
    $(this).siblings('.mobile-sub-list').slideToggle();
   })
  
  
    /**
     * @드롭메뉴
     */
  
    $('.gnb-item a').hover(function(){
      $(this).siblings('.sub-list').addClass('on');
    },function(){
      $('.sub-list').stop().removeClass('on');
    })
  
  /**
   * @게이지슬라이드
   */
  
  const menuArr=[ '프로젝트', '업무관리', '간트차트', '보안메신저', 'OKR' ]
  const textArr = [ 
    '메일, 채팅, 문서 중심의 방식에서 벗어나 온라인 협업 방식으로 프로젝트 소통을 강화할 수 있습니다.', 
    '개개인의 업무가 5단계로 자동으로 정리되어 누락없이 간편한 업무 관리가 가능합니다.', 
    '모든 프로젝트 진척도를 한눈에 볼 수 있고 계획된 일정에 맞춰 차질없는 작업 관리가 가능합니다', 
    '메시지 자동 폭파 기능을 활용하여 데이터베이스에서 완전히 삭제 가능한 보안 메신저가 가능합니다.', 
    'OKR 목표와 업무 연결 자동화로 핵심 목표와 업무에 100% 집중할 수 있습니다.']
  var bgSlide = new Swiper(".swiper.bg", {
    effect:"fade",
    loop:true,
    pagination: {
      el: ".sc-top .nav-wrap",
      clickable: true,
      renderBullet: function (index, className) {
        return '<a class="' + className + '">' + menuArr[index] + "</a>";
      },
    },
  });
  
  bgSlide.on('slideChange',function(){
    $('.page-num.curr').text(bgSlide.realIndex+1)
    $('.sc-top .inner .swiper-desc-wrap .desc').text(textArr[bgSlide.realIndex])
    guage();
  })
  
  guage();
  function guage(){
    $('.slide-guage').css({width:0})
    $('.slide-guage').stop().animate({width:'100%'},5000,"linear",function(){
      $('.slide-guage').css({width:0})
      bgSlide.slideNext()
    })
  }
  
  
  
    gsap.utils.toArray('[data-fade=true]').forEach(element => {
      gsap.from(element,{
        scrollTrigger:{
          trigger:element,
          start:"0% 100%",
          end:"100% 0%",
          toggleActions:"play pause resume reset"
        },
        opacity:0,
        yPercent:20
      })
    });
  
  
  /**
   * @폼태그조건처리
   */
  
    $('#infoForm').submit(function () { 
  
      input1 = $('.input-company');
      input2 = $('.input-name');
      input3 = $('.input-call');
      input4 = $('.input-email');
  
      select1 = $('.select-people');
      select2 = $('.select-occupation');
  
  
      if(input1.val()==''){
        alert('회사명을 입력하세요');
        input1.focus()
        return false;
      }else if(input2.val()==''){
        alert('이름을 입력하세요');
        input2.focus()
        return false;
      }else if(input3.val()==''){
        alert('전화번호을 입력하세요')
        input3.focus()
        return false;
      }else if(input4.val()==''){
        alert('이메일을 입력하세요')
        input4.focus()
        return false;
      }else if(select1.val()==''){
        alert('사용 인원을 선택하세요')
        select1.focus()
        return false;
      }else if(select2.val()==''){
        alert('업종을 선택하세요')
        select2.focus()
        return false;
      }else{
        return;
      }
    });
  
   
    /**
   * @top버튼
   */
  
  $(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-wrap #btn-top').fadeIn();
        } else {
            $('.top-wrap #btn-top').fadeOut();
        }
    });
    
    $(".top-wrap #btn-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
  });
  
  
  }) // 지우지 말기