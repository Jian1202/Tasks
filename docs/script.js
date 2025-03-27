// 学习计时器示例
class StudyTimer {
    constructor() {
        this.startTime = null;
        this.isRunning = false;
    }
    
    start() {
        this.startTime = Date.now();
        this.isRunning = true;
    }
}