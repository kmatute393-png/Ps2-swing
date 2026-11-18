document.getElementById('start-btn').addEventListener('click', function() {
    const startContainer = document.getElementById('start-container');
    const introVideo = document.getElementById('intro-video');
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // 1. Desvanecer el título y el botón START
    startContainer.style.opacity = '0';
    setTimeout(() => {
        startContainer.style.display = 'none';
    }, 300);

    // 2. Mostrar y reproducir el video de intro de la PS2
    introVideo.classList.add('active');
    introVideo.play().catch(error => {
        console.log("Reproducción automática del video:", error);
    });

    // 3. Cuando termine el video, ocultar la pantalla de splash y mostrar la web
    introVideo.onended = function() {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            document.body.style.overflow = 'auto'; // Habilitar scroll en PC y móviles
        }, 800);
    };
});