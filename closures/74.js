const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction
    const launch = () => {
        timeWithoutDestruction = -1
        return 'EXPLODE!!!!'
    }
    setInterval(
        passTime,
        1000);

    return {

        // 如果不返回launch字段则ohno不会有launch功能,所以这是closure的好处
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton()
ohno.totalPeaceTime()
ohno.launch()