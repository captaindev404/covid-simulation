const checkCollision = (p1, p2) => {
    const distance = dist(p1.xpos, p1.ypos, p2.xpos, p2.ypos)
    if (distance < p1.rad + p2.rad) {
      console.log(`${p1.id} infected ${p2.id}`)

      if (p1.infected) {
            p2.infected = true
        }
    }
}
