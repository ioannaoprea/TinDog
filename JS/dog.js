

export class Dogs {
    constructor(data) {
        Object.assign(this, data);

    };

    getStampHtml() {
        if (!this.hasBeenLiked && this.hasBeenSwiped){
           return `<img class="badge" src="./images/badge-nope.png">`;
        }else if(this.hasBeenLiked) {
            return `<img class="badge" src="./images/badge-like.png"">`;
        } else {
            return "";
        };
    };

    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this;
        this.badge = this.getStampHtml();

        return ` 
        ${this.badge}
        <img class="dog-profile-img" src="${avatar}" alt="Dog's Avatar">
        <div class="dog-profile-info">
            <h3 class="dog-info">${name}, ${age}</h3>
            <p class="dog-bio">${bio}</p>
        </div>`;
    };
}