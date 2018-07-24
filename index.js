const validator = {};

var pattern = /\d+-d+-d+/;

validator.telephoneChecker = function(str) {
    return pattern.test(str);
}

module.exports = validator;