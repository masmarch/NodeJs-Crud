# standalone
pm2 start app.js
pm2 stop app.js
pm2 delete app.js

# cluster
pm2 start app.js -i 3
pm2 scale app +3
pm2 scale app 3