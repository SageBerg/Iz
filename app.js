current_outcome = 'notice_maria'
current_options = {
  "a": "go_talk_to_maria",
  "b": "buy_a_drink",
  "c": "leave_in_a_huff",
  "d": "check_your_phone"
}
current_date = new Date(2018, 4, 26, 16)
last_action = null

function take_action(letter) {
  action_name = current_options[letter];
  last_action = action_name;
  current_outcome = generate_outcome(action_name);
  current_options = generate_options(current_outcome);
  action_result = {
    'outcome': current_outcome,
    'options': current_options
  }
  return action_result;
}
