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
    if (!input.trim()) {
      alert('Vui lòng nhập văn bản!');
      return;
    }
  
    // Sử dụng SpeechSynthesis API để chuyển văn bản thành giọng nói
    const utterance = new SpeechSynthesisUtterance(input);
    utterance.pitch = 2; // Tăng độ cao giọng nói để giống giọng helium
    utterance.rate = 1.5; // Tăng tốc độ nói để thêm hiệu ứng helium
    utterance.volume = 1; // Âm lượng tối đa
  
    // Phát giọng nói
    window.speechSynthesis.speak(utterance);
  
    // Hiển thị văn bản chuyển đổi (tuỳ chọn)
    const output = input.split('').join(' ').toUpperCase(); // Hiệu ứng văn bản helium
    document.getElementById('output').textContent = output;
  }
  document.querySelector('.balloon').addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging'); // Thêm class khi kéo
  });
  
  document.querySelector('.balloon').addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging'); // Xóa class khi thả
  
    // Thêm hiệu ứng bay lên sau khi thả
    e.target.classList.add('upward');
  
    // Xóa class 'upward' sau khi hoàn tất hiệu ứng (3 giây)
    setTimeout(() => {
      e.target.classList.remove('upward');
    }, 3000);
  });
  
  document.querySelector('.balloon').addEventListener('dragover', (e) => {
    e.preventDefault(); // Cho phép kéo thả
  });
  
  document.querySelector('.balloon').addEventListener('drop', (e) => {
    e.preventDefault();
  });
  