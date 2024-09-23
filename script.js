/* script.js */
function showWord(letter) {
  const wordDisplay = document.getElementById('word-display');

  const words = {
    A: { word: "Apple", link: "https://example.com/apple" },
    B: { word: "Banana", link: "https://example.com/banana" },
    C: { word: "Cat", link: "https://example.com/cat" }
    // 계속해서 원하는 단어 추가
  };

  if (words[letter]) {
    const { word, link } = words[letter];
    wordDisplay.innerHTML = `<a href="${link}" target="_blank">${word}</a>`;
  } else {
    wordDisplay.textContent = '해당 글자로 시작하는 단어가 없습니다.';
  }
}
/* script.js */
const words = {
  A: { word: "Apple", link: "https://example.com/apple" },
  B: { word: "Banana", link: "https://example.com/banana" },
  C: { word: "Cat", link: "https://example.com/cat" },
  D: { word: "Dog", link: "https://example.com/dog" },
  // 원하는 단어들을 추가
};

function searchWord() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';  // 검색 결과 초기화

  Object.keys(words).forEach(letter => {
    const { word, link } = words[letter];
    if (word.toUpperCase().startsWith(input)) {
      searchResults.innerHTML += `<a href="${link}" target="_blank">${word}</a><br/>`;
    }
  });

  if (searchResults.innerHTML === '') {
    searchResults.textContent = '검색 결과가 없습니다.';
  }
}


