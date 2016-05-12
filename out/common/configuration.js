import Model from 'app/api/NotTerribleModel';
import MediaConfig from "app/models/common/media-config";
import LaunchAlert from "app/models/common/launch-alert";

export default class Configuration extends Model {
  static schema = {
    /**
     * @property mediaConfig
     * configuration for the client image URL generation library
     */
    mediaConfig: MediaConfig,

    /**
     * @property launchAlert
     * Alert view model for constructing the launch alert window
     */
    launchAlert: LaunchAlert,

    modelType: "common/configuration"
  }
}
