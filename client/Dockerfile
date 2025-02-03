

# Use Node.js as the base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]