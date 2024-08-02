FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN cd /app
RUN npm config set registry https://registry.npmmirror.com
RUN npm install pm2@latest -g
RUN npm install pnpm@latest -g
RUN pnpm install
RUN pnpm run build
EXPOSE 81
CMD ["sh", "-c", "pm2 start ecosystem.config.cjs"]