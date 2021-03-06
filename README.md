# React boilerplate for ServiceNow apps

Simple and lightweight boilerplate to build React applications for ServiceNow. 

Based on [Create-React-App](https://github.com/facebook/create-react-app).

## How to set up your development environment

You need to complete 3 steps so you can start bulding a React applicaiton for ServiceNow:

1. Copy this repo to your local machine and run `npm install` to install all dependencies.
2. Update `package.json` (line #5) with your ServiceNow instance URL:
```json
    "proxy":"https://dev38444.service-now.com"
```
3. Update `.env` file with user credentials you want to use for communications wtih ServiceNow:
```bash
    REACT_APP_USER=servicenow.account
    REACT_APP_PASSWORD=12345
```

This completes development environment setup and you can run the application by `npm start`.

> User name and password required for development environment only. You don't need to provide credentials when deploying the app into ServiceNow.

# How to use App

1. Once running go to your localhost and all the incidents shall be displayed.
2. Click on the View Incident button for any incident and a modal shall pop up displaying the incident you clicked on.
3. Click close to continue browsing the other Incidents


