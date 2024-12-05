input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    `)
basic.showIcon(IconNames.Heart)
