function job(callback1, callback2) {
    return new Promise(resolve => {
        setTimeout(() => callback1(), 2000);
        setTimeout(() => callback2(), 1000);
        setTimeout(() => callback2(), 2000);
        setTimeout(() => callback2(), 3000);
    });
}

module.exports = job;