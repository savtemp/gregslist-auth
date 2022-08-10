import { Job } from "../Models/Job.js";

export function getJobForm(job = new Job({})) {
    let submitAction = `app.jobsController.createJob()`

    if(job.id){
        submitAction = `app.jobsController.editJob('${job.id}')`
    }

    return `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
        <h3 class="text-primary">List Your Job</h3>
            <div class="row">
                <div class="col-4">
                    <label class="form-label" for="title">Title</label>
                    <input class="form-control" type="text" id="title" name="title" value="${job.title}">
                </div>
                <div class="col-4">
                    <label class="form-label" for="pay">Pay</label>
                    <input class="form-control" type="text" id="pay" name="pay" value="${job.pay}">
                </div>
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img" value="${job.img}">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${job.description}"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </form>
    `
}