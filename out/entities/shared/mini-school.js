import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import MiniSchoolUrn from "app/models/common/mini-school-urn";
import Image from "app/models/common/image";

export default class MiniSchool extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property entityUrn
     * Identifier for this mini school.
     */
    entityUrn: MiniSchoolUrn,

    /**
     * @property schoolName
     * Name of the school.
     */
    schoolName: Model.STRING,

    /**
     * @property logo
     * Logo image of the school.
     */
    logo: Image,

    modelType: "entities/shared/mini-school"
  })
}
