FROM alpine
RUN apk --update add nodejs
RUN apk --update add npm

# Create a group and user
RUN addgroup -S appgroup && adduser -S admin -G appgroup

USER admin
WORKDIR /app
COPY . /app
EXPOSE 3000
CMD node app.js 

