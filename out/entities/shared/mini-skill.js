import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import MiniSkillUrn from "app/models/common/mini-skill-urn";

export default class MiniSkill extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property entityUrn
     * Identifier for this mini skill.
     */
    entityUrn: MiniSkillUrn,

    /**
     * @property name
     * The skill name from the backend, for example, Java.
     */
    name: Model.STRING,

    modelType: "entities/shared/mini-skill"
  })
}
