function job(data) {
    return new Promise((resolve, reject) => {
        if (data % 2 !== 0) {
            setTimeout(() => resolve('odd'), 1000);
        }
        else {
            setTimeout(() => reject('even'), 2000);
        }
        if (isNaN(data)) { reject('error'); }
    });
}

module.exports = job;