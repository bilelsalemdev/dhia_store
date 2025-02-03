# # Stage 1: Build the frontend app
# FROM node:alpine as builder

# WORKDIR /usr/src/app/client

# # Copy package.json and package-lock.json
# COPY package*.json .

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the app
# RUN npm run build

# # Stage 2: Serve the app using Node.js
# FROM node:alpine

# WORKDIR /usr/src/app/client

# # Copy package.json and package-lock.json
# COPY package*.json .

# # Install only production dependencies
# RUN npm install --production

# # Copy the built files from the builder stage
# COPY --from=builder /usr/src/app/client/build ./build

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the app
# CMD ["npm", "start"]


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