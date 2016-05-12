import Model from 'app/api/NotTerribleModel';
import MessagingMember from "app/models/messaging/messaging-member";
import MemberDistance from "app/models/common/member-distance";
import ContactInfo from "app/models/messaging/shared/contact-info";

export default class MemberTopCard extends Model {
  static schema = {
    /**
     * @property messagingMember
     * MessagingMember data for member
     */
    messagingMember: MessagingMember,

    /**
     * @property distance
     * The distance between the viewer and the member
     */
    distance: MemberDistance,

    /**
     * @property contactInfo
     * Contact info for member
     */
    contactInfo: ContactInfo,

    modelType: "messaging/member-top-card"
  }
}
