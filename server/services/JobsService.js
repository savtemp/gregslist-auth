import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";

class JobsService{
    async getJobs(){
        const jobs = await dbContext.Jobs.find()
        return jobs
    }

    async getJobById(jobId){
        let job = await dbContext.Jobs.findById(jobId)
        if(!job) {
            throw new BadRequest('Invalid Job Id')
        }
        return job
    }

    async createJob(jobData){
        let job = await dbContext.Jobs.create(jobData)
        return job
    }

    async editJob(jobId, jobData){
        let job = await this.getJobById(jobId)

        job.title = jobData.title || job.title
        job.pay = jobData.pay || job.pay
        job.description = jobData.description || job.description
        job.img = jobData.img || job.img

        await job.save()
        return job
    }

    async deleteJob(jobId){
        let job = await this.getJobById(jobId)

        await job.remove()
        return job
    }
}



export const jobsService = new JobsService()