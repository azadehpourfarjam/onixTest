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
let flag=true;
let projectItem=document.querySelector('.project-des');
let projectDes=document.querySelector('.project-des');
// ....................
$(".card-box").on("click",function (){
    $(".sub-card").slideToggle();
});

// .............................
projectItem.addEventListener('mouseenter',()=>{
    document.querySelector('.project-item').children[1].classList.remove('project-des-info');
});

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