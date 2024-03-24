Mentor and Student Assigning with Database

Technologies used:

Node Js

Express

API Documentation : https://documenter.getpostman.com/view/33182469/2sA35Bc4UH

End Points :

Base URL : https://assign-mentor-v3lt.onrender.com/

Post Request :

1.Create a new student

/students/create

2.Create a new Mentor

/Mentors/create

Get Request:

1.A student who has a mentor should not be shown in List

/assign-student-mentor/no-mentor

2. show all students for a particular mentor

/assign-student-mentor/:mentorId

3.show the previously assigned mentor for a particular student

/assign-student-mentor/:studentId

Put Request:
 
1.assign student to mentor

/assign-student-mentor/:studentId/:mentorId

2.change mentor for a student

/assign-student-mentor/:studentId/:newMentorId

