function generate_options(outcome) {
  new_options = {}
  for (letter_option in outcome['options']) {
    new_options[letter_option] = outcome['options'][letter_option]
  }
  return new_options
}

options = {
"buy_a_drink": "buy a drink",
"check_your_phone": "check your phone",
"cosmo": "Cosmopolitan,",
"go_talk_to_maria": "go talk to her",
"leave_in_a_huff": "leave in a huff",
}
