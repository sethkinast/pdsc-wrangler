import Model from 'app/api/NotTerribleModel';
import Format from "app/models/relationships/shared/annotation/format";
import ExternalLink from "app/models/relationships/shared/annotation/external-link";
import MiniProfile from "app/models/identity/shared/mini-profile";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class Annotation extends Model {
  static schema = {
    /**
     * @property start
     * Start index of annotation
     */
    start: Model.INT,

    /**
     * @property end
     * End index of annotation
     */
    end: Model.INT,

    /**
     * @property attribute
     * Type of attribute in the annotation.
     */
    attribute: Model.oneOf(Format, ExternalLink, MiniProfile, MiniCompany),

    modelType: "relationships/shared/annotation/annotation"
  }
}
