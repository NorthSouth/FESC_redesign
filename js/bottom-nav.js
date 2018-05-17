bottomNav = document.querySelector('.bottom-nav');
richArea = document.querySelector('.rich-area');
slideTrigger = document.querySelector('.slide-trigger');
bottomNavHeader = document.querySelector('.bottom-nav-header');

slideTrigger.addEventListener('click', slideUp);

function slideUp() {
  slideTrigger.classList.toggle('active');

  if (slideTrigger.classList.contains('active')) {
    /*bottomNav.style.height = '100%';*/
    bottomNav.style.height = '20%';
    richArea.style.opacity = '1'; 
    slideTrigger.children[0].style.transformOrigin = '50% 50%';
    slideTrigger.children[0].style.transform = 'rotate(180deg)';
    bottomNavHeader.style.color='rgba(255,255,255,1)';
    bottomNav.addEventListener('transitionend', () => {
      richArea.style.opacity = '1'
    })
  } else {
    bottomNav.style.height = '48px';
    slideTrigger.children[0].style.transform = 'rotate(0deg)';
    bottomNavHeader.style.color='rgba(255,255,255,.5)';
    bottomNav.addEventListener('transitionend', () => {
      richArea.style.opacity = '0'
    });
  }
}