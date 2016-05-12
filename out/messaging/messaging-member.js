import Model from 'app/api/NotTerribleModel';
import MessagingMemberUrn from "app/models/common/messaging-member-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";
import Image from "app/models/common/image";

export default class MessagingMember extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Urn for MessagingMember (a sender in the context of a conversation).
     */
    entityUrn: MessagingMemberUrn,

    /**
     * @property miniProfile
     * The MiniProfile entity for member
     */
    miniProfile: MiniProfile,

    /**
     * @property alternateName
     * Name to display instead of member name
     */
    alternateName: Model.STRING,

    /**
     * @property alternateImage
     * Image to override profile picture of member
     */
    alternateImage: Image,

    modelType: "messaging/messaging-member"
  }
}
