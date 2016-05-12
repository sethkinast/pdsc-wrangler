import Model from 'app/api/NotTerribleModel';

export default class Color extends Model {
  static schema = {
    /**
     * @property red
     * The Red component.
     */
    red: Model.INT,

    /**
     * @property green
     * The Green component.
     */
    green: Model.INT,

    /**
     * @property blue
     * The Blue component.
     */
    blue: Model.INT,

    /**
     * @property alpha
     * The Alpha component.
     */
    alpha: Model.INT,

    modelType: "common/color"
  }
}
