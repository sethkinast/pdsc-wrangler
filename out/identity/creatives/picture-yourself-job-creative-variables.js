import Model from 'app/api/NotTerribleModel';
import AdFormat from "app/models/identity/creatives/ad-format";

export default class PictureYourselfJobCreativeVariables extends Model {
  static schema = {
    /**
     * @property format
     * Display format (size and style)
     */
    format: AdFormat,

    /**
     * @property companyName
     * Company name to use in ad.  This may be different than the company name on the company page.
     */
    companyName: Model.STRING,

    /**
     * @property companyLogo
     * Company logo.  This may be different than the company logo on the company page.
     */
    companyLogo: Model.STRING,

    /**
     * @property companyId
     * Id of the advertising company.
     */
    companyId: Model.foreignUrn('com.linkedin.common.CompanyUrn'),

    modelType: "identity/creatives/picture-yourself-job-creative-variables"
  }
}
