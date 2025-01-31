import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImage } from './js/api';

const formRef = document.querySelector('.js-form');
const galRef = document.querySelector('.js-gallery');

formRef.addEventListener('submit', onSubmit);

function onSubmit(ev) {
  ev.preventDefult();

  const userQuery = ev.target.elements.query.value;

  console.log(userQuery);
}
