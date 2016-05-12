import Model from 'app/api/NotTerribleModel';

export default class Description extends Model {
  static schema = {
    /**
     * @property text
     * The description text about an entity.
     */
    text: Model.STRING,

    modelType: "entities/common/description"
  }
}
