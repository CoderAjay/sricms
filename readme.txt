Installation
for installation an angular app will be served as index.html(index.php) to control access
then it will take up all the confgiurations like.
  site name
  select type of website
  mongodb url
  theme
  social auth -> setting up social auth
  modules/features/packages to install -> config each package if required




core will contain the installation code
   which can create a new website
core\ folder descriptions
   \assests-> all node_modules will be placed here and we are using browerify for every things
   \bin -> tasks like dump db,repair db, backupdb, exports, imports etc. Also repair a website
   \config -> core modules configuration files
   \includes -> files which are responsible for installation process
   \lib -> All other custom code in form of modules
   \modules -> alias modules which are required to do servral things,
   \theme ->  themes of installation process.





Alias Dashboard show all available site
side by side folder having folder as alias
[doubt]{only core has functionality to update modules of other sites / other ste also have all tings}




/config section
configurations will be devided into two parts development/production
  may be futher on test
  default configuration will be supplied time of installation then
  after -> update on first run -> for each run configuration will be use from redis
  so that live updation can be done (rather than restarting the server all time)
  Also memcache/redis will be used to provide configuration load from mongo first

[Need to follow up with TDD approach]
poc {Event based workflow for modules}
