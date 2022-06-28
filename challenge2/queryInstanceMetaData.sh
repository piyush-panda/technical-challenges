metaDataItem=$1
npm install >/dev/null
node -e "require(\"./instanceMetaData.js\").queryMetaData('$metaDataItem')"
