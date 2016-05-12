import Model from 'app/api/NotTerribleModel';
import AppUniverseItem from "app/models/common/app-universe-item";

export default class AppUniverse extends Model {
  static schema = {
    /**
     * @property appUniverseItems
     * An array of app universe items, each item contains information such as app name, app tagline, app store URL, etc.
     */
    appUniverseItems: AppUniverseItem,

    modelType: "common/app-universe"
  }
}
