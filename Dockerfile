FROM php:8.1-apache
COPY ./src/ /var/www/html/
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
EXPOSE 80
