const successEngine = {
  _personalityTypes: [
    // Source: https://www.16personalities.com/personality-types
    "Architect [INTJ] - Imaginative and strategic thinkers, with a plan for everything.",
    "Logician [INTP] - Innovative inventors with an unquenchable thirst for knowledge.",
    "Commander [ENTJ] - Bold, imaginative and strong-willed leaders, always finding a way - or making one.",
    "Debater [ENTP] - Smart and curious thinkers who cannot resist an intellectual challenge.",
  ],
  _workPrinciples: [
    // Source: https://www.erfolgsprinzipien.com/Content/Principles%20Excerpt.pdf
    "Realize that you have nothing to fear from knowing the truth.",
    "Have integrity and demand it from others.",
    "Create an environment in which everyone has the right\
        to understand what makes sense and no one has the\
        right to hold a critical opinion without speaking up.",
    "Be radically transparent.",
    "Meaningful relationships and meaningful work are\
        mutually reinforcing.",
    "Be loyal to the common mission and not to anyone\
        who is not operating consistently with it.",
    "Be crystal clear on what the deal is.",
    "Recognize that the size of the organization can pose\
        a threat to meaningful relationships.",
    "Remember that most people will pretend to operate\
        in your interest while operating in their own.",
    "Treasure honorable people who are capable and\
        will treat you well even when you’re not looking.",
  ],
  _lifePrinciples: [
    // Source: https://www.erfolgsprinzipien.com/Content/Principles%20Excerpt.pdf
    "Dreams + Reality + Determination = A Successful Life.",
    "Truth—or, more precisely, an accurate understanding of\
        reality —is the essential foundation for any good outcome.",
    "Be radically open-minded and radically transparent",
    "Look to nature to learn how reality works",
    "Evolving is life’s greatest accomplishment and\
        its greatest reward.",
    "Understand nature’s practical lessons.",
    "Pain + Reflection = Progress.",
    "Weigh second- and third-order consequences",
    "Own your outcomes.",
    "Look at the machine from the higher level.",
  ],
  randomPersonality() {
    let index = Math.floor(
      Math.random() * Math.floor(this._personalityTypes.length)
    );
    return this._personalityTypes[index];
  },
  randomWorkPrinciples() {
    let index = Math.floor(
      Math.random() * Math.floor(this._workPrinciples.length)
    );
    return this._workPrinciples[index];
  },
  randomLifePrinciples() {
    let index = Math.floor(
      Math.random() * Math.floor(this._lifePrinciples.length)
    );
    return this._lifePrinciples[index];
  },
  kickStart(){  
    console.log("The Success Machine. Helping people to be at their natural best.");
    console.log("To be successful at work you should follow this principle: " + this.randomWorkPrinciples());
    console.log("To enjoy our life you should follow this principle: " + this.randomLifePrinciples());
    console.log("Better together. Let's reflect the principles with " + this.randomPersonality());
  }
};
successEngine.kickStart();
