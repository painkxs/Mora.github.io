let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// Función para cambiar el idioma a inglés
function changeToEnglish() {
    document.documentElement.lang = "en";
    document.title = "Portfolio";
    document.getElementById("nav-inicio").innerHTML = '<a href="#inicio">Home</a>';
    document.getElementById("nav-sobremi").innerHTML = '<a href="#sobremi">About me</a>';
    document.getElementById("nav-portfolio").innerHTML = '<a href="#portfolio">Portfolio</a>';
    document.getElementById("nav-contacto").innerHTML = '<a href="#contacto">Contact me</a>';
    document.getElementById("job-title").textContent = "Systems Engineer";
    document.getElementById("sobremi-title").textContent = "ABOUT ME";
    document.getElementById("about-me").innerHTML = '<span>Hello, I\'m Jack Fernandez.</span> I am a programming enthusiast, with a focus on languages like Java, C, and C++. I love using HTML and CSS, I put a lot of enthusiasm into everything I do, and I strive to do my best when I want something.';
    document.getElementById("personal-info").textContent = "Personal Information";
    document.getElementById("birthday-label").textContent = "Birthday";
    document.getElementById("birthday").textContent = "19-09-1995";
    document.getElementById("phone-label").textContent = "Phone";
    document.getElementById("phone").textContent = "55-74-62-65-34";
    document.getElementById("email-label").textContent = "Email";
    document.getElementById("email").textContent = "jacob.halo3@hotmail.com";
    document.getElementById("website-label").textContent = "Website";
    document.getElementById("website").textContent = "www.jacob.com";
    document.getElementById("address-label").textContent = "Address";
    document.getElementById("address").textContent = "AV cuahutemoc 762 int 201";
    document.getElementById("position-label").textContent = "Position";
    document.getElementById("position").textContent = "FREELANCE";
    document.getElementById("interests-title").textContent = "Interests";
    document.getElementById("interest-games").textContent = "GAMES";
    document.getElementById("interest-music").textContent = "MUSIC";
    document.getElementById("interest-travel").textContent = "TRAVEL";
    document.getElementById("interest-headphones").textContent = "HEADPHONES";
    document.getElementById("interest-sports").textContent = "SPORTS";
    document.getElementById("interest-running").textContent = "RUNNING";
    document.getElementById("interest-computers").textContent = "COMPUTERS";
    document.getElementById("interest-cellphone").textContent = "CELLPHONE";
    document.getElementById("portfolio-title").textContent = "PORTFOLIO";
    document.querySelectorAll(".proyecto h3")[0].textContent = "Creative Design";
    document.querySelectorAll(".proyecto h3")[1].textContent = "Interactive Menu";
    document.querySelectorAll(".proyecto h3")[2].textContent = "Screen Division";
    document.querySelectorAll(".proyecto h3")[3].textContent = "Carousel";
    document.querySelectorAll(".proyecto h3")[4].textContent = "Carousel";
    document.querySelectorAll(".proyecto h3")[5].textContent = "Navigation Menu";
    document.getElementById("contacto-title").textContent = "CONTACT ME";
    document.getElementById("contacto-name").placeholder = "Name";
    document.getElementById("contacto-telefono").placeholder = "phone";
    document.getElementById("contacto-correo").placeholder = "mail";
    document.getElementById("contacto-mensaje").placeholder = "message";
    document.getElementById("contacto-boton_contactame").textContent = "Contact me";
    document.getElementById("changeLangBtn").textContent = "Change language ";
    document.getElementById("changeFontBtn").textContent = "Change font ";  
    document.getElementById("changeColorBtn2").textContent = "Change color ";
    document.getElementById("download-btn").textContent = "Download portfolio";
  

}
  
  // Función para cambiar el idioma a español
  function changeToSpanish() {
    document.documentElement.lang = "es";
    document.title = "Portafolio";
    document.getElementById("nav-inicio").innerHTML = '<a href="#inicio">Inicio</a>';
    document.getElementById("nav-sobremi").innerHTML = '<a href="#sobremi">Sobre mí</a>';
    document.getElementById("nav-portfolio").innerHTML = '<a href="#portfolio">Portafolio</a>';
    document.getElementById("nav-contacto").innerHTML = '<a href="#contacto">Contactame</a>';
    document.getElementById("job-title").textContent = "Ingeniero en Sistemas";
    document.getElementById("sobremi-title").textContent = "SOBRE MI";
    document.getElementById("about-me").innerHTML = '<span>Hola, soy Jack Fernandez.</span> Soy un aficionado de la programación, con un enfoque en lenguajes como Java, C y C++. Me encanta usar HTML y CSS, pongo mucho entusiasmo en todo lo que hago y me esfuerzo al máximo cuando quiero algo.';
    document.getElementById("personal-info").textContent = "Datos Personales";
    document.getElementById("birthday-label").textContent = "Cumpleaños";
    document.getElementById("birthday").textContent = "19-09-1995";
    document.getElementById("phone-label").textContent = "Teléfono";
    document.getElementById("phone").textContent = "55-74-62-65-34";
    document.getElementById("email-label").textContent = "Email";
    document.getElementById("email").textContent = "jacob.halo3@hotmail.com";
    document.getElementById("website-label").textContent = "Website";
    document.getElementById("website").textContent = "www.jacob.com";
    document.getElementById("address-label").textContent = "Dirección";
    document.getElementById("address").textContent = "AV cuahutemoc 762 int 201";
    document.getElementById("position-label").textContent = "Cargo";
    document.getElementById("position").textContent = "FREELANCE";
    document.getElementById("interests-title").textContent = "Intereses";
    document.getElementById("interest-games").textContent = "JUEGOS";
    document.getElementById("interest-music").textContent = "MÚSICA";
    document.getElementById("interest-travel").textContent = "VIAJAR";
    document.getElementById("interest-headphones").textContent = "AUDÍFONOS";
    document.getElementById("interest-sports").textContent = "DEPORTE";
    document.getElementById("interest-running").textContent = "CORRER";
    document.getElementById("interest-computers").textContent = "COMPUS";
    document.getElementById("interest-cellphone").textContent = "CELULAR";
    document.getElementById("portfolio-title").textContent = "PORTAFOLIO";
    document.querySelectorAll(".proyecto h3")[0].textContent = "Diseño Creativo";
    document.querySelectorAll(".proyecto h3")[1].textContent = "Menú Interactivo";
    document.querySelectorAll(".proyecto h3")[2].textContent = "División de pantalla";
    document.querySelectorAll(".proyecto h3")[3].textContent = "Carrusel";
    document.querySelectorAll(".proyecto h3")[4].textContent = "Carrusel";
    document.querySelectorAll(".proyecto h3")[5].textContent = "Menú de navegación";
    document.getElementById("contacto-title").textContent = "CONTACTAME";
    document.getElementById("contacto-name").placeholder = "Nonbre";
    document.getElementById("contacto-telefono").placeholder = "telefono";
    document.getElementById("contacto-correo").placeholder = "correo";
    document.getElementById("contacto-mensaje").placeholder = "mensaje";
    document.getElementById("contacto-boton_contactame").textContent = "Contactame";
    document.getElementById("changeLangBtn").textContent = "Cambiar idioma ";
    document.getElementById("changeFontBtn").textContent = "Cambiar fuente ";  
    document.getElementById("changeColorBtn2").textContent = "Cambiar color ";
    document.getElementById("download-btn").textContent = "Descargar portafolio";  

    }
  
  // Event listener para el botón de cambiar idioma
  document.getElementById("changeLangBtn").addEventListener("click", function() {
    // Obtener el idioma actual
    var currentLang = document.documentElement.lang;
  
    // Cambiar el idioma según el idioma actual
    if (currentLang === "es") {
      changeToEnglish();
    } else {
      changeToSpanish();
    }
  });


  // Función para cambiar la fuente
