const body = document.querySelector("body")
const switchHTML = document.querySelector(".switch")
const internSwitch = document.querySelector(".intern")
const text = document.querySelector("#text")

let statusSwitch = true
let background = 255
let margin = 0

let canSwitch = true

internSwitch.addEventListener("click", () => {

    if (canSwitch) {
        canSwitch = false

        if (statusSwitch) {
            switchHTML.style.justifyContent = "flex-end"
            internSwitch.style.borderRadius = "0px 10px 10px 0px"
            internSwitch.style.backgroundColor = "rgb(200,0,0)"

            while (margin < 50) {
                margin++
                internSwitch.style.marginLeft = `${margin}%`
            }
            text.style.color = "#000"
            text.innerText = "OFF"

            let interval = setInterval(() => {

                if (background > 0) {
                    background -= 1
                    body.style.backgroundColor = `rgb(${background},${background},${background})`
                } else {
                    clearInterval(interval)
                    canSwitch = true
                }

            }, 5)

        } else {
            switchHTML.style.justifyContent = "flex-start"
            internSwitch.style.borderRadius = "10px 0px 0px 10px"
            internSwitch.style.backgroundColor = "rgb(0, 255, 42)"

            while (margin > 0) {
                margin--
                internSwitch.style.marginLeft = `${margin}%`
            }

            text.style.color = "#fff"
            text.innerText = "ON"

            let interval = setInterval(() => {

                if (background < 255) {
                    background += 1
                    console.log(`rgb(${background},${background},${Math.round(background / 5)})`)
                    body.style.backgroundColor = `rgb(${background},${background},${Math.round(background / 1.5)})`
                } else {
                    clearInterval(interval)
                    canSwitch = true
                }

            }, 2.5)


        }
        statusSwitch = !statusSwitch

    }

})