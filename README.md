# Counting Sheep - Game

I will plan, code and implement a game:

- When the game is started a random number of sheep will appear on the screen and a countdown timer will begin.

- The user either guesses or counts the number of sheep in each round (the number of sheep changes after every guess).

- If the user is correct, the number of sheep is added to the "Correct" score tally.

- If the user is incorrect, the number of sheep the user is off by is added to the "Incorrect" score tally. The correct score is incremented by the amount of sheep there were in total minus the amount the user is off by (i.e. if the user guesses 4 more than were there in total, 4 are taken of the total). This method discourages high guesses to cheat the game.

- When the timer reaches zero, the game is over and the users final score is given by the number of sheep correctly counted.

## UX

The website will have a target audience of both younger and older users.

- Users of all ages may use the game to pass the time or to counteract boredom.

- Younger users may use the game to practice and improve counting and observation skills, in a fun, enjoyable and non-intimidating environment.

- Older users will enjoy the challenging aspect of the game with an aim to get 100% score.

#### User Stories

- "I often play simple and straight forward games if I am bored or I have some spare time."

- "My child has recently learned to count and would make use of a fun, colourful, child-friendly game to practice."

- "I enjoy challenging games especially when I am competing with myself and my previous scores; knowing I am improving with practice."

---

#### Mockups

The game-page was first developed using a hand-drawn wireframe to assertain how the layout and structure will be assembled.

Following this, mockups of the game were constructed at various stages of the game-process:

Landing/Welcome Page
![Landing/Welcome Page](assets/mockups/mockup1.png)

Game Start
![Game Start](assets/mockups/mockup2.png)

Mid Game
![Mid Game](assets/mockups/mockup3.png)

Game End
![Game End](assets/mockups/mockup4.png)


---

## Features

### Existing Features

Layout
- The background features hills in the far distance, with a field in the foreground which acts as the game area.
- The game area is surrounded by a a brown box which acts as a 'fence'.
- Below the game area is the score area - a timer on the left, with an answer-input/submit button on the right and finally a score section below with both correct and incorrect indicators.

The Landing/Welcome Screen:
- The Timer is frozen on the time limit (two minutes).
- The answer-input/submit button is disabled.
- The correct and incorrect scores both show zero. 
- A welcome message appears in the game area.
- The welcome message gives a light hearted, comical context to the user and explains the rules of the game, with a button to start the game.

Game Start:
- The welcome message dissapears upon pressing the start button.
- A random number of sheep, in random positions, will appear in the brown box.
- The timer begins to countdown from 2 minutes.
- The answer-input and submit button are activated.
- The answer-input will have focus.

Mid Game:
- Users must count the sheep, then type how many there are in the answer-input and click submit or hit enter.
- The game determines if the answer was correct or incorrect and a relevant message appears briefly; either "Correct!" or "Wrong!".
- If correct, the number of sheep counted is incremented on to the "Correct" score value.
- If incorrect the amount the user was out by is added to the "Incorrect" score value and the "Correct" score is increased by the offset value (i.e. the correct number of sheep minus the number of sheep the user was off by).
- After submit is pressed and all scores are calculated, the game area and answer-input is cleared and a new random number of sheep in random positions appear.
- The game repeats round after round until the timer reaches zero. 

Game End:
- When the timer reaches zero the game ends.
- The correct and incorrect scores are frozen at the final score obtained.
- The answer-input and submit button is disabled. 
- The game area and answer-input fields are cleared.
- An "Time's up!" message appears to tell the user the total number of sheep counted from a possible maximum, with more text to encourage the user to restart the game.
- The "Time's up!" message includes a button to restart the game.

Restart game:
- The game area is cleared (the "Time's up!" message dissapears).
- The timer restarts from two minutes.
- The answer-input and submit button are reactivated.
- The correct and incorrect score values are zeroed.
- A new random number of sheep appear and so begins a new game.

### Yet to be Implemented

Update Timer During Game Play
- Addition/subtraction of a defined number of seconds on the timer with correct/incorrect answers.
- This was originally the concept of the game as can be seen in the mockups. It was found to be difficult to implement but is believed to be possible with more time and futher investigation.

Change Timer Duration
- An option to change the timer's duration pre-game.

Prevent Hidden Sheep
- As the sheep are rendered with a position of absolute (to ensure random spread within the game area), some images are sometimes covered by others. Although complete coverage is rare, it will be investigated on how to prevent this occurring.

