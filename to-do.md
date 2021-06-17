# An ongoing list of improvements to make as the app grows

Index
-add icon for About page link

About Page
-Make each feature a link to the given utility
-tweak margin between intro paragraph and features list

Converter
-Make converter page
-create dropdowns to select chosen assets to convert
-create serverless function route to ascertain chosen assets and send request to Binance API
-successfully process response and display conversion rate for user

Features
-Add NextAuth integration to allow Github user login
-Add button for login/logout/signup
-Conditionally render an additional page to test nextAuth hook functionality

Database Integration
-Host postGRES db on supabase
-create table for users
-integrate prisma into project
-allow each user signup to store user in database (serverless function or getStaticProps?)

Live Price Data
-Create new dynamic route page for displaying live price data and reelvant metrics
-hit up API with serverless function, rate limit with caching and headers
