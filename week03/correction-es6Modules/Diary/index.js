import * as entries from './diaryFns.js';

const form = document.querySelector('form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const whatsNext = document.querySelector('#whatsNext');
const diaryEntries = document.querySelector('#allDiaryEntries');

entries.loadEntries(diaryEntries);

form.addEventListener('submit', (e) =>
  entries.addEntry(e, diaryEntries, { title, description, whatsNext })
);
