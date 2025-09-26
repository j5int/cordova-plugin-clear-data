module.exports = {

    cache: function (successCallback, errorCallback) {
        var asyncOperation = MSApp.clearTemporaryWebDataAsync();
        asyncOperation.oncomplete = function(){
            successCallback();
        }
        asyncOperation.onerror = function(error){
            errorCallback(error);
        }
        asyncOperation.start();
    }
};

require('cordova/exec/proxy').add('ClearData', module.exports);
