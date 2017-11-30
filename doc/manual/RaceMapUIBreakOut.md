#Racemap UI



## Introduction

This view is used by the racing team to start the logging of a race stage. The informations provided by the GPS and accelerometer are stored in the car's database and displayed to the racers on the map.

In the background the database is synced with an AWS instance that allow the display of thees logs on the official site map. 



##Component Hierarchy





![alt text](/home/dmitry/IdeaProjects/4LIHM/doc/manual/Racemapmockup)

**Racemap MockUp**

1. **BtnLaunch**: used to launch the logging of a stage. When the button is pressed, the pilot is asked to enter a name for the stage.  
2. **MenuStage**: a drop-down menu that allow to the pilot to replay the logs from previous stages.
3. **Map**: a Google Map that display the path of the current or previous stage.
4. **ProfileStage**: a chart that display the altitude profile of the current or previous stage.
5. **InfoStage**: a collection of information about the current or previous stage. 



The display hierarchy of the UI: 

**Racemap**

​	**BtnLaunch**

​	**MenuStage**

​	**Map**

​	**ProfileStage**

​	**InfoStage**





## Presentation Design 



* **BtnLaunch**
  * `isActive : boolean` is button actionable.
  * `onclick : function ` is a callback to invoke function when the button is clicked.
* **MenuStage**
  * `state : obj` elements describing the state of the menu.
    * `stage : obj ` object describing a stage
      * `name : string` the name of the stage
      * `id : int` the SQL id of the stage
  * `onSelect` is a callback to invoke function when a stage is selected.
* **Map**
  * `gpsPoints : array of obj` is an array of GPS points composed of dates, lat and lng elements. 
* **ProfileStage**
  * `gpsPoints : array of obj` is an array of GPS points composed of dates, lat and lng elements. 
* **InfoStage** 
  * `gpsPoints : array of obj` is an array of GPS points composed of dates, lat and lng elements. 

## Container Design

* **MenuRenderer**: grab the stage infos from db and populate a <u>MenuStage</u> component.
* **GPSDataGrabber**: grab available gps points and populate Map, <u>ProfileStage</u> and <u>InfoStage</u>. 