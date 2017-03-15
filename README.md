# week4-FACNhosers
Repo for FAC'N Hoser's Autocomplete project:

[Find the site hosted on Heroku here](https://still-reaches-22770.herokuapp.com/)

## User Experience

User starts to type a word and Autocomplete will suggest endings to the word from our dictionary (initially a dictionary of animals)

## App Logic

**Client Side**
 - [x] User types letters
 - [x] Add Event Listener on key down:
  - [x] Make request to our server, with the body of the typed letters (/makeRequest)
  - [x] Receive response which should be a list of matching words
  - [x] Render list of words to the index.html dom, this should replace any previous list

**Server Side**
- [x] Receive the request at /makeRequest:
  - [x] Extract the body of request
  - [x] Search through our dictionary for the matching words
    - [x] function that takes a string and a dictionary and searches the dictionary, returning the first five words that start with the string.
  - [x] Make body of response contain up to 5 words
  - [x] send response back to client

## Tests

**Client Side**
  - [x] Test addEventListener
  - [ ] Test RenderFunction
  - [ ] Maybe test makeRequest

**Server Side**
  - [ ] Test that extracting the body of the request correct - as a string
  - [x] Test search function
  - [ ] Test the making response part

## Stretch Goals

- [x] Put on heroku
- [ ] Basic CSS
- [ ] Use other dictionaries: Hebrew, Slang, Arabic etc.
- [ ] Add API that gets image and info about the animals
- [ ] Add an Add word button
- [ ] Possibly add a button the makes a request to an outside API to get a definition
- [ ] Advanced CSS

## To Do:

1. Two of Us update CSS, two of us refactor the code.
