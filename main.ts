function readJoystick () {
    X = Math.imul(Math.map(pins.analogReadPin(AnalogPin.P0), 0, X_max, 0, 4), 1)
    Y = Math.imul(Math.map(pins.analogReadPin(AnalogPin.P1), 0, Y_max, 0, 4), 1)
    analogButton = pins.analogReadPin(AnalogPin.P2)
    if (analogButton < 256) {
        buttonNum = 1
    } else if (analogButton < 597) {
        buttonNum = 2
    } else if (analogButton < 725) {
        buttonNum = 3
    } else if (analogButton < 793) {
        buttonNum = 4
    } else if (analogButton < 836) {
        buttonNum = 5
    } else if (analogButton < 938) {
        buttonNum = 6
    } else {
        buttonNum = 0
    }
}
let buttonNum = 0
let analogButton = 0
let Y = 0
let X = 0
let Y_max = 0
let X_max = 0
radio.setGroup(191)
radio.setTransmitPower(7)
let User = "Ro-Bird"
X_max = 1024
Y_max = 1023
basic.forever(function () {
    readJoystick()
    radio.sendValue(User, X * 100 + Y * 10 + buttonNum)
})
