import Model from 'app/api/NotTerribleModel';

export default class PropsCollectionMetadata extends Model {
  static schema = {
    /**
     * @property numNewProps
     * Props created after last time the user went to My Network tab are called new props. 0 means the user doesn't have new props. Non-zero, the number is the count of new props.
     */
    numNewProps: Model.INT,

    modelType: "relationships/shared/prop/props-collection-metadata"
  }
}
