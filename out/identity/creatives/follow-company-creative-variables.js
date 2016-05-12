import Model from 'app/api/NotTerribleModel';

export default class FollowCompanyCreativeVariables extends Model {
  static schema = {
    /**
     * @property format
     * Display format (size and style)
     */
    format: Model.STRING,

    /**
     * @property companyName
     * Company name
     */
    companyName: Model.STRING,

    /**
     * @property logo
     * Company logo
     */
    logo: Model.STRING,

    /**
     * @property primaryCTA
     * Top call to action message
     */
    primaryCTA: Model.STRING,

    /**
     * @property secondaryCTA
     * Bottom call to action message
     */
    secondaryCTA: Model.STRING,

    /**
     * @property followText
     * Text on the follow button in the not following state
     */
    followText: Model.STRING,

    /**
     * @property followingText
     * Text on the follow button in the already following state
     */
    followingText: Model.STRING,

    /**
     * @property followingLabelText
     * Text on the label next to the checkmark in the already following state, usually "Following"
     */
    followingLabelText: Model.STRING,

    /**
     * @property memberPhotoLabelText
     * Text below the member's photo, usually "You"
     */
    memberPhotoLabelText: Model.STRING,

    modelType: "identity/creatives/follow-company-creative-variables"
  }
}
