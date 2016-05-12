import Model from 'app/api/NotTerribleModel';

export default class BizRelationship extends Model {
  static schema = {
    /**
     * @property active
     * Whether this relationship is still active
     */
    active: Model.BOOL,

    /**
     * @property includeRelatedJobs
     * include jobs from affliated company in careers page
     */
    includeRelatedJobs: Model.BOOL,

    /**
     * @property includeRelatedEmployees
     * include employees from affliated company in count and in employee list display
     */
    includeRelatedEmployees: Model.BOOL,

    /**
     * @property relatedCompany
     * urn of related company
     */
    relatedCompany: Model.STRING,

    /**
     * @property dateRange
     * time period for relationship
     */
    dateRange: Model.foreignUrn('com.linkedin.common.DateRange'),

    /**
     * @property type
     * type of relationship
     */
    type: Model.STRING,

    modelType: "identity/creatives/company/biz-relationship"
  }
}
