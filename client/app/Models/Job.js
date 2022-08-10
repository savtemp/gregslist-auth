export class Job{
    constructor({id, title, pay, description, imgUrl}){
        this.id = id 
        this.title = title || ''
        this.pay = pay || 7.25
        this.description = description || ''
        this.img = imgUrl || ''
    }

    get JobsTemplate(){
        return `
        <div class="col-4 p-3">
            <div class="bg-white elevation-2">
            <img class="img-fluid" src="${this.img}" alt="">
                <div class="p-2">
                    <h4 class="text-center">${this.title} | ${this.pay} </h4>
                    <p>${this.description}</p>
                    <p class="text-end text-success m-0">$<b>${this.price}</b></p>
                    <button class="btn btn-info" onclick="app.jobsController.adjustJob('${this.id}')">adjust job settings</button> 
                    <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">delete me</button>
                </div>
            </div>
        </div>
        `;
    }
}