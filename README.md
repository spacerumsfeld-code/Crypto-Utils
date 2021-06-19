# Javascript Data Structure/Algorithm Refresher

by Nick Papadakis

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Last Commit](https://img.shields.io/github/last-commit/spacerumsfeld-code/Crypto-Utils)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)\
![Languages](https://img.shields.io/github/languages/top/spacerumsfeld-code/Crypto-Utils)
![Repo size](https://img.shields.io/github/repo-size/spacerumsfeld-code/Crypto-Utils)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Table of Contents

[1. Introduction](#introduction)\
[2. Tech Stack](#tech-stack)\
[3. Who Should Use This](#who-should-use-this)\
[4. Get Started](#get-started)\
[5. Continued Development](#continued-development)\
[6. Future Utilities](#future-utilities)\
[7. Feedback](#feedback)

# Introduction

Hello and welcome to the codebase of Crypto-Utils, an application designed to be your one-stop shop for a variety of digital cryptocurrency tools. You shouldn't have to browse a variety of platforms to use your favorite tools, and now you don't have to!

![Homepage](/images/home-page.png)
![About Page](/images/about-page.png)
![Sample Sentiment Page](/images/sentiment-page.png)

# Tech Stack

Crypto-Utils was developed with React with the industry standards of React for the frontend, TypeScript for enforcing typing and minimizing build errors, Next.JS for deployment, serverless functions, and a blend of client-side rendering and statically generated pages. Code quality was enforced with ESLint, Prettier, and of course, TypeScript.

### Sentiment Analyzer

The sentiment analyzer pulls 100 of the latest tweets for each asset, sends them to a sentiment analysis API for processing, and ultimately displays a dynamic summary paragraph as well as a list of positive and negative tweets. I have trained the sentiment API to filter out neutral tweets, of which there tend to be plenty. The sentiment page uses Incremental Static Regeneration to fetch data and present the user with a static page once a day.

# Who Should Use This

The target audience of this application is digital cryptocurrency enthusiasts, though those looking to learn more about digital cryptocurrency may also find the tools useful.

# Get Started

Simply visit the live application at https://wwww.crypto-utils.app and enjoy!

# Continued Development

The featured utility of Crypto-Utils is a sentiment analyzer. In production utilities include live price data and metrics as well as a currency converter tool. New tools will continue to be added, so stay tuned!

# Feedback

Feel free to send feedback / suggestions to:
nickfin2014@gmail.com
