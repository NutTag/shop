
#theme replace --env=staging [file]
#There are some arguments that you can pass into every command:
#
#env: The environment to register the configuration settings under. 
#These are just free form text, so you can name it anything. 
#Common names are staging, production, test and the default is development
#
#theme replace --env=staging [file]
#dir: The directory that the configuration file (called config.yml) will live. 
#This allows you to update multiple themes without having to change into each themes directory.

#update themekit - must run as administrator!
#theme update 

#clear
#cd "E:\MWeb Solutions\Workspaces\Shopify\NutTag\shop-dev"
theme configure -t 292323349 -s "nut-tag.myshopify.com" -p 4689fb2155eaa42cc47c2bebbb8a20c8

theme download
#theme download templates/404.liquid templates/article.liquid
#theme upload templates/404.liquid templates/article.liquid
#theme remove templates/404.liquid templates/article.liquid

#theme replace #Removes remote files and replaces them with local files.
#theme upload config/settings_data.json config/settings_schema.json
theme download config/settings_data.json config/settings_schema.json

#theme download assets/logo.png

theme watch