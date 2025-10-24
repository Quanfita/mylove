// 恋爱开始日期 - 2024年6月29日
const loveStartDate = new Date('2024-06-29T00:00:00');

// 恋爱宣言文本
const loveDeclaration = `亲爱的马岩：

从我们相遇的那一刻起，我的世界便有了不同的色彩。你的笑容如春风般温暖，你的声音如夏雨般清脆，你的眼神如秋月般明亮，你的爱如冬雪般纯洁。

在这个特别的日子里，我想对你说，你是我生命中最美丽的意外，是我心灵的港湾，是我前行的动力。无论是晴天还是雨天，无论是顺境还是逆境，我都愿意牵着你的手，一起走过。

我爱你的善良，爱你的聪慧，爱你的坚强，也爱你偶尔的任性。我爱你的全部，包括那些你自己都不喜欢的部分。

愿我们的爱情，如同紫色的晚霞，绚烂而持久；如同星空中的繁星，闪耀而永恒。

永远爱你的 屈梦楠`;

// 更新计时器
function updateTimer() {
    const now = new Date();
    const diff = now - loveStartDate;
    
    // 计算天数、小时、分钟和秒数
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 更新DOM元素
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// 打字效果函数
function typeWriter(text, elementId, speed = 50, index = 0) {
    const element = document.getElementById(elementId);
    
    if (index < text.length) {
        // 处理换行符
        if (text.charAt(index) === '\n') {
            element.innerHTML += '<br>';
        } else {
            element.innerHTML += text.charAt(index);
        }
        
        index++;
        setTimeout(() => typeWriter(text, elementId, speed, index), speed);
    }
}

// 添加随机漂浮元素
function addFloatingElements() {
    const container = document.querySelector('.container');
    const elements = ['❤️', '✨', '💜', '💖', '💕'];
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDuration = `${Math.random() * 10 + 5}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.fontSize = `${Math.random() * 1 + 0.5}rem`;
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        
        container.appendChild(element);
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化计时器并每秒更新一次
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // 启动打字效果
    setTimeout(() => {
        typeWriter(loveDeclaration, 'declaration-text');
    }, 1000);
    
    // 添加照片悬停效果
    const photos = document.querySelectorAll('.polaroid');
    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            photo.style.transform = 'rotate(0deg) scale(1.05)';
            photo.style.boxShadow = '0 10px 25px rgba(106, 27, 154, 0.3)';
        });
        
        photo.addEventListener('mouseout', () => {
            photo.style.transform = `rotate(${photo.style.getPropertyValue('--rotate') || '0deg'}) scale(1)`;
            photo.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // 添加额外的漂浮元素
    addFloatingElements();
});

// 添加页面滚动动画效果
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.love-date, .love-declaration, .gallery');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // 当元素进入视口时添加动画
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// 初始化页面元素的动画状态
function initAnimations() {
    const elements = document.querySelectorAll('.love-date, .love-declaration, .gallery');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `all 0.8s ease ${index * 0.2}s`;
    });
    
    // 触发初始动画
    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 500);
}

// 页面加载完成后初始化动画
window.addEventListener('load', initAnimations);