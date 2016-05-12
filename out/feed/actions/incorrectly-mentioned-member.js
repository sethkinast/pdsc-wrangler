import Model from 'app/api/NotTerribleModel';

export default class IncorrectlyMentionedMember extends Model {
  static schema = {
    /**
     * @property profileUrn
     * Backend urn of the member incorrectly mentioned
     */
    profileUrn: Model.STRING,

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

    modelType: "feed/actions/incorrectly-mentioned-member"
  }
}
