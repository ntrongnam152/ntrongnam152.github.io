let isCooling = false; //Trạng thái ban đầu: Thiết bị chưa được làm mát

function toggleCooling() {
    const launchButton = document.getElementById('launchButton');
    const rocket = document.getElementById('rocket');
    const satellite = document.getElementById('satellite');
    const status = document.getElementById('status');
 const pipe = document.querySelector('#pipe');
 const heliTank = document.querySelector('#heliTank');
 const balloon = document.getElementById('#balloon');
}

 // Hàm phóng tên lửa
function launchRocket() {
    // Hiển thị vệ tinh và tên lửa bay lên
    rocket.classList.add('fly-up');
    satellite.style.opacity = 1;  // Hiển thị vệ tinh
  
    // Cập nhật trạng thái
    status.textContent = 'Trạng thái: Tên lửa đang bay và làm mát thiết bị...';
  
    // Kích hoạt hiệu ứng làm mát
    coolingDevice();
  
    // Đặt lại sau khi tên lửa bay xong (3 giây)
    setTimeout(() => {
      status.textContent = 'Trạng thái: Tên lửa đã bay.';
    }, 3000);
  }
  
  // Hàm làm mát thiết bị
  function coolingDevice() {
    // Thêm hiệu ứng làm mát (CSS)
    const coolingMessage = document.createElement('p');
    coolingMessage.textContent = 'Thiết bị đang được làm mát...';
    document.getElementById('coolingSystem').appendChild(coolingMessage);
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