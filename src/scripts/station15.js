function displayList() {
  const f = document.getElementById('fruits');
  const p = document.querySelectorAll('p');

  for (let i = 0; i < p.length * 2; i++) { // <p>とその前にあるスペースが子要素になるため*2とする
    if (f.firstChild) {
      f.removeChild(f.firstChild);
    }
  }

  const newUl = document.createElement('ul');
  f.appendChild(newUl);
  
  p.forEach(p_element => {
    const li = document.createElement('li');
    li.textContent = p_element.textContent;
    document.querySelector('ul').appendChild(li);
  });
}
