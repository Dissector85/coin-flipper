input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
