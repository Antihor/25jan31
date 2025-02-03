import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImage } from './js/api';
import { getCard } from './js/render';

let page = 1;
let userQuery = '';

const formRef = document.querySelector('.js-form');
const galRef = document.querySelector('.js-gallery');
const moreRef = document.querySelector('.js-more');

formRef.addEventListener('submit', onSubmit);

async function onSubmit(ev) {
  ev.preventDefault();
  userQuery = ev.target.elements.query.value.trim();

  if (!userQuery) {
    iziToast.warning({
      message: 'No query!',
      position: 'center',
    });
    return;
  }

  try {
    page = 1;
    moreRef.classList.add('hidden');
    const { data } = await getImage(userQuery, page);
    if (data.total === 0) {
      iziToast.error({
        title: 'Error!',
        message: 'No images found for your query',
        position: 'center',
      });
      galRef.innerHTML = '';
      formRef.reset();
      return;
    }

    if (data.total_pages > 1) {
      moreRef.classList.remove('hidden');
      moreRef.addEventListener('click', onMore);
    }
    const markup = data.results.map(img => getCard(img)).join('');
    galRef.innerHTML = markup;

    if (page === data.total_pages) {
      moreRef.classList.add('hidden');
      moreRef.removeEventListener('click', onMore);
    }
  } catch (err) {
    console.log(err);
  }
}

async function onMore() {
  try {
    page += 1;
    const { data } = await getImage(userQuery, page);
    const markup = data.results.map(img => getCard(img)).join('');
    galRef.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
}
