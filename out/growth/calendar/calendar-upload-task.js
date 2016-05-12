import Model from 'app/api/NotTerribleModel';
import CalendarUploadEvent from "app/models/growth/calendar/calendar-upload-event";
import CalendarSource from "app/models/growth/calendar/calendar-source";

export default class CalendarUploadTask extends Model {
  static schema = {
    /**
     * @property calenderUploadEvents
     * List of calendar events
     */
    calenderUploadEvents: CalendarUploadEvent,

    /**
     * @property source
     * Source of calendar upload task.
     */
    source: CalendarSource,

    /**
     * @property startTime
     * Start time of calendar upload task
     */
    startTime: Model.INT,

    /**
     * @property endTime
     * End time of calendar upload task
     */
    endTime: Model.INT,

    modelType: "growth/calendar/calendar-upload-task"
  }
}
