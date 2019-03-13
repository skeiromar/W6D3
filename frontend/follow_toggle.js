const APIUtil = require('./api_util.js');

class FollowToggle{

    constructor($el){
        this.$el = $el;
        this.userId = $el.attr("data-user-id");
        this.followState = $el.attr("data-initial-follow-state");

        this.render();
        this.handleClick();
    }

    render(){
        
        if(this.followState === "Unfollowed"){
            this.$el.text("Follow!");
        }
        else{
            this.$el.text("Unfollow!");
        }
    }

    handleClick(){
        $('.follow-toggle').on('click', 
        (event) => {
            event.preventDefault();

            if (this.followState === "Unfollowed") {

                const that = this;
                return APIUtil.followUser(that.userId)
                .then(response => {
                    that.followState = "Followed";
                    that.render();
                },failResp => {
                    alert('failed!')}, 
                () => {
                    that.attr('disabled','disabled');
            });   
            } else {
                const that = this;
                return APIUtil.unfollowUser(that.userId)
                .then(response => {
                    that.followState = "Unfollowed";
                    that.render();
                });   
            }
        });
    }
}

module.exports = FollowToggle;