const words = {
  A: { word: "Alejandra Iko Chuv", link: "https://www.livegore.com/203129/face-cut-in-half-still-alive" },
  B: { word: "Best Gore Fun", link: "https://www.bsetgore.fun" },
  C: { word: "Cat", link: "https://example.com/cat" },
  D: { word: "Daily Best", link: "https://ilbe.com" },
  D1: { word: "DuckDuckGo", link: "https://www.duckduckgo.com" },
  E: { word: "Elephant", link: "https://example.com/elephant" },
  F: { word: "FaceBook", link: "https://www.facebook.com" },
  G: { word: "Gleb Korablyov", link: "https://archive.org/details/0508_20240514" },
  G1: { word: "Google", link: "https://www.google.com" },
  H: { word: "Horse", link: "https://example.com/horse" },
  I: { word: "Instagram", link: "https://www.instagram.com" },
  J: { word: "Jaguar", link: "https://example.com/jaguar" },
  K: { word: "Kangaroo", link: "https://example.com/kangaroo" },
  L: { word: "Living Mexico", link: "https://elblogdelnarco.com/2018/07/26/video-horripilante-donde-sicarios-del-mayo-zambada-le-sacaron-el-corazon-a-un-sujeto-y-a-otro-lo-dec/" },
  L1: { word: "LiveGore", link: "https://www.livegore.com" },
  M: { word: "Monkey", link: "https://example.com/monkey" },
  N: { word: "Naver", link: "https://www.naver.com" },
  O: { word: "Octopus", link: "https://example.com/octopus" },
  P: { word: "Penguin", link: "https://example.com/penguin" },
  Q: { word: "Quokka", link: "https://example.com/quokka" },
  R: { word: "Rabbit", link: "https://example.com/rabbit" },
  S: { word: "sponsored by adidas", link: "https://www.vidlii.com/watch?v=yLDszwQxqvr" },
  T: { word: "Twitter", link: "https://www.twitter.com" },
  U: { word: "Ukraine 21", link: "https://watchpeopledie.tv/h/beating/post/24683/3-guys-1-hammer-theync-and" },
  V: { word: "Vulture", link: "https://example.com/vulture" },
  W: { word: "Whale", link: "https://example.com/whale" },
  X: { word: "Xerus", link: "https://example.com/xerus" },
  Y: { word: "Youtube", link: "https://www.youtube.com" },
  Y1: { word: "Yadong Korea", link: "https://www.yako.red" },
  Z: { word: "Zebra", link: "https://example.com/zebra" }
};

function searchByLetter(letter) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';  // 검색 결과 초기화
  const result = words[letter];
  if (result) {
    const { word, link } = result;
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
