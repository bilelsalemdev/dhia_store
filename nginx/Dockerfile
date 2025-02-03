FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]