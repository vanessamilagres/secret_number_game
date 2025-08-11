let randomNumberArray = []
let limitNumber = 50
let randomNumber = generateRandomNumber() 
let tryAttempt = 1

function textInView(tag, text){
    let input = document.querySelector(tag)
    input.innerHTML = text

    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2})
}

function inicialMessage(){
    textInView('h1', 'Jogo Alura')
    textInView('p', 'Escolha um número entre 1 e 50')
}

inicialMessage()

function checkAttempt(){
    let attemptNumber = document.querySelector('input').value

    if (attemptNumber == randomNumber){
        let tryPlural = tryAttempt > 1 ? 'tentativas' : 'tentativa'
        let tryMessage = `Você acertou o número com ${tryAttempt} ${tryPlural}!`

        textInView('p', tryMessage)  

        document.getElementById('reboot').removeAttribute('disabled')
    }else{
        if (attemptNumber > randomNumber) {
            textInView('p', 'O número é menor!')
        }else{
            textInView('p', 'O número é maior')  
        }
    }
    tryAttempt++
    cleanInput()
}

function generateRandomNumber(){
    let number = parseInt(Math.random() * limitNumber + 1)
    let listNumber = randomNumberArray.length
    
    if(listNumber == limitNumber){
        randomNumberArray = []
    }
    if(randomNumberArray.includes(number)){
        return generateRandomNumber()
    }else{
        randomNumberArray.push(number)
        return number
    }
}

function cleanInput(){
    attemptNumber = document.querySelector('input')
    attemptNumber.value = ''
}

function rebootGame(){
    randomNumber = generateRandomNumber()
    cleanInput()
    tryAttempt = 1
    inicialMessage()
    document.getElementById('reboot').setAttribute('disabled', true)
}