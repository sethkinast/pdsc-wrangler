import Model from 'app/api/NotTerribleModel';

export default class GoalType extends Model {
  static schema = {
    /**
     * @property typeSymbol
     * The enum being wrapped.
     */
    typeSymbol: Model.STRING,

    modelType: "growth/goal/goal-type"
  }
}
