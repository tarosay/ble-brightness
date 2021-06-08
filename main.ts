bluetooth.onBluetoothConnected(function () {
    led.enable(true)
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    led.enable(false)
})
input.onButtonPressed(Button.A, function () {
    led.enable(true)
    basic.showNumber(input.lightLevel())
    basic.pause(2000)
    led.enable(false)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    bluetooth.uartWriteNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    basic.showNumber(input.lightLevel())
    basic.pause(2000)
    led.enable(false)
})
let cmd = ""
bluetooth.startUartService()
led.enable(true)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
led.setBrightness(2)
led.enable(false)
basic.forever(function () {
	
})
