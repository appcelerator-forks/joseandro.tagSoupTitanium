// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.
var tagSoup = require('com.tagSoup.cc');

//dispatchHTML( String title, String subject, String contents  )
tagSoup.dispatchHTML('Sharing html' , 'Subject', '<h1> H1 Title </h1> <h2> H2 Title </h2> <p> This is a paragraph <p> <br/> <br/> <a href="http://www.google.com"> Go to Google </a>');