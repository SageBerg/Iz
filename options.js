function generate_options(outcome) {
  new_options = {}
  for (letter_option in outcome['options']) {
    new_options[letter_option] = outcome['options'][letter_option]
  }
  // TODO: options raffle
  return new_options
}

option_names_to_descritiops = {
"buy_a_drink": "buy a drink",
"check_your_phone": "check your phone",
"cosmopolitan": "Cosmopolitan",
"go_talk_to_maria": "go talk to her",
"i_cant_decide_what_cocktail": "I can't decide",
"leave_in_a_huff": "leave in a huff",
"martini": "Martini",
"molotov": "Molotov Cocktail",
}
