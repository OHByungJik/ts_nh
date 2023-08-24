textField(); // text input
pwHideShow(); // pw input
errorSpotAnimation(); // error spot 로티
confettiSpotAnimation() // confetti spot 로티
emptySpotAnimation(); // empty spot 로티
idScanAnimation(); // id 스캔 로티
transferLoadingAnimation(); // transfer 로티 
screeningAnimation(); // screening Animation
inputClear(); // 인풋 clear
switchButton(); // 스위치 버튼
createBottomCtaSvg(); // bottom CTA 버튼 
modalPop(); // 레이어 팝업 


function inputClear() {
    const inputClearButton = document.querySelectorAll('.ts--input-clear');
    const underLineInput = document.querySelectorAll('.ts--text-field-underline');
        underLineInput.forEach(function(el) {
            el.addEventListener('input', function(elem){
                if(elem.target.value && elem.target === document.activeElement) {
                    elem.target.nextElementSibling.classList.add('button-on');
                } else {
                    elem.target.nextElementSibling.classList.remove('button-on');
                }
            })
        });

        inputClearButton.forEach(function(e) {
            e.addEventListener('click', function(ele){
                const inputValueTarget = ele.target.previousElementSibling;
                inputValueTarget.value = '';
                ele.target.classList.remove('button-on');
            });
        });
    
}

function pwHideShow() {
    const pwShowButton = document.querySelector('.ts--pw-show');
    pwShowButton.addEventListener('click', function(e) {
        e.preventDefault();
        if(e.target.classList.contains('eye-on')) {
            e.target.classList.remove('eye-on');
            e.target.previousElementSibling.type = "password"
        } else {
            e.target.classList.add('eye-on');
            e.target.previousElementSibling.type = "text"
        }
    })
}


function switchButton() {
    const switchButtonWrap = document.querySelectorAll('.ts--switch-buttons');
    switchButtonWrap.forEach(function(e) {
        const switchButton = e.querySelectorAll('input[type="radio"]');
        switchButton.forEach(function(el) {
            el.addEventListener('input', function(ele){
                ele.preventDefault();
                const eleParent = ele.target.parentNode;
                if(eleParent === eleParent.parentNode.lastElementChild) {
                    eleParent.parentNode.classList.add('switch-on-right');
                } else {
                    eleParent.parentNode.classList.remove('switch-on-right');
                }
            })
        })
    });
}


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

function errorSpotAnimation() {
    const errorSpotAni = document.querySelectorAll('.ts--error-spot__ico');
    errorSpotAni.forEach(function(e){
        var errorSpotLottie = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            loop: false,
            path: '../../assets/img/json/error-2-spot.json'
        })
       
    });
    
}

function confettiSpotAnimation() {
    const confettiSpotAni = document.querySelectorAll('.ts--confetti-spot__ico');
    confettiSpotAni.forEach(function(e){
        var confettiSpotLottie = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            path: '../../assets/img/json/confetti-spot.json'
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
            path: '../../assets/img/json/empty-spot.json'
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
            path: '../../assets/img/json/4_id-scan.json'
        });
    });
}

function transferLoadingAnimation() {
    const transferAni = document.querySelectorAll('.ts--transfer__loading');
    transferAni.forEach(function(e){
        var transfer = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            path: '../../assets/img/json/transfer-2.json'
        });
    })
}

function screeningAnimation() {
    const screeningAni = document.querySelectorAll('.ts--screening__image');
    screeningAni.forEach(function(e){
        var screening = lottie.loadAnimation({
            container: e,
            renderer: 'svg',
            path: '../../assets/img/json/no-loan-load-light.json'
        })
    })
}


//BottomCtaAnimation
function bottomCtnAnimation() {
    const bottomCtaLoading = document.querySelector('.ts--bottom-cta__loading');
    var buttonCtaLottie = lottie.loadAnimation({
        container: bottomCtaLoading,
        renderer: 'svg',
        path: '../../assets/img/json/loading-white-spot.json'
    })
    setTimeout(function(){
        lottie.destroy();
    }, 3000)
}

function createBottomCtaSvg() {
    const bottomCtaButton = document.querySelectorAll('.ts--bottom-cta__button');
    bottomCtaButton.forEach(function(ele){
        ele.addEventListener.addEventListener('click', function(e){
            e.preventDefault();
            const buttomCtaTarget = e.target;
            const bottomCtaLottie = buttomCtaTarget.querySelector('.ts--bottom-cta__loading');
            bottomCtnAnimation();
            buttomCtaTarget.disabled = true;
            bottomCtaLottie.classList.add('on--load')
            setTimeout(function(){
                buttomCtaTarget.disabled = false;
                bottomCtaLottie.classList.remove('on--load');
            }, 3000)
        });
    })

}

function modalPop() {
    const modalPopEle = document.querySelectorAll('.ts--dialog-modal');
    modalPopEle.forEach(function(modal){
        if(modal.classList.contains('on')) {
            modal.parentNode.setAttribute('data-status', 'open');
            document.querySelector('.ts--dimmed').classList.add('on');
            document.body.style.overflow = "hidden";
        }
    });
}

function preScreeningLoad() {
    var preScreening = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 900,
    }).add({
        targets: '.screening-step1 .ts--subtitle2',
        translateY: [20, 0],
        opacity: 1,
    }).add({
        targets: '.screening-step1',
        opacity: 0,
    }).add({
        targets: '.screening-step2 .ts--subtitle1',
        opacity: 1,
    }).add({
        targets: '.screening-step2 .ts--subtitle2',
        translateY: [20, 0],
        opacity: 1,
    }).add({
        targets: '.screening-step2',
        opacity: 0,
    }).add({
        targets: '.screening-step3 .ts--subtitle1',
        opacity: 1,
    }).add({
        targets: '.screening-step3 .ts--subtitle2',
        translateY: [20, 0],
        opacity: 1,
    }).add({
        targets: '.screening-step3',
        opacity: 0,
    }).add({
        targets: '.screening-step4 .ts--subtitle1',
        opacity: 1,
    }).add({
        targets: '.screening-step4 .ts--subtitle2',
        translateY: [20, 0],
        opacity: 1,
    }).add({
        targets: '.screening-step4',
        opacity: 0,
    }).add({
        targets: '.screening-step5 .ts--subtitle1',
        opacity: 1,
    }).add({
        targets: '.screening-step5 .ts--subtitle2',
        translateY: [20, 0],
        opacity: 1,
    })
}
preScreeningLoad();

function dialogModal() {
    var modalOn = anime.timeline({
        targets: '[data-status="open"] .ts--dialog-modal-wrapper',
        easing: 'easeInOutQuad',
        translateY: ['110%', 0],
        duration: 700
    }).add({
        targets: '[data-status="open"] .ts--modal-item',
        easing: 'easeInOutQuad',
        translateY: ['100%', 0],
        delay: anime.stagger(100)
    })
}
dialogModal();