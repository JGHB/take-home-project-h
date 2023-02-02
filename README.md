## Design Choices

I designed this demo application around two main features I wanted to showcase. One of these features is the Course page, where users can view lessons and a discussion board. Users can write their own posts answering discusion questions and add them to the board. For the scope of this demo project, this page is static and any posts added to the discussion board will dissapear when the page is refreshed, but this could be changed with the addition of a backend service keeping track of posts. I decided to implement this feature because it's a feature that could be expanded upon significantly going forward, and contains functionality that could be applied elsewhere to other features. Within this feature, lesson plans could become more complex, with embedded videos, functionality that breaks up curriculum into chunks, and more. Elements of this page could also be applied in other features within the LMS, such as building forms applications.

The second major feature I created was a page where users can access free scientific literature through the [Project Gutenberg API](https://gutendex.com/). This feature allows users to select a literature subject from a list and view dozens books falling under the chosen genre. Users can download listed books as PDF or EPUB files. This feature could later be expanded to be used for targeted marketing to match users with certain products or provide students integrated access to publications accessible through their university.

Each page created in this demo is responsive and can be viewed on any screen size. I tried to follow basic rules of accessible design by making use of contrast, hover and selected states, and by maintaining functionality of the page if zoomed in.

## Development Decisions

I decided to use React as the main technology to build this LMS portal. When thinking about different web  
technologies and how they scale, React would fall on the end of the spectrum where it requires more of a  
time investment upfront in order to get the same level of functionality as you would through a tool such as  
Wordpress. In the long term, however, React allows for more versatility as an application gets bigger and more
complex, which helps to avoid growing pains as more and more features are added to the product. I chose to
use React for this reason. I also decided to use the [Next.js](https://nextjs.org/) framework, which helps to improve application performance and ease of development. This was my first time using Next. I wanted to go
beyond what I had read about it's benefits and drawbacks and experience it for myself in order to be able to make a judgement on whether it would scale well if this demo application was to be expanded upon. I built this demo
from the [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) starter code.
I used Typescript for this project over javascript since it also helps with project scalability.

## Future Improvements

There are several improvements that could be made to this application going forward. Two major additions that 
would significantly increase the practicality of the application would be to add authentication and a backend that would allow for persistant data. With these two changes, many areas of functionality would open up. The application could have different discussion 
boards with different questions, and user responses would not dissapear after the page is refreshed. Authentication would allow for the specification of different kinds of users, such as students, professors, or adiminstrators, who all would have unique experiences within
the application. Interfaces to allow for the creation of new content could be developed to allow for professors and administrators. With regards to the feature that provides free online access to books, improvements could be made such as adding a search feature and pagination to make the page more user friendly. As the application grew, it would become important to add unit and integration testing to make sure that it continued to work properly, despite having a growing number of interconnected features.
