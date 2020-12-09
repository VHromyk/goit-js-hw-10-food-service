
const refs = {
  body: document.querySelector('body'),
  switchBtn: document.querySelector('#theme-switch-toggle'),
}

let theme = localStorage.getItem('theme');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



refs.switchBtn.addEventListener('change', onChange);

if (theme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  refs.switchBtn.setAttribute('checked', true);
} else {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
   refs.switchBtn.removeAttribute('checked');

}




function onChange() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);

  if (localStorage.getItem('theme') === Theme.DARK) {
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.DARK);
  }

}
