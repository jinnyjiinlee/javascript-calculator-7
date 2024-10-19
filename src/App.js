import getUserInput from './View/getUserInput.js';
import isCommaSemicolonConditionCheck from './Model/isCommaSemicolonConditionCheck.js';
import addedNumbers from './Model/addedNumbers.js';
import isCustomConditionCheck from './Model/isCustomConditionCheck.js';
import exportUserOutput from './View/exportUserOutput.js';
import exportErrorMessage from './Model/exportErrorMessage.js';

class App {
  async run() {
    const input = await getUserInput();
    if (isCommaSemicolonConditionCheck(input) === true || isCustomConditionCheck(input) === true) {
      const output = addedNumbers(input);
      exportUserOutput(output);
    } else {
      exportErrorMessage();
    }
  }
}

export default App;
