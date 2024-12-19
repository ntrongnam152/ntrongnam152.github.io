document.querySelector('.balloon').addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null);
  });
  
  document.querySelector('.balloon').addEventListener('dragend', (e) => {
    e.target.style.position = 'absolute';
    e.target.style.left = '${e.pageX - 25}px';
    e.target.style.top = '${e.pageY - 25}px';
  });
  function convertToHeliumVoice() {
    const input = document.getElementById('textInput').value;
    const output = input.split('').join(' ').toUpperCase(); // Giả lập giọng helium.
    document.getElementById('output').textContent = output;
  }