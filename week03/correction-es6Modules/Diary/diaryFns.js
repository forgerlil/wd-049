import diaryEntries from './data.js';

const createEntry = (date, title, description, whatsNext) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('diaryEntry');

  const entryDate = document.createElement('p');
  entryDate.textContent = date;

  const h3 = document.createElement('h3');
  h3.textContent = title;

  const p = document.createElement('p');
  p.textContent = description;

  const i = document.createElement('i');
  i.textContent = whatsNext;

  wrapper.appendChild(entryDate);
  wrapper.appendChild(h3);
  wrapper.appendChild(p);
  wrapper.appendChild(i);
  return wrapper;
};

export const loadEntries = (node) => {
  diaryEntries.forEach((entry) => {
    const newEntry = createEntry(
      entry.date,
      entry.title,
      entry.description,
      entry.whatsNext
    );
    node.insertBefore(newEntry, node.children[0]);
  });
};

export const addEntry = (event, node, content) => {
  event.preventDefault();

  const createDate = new Date(Date.now()).toLocaleDateString('en-GB');

  const newEntry = createEntry(
    createDate,
    content.title.value,
    content.description.value,
    content.whatsNext.value
  );

  node.insertBefore(newEntry, node.children[0]);

  content.title.value = '';
  content.description.value = '';
  content.whatsNext.value = '';
};
