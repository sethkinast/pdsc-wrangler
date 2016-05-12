import Model from 'app/api/NotTerribleModel';
import GoalUrn from "app/models/common/goal-urn";
import GoalType from "app/models/growth/goal/goal-type";

export default class Goal extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this goal.
     */
    entityUrn: GoalUrn,

    /**
     * @property goalType
     * Type of a member goal.
     */
    goalType: GoalType,

    modelType: "growth/goal/goal"
  }
}
