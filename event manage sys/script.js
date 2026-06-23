// we will create a event manangement system using javascript
class Event {
    static weddingPrice = 500000;
    static birthdayPrice = 100000;
    constructor(name, date, location) {
        this.name = name;
        this.date = date;
        this.location = location;

    }
    getDetails() {
        return `Event: ${this.name}, Date: ${this.date}, Location: ${this.location}`;
    }
    getPrice() {
        if (this.name === "wedding") {
            return Event.weddingPrice;
        } else if (this.name === "birthday Party") {
            return Event.birthdayPrice;
        } else if (this.name === "conference") {
            return 200000;
        } else if (this.name === "engagement") {
            return 300000;
        } else if (this.name === "corporate Event") {
            return 400000;
        }

    }
    bookEvent(guest) {
        return `Booking for ${this.name} on ${this.date} at ${this.location} is confirmed.`;
    }
}
//birthday party, wedding, conference, concert, etc
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

let weddingEvent = new Event("wedding", "2026-06-12", "Patna-kankarbagh");
let birthdayEvent = new Event("birthday Party", "2026-07-20", "muzaffarpur");
let conferenceEvent = new Event("conference", "2026-08-15", "Darbhanga");
let engagementEvent = new Event("engagement", "2026-09-10", "Samastipur");
let corporateEvent = new Event("corporate Event", "2026-10-05", "Gaya");

// console.log(weddingEvent.name); 
// console.log(typeof weddingEvent);
// console.log(weddingEvent instanceof Event);
// console.log(weddingEvent.getDetails());
// console.log(birthdayEvent.getDetails());
console.log(weddingEvent.getPrice());
class Bookings {
    constructor(person) {
        this.person = person;
        this.bookings = [];
    }
    addBooking(event,guest) {
       this.bookings.push({ event, guest });
       event.bookEvent(guest);
       console.log(`Booking for ${event.name} on ${event.date} at ${event.location} is confirmed for ${guest.name}.`);
    }
}
let client1 = new Person("kriti", "john.doe@example.com", "123-456-7890");
let bookings = new Bookings();
bookings.addBooking(weddingEvent, client1);