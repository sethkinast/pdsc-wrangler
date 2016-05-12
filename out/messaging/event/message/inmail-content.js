import Model from 'app/api/NotTerribleModel';
import ContactInfo from "app/models/messaging/shared/contact-info";

export default class InmailContent extends Model {
  static schema = {
    /**
     * @property inmailType
     * Type of the proposal
     */
    inmailType: Model.STRING,

    /**
     * @property status
     * Status of the inmail
     */
    status: Model.STRING,

    /**
     * @property actionType
     * InMail's reply status. This field adds addition granularity to the status field.
     */
    actionType: Model.STRING,

    /**
     * @property requestContactInfo
     * Request contact info from user
     */
    requestContactInfo: Model.BOOL,

    /**
     * @property senderContactInfo
     * Sender's contact info
     */
    senderContactInfo: ContactInfo,

    /**
     * @property recruiterInmail
     * True if inmail is from recruiter and false if inmail is from any other source (premium, lss)
     */
    recruiterInmail: Model.BOOL,

    modelType: "messaging/event/message/inmail-content"
  }
}
