export class UserInfo {
    constructor(name, job) {
        this.name = name
        this.job = job
    }

    setUserInfo(a, b) {
        this.name.textContent = a
        this.job.textContent = b
    }

    /*     getUserInfo(a, b) {
            a.value = this.name.textContent
            b.value = this.job.textContent
        } */

    getUserInfo() {
        return {
            a: this.name.textContent,
            b: this.job.textContent
        }

        

    }


}