FROM node:lts

ADD https://github.com/juice-shop/juice-shop/releases/download/v14.5.1/juice-shop-14.5.1_node18_linux_x64.tgz /
RUN tar -xzvf juice-shop-14.5.1_node18_linux_x64.tgz
WORKDIR /juice-shop_14.5.1

ENV PORT=80
CMD [ "npm","start" ]