STEPS:
A. SETTING UP MOBX IN YOUR SOLUTION:

	1. Create react project "npx create-react-app my-app"
	***
	2. Eject it by running "npm run eject"
	***
	3. Install these "npm install mobx mobx-react babel-plugin-transform-decorators-legacy"
	***
	4. npm install
	***
	5. In the package.json, in the "babel" section, add this
	    "plugins": [
	      [
	        "@babel/plugin-proposal-decorators",
	        {
	          "legacy": true
	        }
	      ]
	    ]
	***
	6. Install this by running this command "npm install --save-dev @babel/plugin-proposal-decorators"
	***
	7. Create Store
	***
	8. In the index.js import Provider and your store then inject in the <App/>
	***
	9. Add @inject("Name_of_Store") in each file you wanna access the store
	***
	10. Add @observer so that it will re-render once there's changes in the global state
	***
    	11. Add this const { BirdStore } = this.props; to access the store
 ***   
Reference: https://www.youtube.com/watch?v=Dp75-DnGFrU
