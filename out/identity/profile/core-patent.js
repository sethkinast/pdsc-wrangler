import Model from 'app/api/NotTerribleModel';
import PatentUrn from "app/models/common/patent-urn";

export default class CorePatent extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this patent
     */
    entityUrn: PatentUrn,

    /**
     * @property number
     * Number associated to the patent.
     */
    number: Model.STRING,

    /**
     * @property applicationNumber
     * Application number for this patent.
     */
    applicationNumber: Model.STRING,

    /**
     * @property title
     * Title of the patent provided by the member.
     */
    title: Model.STRING,

    /**
     * @property issuer
     * the country code for the issuer of the patent.
     */
    issuer: Model.STRING,

    /**
     * @property url
     * Url Link to the patent.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property pending
     * Indicates the state of the patent.
     */
    pending: Model.BOOL,

    /**
     * @property filingDate
     * Filing date of this patent.
     */
    filingDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property issueDate
     * Date at which this patent has been issued.
     */
    issueDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property description
     * Description of the nature of the patent.
     */
    description: Model.STRING,

    /**
     * @property localizedIssuerCountryName
     * the localized country name the issuer of the patent.
     */
    localizedIssuerCountryName: Model.STRING,

    modelType: "identity/profile/core-patent"
  }
}
