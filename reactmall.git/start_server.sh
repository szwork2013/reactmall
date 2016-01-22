export NODE_PATH=$NODE_PATH:..
echo $NODE_PATH
export DEBUG=dorado:*,core,core:*,method*,-not_this
npm start
