const validator = {};
// (\d{3}|\-\))?(\d{4})IMPORTANT
var pattern = /(\(|^1|\d{3})[\-]?(\s\(?|\s?|\(?)\d{3}(\)\s|\s|\))*/;

validator.telephoneChecker = function(str) {
    return pattern.test(str);
}

module.exports = validator;