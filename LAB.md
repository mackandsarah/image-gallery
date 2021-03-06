Image Gallery
===

## Code Kata

Complete [Kata 1](https://www.codewars.com/kata/regex-validate-pin-code) and 
[Kata 2](https://www.codewars.com/kata/alternate-capitalization/javascript), then follow the submission instructions, note that the instructions must be followed for each of these challenges.


## Lab

This is a paired, multi-day lab. For day one, build out:

1. Router Infrastructure
1. Album List
1. Album Detail with placeholders for:
    1. View 1 (Thumbnail)
    1. View 2 (Gallery)
    1. View 3 (List)
    1. New Image
    
## Data

Use the `data.js` helper (see in class demo code) for storing data in local storage. Your api module will likely also need to
do more of the data manipulation work.

### Albums

id, title, description, [images]

### Images

id, title, description, url

## Routes

* `/` | Home page (provide link to `/albums`
* `/about` | About page (make something up)
* `/albums` | List of albums
* `/albums/new` | Add a new album
* `/albums/:id` | Album detail with child routes:
    * `thumbnail` | Album detail with thumbnails of images
    * `gallery` | Album detail with gallery image viewer
    * `list` | Album detail with text list of images
    * `new` | Prompt for new image

## Components


* `App` | top-level app component. common menu
    * `Home` | Home Page
    * `About` | About Page
    * `Albums` | displays list of alblums
    * `AddAlbum` | Displayed in-line in the list of albums
    * `AlbumDetail` | Displays name of album plus description, has sub-router for views
        * `ThumbnailViewer` | <placeholder>, will display thumbnails with image title
        * `GalleryViewer` | <placeholder>, will display big image with buttons for prev and next
        * `ListViewer` | <placeholder>, will display tabular data amount images
        * `NewImage` | <placeholder>, will display form for adding new image
    
