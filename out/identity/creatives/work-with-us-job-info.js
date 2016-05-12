import Model from 'app/api/NotTerribleModel';

export default class WorkWithUsJobInfo extends Model {
  static schema = {
    /**
     * @property jobId
     * Id of the job
     */
    jobId: Model.STRING,

    /**
     * @property jobTitle
     * Title of the job.
     */
    jobTitle: Model.STRING,

    /**
     * @property postedDate
     * When this job was posted.
     */
    postedDate: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property descriptionSnippet
     * Very short description snippet for the job. NOT the standard description field in the JobInfo object.
     */
    descriptionSnippet: Model.STRING,

    /**
     * @property thirdPartyTrackingPixel
     * Optional third party tracking pixels.
     */
    thirdPartyTrackingPixel: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property isApplied
     * Whether or not the viewer has already applied to this job.
     */
    isApplied: Model.BOOL,

    /**
     * @property isSaved
     * Whether or not the viewer has saved this job.
     */
    isSaved: Model.BOOL,

    /**
     * @property displayLocation
     * String representing the location of the job (e.g. Mountain View, CA).  This is an input offered to the job poster so we have to honor it.  That is why we do not standardize location.
     */
    displayLocation: Model.STRING,

    /**
     * @property listedDate
     * When this job was listed.
     */
    listedDate: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property isSponsored
     * Whether or not this job is sponsored.
     */
    isSponsored: Model.BOOL,

    /**
     * @property simplyHiredUrl
     * If this is a Simply Hired job (i.e. scraped from simplyhired.com), this is the url for it.
     */
    simplyHiredUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property jobLocale
     * This is the locale of the job.  Used for translation.
     */
    jobLocale: Model.foreignUrn('com.linkedin.common.Locale'),

    /**
     * @property thirdPartyJobCode
     * Third party job code.
     */
    thirdPartyJobCode: Model.STRING,

    /**
     * @property sourceDomain
     * Source for the job (i.e. simplyhired.com, ubiquity.com, etc)
     */
    sourceDomain: Model.STRING,

    /**
     * @property jobApplyUrl
     * Url to apply for the job.
     */
    jobApplyUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property employeeJobApplyUrl
     * Url to apply for the job if you are an employee of the company.
     */
    employeeJobApplyUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/creatives/work-with-us-job-info"
  }
}
