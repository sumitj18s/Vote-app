# Polls app

### Tech stack used during development

- node v13.11.0
- yarn 1.22.4
- React 16.9.0

### Important URLs:

- You can also refer the documentation in nice fashion at https://sumitj18s.github.io/Vote-app/
- The app is hosted at Netlify. You can goto the URL: https://poll-heycar.netlify.app/
- The automatic build hook of Netlify is integrated with Github. Hence, any push to Github Master branch will automatically trigger the build at Netlify and update the https://poll-heycar.netlify.app/
- You can also manually trigger the build from command prompt.

```
curl -X POST -d {} https://api.netlify.com/build_hooks/5eb6836b1842f5c8280a5b38
```

## How to run the application in Development mode

- Download the application from Github using SSH or HTTPS
- Run `yarn install`
- Run `yarn start`
- It will run the app on port number `3000`.

## How to run the application in Production mode

- Download the application from Github using SSH or HTTPS
- Run `yarn install`
- Run `yarn build`
- Install a webserver say `http-server`.
- Run the `build` folder from the `http-server`.

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn lint`

Tests the code on linting, formatting challenges.

### `yarn build`

Builds the app for production to the `build` folder.<br> Your app is ready to be deployed!

### Troubleshooting

If you face issues or errors in `yarn start` then you can run code saved in `build` folder by copying it to any Web Server.

## Other info

- The name of the components should be of the format ${CONTEXT}${PURPOSE}, like UserList.js or TeamCreateEditForm.js
- Action names should be prefixed with the name of your application, such as my-app/USER_LIST_GET_REQUESTED.
- Reading state: Use reselect to create selectors, never access the state directly (only use selectors).

### Contact Me

- You can reach me at Twitter https://twitter.com/sumitjolly for any questions.
