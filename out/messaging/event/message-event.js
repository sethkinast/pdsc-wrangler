import Model from 'app/api/NotTerribleModel';
import File from "app/models/common/file";
import CustomContent from "app/models/messaging/event/message/custom-content";
import ShareContent from "app/models/messaging/event/message/share-content";

export default class MessageEvent extends Model {
  static schema = {
    /**
     * @property body
     * The body of the message
     */
    body: Model.STRING,

    /**
     * @property subject
     * Subject of the message if any primarily for InMails and backwards compatibility
     */
    subject: Model.STRING,

    /**
     * @property attachments
     * Attachments (ex. images & other files)
     */
    attachments: File,

    /**
     * @property customContent
     * Message custom content.
     */
    customContent: CustomContent,

    /**
     * @property shareContent
     * Message custom content.
     */
    shareContent: ShareContent,

    modelType: "messaging/event/message-event"
  }
}
