function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const check = document.getElementById("check");
  const text = document.getElementById("text");
  if(check.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "#fff";
  }
}
