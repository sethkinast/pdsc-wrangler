import Model from 'app/api/NotTerribleModel';
import SuggestedArticle from "app/models/identity/me/suggestedactions/suggested-article";

export default class ComposeShare extends Model {
  static schema = {
    /**
     * @property suggestedArticle
     * An article we suggest for the member to share. This is optional because we might not find one.
     */
    suggestedArticle: SuggestedArticle,

    modelType: "identity/me/suggestedactions/compose-share"
  }
}
