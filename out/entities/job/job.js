import Model from 'app/api/NotTerribleModel';
import JobUrn from "app/models/common/job-urn";
import MiniJob from "app/models/entities/shared/mini-job";
import BasicCompanyInfo from "app/models/entities/company/basic-company-info";
import MiniCompany from "app/models/entities/shared/mini-company";
import Image from "app/models/common/image";
import InCommonPerson from "app/models/entities/incommon/in-common-person";
import Applicant from "app/models/entities/job/applicant";
import JobSavingInfo from "app/models/entities/shared/job-saving-info";
import JobApplyingInfo from "app/models/entities/shared/job-applying-info";
import JobSections from "app/models/entities/job/job-sections";
import EntityInfo from "app/models/entities/common/entity-info";
import EntitiesFlavor from "app/models/entities/shared/entities-flavor";

export default class Job extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this job.
     */
    entityUrn: JobUrn,

    /**
     * @property miniJob
     * The mini version of this job.
     */
    miniJob: MiniJob,

    /**
     * @property basicCompanyInfo
     * All of the basic information to a company (e.g. name, logo, following).
     */
    basicCompanyInfo: BasicCompanyInfo,

    /**
     * @property numberOfApplicants
     * The number of applicants for this job, including on-site and off-site applications.
     */
    numberOfApplicants: Model.INT,

    /**
     * @property industries
     * The related industries listed as part of this job positing.
     */
    industries: Model.STRING,

    /**
     * @property jobFunctions
     * The duties specific to a job (e.g. Accounting, Marketing, Sales).
     */
    jobFunctions: Model.STRING,

    /**
     * @property description
     * The job description.
     */
    description: Model.STRING,

    /**
     * @property companyName
     * Use this company name when basicCompanyInfo is optional.
     */
    companyName: Model.STRING,

    /**
     * @property miniCompany
     * The mini company containing name and logo information.
     */
    miniCompany: MiniCompany,

    /**
     * @property companyDescription
     * A custom description of the company that posted this job.
     */
    companyDescription: Model.STRING,

    /**
     * @property experienceLevel
     * The required experience level for this job. (e.g. INTERNSHIP, ENTRY_LEVEL etc.)
     */
    experienceLevel: Model.STRING,

    /**
     * @property heroImage
     * This is usually a high resolution image provided by the company posting this job.
     */
    heroImage: Image,

    /**
     * @property employmentStatus
     * The employment type for this job (e.g. full-time, part-time, internship, etc.).
     */
    employmentStatus: Model.STRING,

    /**
     * @property skillsDescription
     * Description of desired skills and experiences.
     */
    skillsDescription: Model.STRING,

    /**
     * @property jobPoster
     * In-common people between the viewer and the poster.
     */
    jobPoster: InCommonPerson,

    /**
     * @property applicant
     * The applicant of this job.
     */
    applicant: Applicant,

    /**
     * @property savingInfo
     * Indicates whether this job is already saved by the viewer.
     */
    savingInfo: JobSavingInfo,

    /**
     * @property applyingInfo
     * Indicates whether this job is already applied by the viewer.
     */
    applyingInfo: JobApplyingInfo,

    /**
     * @property isLinkedInRouting
     * TODO: Remove field. DEPRECATED - Where to send job application. (e.g. linkedin or external website)
     */
    isLinkedInRouting: Model.BOOL,

    /**
     * @property linkedInRouting
     * TODO: Make required. Where to send job application. (e.g. linkedin or external website)
     */
    linkedInRouting: Model.BOOL,

    /**
     * @property companyApplyUrl
     * This is an external URL provided by the company to apply for this job.
     */
    companyApplyUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property companyApplyPostUrl
     * This is an external URL provided by the company to apply for this job using HTTP POST method.
     */
    companyApplyPostUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property sections
     * All the possible sections/tabs on a job page.
     */
    sections: JobSections,

    /**
     * @property entityInfo
     * It has the specific information about this entity.
     */
    entityInfo: EntityInfo,

    /**
     * @property numberOfViewers
     * The number of viewers for this job.
     */
    numberOfViewers: Model.INT,

    /**
     * @property closed
     * Whether or not the job is closed (not accepting applications).
     */
    closed: Model.BOOL,

    /**
     * @property flavors
     * Array of flavors/insights for this job.
     */
    flavors: EntitiesFlavor,

    modelType: "entities/job/job"
  }
}
