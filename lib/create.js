const ora = require('ora')
const chalk = require('chalk')
const prompts = require('prompts');
const download = require('download-git-repo')

const  { projectList, vueProjectList, reactProjectList, sveletProjectList } = require('./option')

module.exports = function (proName) {
    createFunc(proName)
}

function createFunc(proName) {

    let checkType = (prev) => {
        if (prev === 'vue') {
            return vueProjectList
        } else if (prev === 'react') {
            return reactProjectList
        } else if (prev === 'svelet') {
            return sveletProjectList
        }
    }

    const questions = [
        {
            type: 'text',
            name: 'name',
            message: '请输入项目名称?',
            initial: 'trex-demo'
        },
        {
            type: 'select',
            name: 'projectType',
            message: '选择需要创建的项目技术',
            choices: projectList,
            initial: 0
        },
        {
            type: 'select',
            name: 'projectInfo',
            message: '选择项目下载的模版',
            choices: prev => checkType(prev),
            initial: 0
        },
    ];



    (async () => {
        let isDownload = true
        const onCancel = prompts => {
            console.log('退出trex-cli ~');
            isDownload = false
            return false;
        }

        const response = await prompts(questions, { onCancel });
        if (isDownload) {
            const spinner = ora(`Loading ${chalk.blue(`正在下载${response.projectType}项目模版`)}`);

            spinner.start()

            spinner.color = 'blue'

            spinner.prefixText = 'trex-cli：'

            const fileUrl = process.cwd() + '/' + response.name
            
            download(`github:gzg1023/${response.projectInfo}#main`, fileUrl, function (err) {
                if (err) {
                    console.error('错误', err)
                    spinner.text = halk.red(`${response.projectInfo}下载错误`)
                } else {
                    spinner.color = 'green'
                    spinner.text = `${response.projectInfo}模版项目下载完成`
                    spinner.succeed()
                }

            })
        }
    })();

}

