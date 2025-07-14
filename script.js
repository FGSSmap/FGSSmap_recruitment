// 投稿ボタンのクリックイベントでデータ送信
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    author: form.author.value,
    faculty: form.faculty.value,
    title: form.title.value,
    description: form.description.value,
    timestamp: new Date()
  };
  firebase.firestore().collection("memories").add(data);
});
