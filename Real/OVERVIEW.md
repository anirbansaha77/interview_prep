# Real Take home Excercise
## Instructions to run the website
- Clone the main branch of the repo
- Run yarn install
- Run yarn start
- the project will auto run a browser on localhost:3000

## Thought process
___
**Constraints**
-- Time is a constraint as this is a take home exercise
-- Limited information on how this app is Used
-- User data is not required to be protected
-- Number of users, business process/regulations will also play a very important role how the code is formatted

**Assumptions**
-- Avoid premature optimization
-- Assumed the least complex use case unless more information is available to keep the complexity of the system low
-- **Design System** -> Assumed that there will be some sort of a design system that will help with common theming, code reusuablity and maintanibility
-- Decided against the use of a complex state management system like REDUX as i dont want to increase complexity unless there is an use case for it.
-- To keep the app simple I have also added the API calls directly in the components that calls the endpoints. This will definitely changed based on how the system is supposed to be used. But for a system which does not need to protect user data/information or endpoints we can call the APIs directly from the components. If that is not the case we can call the APIs from a backend to protect the APIs, Keys, Data.


### Design System
-- I have used Material as the base of the app because Material is a widely used library and very well maintained, this will reduce cost and overhead of maintaing a home grown ui library. There could be a case for not using material if the Business/Product/UX decides not to use a material design philosoply.
-- The vision was to have a separate node module for this design system but due to time constraints i have used a local directory
-- **N.B.:** I have also added developed some components without material to show case that there could be the need for a use case of niche components without material 
-- The Design system will have a set of lower level components directly imported and reskinned from material or coded in house.
-- The Design system will have a set of complex components coded in house for sharing with various teams.
-- The design system will also have common tooling/color palette/fonts/assets (future improvements)

**Layout** -> The app has a layout that is fully responsive. The layout switches from a default column layout to a row layout for larget break point. The header becomes a sidebar.

## Pages
The application has a Pages folder that will contain all Pages rendered by the app. This will segregate the app into logical groups based on what the User sees on the browser. Again the approach can change based on business use case.

#### Home page
Home is the default landing page route -> "/"

**Content** -> The Home page displays a list of Github users as returned from https://api.github.com/users. This is only loaded when the page loads for the first time.
-- When you click any User then the app navigates to the UserDetails page
#### UserDetails "/userdetails/:id"
-- This page reads the user Id from the URL params and renders 3 components. These components are separated from the main page to leverage usability.
-- GitHubRepos - displays the repos of the user
-- GitHubOrganizations - displays the orgs
-- GitHubFollowers -- displays the followers count and first 5 followers
#### NoMatch Error component
-- The app displays an error component if the router cant find the resource requested and the user has a link to the home page.

## System Design
Here is a system design for the app from the limited information. This could be simplified further if we will not need data protection and the app can be deployed on an S3 bucket as a static site. 
![alt text](
https://raw.githubusercontent.com/anirbansaha77/assets/5be8ac994575518454c67e09b7f5129ace01f990/systemdesign.jpg)


Future improvements:
-- Adding a CMS
-- Feature Flags/ Distributed Key Value Pair
-- APM / Logging 
-- Analytics
-- Depending on who and how many Users will use this application the above system design will change


