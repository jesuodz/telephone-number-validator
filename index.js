const validator = {};
// (\d{3}|\-\))?(\d{4})IMPORTANT
var pattern = /(^[+1]{1}|\()?[\s|\-]?(\s\(|\()?\d{3}(\)\s|\s|\)|\-)?\d{3}(\s|\-)?\d{4}/;

validator.telephoneChecker = function(str) {
    return pattern.test(str);
}

module.exports = validator;