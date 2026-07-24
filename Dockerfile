FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install 9router global
RUN npm install -g 9router

# Expose port yang digunakan 9router
EXPOSE 20128

# Jalankan 9router
CMD ["9router", "--host", "0.0.0.0", "--port", "20128"]
