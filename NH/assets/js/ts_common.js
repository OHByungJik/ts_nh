textField();
createBottomCtaSvg();
errorSpotAnimation();
confettiSpotAnimation()
emptySpotAnimation();
idScanAnimation();
transferLoadingAnimation();
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

// BottomCtaAnimation
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
    const bottomCtaButton = document.querySelector('.ts--bottom-cta__button');
    bottomCtaButton.addEventListener('click', function(e){
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
            loop: false,
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



