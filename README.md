tagSoupTitanium
====================

With this native Android Titanium module you will be able to properly share HTML formatted text to Gmail (and other apps). 

##Get the latest compiled module :

[Distribution](https://github.com/joseandro/tagSoupTitanium/blob/master/android/dist/com.tagsoup.cc-android-1.0.0.zip)


##Usage example:

~~~
var tagSoup = require('com.tagSoup.cc');

//dispatchHTML( String title, String subject, String contents  )
tagSoup.dispatchHTML('Sharing html' , 'Subject', '<h1> H1 Title </h1> <h2> H2 Title </h2> <p> This is a paragraph <p> <br/> <br/> <a href="http://www.google.com"> Go to Google </a>');

~~~
[Check App.js](https://raw.githubusercontent.com/joseandro/tagSoupTitanium/master/android/example/app.js)

##Methods:

####dispatchHTML( String title, String subject, String contents  )
* title    - The sharing dialog title
* subject  - EXTRA_SUBJECT share intent parameter
* contents - EXTRA_TEXT share intent parameter

This method dispatches an intent with Spannable text to other apps.
With it is possible to transform HTML into an email ;)
