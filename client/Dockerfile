# Stage 1: Build the frontend app
FROM node:alpine as builder

WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/client/build .

# Ensure Nginx has permission to serve the files
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80 (already done in the base image, but good to be explicit)
EXPOSE 80

# Start Nginx in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]