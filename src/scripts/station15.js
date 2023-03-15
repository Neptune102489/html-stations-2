function displayList() {
  const f = document.getElementById('fruits');
  const p = document.querySelectorAll('p');

  while (f.firstChild) {
      f.removeChild(f.firstChild);
    }
    
  const newUl = document.createElement('ul');
  f.appendChild(newUl);
  
  p.forEach(p_element => {
      const li = document.createElement('li');
      li.textContent = p_element.textContent;
      document.querySelector('ul').appendChild(li);
    });
}
