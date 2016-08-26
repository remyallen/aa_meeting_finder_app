# aa_meeting_finder_app

For my solo project I created an app that is an Alcoholics Anonymous Meeting Finder. The app allows a user to quickly filter A.A. Meetings in the Minneapolis area by day, location, and time. It also allows for a search for meetings on a map view, and records whether or not meetings are accessible by public transportation. As an added feature, it also has a library of links to common A.A. literature and frequently asked questions. The name of the app, Serenity, comes from the well known A.A. prayer recited at the beginning of every meeting.
	
This app is geared toward a newcomer to A.A. and aims to make that person feel more comfortable finding and going into a meeting by providing these resources. It is directed solely for the user to find a meeting and continue attending. As such, it is a very purpose driven application, and I made a conscious choice to keep the layout simple and uncluttered. 
	
I chose to create an app like this because I realize how intimidating deciding to attend meetings can be. It can also be surprisingly difficult to sift through the information available to find a suitable meeting time and location. I wanted to simplify that process, and also provide a new potential member with all the information they could want so they have a sense of what they are walking into, in order to reduce their anxiety. 

To create the main view, and really the whole application, I used the Bootstrap framework.
	
Notice the simplicity of the page leads a user directly to the dropdown boxes. 

The initial dropdown will allow a user to choose a day of the meeting. When clicked it will populate a results list with all information locations that have an meeting or event on that day. Meetings are separated by location, and have the location address, meeting times, and meeting name / type. Using the bootstrap framework, I created an organized and easily readable results list. These results are stored in a Mongo database and I’m using Mongoose to interact with it.

The second dropdown box is dynamically populated based on the locations that have meetings on the day chosen previously. This allows a user to further filter their results and drill down to the specific meeting they are searching for. 


Furthermore, the meeting time is also dynamically populated to show all the times of meetings at a specific location on a specific day. 

I used Angular to allow the dynamic population of the drop down boxes. 

This map view allows a user to view and search meetings in the area visually. Each pin drop represents a meeting location. For this view I used Google Maps API. It works hand-in-hand with Angular by bringing in its own custom directives. 

When a pin drop is selected, a text box appears with the meeting location name and address. 

The pin points are also dynamically added from the database, meaning that as you add meeting information to the database the points automatically show up on the map. This feature is part of the API; the coordinates from the database are given to API to create the pinpoints. 

The next view, lists the meeting locations that are accessible by public transport. This list is created by crowdsourcing.

Back on the main results view, 

Each location has a button to give each user the option to list this location as public transport accessible. 

By clicking this button, the user logs this location as accessible and the location is added automatically to the Public Transport List. 

And, there it is. The meeting will be added to the bottom of the list. 

The final view is the documents library. Contained in this view are links to over a dozen common and useful A.A. writings. Including the main readings common to most meetings, as well as some pamphlets aimed at addressing frequently asked questions. The idea behind including these readings was to allow a potential new A.A. member to familiarize themselves with the ideas and traditions of A.A. before their first meeting, in hopes of making them feel more comfortable. 

There were a few a problems I ran into while working on this project. The first was the Google Maps API.

Using this API created a much bigger issue for me than I was expecting. I thought it would be more of a plug and play situation, where I could just plug in and fire it up and we’d be on our way. It was, however, not this way. 
	
After the initial install, I had to bring a lot of things into the vendor’s directory as well as sourced into the index HTML in order to make it work that were either not specified or not clear in the documentation. It wasn’t necessarily difficult, but it was unexpectedly time consuming.

The other major problem I ran into with this project was that there is no API available for meeting information, so I was forced to manually gather and insert all the data used into my database. All the information gathered also had to be manipulated to fit my needs. This took a lot of time consuming data entry. This issue seemed to snowball and showed its face in nearly every other aspect of the app’s functionality.

After I had gathered the data, I inserted it into a web application called JSON Lint. That allowed me to make the data into a valid JSON format, which I could then enter into Mongo. 
  
Besides learning and practicing old and new technologies as I went while creating this project, there were a few lessons learned that were more intangible. The main one of which, was finding the balance between figuring out problems myself and knowing when to get help.
	
When faced with a problem, I tried to sift through the documentation or google the issue to try and narrow my questions down to a specific inquiry. Only when I could put my question into a clear idea, and only when I had exhausted my other resources, did I ask for help. However, the trick comes in finding the right balance.


	 
