#!/usr/bin/env node

/**
 * Includes and helpers
 */
//var co = require('co')
//var prompt = require('co-prompt')
//var program = require('commander')
var shell = require('shelljs')
var chalk = require('chalk')
var npmAddScript = require('npm-add-script')

console.log('--------------------------------------------')
console.log(chalk.blue('Copying a base folder structure!'))
console.log('--------------------------------------------')
console.log(chalk.blue('NOTE: Folders are copied to _boilerplate incase you ran this in error!'))
console.log(chalk.blue('      Copy what you need from it, this will change from time to time!'))

console.log(chalk.red('NOTE: A JSLINT file has been added to the root of your current terminal location!'))
/**
 * Copy folders
 */

chalk.green(shell.exec('mkdir _boilerplate'))
console.log(chalk.red('1/')+chalk.red('3')+chalk.green(' : _boilerplate fodler added'))

shell.exec('cp -R ./node_modules/react-folder-structure/react-folders/* ./_boilerplate')
console.log(chalk.red('2/')+chalk.red('3')+chalk.green(' : folder structure copied'))

shell.exec('cp ./node_modules/react-folder-structure/.eslintrc.js ./')
console.log(chalk.red('3/')+chalk.red('3')+chalk.green(' : Eslint file added to root'))

console.log('--------------------------------------------')
console.log(chalk.blue('Boilerplate copied! Lets get the rest setup!'))
console.log('--------------------------------------------')

console.log('--------------------------------------------')
console.log(chalk.blue('Setting up SASS!'))
console.log('--------------------------------------------')

shell.exec('npm install --save node-sass-chokidar')
console.log(chalk.red('1/')+chalk.red('6')+chalk.cyan(' : node-sass-chokidar Installed'))

shell.exec('npm install --save npm-run-all')
console.log(chalk.red('2/')+chalk.red('6')+chalk.cyan(' : npm-run-all Installed'))

shell.exec('npm install --save npm-add-script')
console.log(chalk.red('3/')+chalk.red('6')+chalk.cyan(' : npm-add-script Installed'))

// Setup Suggested Sass Scripts

// Scripts
console.log(chalk.cyan('|-- Creating Scripts --|'));
npmAddScript({key: "build-css" , value: "node-sass-chokidar src/ -o src/" , force: true})
console.log(chalk.cyan('1/5/')+chalk.red('4/')+chalk.red('6')+chalk.cyan(' : Build CSS'))

npmAddScript({key: "watch-css" , value: "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive" , force: true})
console.log(chalk.cyan('2/5/')+chalk.red('4/')+chalk.red('6')+chalk.cyan(' : Watch CSS'))

npmAddScript({key: "start-js" , value: "react-scripts start" , force: true})
console.log(chalk.cyan('3/5/')+chalk.red('4/')+chalk.red('6')+chalk.cyan(' : Start JS'))

npmAddScript({key: "start" , value: "npm-run-all -p watch-css start-js" , force: true})
console.log(chalk.cyan('4/5/')+chalk.red('4/')+chalk.red('6')+chalk.cyan(' : Start'))

npmAddScript({key: "build" , value: "npm run build-css && react-scripts build" , force: true})
console.log(chalk.cyan('5/5/')+chalk.red('4/')+chalk.red('6')+chalk.cyan(' : Build'))

console.log(chalk.cyan('|-- Check Installs --|'));
shell.exec('npm install');
console.log(chalk.red('5/')+chalk.red('6')+chalk.cyan(' : Double Check installs.'))


console.log(chalk.red('6/')+chalk.red('6')+chalk.cyan(' : DONE!!!!.'))


console.log('--------------------------------------------')
console.log(chalk.red('This module no longer has any purpose! why not remove it?'))
console.log(chalk.green('npm remove react-folder-structure --save'))
console.log('--------------------------------------------')