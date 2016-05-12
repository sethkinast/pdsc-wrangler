import Model from 'app/api/NotTerribleModel';
import WeChatContactInfo from "app/models/identity/profile/we-chat-contact-info";
import Website from "app/models/identity/profile/website";

export default class ContactInfo extends Model {
  static schema = {
    /**
     * @property weChatContactInfo
     * the member's wechat contact information
     */
    weChatContactInfo: WeChatContactInfo,

    /**
     * @property phoneNumbers
     * A list of phone numbers.  The first one is the primary
     */
    phoneNumbers: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    /**
     * @property websites
     * A list of website urls.  The first one is the primary
     */
    websites: Website,

    /**
     * @property emailAddress
     * The members primary email address
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    modelType: "identity/profile/contact-info"
  }
}
