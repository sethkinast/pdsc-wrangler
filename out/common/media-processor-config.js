import Model from 'app/api/NotTerribleModel';
import MediaProcessorFilters from "app/models/common/media-processor-filters";
import MediaProcessorSize from "app/models/common/media-processor-size";

export default class MediaProcessorConfig extends Model {
  static schema = {
    /**
     * @property filters
     * filters with their corresponding uri templates that client can use
     */
    filters: MediaProcessorFilters,

    /**
     * @property sizes
     * sizes that client can use when constructing an MPR url using uriTemplate
     */
    sizes: MediaProcessorSize,

    modelType: "common/media-processor-config"
  }
}
