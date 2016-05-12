import Model from 'app/api/NotTerribleModel';
import RelContactSyncConnectionUrn from "app/models/common/rel-contact-sync-connection-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";
import TwitterHandle from "app/models/identity/shared/twitter-handle";
import WeChatContactInfo from "app/models/identity/profile/we-chat-contact-info";

export default class ContactSyncConnection extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this mini profile
     */
    entityUrn: RelContactSyncConnectionUrn,

    /**
     * @property miniProfile
     * Mini profile data about a member.
     */
    miniProfile: MiniProfile,

    /**
     * @property phoneNumbers
     * The member's phone number. The first one is the primary
     */
    phoneNumbers: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    /**
     * @property emailAddress
     * The member's primary email address
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property twitterHandles
     * A list of Twitter handles
     */
    twitterHandles: TwitterHandle,

    /**
     * @property weChatContactInfo
     * the member's wechat contact information
     */
    weChatContactInfo: WeChatContactInfo,

    modelType: "relationships/shared/connection/contact-sync-connection"
  }
}
