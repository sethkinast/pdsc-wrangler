import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Image from "app/models/common/image";

export default class ShareDocument extends Model {
  static schema = {
    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property image
     * Image of the document
     */
    image: Image,

    /**
     * @property type
     * The type of file.
     */
    type: Model.STRING,

    /**
     * @property fileName
     * File name.
     */
    fileName: Model.STRING,

    /**
     * @property url
     * Url for downloading the document.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "feed/share-document"
  }
}
