basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
music.play(music.stringPlayable("C5 B A G F G A B ", 90), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("E D E D E D E D ", 90), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # # # . .
    # . . . .
    # # . . .
    # . . . .
    # . . . .
    `)
music.play(music.stringPlayable("C5 B A G F G A B ", 90), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("G B A G C5 B A B ", 90), music.PlaybackMode.UntilDone)
