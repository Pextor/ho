/* script.js */
function showWord(letter) {
  const wordDisplay = document.getElementById('word-display');

  const words = {
  A: { word: "Apple", link: "https://example.com/apple" },
  B: { word: "Banana", link: "https://example.com/banana" },
  C: { word: "Cat", link: "https://example.com/cat" },
  D: { word: "Dog", link: "https://example.com/dog" },
  E: { word: "Elephant", link: "https://example.com/elephant" },
  F: { word: "Fish", link: "https://example.com/fish" },
  G: { word: "Giraffe", link: "https://example.com/giraffe" },
  H: { word: "Horse", link: "https://example.com/horse" },
  I: { word: "Ice Cream", link: "https://example.com/icecream" },
  J: { word: "Jaguar", link: "https://example.com/jaguar" },
  K: { word: "Kangaroo", link: "https://example.com/kangaroo" },
  L: { word: "Lion", link: "https://example.com/lion" },
  M: { word: "Monkey", link: "https://example.com/monkey" },
  N: { word: "Narwhal", link: "https://example.com/narwhal" },
  O: { word: "Octopus", link: "https://example.com/octopus" },
  P: { word: "Penguin", link: "https://example.com/penguin" },
  Q: { word: "Quokka", link: "https://example.com/quokka" },
  R: { word: "Rabbit", link: "https://example.com/rabbit" },
  S: { word: "Shark", link: "https://example.com/shark" },
  T: { word: "Tiger", link: "https://example.com/tiger" },
  U: { word: "Unicorn", link: "https://example.com/unicorn" },
  V: { word: "Vulture", link: "https://example.com/vulture" },
  W: { word: "Whale", link: "https://example.com/whale" },
  X: { word: "Xerus", link: "https://example.com/xerus" }, // 이런 식으로
  Y: { word: "Yak", link: "https://example.com/yak" },
  Z: { word: "Zebra", link: "https://example.com/zebra" }
};
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


