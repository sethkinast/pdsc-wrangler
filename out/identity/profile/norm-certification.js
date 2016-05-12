import Model from 'app/api/NotTerribleModel';
import CertificationUrn from "app/models/common/certification-urn";
import DateRange from "app/models/common/date-range";
import MiniCompanyUrn from "app/models/common/mini-company-urn";

export default class NormCertification extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this certification
     */
    entityUrn: CertificationUrn,

    /**
     * @property name
     * Name of this certification, as entered by the member.
     */
    name: Model.STRING,

    /**
     * @property licenseNumber
     * License associated with this certification.
     */
    licenseNumber: Model.STRING,

    /**
     * @property url
     * Url linking to the certification online.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property displaySource
     * Short url or domain name displayed on the ME card to indicate the source of this certification
     */
    displaySource: Model.STRING,

    /**
     * @property timePeriod
     * The valid time period of this certification. This DateRange is meant for holding months and years only.
     */
    timePeriod: DateRange,

    /**
     * @property authority
     * This field supports multiple locales
     */
    authority: Model.STRING,

    /**
     * @property companyUrn
     * User-selected reference from type-ahead.
     */
    companyUrn: MiniCompanyUrn,

    modelType: "identity/profile/norm-certification"
  }
}
