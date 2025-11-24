document.addEventListener('DOMContentLoaded', () => {
    // Création de l'overlay
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
    lightbox.style.display = 'none';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '10000';

    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.borderRadius = '10px';
    lightboxImg.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    // Clic sur overlay pour fermer
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Sélection des images .image-sae et ajout du clic
    document.querySelectorAll('.visuel-projet img.image-sae').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });
});
