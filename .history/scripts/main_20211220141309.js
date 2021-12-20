



let caculate = () => {
    let audio = document.getElementById('audio')
    audio.addEventListener('keypress', e => {
        if()
    })
    //-----------------------------------
    let button = document.querySelector('button')
    let mass = document.querySelector('#input input')
    let flex_container = document.getElementsByClassName('flex-container')[0]
    let planet = document.querySelector('#option')

    let description = document.getElementsByClassName('description')[0]

    let valueSelected = 'none'
    planet.addEventListener('change', () => {
        valueSelected = planet.value
    })

    button.addEventListener('click', () => {
        //message
        let imgPlanet = document.querySelector('img')
        let message = document.querySelector('.image span')

        description.style.display = 'none'

        let pattern = /\d+/g
        if(mass.value === '' || !pattern.test(mass.value)) {     
            flex_container.style.justifyContent = 'center'
            message.style.display = 'block'
            imgPlanet.style.display = 'none'
        }
        else if(valueSelected === 'none') {
            flex_container.style.justifyContent = 'center'
            message.style.display = 'block'
            message.textContent = 'You did not choose a planet yet'
            imgPlanet.style.display = 'none'
        }
        else if(valueSelected !== 'none' && mass.value !== '') {
            message.style.display = 'none'

            flex_container.style.justifyContent = 'space-between'
            description.style.display = 'block'
            flex_container.style.alignItems = 'center'

            let gravitation = 0
            let display_gra = document.querySelector('.description span')
            let display_Info = document.querySelector('.description div')
            imgPlanet.style.display = 'block'

            
            if(valueSelected === 'MERCURY') {
                imgPlanet.src = './images/mercury.png'
                gravitation = mass.value * 3.7
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 

            }
            else if(valueSelected === 'VENUS') {
                imgPlanet.src = './images/venus.png'
                gravitation = mass.value * 8.87
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'EARTH') {
                imgPlanet.src = './images/earth.png'
                gravitation = mass.value * 9.807
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'MOON') {
                imgPlanet.src = './images/moon.png'
                gravitation = mass.value * 1.62
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'MARS') {
                imgPlanet.src = './images/mars.png'
                gravitation = mass.value * 3.721
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'JUPITER') {
                imgPlanet.src = './images/jupiter.png'
                gravitation = mass.value * 24.79
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'SATURN') {
                imgPlanet.src = './images/saturn.png'
                gravitation = mass.value * 10.44
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'URANUS') {
                imgPlanet.src = './images/uranus.png'
                gravitation = mass.value * 8.87
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'NEPTUNE') {
                imgPlanet.src = './images/neptune.png'
                gravitation = mass.value * 11.15
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
            else if(valueSelected === 'PLUTO') {
                imgPlanet.src = './images/pluto.png'
                gravitation = mass.value * 0.62
                display_gra.textContent = `${gravitation.toFixed(2)} N`

                display_Info.textContent = `The weight of the object on ${valueSelected}` 
            }
        }
    }) 
    
}

caculate()


