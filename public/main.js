let teamOneScore = 0
const teamOneScoreText = document.querySelector('.team-1-score')
teamOneScoreText.textContent = teamOneScore

const teamOnePlusOne = () => {
  // teamOneScore ++
  teamOneScore += 1
  // teamOneScore = teamOneScore + 1
  console.log(teamOneScore)
  teamOneScoreText.textContent = teamOneScore
  // if score is even color === green
  if (teamOneScore % 2 === 0) {
    teamOneScoreText.style.color = 'green'
  } else {
    teamOneScoreText.style.color = 'purple'
  }
  if (teamOneScore === 10) {
    console.log('team one won')
    document.querySelector('.team-1-name').style.color = 'red'
  }
}

const changeColor = () => {
  console.log('color should change')
  teamOneScoreText.style.color = 'blue'
}

const changeColorBack = () => {
  teamOneScoreText.style.color = 'black'
}

// teamOneScoreText.textContent = teamOneScore

const main = () => {
  document.querySelector('.team-1-add-1-button').addEventListener('click', teamOnePlusOne)
  teamOneScoreText.addEventListener('mouseenter', changeColor)
  teamOneScoreText.addEventListener('mouseleave', changeColorBack)

  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)
