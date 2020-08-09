let wrapper = document.querySelectorAll(".wrapper-secondary")
function mostrarScroll() {
    let scrolltop =
    document.documentElement.scrolltop;
    for(var i=0; i<wrapper-secondary.leght; i++ ){
        let alturaAnimado = wrapper-secondaty [i].offsettop;
        if(alturaanimado < scrolltop){
            wrapper-secondary [i].style.animate;
        }
    }
}