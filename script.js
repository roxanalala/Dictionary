'stict mode';
const inputBtn = document.querySelector('.inputBtn');
const searchBtn = document.querySelector('.searchBtn');
const words = [];

inputBtn.addEventListener('click', function () {
  let word = document.querySelector('#name').value;
  words.push(word);
  document.getElementById('name').reset();
});

searchBtn.addEventListener('click', function () {
  let word = document.querySelector('#nameW').value;
  if (words.includes(word)) {
    alert('this word is in dictionary');
  } else {
    alert("this word doesn 't exist in dictionary ");
  }
  word = '';
});
