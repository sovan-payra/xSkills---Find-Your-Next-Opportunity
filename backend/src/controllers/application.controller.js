const applicationModel = require("../models/application.model");
const jobModel = require("../models/job.model");


// Apply for a job
const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false,
            });
        }

        // Check if user already applied
        const existingApplication = await applicationModel.findOne({
            job: jobId,
            applicant: userId,
        });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job.",
                success: false,
            });
        }

        // Check if job exists
        const job = await jobModel.findById(jobId);

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false,
            });
        }

        // Create application
        const newApplication = await applicationModel.create({
            job: jobId,
            applicant: userId,
        });

        // Add application to job
        job.applications.push(newApplication._id);

        await job.save();

        return res.status(201).json({
            message: "Job applied successfully.",
            success: true,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


// Get jobs applied by logged-in user
const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        const applications = await applicationModel
            .find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: "job",
                populate: {
                    path: "company",
                },
            });

        if (applications.length === 0) {
            return res.status(404).json({
                message: "No applications found.",
                success: false,
            });
        }

        return res.status(200).json({
            applications,
            success: true,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


// Admin: get applicants for a job
const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await jobModel
            .findOne({
                _id: jobId,
                created_by: req.id,
            })
            .populate({
                path: "applications",
                options: {
                    sort: {
                        createdAt: -1,
                    },
                },
                populate: {
                    path: "applicant",
                    select: "-password",
                },
            });

        if (!job) {
            return res.status(404).json({
                message: "Job not found or you are not authorized.",
                success: false,
            });
        }

        return res.status(200).json({
            applications: job.applications,
            success: true,
        });

    } catch (error) {
        console.log("Get applicants error:", error);

        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


// Update application status
const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!["accepted", "rejected"].includes(status?.toLowerCase())) {
            return res.status(400).json({
                message: "Invalid status.",
                success: false,
            });
        }

        const application = await applicationModel.findById(
            applicationId
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found.",
                success: false,
            });
        }

        application.status = status.toLowerCase();

        await application.save();

        return res.status(200).json({
            message: `Application ${status.toLowerCase()} successfully.`,
            success: true,
        });
    } catch (error) {
        console.log("Update status error:", error);

        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


module.exports = {
    applyJob,
    getAppliedJobs,
    getApplicants,
    updateStatus,
};