Game Modes
- Different game modes for different age groups or ability level - Easy, Medium and Hard game modes with an increasing number of sheep.

Best Score List
- A method of keeping track of the best scores.

Share to social media:
- A method of sharing either the user's score, or the game to social media.

Sign-up:
- User's could sign-up for exclusive content and game play benefits.

---

## Technologies Used
- [Microsoft Word](https://www.microsoft.com/en-gb/microsoft-365/word) was used to construct the mockups as the ability to add text, shapes, pictures, colour and effects is useful in getting a detailed idea of layout.
- [Gitpod](https://gitpod.io/) is used as an online IDE as a platform on which to code.
- [Favicon.io](https://favicon.io/favicon-converter/) was used to create the favicon from a png.
- [VS Code](https://code.visualstudio.com/) is used by Gitpod as it's IDE.
- [Boostrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/) was used for frameworks and general code templates.
- HTML5 is a markup language and has been used to structure and present the content of the webpage.
- CSS3 (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML
- [JavaScript](https://www.javascript.com/) is a high-level programming language and has been used to add interactivity.
- [jQuery Core 3.6.0](https://code.jquery.com/) was used to provide added efficiency to the JavaScript.
- [DLPNG](https://dlpng.com) was used to get a png.
- [subpng](https://www.subpng.com/) was also used to get some png images.

---

## Testing

1. W3C testing for the code.
- Each page of the website was checked independently by copying  and then pasting its html code into the validator. The result often returned errors. Some were consistent across all pages and were easily rectified. Others however were more specific and difficult to correct. An example of such an occurrence was how the validator returned the error: "button must not appear as a descendant of the a element". This was rectified by styling the anchor element with the same class as the button to be used, but not using the button element.
- Screenshots of the validator were taken after testing the code:

index.html
![index.html](assets/validation/index.html.png)

about.html
![about.html](assets/validation/about.html.png)

media.html
![media.html](assets/validation/media.html.png)

contact.html
![contact.html](assets/validation/contact.html.png)


2. CSS testing
- W3C CSS (Jigsaw) Validator was used to test for errors. The test found several small errors and were quickly corrected or deleted if surplus. The successful test result is shown in the following image:

style.css
![style.css](assets/validation/style.css.png)

3. Lighthouse (Dev Tools)
A report was conducted for a mobile device, and returned the following scores:
- Performance - 77%
- Accessibility - 93%
- Best Practices - 80%
- SEO - 89%

There are many things that could be optimised, such as adding a "rel=noopener" to each link for security reasons. All advisories will be considered and acted upon if necessary.

4. User Stories
- The first user story is addressed as the website includes a list of upcoming gigs with a link to an external ticket site.
- The second user story is addressed in the 'About' and 'Media' pages, which provide more information about the band and give examples of live performances for new fans to hear.
- The final user story is fulfilled with the contact page. It provides a method of contacting the band and/or its management in order to begin the booking process.

## Individual Page Testing 

Navigation & Footer:
- Ensure all navigation links load to the correct pages, including the home link connected to the band's logo.
- Test each link in the footer to ensure it takes the user to the correct internal or external page (About, Download & Social Media links).
- Resize the screen to ensure the nav bar collapses to a button on smaller devices and the 'Sign UP' button also disappears.
- Resize the screen to ensure the 'About' section of the footer disappears on smaller devices.

Home Page:
- Go to the "Home" page.
- Resize the screen to ensure the background of the 'Welcome' section is structured correctly at various sizes. 
- Click on the links of the 'New Album' to ensure the correct page is loaded.
- Resize the screen to ensure the layout of the reviews changes as required for various screen sizes.
- Click the 'Full Review' links to check the correct page is loaded.
- Resize the screen to ensure the 'Location column' of the tour table disappears at smaller screen sizes.
- Click each 'Tickets' link to ensure the user is taken to the correct site.

About Page:
- Go to the "About" page.
- Resize the screen to ensure the layout of the 'Origins' section changes accordingly between in-line and vertical placement.
- Click the 'here' link (for tickets) to ensure the user is taken to the correct destination.
- Resize the screen to check the layout of 'The Band' section changes as required; structured vertically on small devices, vertical 4x4 on medium devices and inline 4x4 on larger devices.

Media Page:
- Go to the "Media" page.
- Resize screen to ensure the photograph's layout changes according to screen size; 1 column for extra small screens, 2 colums for small screens, 3 columns for medium screens and 4 columns for large screens.
- Test the videos load correctly and work as intended in the browser, including links to the original video.

Contact Page:
- Go to the "Contact" page.
- Try to submit the empty form and verify that an error message about the required fields appears.
- Try to submit the form with an invalid email address and verify that a relevant error message appears.
- Try to submit the form with all inputs valid and verify that a success message appears.

Modal:
- Click on the 'Sign Up' button to ensure the modal appears.
- Try to submit the empty form and verify that an error message about the required fields appears.
- Try to submit the form with an invalid email address and verify that a relevant error message appears.
- Try to submit the form with an incorrect repeated password and verify that a relevant error message appears.
- Try to submit the form with all inputs valid and verify that a success message appears.

Please note, the modal still requires verification for 'repeated password' to be addressed. This will require javascript to confirm password inputs match.

---

## Bugs

- The heading 'blur' (box-shadow) could not be styled using an id or class in the style.css file. The problem was resolved using a direct style on the element in the html files, however this is not ideal and will be further investigated.
- A small white gap appears below the footer on screen sizes smaller than 992px. This is believed to be due to the responsive adjustment of the contents of the footer but it was unable to be resolved before submition. This will be further investigated. 

## Deployment

This project was developed on [Gitpod](https://gitpod.io/) using the [VS Code](https://code.visualstudio.com/) IDE. It was committed to git and pushed to [Github](https://github.com/) using the built-in Gitpod function.

To deploy the website to [Github Pages](https://pages.github.com/) the following steps were taken.

1. Log in to Github.
2. From the list of repositories, select **lukdav/RUD-band**.
3. Select **Settings** from the right hand side of the menu near the top.
4. Scroll down to the **Github Pages** section.
5. Under **Source**, click the drop-down menu labelled **None** and select **Master Branch**.
6. Click **Save** and the page automatically refreshes.
7. Scroll back down to the **Github Pages** section to retrieve the link to the deployed site.

Note: the deployment of a website is not instant and can take up to 20 minutes.

At the moment of submitting the User Centric Milestone Project, both the Developement Branch and the Master Branch are identical.

### How to run this project locally

To clone this project from GitHub:

1. Follow this link to the [Project GitHub Repository].
2. Next to the green Gitpod button, open the drop-down marked **Code**.
3. In the Clone with HTTPS section, copy the URL for this repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste the URL you copied in step 3.

    ```git clone https://github.com/lukdav/RUD-Band.git```

7. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


---

## Credits

#### Media
As this is a fictional band's website, all images and videos on this site are of various different bands.
The photos used in this site were obtained using a Google 'free image search' (under a creative commons licence) and can be found at the following links:
- [band1](https://en.wikipedia.org/wiki/File:American_Hard_Rock_band,_Alpha_Centauri,_2012.jpg)
- [band2](https://commons.wikimedia.org/wiki/File:Archim%C3%A8de_rock_band.jpg)
- [band3](https://www.flickr.com/photos/tshrinivasan/20752903484)
- [band4](https://www.flickr.com/photos/61229509@N03/8902401971/)
- [band5](https://www.flickr.com/photos/marlambie/4297386089)
- [band6](https://www.flickr.com/photos/arcticproductions/14466886168/)

- [gig1](https://commons.wikimedia.org/wiki/File:Rock_concert_in_black_and_white_(Unsplash).jpg)
- [gig2](https://pixabay.com/photos/guitar-guitar-player-guitarist-man-5487605/)
- [gig3](https://pixabay.com/photos/concert-music-lz7-maatan%C3%A4kyviss%C3%A4-706016/)
- [gig4](https://pixabay.com/photos/gig-concert-show-music-event-3518406/)
- [gig5](https://www.flickr.com/photos/frf_kmeron/3587036145) 
- [gig6](https://commons.wikimedia.org/wiki/File:Stereophonics_gig_O2_Arena_2013_MMB_15.jpg)
- [gig7](https://commons.wikimedia.org/wiki/File:Lake_Malawi_music_band.jpg)
- [gig8](https://commons.wikimedia.org/wiki/File:Nj_06_band.jpg)

---

## Acknowledgements
I received inspiration for this project from the [Serenity](https://www.serenity-band.com/) band's website.
