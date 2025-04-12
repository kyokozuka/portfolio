rm -rf public/*
npm run build
cp -r dist/* public/
rm -rf dist
cp -r assets/* public/assets/