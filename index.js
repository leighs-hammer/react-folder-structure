#!/usr/bin/env node

/**
 * Includes and helpers
 */
//var co = require('co')
//var prompt = require('co-prompt')
//var program = require('commander')
var shell = require('shelljs')
var chalk = require('chalk')


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
console.log(chalk.blue('Boilerplate copied!'))
console.log('--------------------------------------------')

console.log(chalk.red('This module no longer has any purpose! why not remove it?'))
console.log(chalk.green('npm remove react-folder-structure --save'))