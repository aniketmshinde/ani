const square = (x) => {
    return x * x
}

const compactSquare = (x) => x*x

const event = {
    name: "Birthday Party",
    guestList: ["Aniket", "Ashu", "Tanishka"],
    printGuestList: function () {
        const that = this
        this.guestList.forEach(function (guestName){
            console.log(guestName + " is going to attend " + " -- " + that.name)
        })
        this.guestList.forEach((guest) => {
            console.log(guest + " is also going to attend " + this.name)
        })
    },
    arrowGuestList: () => {
        console.log("This is guest list for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is going to attend " + this.event)
        })
        console.log("...............End for arrow list........")
    },
    shortguestList() {
        console.log("This is guest list for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is going to attend " + this.event)
        })
    }
}

event.printGuestList()
//event.arrowGuestList()
event.shortguestList()

console.log(square(4))
console.log(compactSquare(5))