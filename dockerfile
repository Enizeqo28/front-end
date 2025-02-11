# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the React application
RUN npm run build

# Install a simple web server to serve the React application
RUN npm install -g serve

# Set the command to run the web server and serve the built React app
CMD ["serve", "-s", "build"]

# Expose port 5000 to the outside world
EXPOSE 3000
