import Model from 'app/api/NotTerribleModel';
import MessagingCompanyUrn from "app/models/common/messaging-company-urn";
import MiniCompany from "app/models/entities/shared/mini-company";
import Image from "app/models/common/image";

export default class MessagingCompany extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Urn for MessagingCompany (a sender in the context of a conversation).
     */
    entityUrn: MessagingCompanyUrn,

    /**
     * @property miniProfile
     * The MiniProfile entity for member
     */
    miniProfile: MiniCompany,

    /**
     * @property miniCompany
     * The MiniCompany entity for company
     */
    miniCompany: MiniCompany,

    /**
     * @property alternateName
     * Name to display instead of company name
     */
    alternateName: Model.STRING,

    /**
     * @property alternateImage
     * Image to override logo of company
     */
    alternateImage: Image,

    modelType: "messaging/messaging-company"
  }
}
