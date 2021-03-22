# Installation Guide

## Download the last BLADE version
here [https://sourceforge.net/projects/lportal/files/Liferay%20IDE/](https://sourceforge.net/projects/lportal/files/Liferay%20IDE/)

If you are using Linux SO:
* Download the file
* Open your terminal
* Open the download folder -> cd ~/Downloads
* Then, give execute access to installation file: `sudo chmod +x LiferayWorkspace-202009231346-linux-x64-installer.run`
* Execute the file: `./LiferayWorkspace-202009231346-linux-x64-installer.run`

## Install BLADE CLI

here [https://help.liferay.com/hc/pt/articles/360017885232-Installing-Blade-CLI-](https://help.liferay.com/hc/pt/articles/360017885232-Installing-Blade-CLI-)

## Clone this repository 
```
git clone git@github.com:interaminense/liferay-workspace-react-sample.git
```

## Update your bundle dir
    
After download this repository:
* Open the `gradle.properties` file and update the bundle dir at line **60**
* Navigate until `liferay-frontend-react` folder and run `blade deploy`

## Add this WIDGET to the Liferay Portal

Start your Liferay Portal locally and then:
* Create a new page
* Add new widget
* Search by **LiferayFrontendReact**
* Double click to add the widget to the page