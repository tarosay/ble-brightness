bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function () {
	
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(cmd)
    bluetooth.uartWriteNumber(input.lightLevel())
})
let cmd = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
