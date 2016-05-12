import Model from 'app/api/NotTerribleModel';
import MessagingMember from "app/models/messaging/messaging-member";
import MessagingCompany from "app/models/messaging/messaging-company";

export default Model.oneOf(MessagingMember, MessagingCompany);
