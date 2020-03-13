function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sucesso 1')
        }, 2000)
    })
}

function job2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sucesso 2')
        }, 1000)
    })
}

const promise = job1()

promise
    .then(resposta => {
        return job2()
    })

    .then(respotaJob2 => {
        console.log('primeiro console', respotaJob2)
    })

    .catch(error => console.log('deu erro', error))