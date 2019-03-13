const FollowToggle = require('./follow_toggle.js');

const twitter = function() {

    const $el = $('.follow-toggle').each((index, el) => {

        new FollowToggle($(el));
    });
    // const ft = new FollowToggle($el);
};


$(twitter);