import { assert } from 'chai';

import NotTerribleModel, { BOOL } from './NotTerribleModel';

describe('NotTerribleModel', function() {

  it('serializes primitive types', function() {
    class TestModel extends NotTerribleModel {
      static schema = {
        myString: NotTerribleModel.STRING,
        myInt: NotTerribleModel.INT,
        myFloat: NotTerribleModel.FLOAT,
        myBool: NotTerribleModel.BOOL,
        myStringBool: NotTerribleModel.BOOL,
        myFalseyBool: NotTerribleModel.BOOL,
        myTruthyBool: BOOL
      };
    }

    const instance = new TestModel({
      myString: 1138,
      myInt: '1138',
      myFloat: '11.38',
      myBool: false,
      myStringBool: 'true',
      myFalseyBool: '',
      myTruthyBool: {},
      droppedKey: 'Oh no!'
    });

    // Should be an instance of the model
    assert.ok(instance instanceof TestModel);

    // Should have converted to a string type
    assert.strictEqual(instance.myString, '1138');

    // Should have converted to a number
    assert.strictEqual(instance.myInt, 1138);
    assert.strictEqual(instance.myFloat, 11.38);

    // All the various boolean stuffs
    assert.strictEqual(instance.myBool, false);
    assert.strictEqual(instance.myStringBool, true);
    assert.strictEqual(instance.myFalseyBool, false);
    assert.strictEqual(instance.myTruthyBool, true);

    // Anything not in the schema should be dropped
    assert.ok(!instance.hasOwnProperty('droppedKey'));
  });

  it('nulls out bad strings and numbers', function() {
    class TestModel extends NotTerribleModel {
      static schema = {
        myString: NotTerribleModel.STRING,
        myInt: NotTerribleModel.INT,
        myFloat: NotTerribleModel.FLOAT
      };
    }

    const instance = new TestModel({
      myString: null,
      myInt: {},
      myFloat: undefined
    });

    assert.strictEqual(instance.myString, null);
    assert.strictEqual(instance.myInt, null);
    assert.strictEqual(instance.myFloat, null);
  });

  it('allows nested types', function() {
    class MediaProcessorImage extends NotTerribleModel {
      static schema = {
        id: NotTerribleModel.STRING
      };
    }

    class MiniProfile extends NotTerribleModel {
      static schema = {
        firstName: NotTerribleModel.STRING,
        lastName: NotTerribleModel.STRING,
        picture: MediaProcessorImage
      };
    }

    let thing = new MiniProfile({
      "firstName": "Tim",
      "lastName": "Wolfe",
      "picture": {
        "com.linkedin.voyager.common.MediaProcessorImage": {
          "id": "foo.jpg"
        }
      }
    });

    assert.ok(thing instanceof MiniProfile);
    assert.ok(thing instanceof NotTerribleModel);
    assert.ok(thing.picture instanceof MediaProcessorImage);
    assert.ok(thing.picture instanceof NotTerribleModel);
    assert.strictEqual(thing.picture.id, 'foo.jpg');
  });

  it('handles arrays', function() {
    class Model extends NotTerribleModel {
      static schema = {
        name: NotTerribleModel.STRING
      };
    }

    let instance = new Model({
      name: ['foo', 'bar', 'baz', 3, false]
    });

    assert.ok(instance.name instanceof Array);
    assert.strictEqual(instance.name.length, 5);
    assert.strictEqual(instance.name[3], '3');
  });

  it('handles union types', function() {
    class ThingOne extends NotTerribleModel {
      static schema = {
        id: NotTerribleModel.INT
      };

      static modelType = 'common/thing-one'
    }
    class ThingTwo extends NotTerribleModel {
      static schema = {
        name: NotTerribleModel.STRING
      };

      static modelType = 'common/thing-two'
    }
    class Model extends NotTerribleModel {
      static schema = {
        hits: NotTerribleModel.oneOf(ThingOne, ThingTwo)
      };
    }

    let instance = new Model({
      hits: [
        {
          'com.linkedin.voyager.common.ThingOne': {
            id: '123'
          }
        },
        {
          'com.linkedin.common.ThingTwo': {
            name: 'abc'
          }
        },
        {
          'com.evil.EvilThing': {
            name: 'oh noes'
          }
        }
      ]
    });
    assert.strictEqual(instance.hits.length, 3);
    assert.ok(instance.hits[0] instanceof ThingOne);
    assert.ok(instance.hits[1] instanceof ThingTwo);
    assert.notOk(instance.hits[2] instanceof NotTerribleModel);
    assert.strictEqual(instance.hits[0].modelType, 'common/thing-one');
  });

  it('supports unions of complex and primitive types', function() {
    class MediaProcessorImage extends NotTerribleModel {
      static schema = {
        id: NotTerribleModel.STRING
      };

      static modelType = 'common/media-processor-image'
    }

    class Model extends NotTerribleModel {
      static schema = {
        image: Model.oneOf(MediaProcessorImage, NotTerribleModel.INT)
      };
    }

    const instance = new Model({
      image: {
        int: '123'
      }
    });

    const instanceTwo = new Model({
      image: {
        'com.linkedin.voyager.common.MediaProcessorImage': {
          id: '123'
        }
      }
    });

    assert.strictEqual(instance.image.id, 123);
    assert.strictEqual(instanceTwo.image.id, '123');
  });

  it('supports simple volatile computeds', function() {
    class Model extends NotTerribleModel {
      static schema = {
        num: Model.INT
      }
      get doubleNum() {
        return this.num * 2;
      }
    }

    let instance = new Model({
      num: 5
    });

    assert.strictEqual(instance.doubleNum, 10);
  });
});
