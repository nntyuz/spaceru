import './main.scss';

const langContainer = document.querySelector('.lang-container')

const toggleLang = ($evt) => {
  if(!$evt.target.closest('.lang-button')) {
    return
  }
  const langButtons = Array.from(langContainer.querySelectorAll('button'))
  
  langButtons.forEach(e => e.classList.remove('active'))
  $evt.target.classList.add('active')
}

langContainer.addEventListener('click', toggleLang)
