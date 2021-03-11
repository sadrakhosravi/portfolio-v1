'use strict';

const stackTraceBtn = document.querySelector('#btn-stack-trace');
const stackTrace = document.querySelector('p.error');

stackTraceBtn.addEventListener('click', e => {
  if (e.target.textContent === 'Show Stack Trace') {
    stackTrace.style.display = 'inherit';
    e.target.textContent = 'Hide Stack Trace';
  } else {
    stackTrace.style.display = 'none';
    e.target.textContent = 'Show Stack Trace';
  }
});
