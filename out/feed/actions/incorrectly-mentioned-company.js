import Model from 'app/api/NotTerribleModel';

export default class IncorrectlyMentionedCompany extends Model {
  static schema = {
    /**
     * @property companyUrn
     * Backend urn of the company incorrectly mentioned
     */
    companyUrn: Model.STRING,

    /**
     * @property displayName
     * Text to display for name in control menu
     */
    displayName: Model.STRING,

    /**
     * @property self
     * Whether or not this mention is of the logged-in member
     */
    self: Model.BOOL,

    modelType: "feed/actions/incorrectly-mentioned-company"
  }
}
