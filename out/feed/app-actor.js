import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class AppActor extends Model {
  static schema = {
    /**
     * @property appId
     * id for the app being promoted
     */
    appId: Model.STRING,

    /**
     * @property appName
     * The name of the app that is being promoted by this promo
     */
    appName: Model.STRING,

    /**
     * @property subtitle
     * A text to be displayed below the app name
     */
    subtitle: Model.STRING,

    /**
     * @property appIcon
     * Icon image of the promoted app
     */
    appIcon: Image,

    /**
     * @property deeplink
     * The field used to launch (deeplink to) the app, app package name for Android, and deeplink scheme for iPhone
     */
    deeplink: Model.STRING,

    /**
     * @property storeUrl
     * The URL that links to the various distribution stores for the targeted mobile OS
     */
    storeUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property showActionButton
     * If true, show download or go-to-app button (depending on if app is already installed), otherwise do not show any button
     */
    showActionButton: Model.BOOL,

    modelType: "feed/app-actor"
  }
}
