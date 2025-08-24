export const article1markdown = `
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  <img src="/assets/images/articles/kapraEid/DonorHomepage.png" alt="Donor Homepage" />
  <img src="/assets/images/articles/kapraEid/OrganizationHomepage.png" alt="Organization Homepage" />
  <img src="/assets/images/articles/kapraEid/DonationDrive.png" alt="Donation Drive" />
  <img src="/assets/images/articles/kapraEid/DonorHistory.png" alt="Donor History" />
</div>

More than 60 million kilograms of fabric are wasted in Pakistan every year, and this is expected to rise over the next few years. This situation is exacerbated by the fact that Pakistan is also a dumping ground for post-consumer textiles discarded from the EU. Being aware of textile wastage, my team conducted extensive user research into how people dispose of their used clothes in Pakistan. After a series of surveys and interviews, we found that individuals choose between throwing them away, handing them directly to someone they are acquainted with or donating them to organizations that collect these clothes and distribute them on their own. Only 9.2% of the 50 people we gathered feedback from told us that they donated their clothes to charitable organizations. This lack of awareness among people about organizations means people have limited knowledge or access to such organizations. As a result, they prefer the other methods of giving away or disposing of the same clothes they would have otherwise given to organizations. 

> #### KapraEid is one such application that aims to bridge this gap by developing a platform that could provide efficient communication between organizations and donors, which could help boost people's confidence in these organizations.

# Brainstorming Phase
Our first goal was to define the requirements for the application and the potential key features of the application based on the requirements. Due to COVID-19, our brainstorming sessions were carried out over Zoom and Mural. We divided our session into two stages: requirements and highlighting the potential vital features of the application.

### Requirements

We first analyzed the findings from the user research document and determined what the target users of the application (donors and organizations) wanted in the application. The requirements we identified are as follows:  

- The donation process is already very hectic for the user; if we want to ensure that it is convenient, we have to make it user-friendly so that a wide variety of audiences can use the application.
- The user needs to have a smooth transition into the application with a demo or tutorial so that the user is aware of the entire donation process. 
- Other similar donation applications ask questions about the clothes donated by potential donors. These questions include the size of the clothes, the age group of the donors, and the gender and type of clothes. Too many questions can frustrate the user, and the application's aim can be destroyed. Our application should keep the questions to a minimum.
- Potential donors only have a little time from their busy lives to donate clothes. To make this process easier, we must ensure the time taken for the entire process is minimal.
- The potential donors need to trust more of these organizations. Therefore, there should be a feedback process so that the users can observe that the clothes they have donated are going to the right people.  
- The potential donors need to be aware of the different organizations and their aims. Therefore, they must be mindful of the initiatives of such organizations to build trust and awareness.  
- There should be transparency in the donation process and a chat box so donors can contact the organizations in case of queries.  

### Key Features

We built upon the requirements that we had laid down by identifying the different features of our application on Mural. The essential features of the application identified are as follows:  

- ***Uploading the clothing item to the application:*** The first important feature is the minimal detail of the clothing items that are being donated by the user. The user should be asked to take pictures, add descriptions of clothing items and choose clothing categories. These are the only required details and would ensure that the organization knows the condition and aspects of the clothes and if they even needed those clothes while distributing. This ensures that the clothes donated by the user are eventually used by the organization and not dumped by them while they are sorting.  

- ***Describing the organization:*** To ensure the users know the organization's motive, the application offers various organizations from which users can choose according to their preferences and needs. After logging into the application, the user can view the multiple organizations and the motives behind their donation. The organizations, on the other hand, can write and edit their descriptions and pictures so the users know more about them, how they could contact them, how they could help in their program, and they could determine the organization that is the best fit for them.  

- ***Indicating the past drives conducted by the organization through posts:*** The organizations undertaking several drives know the donation procedure. However, donors donating for the first time to an organization would only trust the organization if social proof is provided. This social proof would be provided through various drives they have previously conducted and the results of those donation drives. 

- ***Ratings and reviews for the organization:*** While conducting the user research study, potential donors added that they were more likely to trust organizations when they heard about them from different individuals. Many also stated that they would check reviews on Facebook groups when choosing the organization they wanted to donate to. Therefore, this feature would enable them to select reliable organizations and build trust. The user could then rate the organization anonymously after donating their clothes. The organizations can view the ratings and reviews a donor has added to their page for constructive feedback to improve their process and ensure they build trust with the user.  

- ***Donation drives:*** If an organization wants clothes for a particular area, they could post a new request. They would be required to enter the name, ending date and the description of the drive. The donation drive would then be posted on the donor's home screen. The donor would display a list of all the drives being conducted and where they are being carried out. The organization's name, the time remaining, and the clothes donated to the specific drive would be displayed on the home page. The donor would have the liberty to choose any drive they want, and they could be shown extra information about it. The donors would be satisfied to know where the clothes are going. At the same time, it would reduce the organization's hassle of telling every donor about their specific donation area. This would ensure that anonymity is preserved and the recipient's information is not being given out to the public.  

- ***Social Logins:*** To reduce friction, the sign-in screen can sign in using Google and Facebook; since most application users use these applications in their daily lives, they could log in without adding additional details about them through the sign-in process. 

- ***Adding contactless pickup:*** Considering the pandemic, we want to minimize the contact for both the organization and the donor. The donor could leave the items at their doorstep according to the specified time, and the rider would collect them and send a confirmation message to the potential donors.  

- ***Cashless payment:*** To make the pickup service more convenient, we allowed the user to pay through their credit card and leave their clothes outside their house. The rest of the pickup procedure would be handled by the organizations themselves.  

- ***Messaging:*** The donors could contact the organization with any query they want answered rapidly. Donors could learn more about the organization's donation procedures. They could also contact them if a specific rider has delayed the clothes pickup or is not finding the house location.  

- ***Stories:*** If an organization carries out a donation drive or wants to tell the donors how they are utilizing their resources, they can add images and text to the pictures. 
Complete history of the user's donations: All the activities about the number of clothes they have donated, the drives they have contributed to, and their current and pending donations would be displayed in their profile, and they can easily navigate and check their history. 

- ***Current and Pending Donations:*** The user would have complete access to the successful and pending donations that they have offered. These would be displayed in his/her profile. 

- ***Clothing donation statistics:*** The organization can also benefit from the application if it keeps the donations organized, highlights the contributions made, and evaluates the progress needed to reach its targets.  

- ***Progress bar and charts:*** To help them monitor the progress they have made so far and the time period left for the clothing donation drive to conclude, there is a progress bar along with the charts and graphs for each of the donation drives the organizations are conducting. 

- ***Real-time tracking of the donated clothes:*** The donors should be notified when the organization will be coming to collect the clothes so they can pack the clothes before they arrive. The donors should be able to see the progress of their clothing items and see if they have been picked up by the organization and donated.

Once we had identified the crucial features of our application, we arranged them according to their feasibility vs importance. This enabled us to determine the significance of each feature so we could reach a final design. 

# Design Phase
This was our application's final phase, divided into two parts: Lo-fi prototypes and Hi-fi prototypes. Several features have been added to the application, keeping in mind the problems highlighted by the targeted user and the potential corresponding solutions.

### Lo-fi Design

After discussing the final features, we built our prototype on Balsamiq on an Android phone with dimensions 356x700. 

**Donor low-fi prototype**
We understood that as this was a new application and the user might need to learn about the whole process of donation, so to facilitate the user, we designed a brief tutorial about the application's purpose and the donation process. This process was shown before the registration process. It was ensured that all the welcome screens had a login and signup button, so if the user wants to get started immediately, they can do so.  

The signup and Sign-in screens were designed so the user could conveniently swipe between the two screens. We ensured that the signup screen contained relevant fields to our application to prevent the user from being frustrated. Once users have signed up, they get feedback to check their email for an activation link. They are also shown the button that navigates them directly to the login screen. If they have forgotten their password, they can tap on the hyperlink, redirecting them to a screen that asks for their email and informs them to check it.  

After logging in, the user is directed to the home screen. They are shown the core features of the home screen. We tried to keep the interface minimal; only the essential features were included. Stories by the organization were at the top of the screen, and the user could view the donation drives being conducted by all the organizations along with the list of organizations. We chose to have the current donation in a horizontal carousel so that the user does little vertical scrolling. We have included the list of organizations vertically with a search bar so that the user does not have to go through every organization card to find his preferred organization.  

Furthermore, the organization's profile was displayed to the user with a short description, a logo and a tap bar displaying 'about', 'posts' and 'reviews '. The user can swipe between the screens and look at the provided information. The persistent large raised button is on the organization page so users can move to the donation process whenever they want.  
We kept a feedback system for the user at every step so that they know the stages left in the donation. The user is also shown a tick after every successful donation they offer. The bottom menu bar is also highlighted so the user knows their current menu.  

**Organization low-fi prototype**
We did not include a signup screen for the organization as we did not want to give the functionality of any organization registered on this platform. The organizations that want to register can contact us, and we will provide them with the credentials. The home screen of the organization's side was very similar to the donor's, with the addition of a camera icon at the top. The organizations can easily swipe right to post a story without navigating further into the application. The stories the organizations have posted will be displayed on the home screen so that they can quickly view or delete a specific story. They can also view their donation drives on the home screen in a horizontal carousel. They have been given a button to either delete their previous drives or add a new one. These drives have precedence to the 'My Posts', so we included them above the organization post. The organizations can also post a new post directly from their home screen by pressing an icon. This was done to ensure a low learning curve is present for the organization's representatives, and they can easily focus on collecting and distributing the clothes.  

## Hi-fi Design
Following testing the paper prototype, we figured out a few problems that the users were facing in the low-fi prototype. These errors have been rectified in the hi-fi interface, and we have made a few screens to show the look and feel of the design. 

Firstly, the welcome screen explains what the application is about; the next button is the only button kept on the screen so that there is not much cluttering for the user. The progress bar on the screen follows the application's design conventions. The user can then sign up or log in to the application, and the remember me feature is added after the low-fi for the user's convenience. The validation option and field colors ensure the user knows if the field has been filled out correctly. The homepage screen next shows the application's stories, and the donation drives include more pictures than text after the application has been tested. The screen also contains less information overall, and the colors of the progress bar and items collected ensure less eye strain on the user. The navigation bar highlights the screen the user is on, and the color is consistent with the application's theme. 

Furthermore, the organizational information can be viewed after the user clicks the button, and options for exploring the organization and viewing the posts and reviews are displayed. The progress bar for the clothes is shown in the pictures below, and the donate button is kept pink, so the donate now button is evident on the screens. The donation process includes payment, and the following screen demonstrates how the payment can be efficiently shown; the payment amount is added after the users have asked for it in the testing. The user profile also contains efficient details about the user, like successful donations, pending donations, and changing passwords, and they are highlighted by the drop shadow to ensure the user is aware of where they can click.  

For efficient communication between the donor and the organization, the user can message them, and the time for each message is shown. The user can click on the icon to message other users and view their messages and the time associated with them. The delivery of the messages is also shown and kept consistent to ensure an efficient communication mechanism with few difficulties. 
`;
