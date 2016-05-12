import Model from 'app/api/NotTerribleModel';
import HonorUrn from "app/models/common/honor-urn";

export default class NormHonor extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this honor
     */
    entityUrn: HonorUrn,

    /**
     * @property title
     * Title of the honor.
     */
    title: Model.STRING,

    /**
     * @property issueDate
     * Date at which the awarded has been issued to the member.
     */
    issueDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property issuer
     * Organization that awarded this honor.
     */
    issuer: Model.STRING,

    /**
     * @property occupation
     * Occupation held by the member when the honor or award was completed.
     */
    occupation: Model.STRING,

    /**
     * @property description
     * Description provided by the user about this honor.
     */
    description: Model.STRING,

    modelType: "identity/profile/norm-honor"
  }
}
