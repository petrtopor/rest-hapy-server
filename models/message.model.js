module.exports = function (mongoose) {
    let modelName = "message";
    let Types = mongoose.Schema.Types;
    let Schema = new mongoose.Schema({
      from: {
        type: Types.String,
        required: true,
        unique: false
      },
      to: {
        type: Types.String,
        required: false,
        unique: false
      },
      message: {
        type: Types.String,
        required: true,
        unique: false
      }
    });
    
    Schema.statics = {
      collectionName: modelName,
      routeOptions: {}
    };
    
    return Schema;
  };