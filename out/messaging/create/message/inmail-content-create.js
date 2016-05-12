import Model from 'app/api/NotTerribleModel';
import ContactInfo from "app/models/messaging/shared/contact-info";

export default class InmailContentCreate extends Model {
  static schema = {
    /**
     * @property contactInfo
     * Contact info for sender/recipient, used only for message send (client to server)
     */
    contactInfo: ContactInfo,

    /**
     * @property action
     * Action done on InMail, used only for message send
     */
    action: Model.STRING,

    modelType: "messaging/create/message/inmail-content-create"
  }
}
