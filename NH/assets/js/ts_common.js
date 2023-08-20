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

function createButtomCtaSvg() {
    const bottomCtaButton = document.querySelector('.ts--bottom-cta__button');
    bottomCtaButton.addEventListener('click', function(e){
        const buttomCtaTarget = e.target;
        const bottomCtaLottie = buttomCtaTarget.querySelector('.ts--bottom-cta__loading');
        buttomCtnAnimation();
        
        bottomCtaLottie.classList.add('on--load')
        setTimeout(function(){
            bottomCtaLottie.classList.remove('on--load');
        }, 3000)
    });
}

function buttomCtnAnimation() {
    const bottomCtaLoading = document.querySelector('.ts--bottom-cta__loading');
    var lottieAnim = lottie.loadAnimation({
        container: bottomCtaLoading,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../../assets/img/json/loading-white-spot.json'
    })
    setTimeout(function(){
        lottie.destroy();
    }, 3000)
}
textField();
createButtomCtaSvg();
