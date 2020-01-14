class AdaCat {
  /**
   * Creates a cat
   * @param {string} name 
   * @param {string} owner 
   */
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.size = 30
    this.tiredness = 5
  }

  /**
   * Sets hunger level to a value 0 - 10
   * @param {number} newHunger 
   * 
   * @returns {void}
   */
  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0
    }
    if (newHunger > 10) {
      newHunger = 10
    }
    this.hunger = newHunger
  }

    /**
     * Formats description of cat according to its current state.
     * 
     * @returns {String} Description of the cat status
     */
  getDescription() {
    var sleepLine
    if (this.isSleeping) {
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      sleepLine = this.name + ' is awake.'
    }
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',

      'their tiredness is ' + this.tiredness + '/15.',

      sleepLine
    ]

    return lines.join('\n')
  }

    /**
     * Feeding cat reduces hunger, increases size if hunger below 3
     * @returns {void}
     */
  feed() {
    var hunger = this.hunger - 1

    var tiredness = this.tiredness + 1

    if (tiredness > 15) {
      tiredness = 15
    }

    this.tiredness = tiredness

    if (hunger < 3) {
      this.size = this.size + 1
    }

    this.setHunger(hunger)
  }

  /**
   * Sets isSleeping as true
   * @returns {void}
   */
  nap() {
    this.isSleeping = true
    this.tiredness = 0
  }

  /**
   * Sets isSleeping as false
   * @returns {void}
   */
  wakeUp() {
    this.isSleeping = false
  }

  /**
   * Increments hunger and reduces size if hunger above 7
   * @returns {void}
   */
  play() {
    var hunger = this.hunger + 3
    var tiredness = this.tiredness + 3

    if (tiredness > 15) {
      tiredness = 15
    }

    this.tiredness = tiredness

    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
  }

  /**
   * Calculates health score, depending on different size from ideal size, minus hunger
   * @returns {number} healthScore
   */
  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat
