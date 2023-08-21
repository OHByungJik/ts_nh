textField();
createBottomCtaSvg();
errorSpotAnimation();
confettiSpotAnimation();
emptySpotAnimation();
idScanAnimation()
transferLoadingAnimation()
screeningAnimation();

// text field 
function textField() {
    const textInput = document.querySelectorAll('.text-field');

    textInput.forEach(function(e) {
        e.addEventListener('focusin', function(ele){
            const focusIn = ele.target.parentNode;
            focusIn.classList.add('text-field--focused');
        })
        e.addEventListener('focusout', function(ele){
            const focusOut = ele.target.parentNode;
            focusOut.classList.remove('text-field--focused');
        })
    }) 
}



// function lottieTrigger() {
//     var container = document.getElementById('container');
//     var animData = {
//             container: container,
//             renderer: 'svg',
//             loop: false,
//             prerender: false,
//             autoplay: false,
//             autoloadSegments: false,
//             path: directory_uri+'/js/data.json'
//         };
//     anim = bodymovin.loadAnimation(animData);

//     var anim;
//     var elem = document.getElementById('bodymovin')
//     var animData = {
//         container: elem,
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,   /*MAKE SURE THIS IS FALSE*/
//         rendererSettings: {
//             progressiveLoad:false
//         },
//         path: 'data.json',
//         name: 'myAnimation',
//     };
//     anim = bodymovin.loadAnimation(animData);
// function start(){
//     var anim;
// var animdata ={
//     container: document.getElementById("velkommen"),
//     renderer: "svg",
//     loop: false,
//     autoplay: true,
//     path: "data.json"
// };
// anim = bodymovin.loadAnimation(animdata);
// anim.addEventListener('complete',stopa);
// }

// function stopa(){
//     document.getElementById("velkommen").style.display = "none";
// }
// }

// BottomCtaAnimation
function bottomCtnAnimation() {
    const bottomCtaLoading = document.querySelector('.ts--bottom-cta__loading');
    var buttonCtaLottie = lottie.loadAnimation({
        container: bottomCtaLoading,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../assets/img/json/loading-white-spot.json'
    })
    setTimeout(function(){
        lottie.destroy();
    }, 3000)
}

function createBottomCtaSvg() {
    const bottomCtaButton = document.querySelector('.ts--bottom-cta__button');
    bottomCtaButton.addEventListener('click', function(e){
        const buttomCtaTarget = e.target;
        const bottomCtaLottie = buttomCtaTarget.querySelector('.ts--bottom-cta__loading');
        bottomCtnAnimation();

        bottomCtaLottie.classList.add('on--load')
        setTimeout(function(){
            bottomCtaLottie.classList.remove('on--load');
        }, 3000)
    });
}

function errorSpotAnimation() {
    const errorSpotAni = document.querySelectorAll('.ts--error-spot__ico');
    errorSpotAni.forEach(function(e){
        var errorSpotLottie = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../assets/img/json/error-2-spot.json'
        })
        
    });
    
}

function confettiSpotAnimation() {
    const confettiSpotAni = document.querySelectorAll('.ts--confetti-spot__ico');
    confettiSpotAni.forEach(function(e){
        var confettiSpotLottie = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../assets/img/json/confetti-spot.json'
        })
    
    });
    
}

function emptySpotAnimation() {
    const emptySpotAni = document.querySelectorAll('.ts--empty-spot__ico');
    emptySpotAni.forEach(function(e){
        var emptySpotLottie = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../assets/img/json/empty-spot.json'
        })
    
    });
    
}

function idScanAnimation() {
    const idScanAni = document.querySelectorAll('.ts--id-scan__image');
    idScanAni.forEach(function(e) {
        var idScanLottie = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../assets/img/json/4_id-scan.json'
        });
    });
}

function transferLoadingAnimation() {
    const transferAni = document.querySelectorAll('.ts--transfer__loading');
    transferAni.forEach(function(e){
        var transfer = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../assets/img/json/transfer-2.json'
        });
    })
}

function screeningAnimation() {
    const screeningAni = document.querySelectorAll('.ts--screening__image');
    screeningAni.forEach(function(e){
        var screening = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../assets/img/json/no-loan-load-light.json'
        })
    })
}