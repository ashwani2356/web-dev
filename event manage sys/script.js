// we will create a event manangement system using javascript
class Event {
    constructor(name, date, location) {
        this.name = name;
        this.date = date;
        this.location = location;
    }
}
//birthday party, wedding, conference, concert, etc
class Guest {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let weddingEvent = new Event("Wedding", "2026-06-12", "Patna-kankarbagh");
console.log(typeof weddingEvent);
console.log(weddingEvent instanceof Event);
