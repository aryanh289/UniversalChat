# UniversalChat
MERN based real time chat application deployed on netlify and Heroku

There are two directories, first is backend that contains the node server files and another one is front end
that contains react UI files.

Backend server is running on node and deployed on heroku in the following way:

`In heroku GUI, create a new application` 
In terminal: `heroku login`
`heroku git:clone -a <your-app-name>` 
`cd <your-app-name>`

Make some changes to the code you just cloned and deploy them to Heroku using Git.

`git add .`
`git commit -am "make it better"`
`git push heroku master`

It will add all the changes in the file in to your heroku github repository. 
As soon as it is pushed it will go live that you can check with the link appearing in the terminal.


Frontend server is running on ReactJS and deployed on netlify in the following way:

`In netlify GUI, create a new site(deploy manually)` 
In terminal: `npm run build` in the frontend directory for creating an optimized production build, and then drag the build 
folder to the space and it will be uploaded.
`netlify login` 
`netlify deploy`
It will ask for base directory : `./build` and done.
It will deploy the site and it will give back a link in the terminal only.

Now take that terminal link (Frontend app), and connect it to node server by changing files, add the link to `cors:origin`.
and Also attach the link of backend in frontend folder, by changing the package.json of ReactApp by adding a `proxy` component
with the link of heroku node server and also paster the same link in `app.js` in `socket()`.

Now when everything related to connection and deployment is done. upload the changes again by:
In frontend: 
`npm run build`
put base directory: `./build`
`netlify deploy`

From here a new link for UI will be generated, add that to your node server in `cors:origin` and upload the changes to heroku:

`git add .`
`git commit -am "make it better"`
`git push heroku master`

in backend folder terminal

Boom, you are done! Your site can be accessed by the new link of UI from netlify.

