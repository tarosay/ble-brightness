bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteNumber(input.lightLevel())
    basic.pause(500)
})
