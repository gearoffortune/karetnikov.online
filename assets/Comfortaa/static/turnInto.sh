RUN="npx ttf2woff2"
ARGS=ls
for i in ~/gearoffortune.github.io/assets/Comfortaa/static/Comfortaa-*.ttf; do
	cat $i | ttf2woff2 > $i
done