import Model from 'app/api/NotTerribleModel';
import ContactInfoUrn from "app/models/common/contact-info-urn";
import WeChatContactInfo from "app/models/identity/profile/we-chat-contact-info";
import PhoneNumber from "app/models/identity/profile/phone-number";
import ProfileWebsite from "app/models/identity/profile/profile-website";
import TwitterHandle from "app/models/identity/shared/twitter-handle";
import IM from "app/models/identity/profile/i-m";

export default class ProfileContactInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Entity Urn of the contact info.
     */
    entityUrn: ContactInfoUrn,

    /**
     * @property weChatContactInfo
     * the member's WeChat contact information
     */
    weChatContactInfo: WeChatContactInfo,

    /**
     * @property phoneNumbers
     * A list of phone numbers. The first one is the primary
     */
    phoneNumbers: PhoneNumber,

    /**
     * @property websites
     * A list of website urls. The first one is the primary
     */
    websites: ProfileWebsite,

    /**
     * @property twitterHandles
     * A list of twitter handles for this member.
     */
    twitterHandles: TwitterHandle,

    /**
     * @property ims
     * List of instant messaging handles for this member.
     */
    ims: IM,

    /**
     * @property emailAddress
     * The member's primary email address
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property address
     * Address as entered by the member.
     */
    address: Model.STRING,

    modelType: "identity/profile/profile-contact-info"
  }
}
