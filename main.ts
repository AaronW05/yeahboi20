function hardright () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.All)
}
function softleft () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
}
function softright () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
}
function object_detected () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    }
}
function reverse () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
}
function hardleft () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.All)
}
function all_ahead () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
}
let left_turn = 0
let IRR = 0
let IRL = 0
music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
while (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    IRL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    IRR = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (IRL == 0 && IRR == 0) {
        all_ahead()
    } else if (IRR == 0 && IRL == 1) {
        left_turn = 0
        softright()
    } else if (IRL == 0 && IRR == 1) {
        left_turn = 1
        softleft()
    } else if (false) {
        reverse()
    } else {
        if (left_turn) {
            softright()
        } else {
            softleft()
        }
    }
})
