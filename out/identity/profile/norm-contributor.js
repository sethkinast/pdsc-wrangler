import Model from 'app/api/NotTerribleModel';
import ContributorUrn from "app/models/common/contributor-urn";
import MiniProfileUrn from "app/models/common/mini-profile-urn";

export default class NormContributor extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this contributor
     */
    entityUrn: ContributorUrn,

    /**
     * @property name
     * Name of the contributor, as entered by the member.
     */
    name: Model.STRING,

    /**
     * @property profileUrn
     * The profile URN of this contributor.
     */
    profileUrn: MiniProfileUrn,

    modelType: "identity/profile/norm-contributor"
  }
}
