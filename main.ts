basic.forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showString("Olá nós chamamos Thomaz e Lael")
    basic.showIcon(IconNames.No)
    basic.showString("Temos 14 anos")
})
