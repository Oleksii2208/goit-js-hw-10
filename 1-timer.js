import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-A92OCY9B.js";const e={startBtn:document.querySelector("[data-start]"),inputPicker:document.querySelector("#datetime-picker"),elemDays:document.querySelector("[data-days]"),elemHours:document.querySelector("[data-hours]"),elemMinutes:document.querySelector("[data-minutes]"),elemSeconds:document.querySelector("[data-seconds]")};let u=null,i=null;e.startBtn.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<new Date)return h.error({position:"topRight",message:"Please choose a date in the future"});i=t[0],e.startBtn.removeAttribute("disabled"),console.log(t[0])}};f(e.inputPicker,y);function p(){u=setInterval(b,1e3),e.startBtn.setAttribute("disabled",!0),e.inputPicker.setAttribute("disabled",!0)}e.startBtn.addEventListener("click",p);function b(){const t=i-new Date,{days:o,hours:r,minutes:s,seconds:a}=S(t);e.elemDays.textContent=n(o),e.elemHours.textContent=n(r),e.elemMinutes.textContent=n(s),e.elemSeconds.textContent=n(a),t<1e3&&(clearInterval(u),e.inputPicker.removeAttribute("disabled"))}function n(t){return String(t).padStart(2,0)}function S(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:l,seconds:m}}
//# sourceMappingURL=1-timer.js.map
