#!/bin/sh
systemctl stop nginx.service
certbot certonly -d ahlev.com -d www.ahlev.com
