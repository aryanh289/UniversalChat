# UniversalChat
MERN based real time chat application deployed on netlify and Heroku

Demo Deployed link: https://62a44538cf7d9c6c16511c7b--the-awesome-aryanh289-site.netlify.app

There are two directories, first is backend that contains the node server files and another one is front end
that contains react UI files.

Backend server is running on node and deployed on heroku in the following way:

`In heroku GUI, create a new application`  <br>
In terminal: `heroku login` <br>
`heroku git:clone -a <your-app-name>` <br>
`cd <your-app-name>`<br>
<br>
Make some changes to the code you just cloned and deploy them to Heroku using Git.<br>
<br>
`git add .`<br>
`git commit -am "make it better"`<br>
`git push heroku master`<br>

It will add all the changes in the file in to your heroku github repository. <br>
As soon as it is pushed it will go live that you can check with the link appearing in the terminal.<br>

<br>
Frontend server is running on ReactJS and deployed on netlify in the following way:<br>
<br>
`In netlify GUI, create a new site(deploy manually)` <br>
In terminal: `npm run build` in the frontend directory for creating an optimized production build, and then drag the build<br> 
folder to the space and it will be uploaded.<br>
`netlify login` <br>
`netlify deploy`<br>
It will ask for base directory : `./build` and done.<br>
It will deploy the site and it will give back a link in the terminal only.<br>
<br>
Now take that terminal link (Frontend app), and connect it to node server by changing files, add the link to `cors:origin`.<br>
and Also attach the link of backend in frontend folder, by changing the package.json of ReactApp by adding a `proxy` component<br>
with the link of heroku node server and also paster the same link in `app.js` in `socket()`.<br>

Now when everything related to connection and deployment is done. upload the changes again by:<br>
In frontend: <br>
`npm run build`<br>
put base directory: `./build`<br>
`netlify deploy`<br>

From here a new link for UI will be generated, add that to your node server in `cors:origin` and upload the changes to heroku:<br>

`git add .`<br>
`git commit -am "make it better"`<br>
`git push heroku master`<br>

in backend folder terminal<br>

Boom, you are done! Your site can be accessed by the new link of UI from netlify.<br>

