radio.onReceivedValue(function (name, value) {
    if (value == 3) {
        basic.showString("" + name + "-1400")
    } else if (value == 10) {
        basic.showString("" + name + "-1415")
    }
})
