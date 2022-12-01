crickit.servo1.setAngle(90)
basic.pause(100)
basic.forever(function () {
    crickit.servo1.setAngle(0)
    basic.pause(100)
    crickit.servo1.setAngle(180)
    basic.pause(100)
})
