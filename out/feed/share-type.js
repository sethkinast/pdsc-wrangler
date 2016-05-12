import Model from 'app/api/NotTerribleModel';
import ShareText from "app/models/feed/share-text";
import ShareArticle from "app/models/feed/share-article";
import ShareDocument from "app/models/feed/share-document";
import ShareImage from "app/models/feed/share-image";

export default Model.oneOf(ShareText, ShareArticle, ShareDocument, ShareImage);
