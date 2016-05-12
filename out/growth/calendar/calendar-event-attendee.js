import Model from 'app/api/NotTerribleModel';
import CalendarEventAttendeeStatus from "app/models/growth/calendar/calendar-event-attendee-status";

export default class CalendarEventAttendee extends Model {
  static schema = {
    /**
     * @property name
     * The name of the attendee
     */
    name: Model.STRING,

    /**
     * @property email
     * The email address of the attendee
     */
    email: Model.STRING,

    /**
     * @property status
     * The status of the attendee
     */
    status: CalendarEventAttendeeStatus,

    modelType: "growth/calendar/calendar-event-attendee"
  }
}
