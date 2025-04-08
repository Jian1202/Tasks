window.addEventListener('load', function () {
    // 当页面加载完成后执行的函数
    const backToTopButton = document.getElementById('backToTopButton');
    window.addEventListener('scroll', function () {
        // 监听滚动事件，控制返回顶部按钮的显示与隐藏
        if (document.body.scrollTop >= 0 || document.documentElement.scrollTop > 0) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', function () {
        // 点击返回顶部按钮时，平滑滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/*问题回答*/
// 页面加载后执行
document.addEventListener("DOMContentLoaded", () => {
    // 获取所有问题和回答元素
    const questions = document.querySelectorAll(".qa_a");
    const answers = document.querySelectorAll(".answer");

    // 初始隐藏所有回答
    answers.forEach((answer) => {
        answer.style.display = "none"; // 默认隐藏
    });

    // 为每个问题绑定点击事件
    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            // 当前问题的回答
            const answer = answers[index];
            // 切换当前回答的显示状态
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById("email-button");
    const emailPopup = document.getElementById("email-popup");
    const closePopupButton = document.getElementById("close-popup");

    // 显示弹窗
    emailButton.addEventListener("click", (event) => {
        event.preventDefault(); // 阻止默认跳转行为
        emailPopup.classList.remove("hidden"); // 显示弹窗
        navigator.clipboard.writeText("newthread_geek@outlook.com").then(() => {
            console.log("邮箱地址已复制到剪贴板");
        });
    });

    // 关闭弹窗
    closePopupButton.addEventListener("click", () => {
        emailPopup.classList.add("hidden"); // 隐藏弹窗
    });
});