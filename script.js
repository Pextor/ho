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
/* styles.css */
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

.search-bar {
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  width: 300px;
  font-size: 16px;
}

#search-results {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

