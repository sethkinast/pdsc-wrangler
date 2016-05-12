import Model from 'app/api/NotTerribleModel';

export default class FollowCreativeVariables extends Model {
  static schema = {
    /**
     * @property format
     * Display format (size and style)
     */
    format: Model.STRING,

    /**
     * @property advertisingEntity
     * Urn of the entity that is being advertised (e.g. company)
     */
    advertisingEntity: Model.STRING,

    /**
     * @property viewerProfile
     * Profile of the member viewing this ad. Contains first name, last name, and picture url. Type is urn because we pass the urn to Deco and get back the profile object
     */
    viewerProfile: Model.STRING,

    /**
     * @property followInfo
     * Whether or not the member is following the company. Derived at runtime.
     */
    followInfo: Model.STRING,

    /**
     * @property alternateEntityName
     * Alternate name for entity for use in ad (optional)
     */
    alternateEntityName: Model.STRING,

    /**
     * @property alternateEntityLogo
     * Alternate logo for entity for use in ad (optional)
     */
    alternateEntityLogo: Model.STRING,

    /**
     * @property topCallToAction
     * First call to action message.  Usually at top of ad
     */
    topCallToAction: Model.STRING,

    /**
     * @property topCallToActionPostFollow
     * First call to action message post follow.  Usually at top of ad
     */
    topCallToActionPostFollow: Model.STRING,

    /**
     * @property bottomCallToAction
     * Second call to action message.  Usually at bottom of ad or non-existent
     */
    bottomCallToAction: Model.STRING,

    /**
     * @property bottomCallToActionPostFollow
     * Second call to action message post follow.  Usually at bottom of ad or non-existent
     */
    bottomCallToActionPostFollow: Model.STRING,

    /**
     * @property hoverText
     * Text you see when you hover the mouse on the follow button.
     */
    hoverText: Model.STRING,

    /**
     * @property hoverTextPostFollow
     * Text you see when you hover the mouse on the visit button.
     */
    hoverTextPostFollow: Model.STRING,

    /**
     * @property buttonText
     * Text on the follow button in the not following state
     */
    buttonText: Model.STRING,

    /**
     * @property buttonTextPostFollow
     * Text on the follow button in the already following state
     */
    buttonTextPostFollow: Model.STRING,

    /**
     * @property customClickThroughUrl
     * Custom click through url to use. (Like in forum ads). Can direct off LinkedIn.
     */
    customClickThroughUrl: Model.STRING,

    /**
     * @property urlMap
     * Map of action to url that does that action and tracks it.  Possible actions are defined in TscpRenderingClickAction.java and their string versions are used as keys
     */
    urlMap: Model.foreignUrn('[object Object]'),

    modelType: "identity/creatives/follow-creative-variables"
  }
}
