# Uptime

Monitor client website uptime

## Requirements

Uptime requires very little to get up and running. The first step is to ensure that you have the latest versions of Node and MongoDB installed. Visit the following links on how to install each for your system:

- [Install Node](https://nodejs.org/en)
- [Install MongoDB](https://docs.mongodb.com/manual/installation)

Uptime was developed on Node 4.5.0, so for best results we recommend installing this version or higher.

## Installation

Installing Uptime is a breeze. After installing Node and Mongo, clone this repo down to your device from your command line:

```bash
git clone https://github.com/boone-software/uptime.git
```

After the repo is successfully cloned, `cd` into its directory and simply run the following to install all Node dependencies:

```bash
npm install
```

That's it! After all dependencies are completely installed, and you have configured MongoDB, you should be free to run Uptime on whatever port you like! You can do so with the following in two separate sessions:

```bash
mongod
```

```bash
npm start
```

## Recommendations

When developing Node applications, we prefer to use a utility called [nodemon](http://nodemon.io/), which monitors your development environment for changes and restarts your Node server.

If you plan to use Uptime in production, it may be best to use a utility like nodemon to prevent unmonitored app crashes. Because this is a personal recommendation, we have thoughtfully left it out of the dependencies.

Visit the website for more information.

## Contributors

- Nathanael McDaniel &lt;[nathanael@boone.io](mailto:nathanael@boone.io)&gt;
- Wes King &lt;[wes@boone.io](mailto:wes@boone.io)&gt;
