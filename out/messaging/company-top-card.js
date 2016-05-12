import Model from 'app/api/NotTerribleModel';
import MessagingCompany from "app/models/messaging/messaging-company";

export default class CompanyTopCard extends Model {
  static schema = {
    /**
     * @property messagingCompany
     * MessagingCompany data for company
     */
    messagingCompany: MessagingCompany,

    modelType: "messaging/company-top-card"
  }
}
