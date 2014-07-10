'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser = require('open'),
    term    = process.argv[2],
    filter  = process.argv[3];


// =====================================================
// SEARCH
// =====================================================

var getFilter = function() {
    if (filter !== undefined) {
        return '&topic=' + filter;
    } else {
        return '';
    }
};

var getSkill = function(s) {
    if (s !== undefined) {
        switch (s) {
        case '1':
            return '&skill=begginer';
        case '2':
            return '&skill=intermediate';
        case '3':
            return '&skill=advanced';
        }
    } else {
        return '';
    }
};

var getType = function(type) {
    if (type !== undefined) {
        return '&type=' + type;
    } else {
        return '';
    }
};

exports.search = function (opts) {
    var url = 'https://developer.mozilla.org/en-US/search?q=' + term + getFilter() + getSkill(opts.skill) + getType(opts.type);
    browser(url);
};


