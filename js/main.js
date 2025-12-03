let mobile=document.querySelector('.mobile');
let closeBtn=document.querySelector('.close-btn');
let navBox=document.querySelector('.nav-box');
let navWrapper=document.querySelector('.nav-wrapper');


//..............................................
let itemMenu=$(".item-menu");
itemMenu.hover(function(){
        $(this).find(".sub-menu").slideDown();

},function (){
        $(this).find(".sub-menu").slideUp();
    }
    );


//............................................
// ....................
$(".card-box").on("click",function (){
    $(".sub-card").slideToggle();
});

// .............................

$(".safetyTool-item").hover(function (){
    $(this).find(".product-view").css('bottom','20px');
    $(this).find(".safetyTool-pey").css({
        'opacity':0,
    });
},function (){
    $(this).find(".product-view").css('bottom','-40px');
    $(this).find(".safetyTool-pey").css({
        'opacity':1,
        'display':'flex',
        'align-items':'center',
        'justify-content':'space-between'
    });
});
//......................................................................
mobile.addEventListener('click',function (){
    navWrapper.style.display='block';
    setTimeout(function (){
        navBox.style.right=0
    },200);
});

closeBtn.addEventListener('click',function (){
        navBox.style.right='-1000px';
        setTimeout(function (){
            navWrapper.style.display='none';
            },200)

})

//.........................................................................
let flag=true;
let projectItem=document.querySelector('.project-item');
$('.project-item').hover(function (){
    this.children[1].classList.remove('project-des-info');
    this.children[1].style.left=0;
    this.children[1].style.width='100%';
    this.children[1].style.height='100%';
    this.children[1].innerHTML='';
    this.children[1].innerHTML=''+'<div class="test">'+
        '<h4 style="">پروژه ساخت بتن آرمه</h4>'+
    '<div class="project-des-info1 w-100">' +
        '<div><span style="display: block;">کارفرما</span><span>امیر محمدی</span></div>'+
        '<div><span style="display: block;">تاریخ شروع</span><span class="farsiDigit" style="direction: rtl;">03/05/1404</span></div>'+
        '<div><span style="display: block;">تاریخ پایان</span><span class="farsiDigit">03/05/1404</span></div>'+
        '</div>'+
        '</div>'
    ;
},
    function (){
        this.children[1].classList.add('project-des-info');
        this.children[1].innerHTML='';
        this.children[1].style.width='70px';
        this.children[1].style.width='70px';
        this.children[1].innerHTML='  <button class="btn btn-red btn-sm"><span class="fa fa-arrow-left"></span></button>\n' +
            '                            <h3 class="">پروژه ساخت بلن آرمه</h3>';
}
    );
