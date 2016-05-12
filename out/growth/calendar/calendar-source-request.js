import Model from 'app/api/NotTerribleModel';
import CalendarSource from "app/models/growth/calendar/calendar-source";

export default class CalendarSourceRequest extends Model {
  static schema = {
    /**
     * @property calendarSource
     * The actual embedded calendar source.
     */
    calendarSource: CalendarSource,

    modelType: "growth/calendar/calendar-source-request"
  }
}
