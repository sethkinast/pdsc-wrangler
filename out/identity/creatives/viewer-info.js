import Model from 'app/api/NotTerribleModel';

export default class ViewerInfo extends Model {
  static schema = {
    /**
     * @property memberId
     * Urn representing the member id of the viewer viewing the ad.
     */
    memberId: Model.STRING,

    /**
     * @property firstName
     * First name of the viewer.  This will NOT be localized.  This can be passed into a formatter to be localized if desired.
     */
    firstName: Model.STRING,

    /**
     * @property lastName
     * Last name of the viewer.  This will NOT be localized.  This can be passed into a formatter to be localized if desired.
     */
    lastName: Model.STRING,

    /**
     * @property familiarName
     * Localized familiar name of the viewer.  This is generally what you'd want to use in the ad.
     */
    familiarName: Model.STRING,

    /**
     * @property interfaceLocale
     * Interface locale for the viewer.  This will be used to translate the ad.
     */
    interfaceLocale: Model.foreignUrn('com.linkedin.common.Locale'),

    /**
     * @property numConnectionsAtAdvertisingEntity
     * Number of connections this member has at advertising entity (employees at company or members in group).
     */
    numConnectionsAtAdvertisingEntity: Model.INT,

    /**
     * @property profilePicture
     * Media id of the viewer's profile picture.
     */
    profilePicture: Model.STRING,

    /**
     * @property jobTitle
     * String representation of the viewer's job function.  We do the formatting on the backend for performance.
     */
    jobTitle: Model.STRING,

    /**
     * @property isCompanyFollower
     * Whether or not the viewer is following the advertising company. This is used to determine whether or not to show visit or follow on the button in follow company ads.  We show visit if the viewer is already following the company and follow if they are not following the company. We default to true because we don't want to show a follow button to someone who is already following the company.
     */
    isCompanyFollower: Model.BOOL,

    /**
     * @property isGroupMember
     * Whether or not the viewer is a member of the advertising group. This is used to determine whether or not to show visit or join on the button in join group ads.  We show visit if the viewer is already in the group and join if they are not in the group. We default to true because we don't want to show a join button to someone who is already a part of the group.
     */
    isGroupMember: Model.BOOL,

    modelType: "identity/creatives/viewer-info"
  }
}
