//include '' from '';

//LET ME USE THE $ FOR JQUERY
window.$ = window.jQuery = jQuery;

//Ok, now let's get it.
console.log('YEEHAW! Welcome to bones.js');

//Run mobile check and if on mobile, add mobile class to HTML tag.
let mounted = false;
mobilecheck = () => {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

let mobileDetected = mobilecheck(); 

if(mobileDetected == true){
    $("html").addClass("mobile");
};

//Initialize lazyloading.
let blazy = new Blazy({
    offset: 1000
});

//Add device agent specific classes.
let deviceAgent = navigator.userAgent.toLowerCase();

if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $("html").addClass("ios");
    $("html").addClass("mobile");
}
if (navigator.userAgent.search("MSIE") >= 0) {
    $("html").addClass("ie");
}
else if (navigator.userAgent.search("Chrome") >= 0) {
    $("html").addClass("chrome");
}
else if (navigator.userAgent.search("Firefox") >= 0) {
    $("html").addClass("firefox");
}
else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    $("html").addClass("safari");
}
else if (navigator.userAgent.search("Opera") >= 0) {
    $("html").addClass("opera");
}

// Detect request animation frame
let scroll = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // IE Fallback, you can even fallback to onscroll
    function(callback){ window.setTimeout(callback, 1000/60) };

//
//
// FUNCTIONS IN THE HEADER AND FOOTER THAT DON'T REQUIRE RE-INIT WITH BARBA
//
//

//Navigational control.
navToggle = () => {
    $('#header').toggleClass('nav-active');
    $('.hamburger-control svg').toggleClass('active');
    $('#nav-pane').toggleClass('active');
    $('.nav').toggleClass('active');
    $('.hero-img').toggleClass('mobile-nav-active');
    $('.nav-drawer-asset').toggleClass('active');

    if($('.hamburger-control').attr('aria-expanded') == 'false'){
        $(".hamburger-control").attr("aria-expanded","true");
    } else {
        $(".hamburger-control").attr("aria-expanded","false");
    }

    if(!$('body').hasClass('mobile-nav-active')){
        $('body').toggleClass('mobile-nav-active');
    } else {
        setTimeout(function(){
            $('body').toggleClass('mobile-nav-active');
        }, 450);
    }
}

$('.mobile-controls').on('click', function(){
    navToggle();
});

navClose = () => {
    if($('#nav-pane').hasClass('active')){
        $('#header').removeClass('nav-active');
        $('.hamburger-control svg').toggleClass('active');
        $('#nav-pane').removeClass('active');
        $('.nav').removeClass('active');
        $('body').removeClass('mobile-nav-active');
        $('.hero-img').removeClass('mobile-nav-active');
        $(".hamburger-control").attr("aria-expanded","false");
    }
}


//Nav appears on scroll up.
let scrollThrottle = 250,
throttled = false,
lastScrollY = 0,
scrollDirection = 0,
ticking = false;

navScroll = () =>
{
let scrollY = (window.scrollY < 0) ? 0 : window.scrollY;
let diff = lastScrollY - scrollY;

scrollDirection = diff / Math.abs(diff);
lastScrollY = scrollY;

requestTick(scrollY);
}

requestTick = (scrollY) =>
{

if(!ticking)
{
    scroll(function(){navAnimate(scrollY)});

    ticking = true;
}
}

navAnimate = (scrollY) =>
{
if(!$(document.body).hasClass('mobile-nav-active'))
{
    if(scrollY === 0)
    {
        if($('header').hasClass('scrollVisible'))
        {
            $('#header').removeClass('scrollVisible readyOut');
        }
    }
    else
    {
        if(scrollDirection > 0)
        {
            if(!$('#header').hasClass('scrollVisible'))
            {
                $('#header').removeClass('readyOut').addClass('readyIn');

                setTimeout(function()
                {
                    $('#header').addClass('scrollVisible');
                    $('#header').removeClass('readyIn');
                }, 0);
            }
        }
        else
        {
            if($('#header').hasClass('scrollVisible'))
            {
                $('#header').addClass('readyOut');

                setTimeout(function()
                {
                    $('#header').removeClass('scrollVisible'); 
                }, 300);
            }

        }
    }

    ticking = false;
}
}

//If you want to disable this on any page, you can do it here.
let navScrollListener = !(window.location.pathname === '/');
if(navScrollListener) window.addEventListener('scroll', navScroll, false);



//Scroll to top btn in footer.
if(document.getElementById('scroll-to-top-btn')){
    $('#scroll-to-top-btn').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
}

//Barba page transition functions. 
verticalTransition = (data, dir) => {

    if(dir === 'up'){
        let tl = gsap.timeline({onComplete: () => {
            $(data.current.container).css({'opacity' : '0'});
        }});

        $('#footer').css({'opacity' : '0'});
        tl.to('#animation-pane-vertical', {duration: .8, scaleY: 1, transformOrigin: 'bottom', ease: Power2.easeInOut });
        tl.to('#animation-pane-asset', {duration: .2, opacity: 1, delay: 0, ease: Power2.easeIn});

    }

    if(dir === 'down'){
        let tl = gsap.timeline({onComplete: () => {
            $('#footer').css({'opacity' : '1'});
        }});

        //move pane to top of viewport
        tl.to('#animation-pane-asset', {duration: .2, opacity: 0, delay: 1, ease: Power2.easeIn});
        tl.to('#animation-pane-vertical', {duration: .4, scaleY: 0, transformOrigin: 'top', delay: .2, ease: Power2.easeInOut});
    }
}

