// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyBP1gXXz1xxXte_IeulI0bUt0z8vb0Djvw',
		authDomain: 'todos-11daa.firebaseapp.com',
		databaseURL: 'https://todos-11daa.firebaseio.com',
		projectId: 'todos-11daa',
		storageBucket: 'todos-11daa.appspot.com',
		messagingSenderId: '746885064049'
	}
};
