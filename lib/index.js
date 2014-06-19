'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser = require('open'),
    term    = process.argv[2],
    filter  = process.argv[3],
    skill   = process.argv[4];


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

var getSkill = function() {
    if (skill !== undefined) {
        switch (skill) {
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

browser('https://developer.mozilla.org/en-US/search?q=' + term + getFilter() + getSkill());

