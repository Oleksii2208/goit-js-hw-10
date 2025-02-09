import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  inputPicker: document.querySelector('#datetime-picker'),
  elemDays: document.querySelector('[data-days]'),
  elemHours: document.querySelector('[data-hours]'),
  elemMinutes: document.querySelector('[data-minutes]'),
  elemSeconds: document.querySelector('[data-seconds]'),
};

let timerId = null;
let selectedDate = null;

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return iziToast.error({
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
    } else {
      selectedDate = selectedDates[0];
      refs.startBtn.removeAttribute('disabled');
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.inputPicker, options);

function createTimer() {
  timerId = setInterval(updateTimer, 1000);
  refs.startBtn.setAttribute('disabled', true);
  refs.inputPicker.setAttribute('disabled', true);
}
refs.startBtn.addEventListener('click', createTimer);

function updateTimer() {
  const time = selectedDate - new Date();
  const { days, hours, minutes, seconds } = convertMs(time);
  refs.elemDays.textContent = addLeadingZero(days);
  refs.elemHours.textContent = addLeadingZero(hours);
  refs.elemMinutes.textContent = addLeadingZero(minutes);
  refs.elemSeconds.textContent = addLeadingZero(seconds);
  if (time < 1000) {
    clearInterval(timerId);
    refs.inputPicker.removeAttribute('disabled');
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
