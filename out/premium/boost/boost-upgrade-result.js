import Model from 'app/api/NotTerribleModel';

export default class BoostUpgradeResult extends Model {
  static schema = {
    /**
     * @property upgradeFulfilled
     * Flag that specifies if the user is upgraded with the promotional offer
     */
    upgradeFulfilled: Model.BOOL,

    modelType: "premium/boost/boost-upgrade-result"
  }
}
