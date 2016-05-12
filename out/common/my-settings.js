import Model from 'app/api/NotTerribleModel';
import MySettingsUrn from "app/models/common/my-settings-urn";
import DiscloseAsProfileViewerInfo from "app/models/common/disclose-as-profile-viewer-info";

export default class MySettings extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Urn for settings to allow clients to cache member settings.
     */
    entityUrn: MySettingsUrn,

    /**
     * @property discloseAsProfileViewer
     * Settings giving information about whether or not the viewer should have his information displayed. The default for this one is to take the settings that protects the viewer's privacy as much as possible, which is Hide.
     */
    discloseAsProfileViewer: DiscloseAsProfileViewerInfo,

    modelType: "common/my-settings"
  }
}
