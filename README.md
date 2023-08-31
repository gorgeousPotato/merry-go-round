# MERRY-GO-ROUND

Merry-Go-Round is an application designed for parents to easily locate nearby playgrounds. In the past, we used to rely on Google to find parks and then attempt to determine the presence and size of playgrounds through reviews and images. However, with Merry-Go-Round, everything is consolidated in a single platform. Within the Merry-Go-Round application, you can access a comprehensive database of playgrounds worldwide, visualize their locations on a map, and even calculate the distance to each of them!

## Screenshots

1. On the homepage, you'll find a list of all the playgrounds, as well as a map where pins representing each playground are displayed.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/1.png "The home page")

2. Upon clicking the login button, you can log in using your Google account. Following successful login, your avatar, a personalized greeting, and the "add playground" button become visible.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/2.png "Login")

3. By clicking on a button located in the upper right corner of the map, you can view your current geolocation.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/3.png "Geolocation")

4. When you click on a pin on the map, a popup will appear displaying the playground's name along with a link to it.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/3a.png "Popups")

5. Upon clicking on a playground, you will be directed to a show page for that playground. This page features a brief description, the minimum age recommendation, a list of equipment available, as well as buttons labeled "Photos" and "Reviews." If you are the one who added the playground, an "Edit Playground" button will also be visible. Additionally, all pages are equipped with "<-Back" buttons and a clickable logo, both of which allow you to easily navigate back to the homepage.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/9.png "Show page")

6. Clicking on the geolocation button on the map will recenter the map to your current location, ensuring both your geolocation and the playground's location are visible. Above the map, you can observe the distance to the playground. Some playground may be close to you...

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/4.png "Distance - close")

7. ...others may be on the other side of the Earth.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/5.png "Distance - far")

8. Clicking the "Reviews" button will lead you to a page where reviews are displayed. While you can read all existing reviews, the ability to write new reviews is restricted to users who are logged in. Additionally, users have the option to delete their own reviews if needed.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/6.png "Reviews")

9. Selecting the "Photos" button will open a carousel displaying photos of the playground. If you're logged in, you can add photos.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/7.png "Photos")

10. When logged in, you have the ability to add new playgrounds. By placing a pin on the map, the latitude and longitude coordinates of your playground are automatically recorded and added to the database.

![alt text](https://github.com/gorgeousPotato/merry-go-round/blob/main/public/images/screenshots/8.png "Add Playground")

## Technologies Used

- HTML
- CSS (with a touch of Bootstrap for a carousel of images)
- JavaScript
- NodeJS
- Express
- EJS
- MongoDB with Mongoose
- Mapbox API

## Getting Started

[Merry-Go-Round - find your playground](https://)

## Next Steps

1. Adding a "Sort Playground by Distance" button, so that they are sorted on the homepage and you can find the closest one very fast.

2. Implementing a "Community" section to provide a platform for parents to engage in discussions, share information about lost and found items, and exchange valuable insights for the benefit of others.
