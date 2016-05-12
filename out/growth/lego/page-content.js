import Model from 'app/api/NotTerribleModel';
import PageContentUrn from "app/models/common/page-content-urn";

export default class PageContent extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this PageContent.
     */
    entityUrn: PageContentUrn,

    /**
     * @property slots
     * Slots to show on the page.
     */
    slots: Model.foreignUrn('[object Object]'),

    modelType: "growth/lego/page-content"
  }
}
