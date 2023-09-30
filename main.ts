radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("hałas", receivedNumber)
    lista.push(receivedNumber)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    suma = 0
    for (let wartość of lista) {
        suma = suma + wartość
    }
    basic.showNumber(suma / lista.length)
    basic.pause(1000)
    basic.clearScreen()
})
let suma = 0
let lista: number[] = []
radio.setGroup(1)
basic.forever(function () {
	
})
