const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-items');
    const navLinks = document.querySelectorAll('.nav-items li');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    $('.nav-items li a').on("click", function() {
        $('.burger').click();
    });
}


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  
});

const contactUs = () => {
    
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if(this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });

}

const submit = () => {

    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        //status.innerHTML = "Thanks!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem."
      });
    }
    form.addEventListener("submit", handleSubmit)

}

const app = () => {
    navSlide();
    contactUs();
    submit();
}

app();
