import Model from 'app/api/NotTerribleModel';
import MediaProcessorConfig from "app/models/common/media-processor-config";

export default class MediaConfig extends Model {
  static schema = {
    /**
     * @property mprConfig
     * Configuration to control client image media processor URL generation
     */
    mprConfig: MediaProcessorConfig,

    modelType: "common/media-config"
  }
}
