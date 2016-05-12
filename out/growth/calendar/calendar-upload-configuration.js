import Model from 'app/api/NotTerribleModel';

export default class CalendarUploadConfiguration extends Model {
  static schema = {
    /**
     * @property uploadEnabled
     * Is uploading calendar enabled for the member?
     */
    uploadEnabled: Model.BOOL,

    /**
     * @property uploadFrequency
     * The frequency in milliseconds for uploading the calendar, default value is 24 hours in ms.
     */
    uploadFrequency: Model.INT,

    /**
     * @property uploadTimePeriod
     * The amount of time in milliseconds for uploading the calendar, default value is 26 hours in ms.
     */
    uploadTimePeriod: Model.INT,

    modelType: "growth/calendar/calendar-upload-configuration"
  }
}