function changeFont() {
    var body = document.body;
    if (body.classList.contains("font1")) {
      body.classList.remove("font1");
      body.classList.add("font2");
    } else if (body.classList.contains("font2")) {
      body.classList.remove("font2");
      body.classList.add("font1");
    } else {
      body.classList.add("font1");
    }
  }
  
  // Event listener para el botón de cambiar fuente
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeFontBtn").addEventListener("click", changeFont);
  });
  
  document.getElementById("changeColorBtn2").addEventListener("click", function() {
    
    document.querySelector(".sobremi").classList.toggle("colors2");
    document.querySelector(".contenedor-header").classList.toggle("colors2"); 
    document.querySelector(".inicio").classList.toggle("colors2");      
    document.querySelector(".portfolio").classList.toggle("colors2");
    document.querySelector(".contacto").classList.toggle("colors2");    
  });
    

    document.getElementById("download-btn").addEventListener("click", function() {
        // URL del archivo que deseas descargar
        var fileUrl = "https://github.com/painkxs/painkxs.github.io/blob/main/proyecto%201.zip";

        
        
        // Crea un enlace temporal
        var link = document.createElement("a");
        link.href = fileUrl;
        link.download = "PORTAFOLIO.zip"; // Nombre que tendrá el archivo descargado
        
        // Hace clic en el enlace para iniciar la descarga
        document.body.appendChild(link);
        link.click();
        
        // Elimina el enlace temporal
        document.body.removeChild(link);
    });
    
