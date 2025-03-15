document.addEventListener('DOMContentLoaded', () => {
    const leafButton = document.getElementById('leafButton');
    let isLeafFalling = false;

    leafButton.addEventListener('click', () => {
        if (!isLeafFalling) {
            leafButton.classList.add('leaf-fall');
            leafButton.textContent = 'Stop Leaf Fall';
            isLeafFalling = true;
        } else {
            leafButton.classList.remove('leaf-fall');
            leafButton.textContent = 'Leaf Fall Effect';
            isLeafFalling = false;
        }
    });
});