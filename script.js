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
  L: { word: "Living Mexico", link: "https://elblogdelnarco.com/2018/07/26/video-horripilante-donde-sicarios-del-mayo-zambada-le-sacaron-el-corazon-a-un-sujeto-y-a-otro-lo-dec/" },
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
  X: { word: "Xerus", link: "https://example.com/xerus" },
  Y: { word: "Yak", link: "https://example.com/yak" },
  Z: { word: "Zebra", link: "https://example.com/zebra" }
};

function searchByLetter(letter) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';  // 검색 결과 초기화
  const { word, link } = words[letter];
  if (word) {
    searchResults.innerHTML = `<a href="${link}" target="_blank">${word}</a>`;
  } else {
    searchResults.textContent = '검색 결과가 없습니다.';
  }
}

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
