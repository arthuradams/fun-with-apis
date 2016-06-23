# fun-with-apis
WDI API Lab, uses API of http://ineedaprompt.com/

## Current Status
The core of this is generating a random phrase using the ineedaprompt API and displaying it. 

It's a simple API: just add one of five "types" (out of adjective, noun, adverb, verb and location) to the query URL http://ineedaprompt.com/dictionary/default/prompt?q= and the API returns a JSON response. Multiple entries can be added, joined with `+`. For instance, the initial message is generated with http://ineedaprompt.com/dictionary/default/prompt?q=adjective+noun+adverb+verb+location. I'm unsure if there's a limit to the query length beyond any imposed by the browser. 

I generate the query string via nine dropdown selectors. Each contains the five options, plus a blank. When the user changes a selector, a new query is generated and a new result is displayed. The selectors are all added to the page via JavaScript, since they are identical except for the ID's.

## Future Enhancements
This project really caught my interest, both technically and creatively, and there's a lot more I'd like to do with it. I want to add a button for the user to click to add more selectors, or just set the selector count to some user-inout value. I'd like to give the option of generating a new query upon button press rather than changing a selector -- I think it's cooler to do it on selector change, but on button press is more user-friendly. I definitely should give credit to Robin Thomas for the API (and will, if I ever put this live on the Web) and I'd also link to "They Fight Crime" at TVTropes:  http://tvtropes.org/pmwiki/pmwiki.php/Main/TheyFightCrime 

## Even Further in the future
Beyond that, a running log of previous results "off to the side" would be snazzy. Taking it even further, look into Robin's source code, fork it, and make it my own with a rewrite, or at least change it so I could run it locally and not have to deal with secure protocol issues. 
