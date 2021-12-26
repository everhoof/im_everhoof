export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

find . -maxdepth 1 ! -name node_modules ! -name artifacts ! -name . ! -name .. -exec rm -rf {} \;
mv artifacts/* .
mv artifacts/.[^.]* .
rm -r artifacts

pm2 stop ecosystem.config.js
nvm exec 14.18.1 npm i -g yarn
nvm exec 14.18.1 yarn --frozen-lockfile --production
pm2 start ecosystem.config.js
