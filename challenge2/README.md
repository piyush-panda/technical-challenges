#This challenge has been implemented using Node.js (16)

## Steps to run
scp -i `<PEM>` instanceMetaData.js ec2-user@`<PUBLIC-DNS>`:~/.

scp -i `<PEM>` queryInstanceMetaData.sh ec2-user@`<PUBLIC-DNS>`:~/.

scp -i `<PEM>` package.json ec2-user@`<PUBLIC-DNS>`:~/.

ssh -i "my-key-val.pem" ec2-user@`<PUBLIC-DNS>`

chmod +x queryInstanceMetaData.sh

## Query all meta data
./queryInstanceMetaData.sh

## Query particular meta data
./queryInstanceMetaData.sh `META-DATA-KEY`