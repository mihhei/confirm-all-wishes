## This is an application for processing several wishlists at once and ordering gifts.

This project assumes that you receive several wish lists at once, the goods from which you can freely confirm or reject. A special feature of the application is that it calculates the discount for recurring products based on the calculation of two identical products - 10% discount, three identical - 20% and so on, the maximum discount is 40%. If none of the duplicate products is selected, then the application shows the amount of the possible discount.
This application generates wishlists randomly each time you start it. The application also simulates working with Fake Store API (https://fakestoreapi.com/), downloads and updates products in the cart, receives customer data, etc.

## The application was created using React for the frontend and Express.js for the backend. 
Data between components is accessed through context.

## For starting this project clone it locally with
git clone https://github.com/mihhei/confirm-all-wishes.

## Before runing project install all dependencies in root and client directory using
npm i

## For starting with project run command from root directory:
npm run dev

## Project is visible on Heroku
https://confirm-all-wishes.herokuapp.com/