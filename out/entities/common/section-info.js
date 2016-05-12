import Model from 'app/api/NotTerribleModel';

export default class SectionInfo extends Model {
  static schema = {
    /**
     * @property name
     * This is a list of all the possible names for the Entities section groups.
     */
    name: Model.STRING,

    modelType: "entities/common/section-info"
  }
}
