bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 20)
    basic.pause(480)
    pins.servoWritePin(AnalogPin.P1, 147)
})
bluetooth.startUartService()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.pause(1000)
    if (input.lightLevel() > 2) {
        pins.servoWritePin(AnalogPin.P1, 20)
        basic.pause(480)
        pins.servoWritePin(AnalogPin.P1, 147)
    }
})
