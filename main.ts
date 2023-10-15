radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("temperatura", receivedNumber)
    lista.push(receivedNumber)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    max = -272
    for (let wartość of lista) {
        if (wartość > max) {
            max = wartość
        }
    }
    basic.showNumber(max)
    basic.pause(1000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    suma = 0
    for (let wartość of lista) {
        suma = suma + wartość
    }
    basic.showNumber(suma / lista.length)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    lista = []
})
input.onButtonPressed(Button.B, function () {
    min = 100000
    for (let wartość of lista) {
        if (wartość < min) {
            min = wartość
        }
    }
    basic.showNumber(min)
    basic.pause(1000)
    basic.clearScreen()
})
let min = 0
let suma = 0
let max = 0
let lista: number[] = []
radio.setGroup(1)
basic.forever(function () {
	
})
