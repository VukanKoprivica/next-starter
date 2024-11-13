# Use an official Node.js image as the base

FROM node:18-alpine



# Create and set the working directory

WORKDIR /app



# Copy everything in /app

COPY . /app/



# Install dependencies

RUN npm install -g pnpm@8.8.0 && \
    pnpm i --frozen-lockfile && \
    pnpm build



# Expose the port the app will run on

EXPOSE 3000



# Start the application

CMD ["pnpm", "start"]