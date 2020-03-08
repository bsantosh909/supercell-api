# supercell-api
Service to provide capability to overcome the static IP limitation of the supercell games API.

> **PROOF OF CONCEPT**: https://statscell.herokuapp.com

## ABOUT
This is a service which is developed with the intention to remove the static IP limitation over the supercell games official API (`clash of clans`).
Currently the above mentioned game API requires to have a static IP while generating a key. But many people do not happen to have that, thus this service is developed to overcome the requirement of static IP.

> NOTE: This service is working for the above mentioned games, and is tested properly as well. You can have a look at the proof of concept linked at the top of the page.

## HOW IT WORKS ??
This service simply logins to the developer portal at run time and generate a new key for the current IP of your device or host. All the API requests are made using the generated token now. The Service also checks if there is any key for the current host and also deletes old keys to not exceede the limit of keys for your developer account.

## EXTRA INFORMATION
- Currently the API has all the API routes covered for `clash of clans`
- One can easily customize (add, delete, modify) API routes and their responses simply by visiting the `routes` folder in the the respective game folder (i.e. _clash_)
- One can setup custom authorization, save the responses to DB or anything as per the needs

## HOSTING OVER HEROKU
Thinking about a free platform to use this service, one can already think of **Heroku**, thus there is a `heroku` branch with things managed for the heroku Branch.
Also [This article](https://blog.santoshb.com.np/articles/supercell-api) contains a simple walkthrough to help you host this service over heroku securely.

## CONTRIBUTING
If you got any question, have a feature idea, found a bug etc. then you can simply [open an issue](https://github.com/TheLearneer/supercell-api/issues/new)!

If you rather got something updated and want the community to see what new you have done or improved, then you cna simply [make a PR](https://github.com/TheLearneer/supercell-api/pulls)!

## CREDITS
- [Brujah](https://github.com/brujah/nodejs-cocapi): For the original code that gave me the concept of how things work.

> If you still are facing problem, then you can contact me at [Discord](https://discordapp.com/).. [Santosh#2138]