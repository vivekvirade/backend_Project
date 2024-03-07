# Project Title: Get YouTube Subscriber (Data API)

# Overview:

The YouTube Subscriber Data API is a backend solution designed to offer a RESTful interface for accessing information regarding subscribers to YouTube channels. Developed using Node.js and Express, with MongoDB employed as the database, this project facilitates the retrieval of subscriber data in a structured JSON format.

The API comprises various endpoints catering to distinct data retrieval needs, including obtaining a list of all subscribers, retrieving subscribers' names along with the channels they've subscribed to, and fetching detailed information about a specific subscriber identified by their unique ID. Additionally, the project is equipped to handle error scenarios gracefully, such as erroneous subscriber ID inputs or attempts to access non-existent endpoints.

Primarily conceived as a foundation for more extensive applications centered around YouTube data, this project serves as a launching pad for constructing sophisticated APIs. It lays the groundwork for augmenting functionalities like subscriber addition/deletion, targeted subscriber searches based on specific criteria, or seamless integration with the YouTube API for accessing comprehensive data about channels and videos.

## Table of Contents
- [Get YouTube Subscribers](#get-youtube-subscribers)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Features](#features)

## Installation
To get started with the Project, you'll need to have Node.js and MongoDB installed on your machine.

# Functionality: The API encompasses the following key features:


Retrieve All Subscribers:

Obtain an array containing details of all subscribers in JSON format.

Retrieve Subscribers' Names and Subscribed Channels:

Fetch an array comprising subscribers' names along with the channels they've subscribed to, presented in JSON format.

Retrieve Details of a Specific Subscriber:

Access comprehensive information about a particular subscriber based on their unique ID. This includes their name, subscribed channel, and the date of subscription.

Error Handling:

Implement robust error handling mechanisms to gracefully manage scenarios such as providing an incorrect subscriber ID or attempting to access an undefined endpoint.



