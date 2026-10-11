const robot = require("robotjs")

const INTERVAL = 1 * 60 * 1000 // 3 minutes

function moveMouse() {
  const position = robot.getMousePos()

  // Move mouse 1 pixel and return to its original position
  robot.moveMouse(position.x + 1, position.y)
  setTimeout(() => {
    robot.moveMouse(position.x, position.y)
  }, 100)

  console.log(`Mouse moved at ${new Date().toLocaleTimeString()}`)
}

// Run once every 3 minutes
setInterval(moveMouse, INTERVAL)

console.log("Mouse mover started. Press Ctrl+C to stop.")
