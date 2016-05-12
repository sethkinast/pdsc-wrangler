import Model from 'app/api/NotTerribleModel';
import CalendarUploadTask from "app/models/growth/calendar/calendar-upload-task";

export default class CalendarUploadTaskRequest extends Model {
  static schema = {
    /**
     * @property calendarUploadTask
     * The actual embedded calendar upload task.
     */
    calendarUploadTask: CalendarUploadTask,

    modelType: "growth/calendar/calendar-upload-task-request"
  }
}
