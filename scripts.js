let isCooling = false; //Trạng thái ban đầu: Thiết bị chưa được làm mát

function toggleCooling() {
 const device = document.querySelector('#coolingDevice');
 const status = document.querySelector('#status');
 const pipe = document.querySelector('#pipe');
 const heliTank = document.querySelector('#heliTank');
 const balloon = document.getElementById('#balloon');

 if(!isCooling) {
    //Bật làm mát
    device.style.backgroundColor= '#32cd32';
    pipe.style.backgroundColor= '#32cd32';
    status.textContent='Thiết bị đang được làm mát!';
    isCooling= true;
 } else {
    //Tắt làm mát
    device.style.backgroundColor = '#ff6347';
    pipe.style.backgroundColor = '#b0c4de';
    status.textContent = 'Thiết bị đã ngừng làm mát.';
    isCooling = false;
 }
}
// Hàm bắt đầu làm mát thiết bị
function startCooling() {
    device.style.backgroundColor = '#32cd32'; // Thay đổi màu thiết bị
    pipe.style.backgroundColor = '#32cd32'; // Thay đổi màu ống dẫn khí
    status.textContent = 'Thiết bị đang được làm mát!'; // Cập nhật trạng thái
}

// Sự kiện khi bắt đầu kéo bóng bay
balloon.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null);
    balloon.classList.add('dragging');
});

// Hàm xử lý hiệu ứng bay
function handleFlyUp() {
    balloon.classList.add('fly-up');
    // Xóa lớp "fly-up" sau khi hoạt ảnh kết thúc
    balloon.addEventListener(
      'animationend',
      () => {
        balloon.classList.remove('fly-up');
      },
      { once: true } // Đảm bảo chỉ lắng nghe một lần
    );
  }
  
  // Sự kiện click
  balloon.addEventListener('click', handleFlyUp);
  
  // Sự kiện kéo thả
  balloon.addEventListener('dragend', (e) => {
    balloon.classList.remove('dragging');
    handleFlyUp(); // Kích hoạt hiệu ứng bay lên
  });

// Hàm chuyển văn bản thành giọng nói
function convertToHeliumVoice() {
  const input = document.getElementById('textInput').value;

  // Kiểm tra nếu người dùng chưa nhập văn bản
  if (!input.trim()) {
    alert('Vui lòng nhập văn bản!');
    return;
  }

  // Sử dụng SpeechSynthesis API để chuyển văn bản thành giọng nói
  const utterance = new SpeechSynthesisUtterance(input);

  // Thiết lập các đặc tính cho giọng nói (giọng cao như helium)
  utterance.pitch = 2; // Tăng độ cao giọng nói để giống giọng helium
  utterance.rate = 1.5; // Tăng tốc độ nói để thêm hiệu ứng helium
  utterance.volume = 1; // Âm lượng tối đa

  // Phát giọng nói
  window.speechSynthesis.speak(utterance);

  // Hiển thị văn bản chuyển đổi (tuỳ chọn)
  const output = input.split('').join(' ').toUpperCase(); // Hiệu ứng văn bản helium
  document.getElementById('output').textContent = output;
}