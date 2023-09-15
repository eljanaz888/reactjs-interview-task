# Flex Business Solutions Tech Test - Notes app

In Flex Business Solutions, we aim to provide excellence and efficiency on all our lines of code in order to support the day-to-day activities of the company using our software solutions. In this task, you will be provided with a simple design of an app, fetching a list of products from an external source and allowing the user to search or filter among the list.


### Tech Test Overview
We have provided below the Figma link of this task. On the main page,

[FIGMA] [https://www.figma.com/file/T6hUVUDh5ihoYwQILcJDcf/React-Home-Test?type=design&node-id=0%3A1&mode=design&t=lOTjaPb3chxGqXkY-1]

We love to see:
- Functional code
- Good design
- Unit testing


### Notes
All of you work should take place inside this repository.

You are free to use any packages that would help with this task

You do not need to add additional security measures as part of this exercise.
We're interested in how you break down the work and build your solution in a clean, easy-to-use, reusable and testable manner.


## Deliverables
You must follow the Figma design and need to add the functionality of:
a) Create new notes
c) Show all notes
b) Search notes

**Create a folder inside the repository and include finished screenshots of the app.**
**Please make sure to update the readme with**:

- How to run your app with all the necessary details
- Relating to the task please add answers to the following questions;
    1. How might you make this app more secure?
    2. How would you make this solution scale to millions of records?

To run your app with all the necessary details, follow these steps:

Ensure Dependencies are Installed: Before running the app, ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from https://nodejs.org/.

Clone the Repository: If you haven't already, clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/my-notebook-app.git
Navigate to the Project Directory: Change your current directory to the project's root folder:

bash
Copy code
cd my-notebook-app
Install Dependencies: Install the required dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Start the Development Server: Run the following command to start the development server:

bash
Copy code
npm start
# or
yarn start
Open the App: Your default web browser should automatically open with the app running. If it doesn't, you can access it at http://localhost:3000.

Now, you can begin using My Notebook App as described in the "Usage" section of the README.

Security Considerations
To make your app more secure, consider implementing the following measures:

Authentication: Implement user authentication to ensure that only authorized users can access and modify their notes. You can use libraries like Firebase Authentication or Passport.js for this purpose.

Authorization: Define and enforce access control rules to restrict certain actions or data access based on user roles and permissions.

Sanitization: Sanitize user inputs to prevent SQL injection, cross-site scripting (XSS), and other common security vulnerabilities. Libraries like DOMPurify and express-validator can help with this.

Data Validation: Validate and sanitize user inputs on the server-side to ensure data integrity and prevent malicious data from being stored.

Secure Communication: Use HTTPS to encrypt data transmission between the client and server to protect against data interception.

Session Management: Implement secure session management practices, such as using secure cookies, to manage user sessions.

Regular Security Audits: Conduct regular security audits and code reviews to identify and address security vulnerabilities.

Scalability
To make this solution scale to millions of records, consider the following strategies:

Database Optimization: Choose a database system that can handle large datasets efficiently. Implement indexing and caching to improve data retrieval speed.

Horizontal Scaling: Deploy your app on a cloud platform (e.g., AWS, Azure, or Google Cloud) and use load balancers to distribute traffic across multiple server instances.

Database Sharding: If your data is highly partitionable, consider database sharding, where data is distributed across multiple database servers based on certain criteria (e.g., category).

Caching: Implement caching mechanisms (e.g., Redis) to store frequently accessed data in memory, reducing the load on the database.

Asynchronous Processing: For resource-intensive tasks, use asynchronous processing and message queues (e.g., RabbitMQ, Apache Kafka) to offload work from the main application thread.

Content Delivery Networks (CDNs): Use CDNs to deliver static assets (e.g., images, CSS, and JavaScript) closer to end-users for faster loading times.

Database Partitioning: If your database supports it, consider partitioning large tables to improve query performance.

Monitoring and Scaling Policies: Implement monitoring tools and auto-scaling policies to automatically adjust the number of server instances based on traffic and resource usage.

By following these practices, you can ensure that your app can handle a growing user base and a large volume of records effectively.

