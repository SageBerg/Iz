function generate_outcome(action_name) {
  var possible_outcome_names = new Raffle;
  add_action_outcomes(possible_outcome_names, action_name);
  outcome_name = possible_outcome_names.get();
  outcome = execute_outcome(outcome_name);
  return outcome;
}

function add_action_outcomes(possible_outcomes, action_name) {
  switch (action_name) {
    case 'buy_a_drink':
      possible_outcomes.put('what_cocktail');
      break;
    default:
      alert('error: ' + action_name + ' not in list');
  }
}

function what_cocktail() {
}

outcomes =
{
  "what_cocktail": {
    "change_game_state": what_cocktail,
    "description": "What cocktail would like?",
    "options": {
      "a":"Cosmopolitan",
      "b": "Martini",
      "c": "I can't decide",
      "d": "Molotov Cocktail"
    }
  }
}

function execute_outcome(outcome_name) {
  outcome = outcomes[outcome_name];
  outcome['change_game_state']();
  return outcome;
}
