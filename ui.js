function take_action_and_draw(letter_option) {
  var action_result = take_action(letter_option)
  outcome = action_result['outcome']
  options = action_result['options']
  update_ui(outcome, options)
}

function update_ui(current_outcome, current_options) {
  draw_outcome_description(current_outcome)
  draw_option_descriptions(current_options)
}

function draw_outcome_description(outcome) {
  document.getElementById('outcome-text').innerHTML = outcome['description']
}

function draw_option_descriptions(options) {
  for (var letter_option in options) {
    document.getElementById(letter_option).innerHTML = option_names_to_descritiops[options[letter_option]]
  }
}
