import React from 'react'

export default function RubyBlog() {
  return (
    <div className='para'>
    <h1 className="heading">Ruby Blog</h1>
    <p >
        Ruby. A language I thought that would be complicated after learning ReactJS. Learning Ruby was very enjoyable and easy to understand. Applying the knowledge.... That is a different story.
    </p>
    <p >
        Using Sinatra to create the backend server was quite simple. I decided to create a task list page where you can add different tasks that you need to complete. I used category as one to many and tasks belonging to many. 
    </p>
    <p >
        For categories, I migrated table and added in the code to create the table for the migration. Then I migrated table for tasks. To create the table, I added name, description, priority, category id(WIP) and deadline. Once these tables were migrated again, I then added different create codes to generate the seeds to ensure the codes were working. 
    </p>
    <p >
        Once I was happy with the seeds, I then added CRUD requests into the application controller to start my front end using React. I did use POSTMAN to make sure each CRUD requests were working with the codes that I have added to the application controlle. Creating the front end, I created a new React app then dived into what needed to be done. Fetching the JSON from the backend, instead of using localhost:3000, I had to use localhost:9292. Working through the front end, it was challenging as you had to pay attention to both ends to make sure that they were working together and fetching the correct information.
    </p>
    <p >
        Through trial and error with the CRUD requests, I was able to map the tasks onto the DOM and add the edit button, delete button and also added a checkbox to allow users to know which ones they have completed. The project is still WIP but once completed, users will be able to add user, assign tasks to users and add or remove tasks to help keep on track for daily tasks.
    </p>
    </div>
  )
}
