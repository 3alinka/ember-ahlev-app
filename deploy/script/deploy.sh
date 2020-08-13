#!/bin/sh
rm -rf /tmp/ahlev
mv /var/www/ahlev /tmp/
mkdir /var/www/ahlev
cp -r ../../dist/* /var/www/ahlev/
cp -r ../../deploy /var/www/ahlev/

