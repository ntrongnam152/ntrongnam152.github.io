const balloon = document.querySelector('#Balloon');
const device = document.querySelector('#coolingDevice');
const status = document.querySelector('#status');
const pipe = document.querySelector('#pipe');
const heliTank = document.querySelector('#heliTank');

// Sự kiện khi bắt đầu kéo bóng bay
balloon.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null);
    balloon.classList.add('dragging');
});

// Sự kiện khi kết thúc kéo bóng bay
balloon.addEventListener('dragend', (e) => {
    balloon.classList.remove('dragging');
    balloon.classList.add('fly-up'); // Bóng bay bay lên khi thả

    // Xóa lớp "fly-up" sau 3 giây (hiệu ứng kết thúc)
    setTimeout(() => {
        balloon.classList.remove('fly-up');
    }, 3000);
});

// Hàm bắt đầu làm mát thiết bị
function startCooling() {
    device.style.backgroundColor = '#32cd32'; // Thay đổi màu thiết bị
    pipe.style.backgroundColor = '#32cd32'; // Thay đổi màu ống dẫn khí
    status.textContent = 'Thiết bị đang được làm mát!'; // Cập nhật trạng thái
}

// Hàm kiểm tra khoảng cách giữa bóng bay và thiết bị
function checkBalloonProximity(balloon, device) {
    const balloonRect = balloon.getBoundingClientRect();
    const deviceRect = device.getBoundingClientRect();

    // Tính toán khoảng cách giữa bóng bay và thiết bị
    const distanceX = Math.abs(balloonRect.left - deviceRect.left);
    const distanceY = Math.abs(balloonRect.top - deviceRect.top);

    // Xác định khoảng cách gần (50px theo cả hai chiều)
    return distanceX <= 50 && distanceY <= 50;
}