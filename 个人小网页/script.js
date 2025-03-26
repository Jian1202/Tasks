// 当文档加载完成后执行以下代码
document.addEventListener('DOMContentLoaded', () => {
    // 初始化粒子背景
    particlesJS('particles-js', {
        particles: {
            // 设置粒子数量为80
            number: { value: 80 },
            // 设置粒子颜色为霓虹蓝色
            color: { value: '#00f3ff' },
            // 设置粒子形状为圆形
            shape: { type: 'circle' },
            // 设置粒子透明度为0.5
            opacity: { value: 0.5 },
            // 设置粒子大小为3
            size: { value: 3 },
            move: {
                // 启用粒子移动
                enable: true,
                // 设置粒子移动速度为2
                speed: 2,
                // 设置粒子移动方向为无
                direction: 'none',
                // 不随机移动
                random: false,
                // 不直线移动
                straight: false,
                // 粒子移出边界时的处理方式为移出
                out_mode: 'out',
                // 不反弹
                bounce: false,
            }
        }
    });

    // 创建代码雨效果
    function createCodeRain() {
        // 定义代码雨的字符集
        const chars = '01';
        // 获取代码雨容器元素
        const container = document.getElementById('codeRain');
        
        // 每隔100毫秒执行一次以下代码
        setInterval(() => {
            // 创建一个span元素
            const span = document.createElement('span');
            // 设置span元素的左侧位置为随机值
            span.style.left = Math.random() * 100 + '%';
            // 设置span元素的文本内容为随机字符
            span.textContent = chars[Math.floor(Math.random()*chars.length)];
            // 将span元素添加到代码雨容器中
            container.appendChild(span);
            
            // 2000毫秒后移除span元素
            setTimeout(() => span.remove(), 2000);
        }, 100);
    }

    // 3D卡片交互
    // 遍历所有时间轴项目元素
    document.querySelectorAll('.timeline-item').forEach(item => {
        // 为每个时间轴项目元素添加鼠标移动事件监听器
        item.addEventListener('mousemove', (e) => {
            // 获取鼠标相对于时间轴项目元素的x坐标
            const x = e.pageX - item.offsetLeft;
            // 获取鼠标相对于时间轴项目元素的y坐标
            const y = e.pageY - item.offsetTop;
            // 根据鼠标位置设置时间轴项目元素的3D旋转效果
            item.style.transform = `perspective(1000px) rotateX(${y/10}deg) rotateY(${-x/10}deg)`;
        });
        
        // 为每个时间轴项目元素添加鼠标离开事件监听器
        item.addEventListener('mouseleave', () => {
            // 移除时间轴项目元素的3D旋转效果
            item.style.transform = 'none';
        });
    });

    // 启动代码雨
    createCodeRain();

    // 控制台欢迎信息
    console.log('%c🚀 欢迎访问CodeRookie终端！', 
        'font-size: 18px; color: #00f3ff; text-shadow: 0 0 10px #00f3ff;');
    console.log('%c🔧 在控制台尝试输入：help() 获取可用命令', 
        'color: #0aff0a;');
});