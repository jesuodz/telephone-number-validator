const validator = {};

// FCC solution:
var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

validator.telephoneChecker = function(str) {
    return pattern.test(str);
}

module.exports = validator;