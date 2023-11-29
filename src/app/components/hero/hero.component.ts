import { Component, ElementRef, HostListener, ViewChild ,OnInit} from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import * as $ from 'jquery';
import { TweenMax, Power3 } from 'gsap';


declare function Di(): any;
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent  {
   slideshowDuration: number = 4000;
   slideshow: JQuery<HTMLElement> = $('.main-content .slideshow');

 slideshowSwitch(slideshow: JQuery<HTMLElement>, index: number, auto: boolean): void {
  if (slideshow.data('wait')) return;

  var slides: JQuery<HTMLElement> = slideshow.find('.slide');
  var pages: JQuery<HTMLElement> = slideshow.find('.pagination');
  var activeSlide: JQuery<HTMLElement> = slides.filter('.is-active');
  var activeSlideImage: JQuery<HTMLElement> = activeSlide.find('.image-container');
  var newSlide: JQuery<HTMLElement> = slides.eq(index);
  var newSlideImage: JQuery<HTMLElement> = newSlide.find('.image-container');
  var newSlideContent: JQuery<HTMLElement> = newSlide.find('.slide-content');
  var newSlideElements: JQuery<HTMLElement> = newSlide.find('.caption > *');

  if (newSlide.is(activeSlide)) return;

  newSlide.addClass('is-new');
  var timeout: NodeJS.Timeout | undefined = slideshow.data('timeout');
  clearTimeout(timeout);
  slideshow.data('wait', true);
  var transition: string | undefined = slideshow.attr('data-transition');

   if(transition=='fade'){
    newSlide.css({
      display:'block',
      zIndex:2
    });
    newSlideImage.css({
      opacity:0
    });

    TweenMax.to(newSlideImage,1,{
      alpha:1,
      
      onComplete:function(){
        
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({display:'',zIndex:''});
        newSlideImage.css({opacity:''});
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait',false);
        if(auto){
        timeout=setTimeout(function(){
          slideshowNext(slideshow,false,true);
        },4000);
        slideshow.data('timeout',timeout);
      }
          slideshow.data('timeout',timeout);}}});
  } else {
    if(newSlide.index()>activeSlide.index()){
      var newSlideRight=0;
      var newSlideLeft='auto';
      var newSlideImageRight=-slideshow.width()/8;
      var newSlideImageLeft='auto';
      var newSlideImageToRight=0;
      var newSlideImageToLeft='auto';
      var newSlideContentLeft='auto';
      var newSlideContentRight=0;
      var activeSlideImageLeft=-slideshow.width()/4;
    } else {
      var newSlideRight='';
      var newSlideLeft=0;
      var newSlideImageRight='auto';
      var newSlideImageLeft=-slideshow.width()/8;
      var newSlideImageToRight='';
      var newSlideImageToLeft=0;
      var newSlideContentLeft=0;
      var newSlideContentRight='auto';
      var activeSlideImageLeft=slideshow.width()/4;
    }

    newSlide.css({
      display:'block',
      width:0,
      right:newSlideRight,
      left:newSlideLeft
      ,zIndex:2
    });

    newSlideImage.css({
      width:slideshow.width(),
      right:newSlideImageRight,
      left:newSlideImageLeft
    });

    newSlideContent.css({
      width:slideshow.width(),
      left:newSlideContentLeft,
      right:newSlideContentRight
    });

    activeSlideImage.css({
      left:0
    });

    TweenMax.set(newSlideElements,{y:20,force3D:true});
    TweenMax.to(activeSlideImage,1,{
      left:activeSlideImageLeft,
      ease:Power3.easeInOut
    });

    TweenMax.to(newSlide,1,{
      width:slideshow.width(),
      ease:Power3.easeInOut
    });

    TweenMax.to(newSlideImage,1,{
      right:newSlideImageToRight,
      left:newSlideImageToLeft,
      ease:Power3.easeInOut
    });

    TweenMax.staggerFromTo(newSlideElements,0.8,{alpha:0,y:60},{alpha:1,y:0,ease:Power3.easeOut,force3D:true,delay:0.6},0.1,function(){
      newSlide.addClass('is-active').removeClass('is-new');
      activeSlide.removeClass('is-active');
      newSlide.css({
        display:'',
        width:'',
        left:'',
        zIndex:''
      });

      newSlideImage.css({
        width:'',
        right:'',
        left:''
      });

      newSlideContent.css({
        width:'',
        left:''
      });

      newSlideElements.css({
        opacity:'',
        transform:''
      });

      activeSlideImage.css({
        left:''
      });

      slideshow.find('.pagination').trigger('check');
      slideshow.data('wait',false);
      if(auto){
        timeout=setTimeout(function(){
          slideshowNext(slideshow,false,true);
        },slideshowDuration);
        slideshow.data('timeout',timeout);
      }
    });
  }
}

 slideshowNext(slideshow: JQuery<HTMLElement>, previous: boolean, auto: boolean): void {
  const slides: JQuery<HTMLElement> = slideshow.find('.slide');
  const activeSlide: JQuery<HTMLElement> = slides.filter('.is-active');
  let newSlide: JQuery<HTMLElement> | null = null;

  if (previous) {
    newSlide = activeSlide.prev('.slide');
    if (newSlide.length === 0) {
      newSlide = slides.last();
    }
  } else {
    newSlide = activeSlide.next('.slide');
    if (newSlide.length === 0) {
      newSlide = slides.filter('.slide').first();
    }
  }

  if (newSlide) {
    this.slideshowSwitch(slideshow, newSlide.index(), auto);
  }
}

 homeSlideshowParallax(): void {
  const scrollTop: number | undefined = $(window).scrollTop();
  if (scrollTo && scrollTo > windowHeight) return;

  const inner: JQuery<HTMLElement> = this.slideshow.find('.slideshow-inner');
  const newHeight: number = windowHeight - scrollTop / 2;
  const newTop: number = scrollTop * 0.8;

  inner.css({
    transform: 'translateY(' + newTop + 'px)',
    height: newHeight,
  });
}

$(document).ready(() => {
  $('.slide').addClass('is-loaded');

  $('.slideshow .arrows .arrow').on('click', function () {
    slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
  });

  $('.slideshow .pagination .item').on('click', function () {
    slideshowSwitch($(this).closest('.slideshow'), $(this).index(), false);
  });

  $('.slideshow .pagination').on('check', function () {
    const slideshow: JQuery<HTMLElement> = $(this).closest('.slideshow');
    const pages: JQuery<HTMLElement> = $(this).find('.item');
    const index: number = slideshow.find('.slides .is-active').index();
    pages.removeClass('is-active');
    pages.eq(index).addClass('is-active');
  });

  /* Lazyloading
  $('.slideshow').each(function(){
    var slideshow=$(this);
    var images=slideshow.find('.image').not('.is-loaded');
    images.on('loaded',function(){
      var image=$(this);
      var slide=image.closest('.slide');
      slide.addClass('is-loaded');
    });
  */

  const timeout: number = setTimeout(() => {
    slideshowNext(slideshow, false, true);
  }, slideshowDuration);

  slideshow.data('timeout', timeout);
});

if ($('.main-content .slideshow').length > 1) {
  $(window).on('scroll', homeSlideshowParallax);
}

}
