# Polls app

### Tech stack used during development

- node v13.11.0
- yarn 1.22.4
- React 16.9.0

### Important URLs:

- Hosted at Netlify https://poll-heycar.netlify.app/
- Build hook is automatic but can be manually triggered via

```
curl -X POST -d {} https://api.netlify.com/build_hooks/5eb6836b1842f5c8280a5b38

```

## How to run the application

- Download the application from Github using SSH or HTTPS
- Run `yarn install`
- Run `yarn start`
- It will run the app on port number

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

## More info

Other packages used are:

- Eslint to check the code.
- Added Rule in .eslintrc.json to exclude PropTypes: react/forbid-prop-types . Please excuse me to skip prop-types due to lack of time.

## Naming Conventions

- The name of the components should be of the format ${CONTEXT}${PURPOSE}, like UserList.js or TeamCreateEditForm.js
- Action names should be prefixed with the name of your application, such as my-app/USER_LIST_GET_REQUESTED.

## Rules

- Reading state: Use reselect to create selectors, never access the state directly (only use selectors).
- Furthermore, if we make a rule that you can only access the redux store via selector functions this will make the whole application much more maintainable and predictable, not to mention potentially faster.
