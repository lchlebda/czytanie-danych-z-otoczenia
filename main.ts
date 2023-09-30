let suma = 0
let lista: number[] = []
input.onButtonPressed(Button.A, function () {
    suma = 0
    for (let wartość of lista) {
        suma = suma + wartość
    }
    basic.showNumber(suma / lista.length)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
    serial.writeValue("hałas", input.temperature())
    lista.push(input.temperature())
    basic.pause(500)
})
