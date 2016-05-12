import Model from 'app/api/NotTerribleModel';
import InmailContent from "app/models/messaging/event/message/inmail-content";
import GroupContent from "app/models/messaging/event/message/group-content";
import SpInmailContent from "app/models/messaging/event/message/spinmail/sp-inmail-content";
import ShareArticle from "app/models/feed/share-article";

export default Model.oneOf(InmailContent, GroupContent, SpInmailContent, ShareArticle);
