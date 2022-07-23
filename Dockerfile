FROM denoland/deno:1.23.4
WORKDIR /app
COPY . /.
# RUN deno cache --reload --unstable server.ts
CMD ["deno","run","--allow-net","--allow-read","--allow-write","--unstable","server.ts"]
