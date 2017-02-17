import models from './config'
var env = "prod";
export default {
    setEnv: function (paramEnv = 'prod') {
        env = paramEnv;
    },
    get: function (modelName, params = {}) {
        if (env === "test") {
            modelName = "mock" + modelName.substr(0,1).toUpperCase() + modelName.substr(1);
        }
        if (models[modelName]) {
            var configParams = JSON.parse(models[modelName].param),
                constructorParams;
            // console.log(Object.keys(configParams).length)
            //constructorParams = $.extend({}, configParams, params);
            // if(Object.keys(params).length === 0 && params.construct === Object){
            //     constructorParams = configParams;
            // }
            if(Object.keys(params).length === 0 ){
                constructorParams = configParams;
            }
            else{
                constructorParams = params;
                // console.log(params)
            }
            // console.log("trest")
            var inst = Object.create(models[modelName].class.prototype);
            models[modelName].class.call(inst, constructorParams);
            return inst;
        } else {
            console.log("can't load model " + modelName);
        }
    }
}