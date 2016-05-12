import Model from 'app/api/NotTerribleModel';
import ShareArticle from "app/models/feed/share-article";
import Update from "app/models/feed/update";

export default Model.oneOf(ShareArticle, Update);
