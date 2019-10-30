//calls ORM functions
let orm = require("../config/orm.js");

let burger = {
    selectAll: function(rs) {
        orm.selectAll("burgers", function(res) {
            rs(res);
        });
    },
    // The Variables cols and vals are arrays.
    insertOne: function(cols, vals, rs) {
        orm.insertOne("burgers", cols, vals, function(res) {
            rs(res);
        });
    },
    updateOne: function(objColVals, condition, rs) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            rs(res);
        });
    },
};

module.exports = burger;