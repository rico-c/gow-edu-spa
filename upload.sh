#!/bin/bash

# 定义 FTPS 服务器的详细信息
HOST="waws-prod-hk1-033.ftp.azurewebsites.windows.net"
PORT=990
USER="web8-gowedu-dev\$web8-gowedu-dev"
PASSWORD="9n7rp345coWzefyngdCDa1Z3emo8arwCK2C4WuNDNWNk0ok7CLX2lRwYhbyt"  # 请将此替换为你解码后的密码

# 定义要上传的本地目录和远程目录
LOCAL_DIR="wwwroot"  # 请替换为你的本地目录路径
REMOTE_DIR="/site"

# 使用 lftp 进行上传
lftp -c "set ftp:ssl-force true; set ftp:ssl-protect-data true; open -u $USER,$PASSWORD ftps://$HOST:$PORT; mirror -R $LOCAL_DIR $REMOTE_DIR; bye"
