# Use the official Docusaurus image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Docusaurus site
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Docusaurus site
CMD ["npm", "run", "serve"]
