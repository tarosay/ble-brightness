bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Heart)
})
led.setBrightness(10)
basic.showIcon(IconNames.Heart)
bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteNumber(input.lightLevel())
    basic.pause(500)
})
