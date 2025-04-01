# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build the app
COPY . ./
RUN npm run build

# Step 2: Set up Nginx to serve the React app
FROM nginx:alpine

# Copy the build from the previous stage to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
