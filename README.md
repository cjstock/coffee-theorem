# Welcome to Coffee Theorem

This is my first solo fullstack web app!

I have always wanted an app/website that allows me to track the coffee beans I've bought/tried, while learning more about them! Coffee Theorem is my attempt.

When you add a bean you've tried you automatically see its origin on a map, creating a geographic connection in your mind. Hopefully this better associates you with where exactly your coffee is grown/processed.

(TODO) The other main part of Coffee Theorem documents every potential characteristic of coffee beans, including:
Roast
Variety
Region
Brew Methods
Altitude
Process
etc.

## Goals
1. Cement my skills with React, Typescript, and Web Architecture
2. Build something I will use
3. Imprpove my Web Design skills

## Design Decisions
I was inspired by Theo Browne after watching this -> https://www.youtube.com/watch?v=PbjHxIuHduU

### The T3 stack includes 3 key pieces:
1. Typescript -> Type safety is important for writing safer code, and improving developer experience
2. Tailwindcss -> CSS is tedious and annoying (in my opinion)
3. tRPC -> Allows for a fully type safe client/server architecture

### Other Tech
Next.js -> Is the optimal framework for tRPC. It also allows me to easily serve static or dynamic pages with no boilerplate.

Prisma.io -> An ORM to reduce the headaches of dealing with a DB directly. Also has a great experience with tRPC

NextAuth.js -> Allows me to securely authenticate users via 3rd parties without boilerplate. Built specfically for Next.js.

Vercel -> An AWS powered hosting provider with Github deployment integration.

PlanetScale -> A "set it and forget it" Db hosting platform.