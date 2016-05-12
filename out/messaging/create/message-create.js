import Model from 'app/api/NotTerribleModel';
import File from "app/models/common/file";
import InmailContentCreate from "app/models/messaging/create/message/inmail-content-create";
import ShareCreate from "app/models/messaging/create/message/share-create";
import MiniGroupUrn from "app/models/common/mini-group-urn";
import ShareContentCreate from "app/models/messaging/create/message/share-content-create";

export default class MessageCreate extends Model {
  static schema = {
    /**
     * @property body
     * The body of the message
     */
    body: Model.STRING,

    /**
     * @property attachments
     * Attachments (ex. images & other files)
     */
    attachments: File,

    /**
     * @property customContent
     * Custom Content to send with a message
     */
    customContent: Model.oneOf(InmailContentCreate, ShareCreate, MiniGroupUrn),

    /**
     * @property shareContent
     * Share content sent with a message, e.g member post, feed articles
     */
    shareContent: ShareContentCreate,

    modelType: "messaging/create/message-create"
  }
}
