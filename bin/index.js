#!/usr/bin/env node

const { program } = require('commander')
const pkg = require('../package.json')
const main = require('../lib/index')
const actionMap = {
    'create': {
        desc: '创建新项目',
        examples: ['trex create | <projectName>']
    },
    'config': {
        desc: '配置项目信息',
        examples: [
            'trex config | set <key> <value>',
            'trex config | get <key>'
        ]
    },
    'update': {
        desc: '更新项目配置',
        examples: [
            'trex update'
        ]
    }
}


// 可以获取对象的Symbol属性
Reflect.ownKeys(actionMap).forEach(actName => {
    program
        .command(actName)
        .description(actionMap[actName].desc)
        .action(() => {
            console.log(actName)
            const proName = process.argv.slice(3)
            main(actName, proName)
        })
});

program.on('--help', () => {
    console.log('Examples:')
    Reflect.ownKeys(actionMap).forEach(actName => {
        console.log(`${actName}: ${actionMap[actName].examples}`)
    });
})

// --help
program.parse(process.argv)