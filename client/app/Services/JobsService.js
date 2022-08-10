import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Job } from "../Models/Job.js";

class JobsService{
    async editJob(jobData){
        let res = await api.put(`/api/jobs/${jobData.id}`, jobData)
        let job = new Job(res.data)
        let jobIndex = ProxyState.jobs.findIndex(j => j.id == jobData.id)
        ProxyState.jobs.splice(jobIndex, 1, job)
        ProxyState.jobs = ProxyState.jobs
    }

    async getJobs(){
        let res = await api.get(`/api/jobs`)
        ProxyState.jobs = res.data.map(j => new Job(j))
    }

    async createJob(jobFormData){
        let res = await api.post(`/api/jobs`, jobFormData)
        let job = new Job(res.data)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }

    async deleteJob(jobId){
        let url = `/api/jobs/${jobId}`
        await api.delete(url)
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    }
}


export const jobsService = new JobsService()