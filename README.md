# React-Tube
### Andrew Ammon

React-tube is a simple single-page app built using React. This app employs the Youtube API to render videos from Youtube. Upon loading the page you will see a list of the first five videos that come up when you search 'React JS' on Youtube.  The first video in that last will render in the player and will play when clicked on.  To view any videos in the list, simply click on that video and the main video player will switch to that video. 

### Technologies used:
HTML, CSS, JavaScript, React
NPM Packages: youtube-api-search, dotenv, lodash
React-tube used the create-react-app framework to initialize the build. The youtube-api-search allows us to make search requests on youtube. The request sent requires an API key and a search term and youtube will return a list of the first five videos that come up. The dotenv package was used to store the API key from youtube. The lodash package was used to delay invoking the search term when entered into the search bar by using the lodash .debounce function. The delay is set to 300ms, and without the delay, the search request qould be sent with every keystroke. 

### Installation instructions for any dependencies:
To initialize the app, cd into the youtube directory, run npm install, and npm start to get the react app running in your browser. 

