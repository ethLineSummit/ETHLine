# ☕JDK

> **Note** :The java code of the eth Line project is developed based on jdk17, in which we use many of the latest features of jdk, we **strongly** recommend that you use jdk17, If you are using jdk version lower than 17, it may be **unstable**
>
> **Link** : [Oracle JDK17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) [Open JDK 17.0.1](https://jdk.java.net/17/)





## 🚀`jdk-18-internal`

> **Note** : We built the latest `JDK 18`, it may be **unstable**, if you are very **interested** in it, you can also use it, and the official project runs on this.
>
> **Link** :  [jdk-18-internal-2021-11-03.zip](https://summit.ethline.top/oss/jdk/jdk-18-internal-2021-11-03.zip) [Open JDK 18](https://openjdk.java.net/projects/jdk/18/)

```shell
[root@cloud ~]# wget https://summit.ethline.top/oss/jdk/jdk-18-internal-2021-11-03.zip
[root@cloud ~]# unzip jdk-18-internal-2021-11-03.zip
........
inflating: jdk-18-internal-2021-11-03/jdk-18-internal/demo/nbproject/scripting/jconsole-plugin/nbproject/jdk.xml
inflating: jdk-18-internal-2021-11-03/jdk-18-internal/demo/nbproject/scripting/jconsole-plugin/nbproject/netbeans-targets.xml
inflating: jdk-18-internal-2021-11-03/jdk-18-internal/demo/nbproject/scripting/jconsole-plugin/nbproject/project.xml
inflating: jdk-18-internal-2021-11-03/jdk-18-internal/demo/nbproject/project.xml
inflating: jdk-18-internal-2021-11-03/jdk-18-internal/demo/README
[root@cloud ~]# ll
total 379520
drwxr-xr-x 3 root root      4096 Nov  3 09:18 jdk-18-internal-2021-11-03
-rw-r--r-- 1 root root 388622531 Nov  3 09:27 jdk-18-internal-2021-11-03.zip
[root@cloud ~]# cd jdk-18-internal-2021-11-03/
[root@cloud jdk-18-internal-2021-11-03]# ll
total 4
drwxr-xr-x 10 root root 4096 Nov  2 20:04 jdk-18-internal
[root@cloud jdk-18-internal-2021-11-03]# mv jdk-18-internal /opt/
[root@cloud jdk-18-internal-2021-11-03]# tee /etc/profile.d/jdk-18-internal.sh <<EOF
export JAVA_HOME=/opt/jdk-18-internal
export PATH=\$PATH:\$JAVA_HOME/bin
EOF

[root@cloud jdk-18-internal-2021-11-03]# source /etc/profile.d/jdk-18-internal.sh
[root@cloud jdk-18-internal-2021-11-03]# java -version
openjdk version "18-internal" 2022-03-15
OpenJDK Runtime Environment (build 18-internal+0-adhoc.root.jdk)
OpenJDK 64-Bit Server VM (build 18-internal+0-adhoc.root.jdk, mixed mode, sharing)
[root@cloud jdk-18-internal-2021-11-03]# date
Wed Nov  3 09:33:58 UTC 2021

```







