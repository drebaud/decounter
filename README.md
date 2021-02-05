# DECOUNTER

This directory contains HTML pages for displaying in a browser a decounter, for example to display the remaining time when a break or the time remaining before a course resumes in a _Browser_ source of the application [_Open Broadcaster Studio_](https://obsproject.com).

To facilitate the customization of this decounter, the file name determines the duration in minutes or the restart time and possibly the color of the text (black by default).

## Timelaps

### Syntax

nn\[text\]\[-color\]

with :
- nn : duration in minutes
- text : any string of characters (ignored), for example "mn" or "minutes",
- color : HTML code code (optional) could be :
  - a standard color name ("green", "yellow", "gray", etc.),
  - any color expressed in the form "rgb (R, G, B)", while R, G and B
      being an integer from 0 to 255 coding respectively the colors red,
      green and blue.

### Examples

To create a 15-minute counter displaying yellow text, duplicate one of the HTML files by naming it as desired :

- 15mn-yellow.html
- 15-yellow.html
- 15minutes-rgb(0,255,255).html

## Decounter

### Syntax

HHhMM\[-color\]

With :

- HH : hour,
- MM : minutes
- color : HTML code code (optional) (same syntax as above)

## Examples

To display a timelapse before a course :

- 14h30-yellow.html
- 09h15.html

