# week4-FACNhosers
Repo for FAC'N Hoser's Autocomplete project

## User Experience

User starts to type a word and Autocomplete will sugest endings to the word from our dictionary (initially a dictionary of animals)

## App Logic

**Client Side**
 - [x] User types letters
 - [x] Add Event Listener on key down:
  - [ ] Make request to our server, with the body of the typed letters (/makeRequest)
  - [ ] Receive response which should be a list of matching words
  - [ ] Render list of words to the index.html dom, this should replace any previous list

**Server Side**
- [ ] Receive the request at /makeRequest:
  - [ ] Extract the body of request
  - [x] Search through our dictionary for the matching words
    - [x] function that takes a string and a dictionary and searches the dictionary, returning the first five words that start with the string.
  - [ ] Make body of response contain up to 5 words
  - [ ] send response back to client

## Tests

**Client Side**
  - [x] Test addEventListener
  - [ ] Test RenderFunction
  - [ ] Maybe test makeRequest

**Server Side**
  - [ ] Test that extracting the body of the request correct - as a string
  - [ ] Test search function
  - [ ] Test the making response part

## Stretch Goals

- [ ] Put on heroku
- [ ] Basic CSS
- [ ] Use other dictionaries: Hebrew, Slang, Arabic etc.
- [ ] Add an Add word button
- [ ] Possibly add a button the makes a request to an outside API to get a definition
- [ ] Advanced CSS

## Day 2 plan:


 1. Mavis and Joudy make request function client Side, Suha and Lawson test search function server side.
 2. As a four look at recieving the request and extracting data.
 3. Two of us send response, whilst other two work on render function?
 4. Stretch goals?
