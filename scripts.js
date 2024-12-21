let currentTemp = 30; // Nhiệt độ ban đầu
let isCooling = false; // Trạng thái làm mát
let isLaunching = false; // Trạng thái tên lửa đang bay

function toggleCooling() {
  const launchButton = document.getElementById('launchButton');
  const rocket = document.getElementById('rocket');
  const satellite = document.getElementById('satellite');
  const status = document.getElementById('status');
  const pipe = document.querySelector('#pipe');
  const heliTank = document.querySelector('#heliTank');
  const balloon = document.querySelector('#balloon');
  const temperatureElement = document.getElementById('temperature');
}
 // Hàm tăng nhiệt độ khi tên lửa bay
 function increaseTemperature() {
  const interval = setInterval(() => {
    if (!isLaunching || isCooling) {
      clearInterval(interval); // Dừng tăng nhiệt độ khi làm mát hoặc dừng phóng
      return;
    }
    currentTemp += 2; // Tăng 2°C mỗi giây
    temperatureElement.textContent = `${currentTemp}°C`;

    if (currentTemp >= 100) {
      status.textContent = 'Cảnh báo: Nhiệt độ quá cao!';
      clearInterval(interval);
    }
  }, 1000);
}
// Hàm phóng tên lửa
function launchRocket() {
  const rocket = document.getElementById('rocket');
  const satellite = document.getElementById('satellite');
  const status = document.getElementById('status');

  // Hiển thị vệ tinh và tên lửa bay lên
  if (isLaunching) return; // Nếu tên lửa đã bay thì không làm gì
  isLaunching = true;
  rocket.classList.add('fly-up');
  satellite.style.opacity = 1; // Hiển thị vệ tinh
  status.textContent = 'Trạng thái: Tên lửa đang bay...';
  increaseTemperature(); // Bắt đầu tăng nhiệt độ

  // Cập nhật trạng thái
  status.textContent = 'Trạng thái: Tên lửa đang bay và làm mát thiết bị...';

  // Dừng trạng thái bay sau 6 giây
  setTimeout(() => {
    status.textContent = 'Trạng thái: Tên lửa đã bay.';
    isLaunching = false;
  }, 6000);
}
// Hàm giảm nhiệt độ khi làm mát
function decreaseTemperature() {
  const interval = setInterval(() => {
    if (!isCooling || currentTemp <= 30) {
      clearInterval(interval); // Dừng làm mát khi đạt nhiệt độ an toàn
      return;
    }
    currentTemp -= 3; // Giảm 3°C mỗi giây
    temperatureElement.textContent = `${currentTemp}°C`;
  }, 1000);

  // Hiển thị thông báo làm mát
  const coolingMessage = document.createElement('p');
  coolingMessage.textContent = 'Thiết bị đang được làm mát...';
  coolingSystem.appendChild(coolingMessage);
}

// Sự kiện khi bắt đầu kéo bóng bay
const balloon = document.getElementById('balloon');

if (balloon) {
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
}

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
// Gắn sự kiện cho các nút
launchButton.addEventListener('click', launchRocket);
coolingButton.addEventListener('click', coolingDevice);