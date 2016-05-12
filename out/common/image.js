import Model from 'app/api/NotTerribleModel';
import MediaProcessorImage from "app/models/common/media-processor-image";
import MediaProxyImage from "app/models/common/media-proxy-image";

export default Model.oneOf(MediaProcessorImage, MediaProxyImage, Model.foreignUrn(&#39;com.linkedin.common.Url&#39;));
