import Model from 'app/api/NotTerribleModel';
import CalendarSource from "app/models/growth/calendar/calendar-source";
import CalendarEventAttendee from "app/models/growth/calendar/calendar-event-attendee";
import CalendarEventAvailability from "app/models/growth/calendar/calendar-event-availability";

export default class CalendarUploadEvent extends Model {
  static schema = {
    /**
     * @property externalId
     * Id generated from mobile client for each event on calendar
     */
    externalId: Model.STRING,

    /**
     * @property source
     * Source of calendar event
     */
    source: CalendarSource,

    /**
     * @property startTime
     * Start of calendar event
     */
    startTime: Model.INT,

    /**
     * @property endTime
     * End of calendar event
     */
    endTime: Model.INT,

    /**
     * @property title
     * Title of the calendar event
     */
    title: Model.STRING,

    /**
     * @property location
     * Location where this calendar event happens
     */
    location: Model.STRING,

    /**
     * @property fullDayEvent
     * Indicates if this calendar event is a full day event
     */
    fullDayEvent: Model.BOOL,

    /**
     * @property recurring
     * Indicates if this calendar event is a recurring event
     */
    recurring: Model.BOOL,

    /**
     * @property attendees
     * List of attendees in this calendar event
     */
    attendees: CalendarEventAttendee,

    /**
     * @property status
     * Indicates how the time slot should be treated for scheduling
     */
    status: CalendarEventAvailability,

    modelType: "growth/calendar/calendar-upload-event"
  }
}
