# Stage 1: Build Angular application
FROM node:16 AS build
WORKDIR /app

# Copy package.json and package-lock.json (if available) and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files into the working directory
COPY . .

# Build the Angular app using the production configuration
RUN npm run build 

# Stage 2: Serve the Angular app with Nginx
FROM nginx:stable

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the compiled Angular app to the Nginx HTML directory
COPY --from=build /app/dist/my-store /usr/share/nginx/html

# Expose the port that the app will be available on
EXPOSE 7532

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
