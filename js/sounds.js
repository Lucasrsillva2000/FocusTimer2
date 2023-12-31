import {
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace
} from './elements.js'

export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const bgAudioForest = new Audio('/audio/Floresta.wav?raw=true')
  const bgAudioRain = new Audio('/audio/Chuva.wav?raw=true')
  const bgAudioCoffeeShop = new Audio('/audio/Cafeteria.wav?raw=true')
  const bgAudioFireplace = new Audio('/audio/Lareira.wav?raw=true')

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFireplace.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function audioForest() {
    buttonSoundForest.classList.contains('active')
      ? bgAudioForest.play()
      : bgAudioForest.pause()
  }

  function audioRain() {
    buttonSoundRain.classList.contains('active')
      ? bgAudioRain.play()
      : bgAudioRain.pause()
  }

  function audioCoffeeShop() {
    buttonSoundCoffeeShop.classList.contains('active')
      ? bgAudioCoffeeShop.play()
      : bgAudioCoffeeShop.pause()
  }

  function audioFireplace() {
    buttonSoundFireplace.classList.contains('active')
      ? bgAudioFireplace.play()
      : bgAudioFireplace.pause()
  }

  return {
    pressButton,
    timeEnd,
    audioForest,
    audioRain,
    audioCoffeeShop,
    audioFireplace
  }
}
