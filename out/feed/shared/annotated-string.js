import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MiniCompany from "app/models/entities/shared/mini-company";
import MiniSchool from "app/models/entities/shared/mini-school";
import Channel from "app/models/growth/interests/channel";

export default class AnnotatedString extends Model {
  static schema = {
    /**
     * @property value
     * The raw string that will be annotated.
     */
    value: Model.STRING,

    /**
     * @property entity
     * The entity mentioned by the string.
     */
    entity: Model.oneOf(MiniProfile, MiniCompany, MiniSchool, Channel),

    modelType: "feed/shared/annotated-string"
  }
}