//FORM SUCCESS TRANSITION ANIMATION
function formSuccessTransition(){
    var tl = gsap.timeline();

    //slide pane up
    tl.to('#form-success-pane', {duration: .7, scaleY: 1, transformOrigin: 'bottom', ease: Power2.easeIn});
    //scroll up!
    $("html, body").animate({ scrollTop: 0 }, "slow");
    //fade in inner matter
    tl.to('#form-success-pane .inner h1', {duration: .5, opacity: 1, delay: .3, ease: Power2.easeIn});
    tl.to('#form-success-pane .inner .btn', {duration: .5, opacity: 1, ease: Power2.easeIn});
    tl.to('#form-success-pane .inner .logo', {duration: .5, opacity: 1, ease: Power2.easeIn});
    // parallax in elements
    // tl.to('#form-success-svg-1', {duration: 1, translateY: 0, opacity: 1, delay: .1, ease: Power2.easeIn}, "-=1");
    // tl.to('#form-success-svg-2', {duration: 1, translateY: 0, opacity: 1, ease: Power2.easeIn}, "-=1");

}

//
//
// FUNCTIONS THAT REQUIRE RE-INIT WITH BARBA
//
//

// FORM - CHANGE BODY TO SUCCESS MESSAGE ON SUCCESSFUL SUBMIT
class formSubmit {
    constructor() {
        if(document.formSubmitCallback){
            document.removeEventListener('wpcf7mailsent', document.formSubmitCallback);
        }

        if($(document.body).hasClass('page-id-44')){
            document.formSubmitCallback = this.formSubmit.bind(this);
            document.addEventListener('wpcf7mailsent', document.formSubmitCallback);
        }
    }

    formSubmit(){
        formSuccessTransition();
    }
}
new formSubmit;


//
//
// BARBA TRANSITIONS
//
//

let initHeader = window.location.pathname !== '/';

barbaTransitions = () => {
    barba.init({
        sync : true,
        transitions: [{
            name: 'default-transition',
            async once(data){
                setTimeout(function(){
                    verticalTransition(data, 'down');
                }, 500);
            },
            async beforeLeave(data){
                const done = this.async();

                // navClose();
                verticalTransition(data, 'up');

                setTimeout(function(){
                    done();
                }, 800);
            },
            async beforeEnter(data){
                //update body classes
                let nextHtml = data.next.html;
                let response = nextHtml.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', nextHtml);
                let bodyClasses = $(response).filter('notbody').attr('class');
                $("body").attr("class", bodyClasses);

                //update header classes
                // let headerClasses = response.match(/<header id="header".*>/);
                // let headerNewClasses = headerClasses[0].match(/class="([^"]*)"/);
                // $("header").attr("class", headerNewClasses[1]);

                //update live class of nav items
                let menuItems = $('.menu-item');
                let currentPath = window.location.href;

                for(let i = 0; i < menuItems.length; i++){
                    let menuItem = menuItems[i];
                    let link = $(menuItem).find('.item-link');
                    let path = $(link).attr('href');

                    if($(menuItem).hasClass('current')){
                        $(menuItem).removeClass('current');
                    }

                    if(path === currentPath){
                        $(menuItem).addClass('current');
                    }
                }
            },
            async enter(data) {
                //if we are on the blog grid page and button exists
                // if(document.getElementById('more_posts')){
                //     $('#more_posts').on('click', function(e){
                //         e.preventDefault();
                //         blogLoadMore();
                //     });
                // }

                //check to see if this page should have nav scroll and do it if so
                // let homepage = (window.location.pathname === '/' || window.location.pathname === '/alarad');
                // if(!navScrollListener && !homepage){
                //     window.addEventListener('scroll', navScroll, false);
                //     navScrollListener = true;
                // }

                // if(navScrollListener && homepage){
                //     window.removeEventListener('scroll', navScroll, false);
                //     navScrollListener = false;
                // }

                //reinit classes
                let blazy = new Blazy();
                // let scroll = new scrollTrackerBar;
                // let dots = new rulesScrollDots;
                let form = new formSubmit;
                // let navColor = new scrollColorChange;
                // let legalPage = new legalPageAnimation;

                // heroArrow();

                window.scrollTo(0,0);

                $(data.next.container).animate({
                    opacity: 1
                }, 'slow');
            },
            async afterEnter(data){
                verticalTransition(data, 'down');

                // myHandler = null;
                // myHandler = scroll(letsTry);

                //reinitialize scripts
                // if($('.primary-hero-asset')){
                //     setTimeout(function(){
                //         animatePrimaryHeroGraphics();
                //     }, 1800);
                // }

                // if($('.secondary-hero-asset')){
                //     setTimeout(function(){
                //         heroGraphicsFade();
                //     }, 1500);
                // }

                if($('.wpcf7-form').length){
                    wpcf7.initForm($('.wpcf7-form'));
                }
            }
        }],
    });
}

barbaTransitions();
