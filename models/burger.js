var orm = require("../config/orm");

var burger = {

    selectAll: function(callback) {
        orm.selectAll(function(result) {
            callback (result);
        })
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(result) {
            callback (result);
        });
    },

    updateOne: function(burgerId, callback) {
        orm.updateOne(burgerId, function(result) {
            callback (result);
        });
    }
};

module.exports = burger;